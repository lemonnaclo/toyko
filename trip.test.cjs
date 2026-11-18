const test = require('node:test');
const assert = require('node:assert/strict');
const { csvRows, parseSummary, safeURL, filterPlaces } = require('./trip-core');
const data = require('./trip-data');
function summaryCSV(days = data.days) {
  return days.flatMap(d => [[d.date + ' ' + d.dow, d.region, '하루'], ['오전', d.summary.morning], ['오후', d.summary.afternoon], ['마무리', d.summary.evening], ['조정', d.summary.adjust], ['', '', '']]).map(row => row.map(v => '"' + v.replace(/"/g, '""') + '"').join(',')).join('\r\n');
}
test('the mobile plan preserves five days, 41 ordered cards and the only fixed booking', () => {
  assert.equal(data.days.length, 5);
  const stops = data.days.flatMap(d => d.stops);
  assert.equal(stops.length, 41); assert.equal(new Set(stops.map(s => s.id)).size, 41);
  for (const d of data.days) {
    let previous = '00:00';
    for (const s of d.stops) { assert.ok(s.start >= previous); assert.ok(s.end > s.start); previous = s.end; }
  }
  const booked = stops.filter(s => s.reserved);
  assert.equal(booked.length, 1); assert.match(booked[0].name, /^치이카와 파크/); assert.ok(booked[0].id.startsWith('2026-11-27')); assert.equal(booked[0].start, '11:40');
});
test('CSV quotes, multiline descriptions and escaped quotes survive parsing', () => {
  assert.deepEqual(csvRows('"지역, 장소","첫 줄\n둘째 줄","그가 ""선택"""\r\n'), [['지역, 장소', '첫 줄\n둘째 줄', '그가 "선택"']]);
  assert.throws(() => csvRows('"unfinished'));
});
test('summary accepts both exported dates and ISO dates, keeps the five expected days', () => {
  const ids = data.days.map(d => d.id); const text = summaryCSV();
  assert.deepEqual(parseSummary('\uFEFF' + text, ids)['2026-11-29'].summary, data.days[3].summary);
  const iso = text.replace('11.26 목', '2026-11-26');
  assert.equal(parseSummary(iso, ids)['2026-11-26'].region, data.days[0].region);
});
test('a partial, duplicate or unexpected sheet cannot overwrite the last valid summary', () => {
  const ids = data.days.map(d => d.id), good = summaryCSV();
  assert.throws(() => parseSummary(summaryCSV(data.days.slice(0, 4)), ids));
  assert.throws(() => parseSummary(good + '\n' + summaryCSV([data.days[0]]), ids));
  assert.throws(() => parseSummary(good.replace('"조정"', '"빠짐"'), ids));
  assert.throws(() => parseSummary('<html>Sign in</html>', ids));
});
test('55 map places are preserved; Pokemon and lodging are excluded and SOU SOU is lower priority', () => {
  assert.equal(data.places.length, 55); assert.equal(new Set(data.places.map(p => p.id)).size, 55);
  const visible = filterPlaces(data.places);
  assert.equal(visible.length, 52);
  assert.ok(!visible.some(p => /Pokémon|소우소우|더 비 이케부쿠로/.test(p.name)));
  assert.equal(filterPlaces(data.places, { includeExcluded: true }).length, 55);
  assert.ok(filterPlaces(data.places, { query: '기치조지' }).length > 0);
  assert.ok(filterPlaces(data.places, { area: '긴자·교바시·유라쿠초' }).every(p => p.area === '긴자·교바시·유라쿠초'));
});
test('unsafe links cannot execute from imported or saved content', () => {
  for (const value of ['javascript:alert(1)', 'data:text/html,hello', '/relative', 'not-a-url']) assert.equal(safeURL(value), '');
  assert.equal(safeURL('https://www.google.com/maps'), 'https://www.google.com/maps');
  assert.ok(data.places.every(p => safeURL(p.url)));
});
test('the park is separate from optional park walks and shop branches', () => {
  assert.ok(data.options.some(o => o.name.includes('이노카시라') && o.detail.includes('생략')));
  assert.ok(data.options.some(o => o.name.includes('나카노') && o.travel.includes('신주쿠 쇼핑은 덧붙이지')));
});

test('shopping blocks resolve real saved coordinates without excluded or low-priority venues', () => {
  const { resolveCandidateGroups } = require('./trip-core');
  const groups = resolveCandidateGroups(data, ['kappabashi']);
  assert.equal(groups.length, 1); assert.equal(groups[0].candidates.length, 6);
  assert.ok(groups[0].candidates.some(p => p.name === 'Seven Uniform'));
  assert.ok(groups[0].candidates.some(p => p.id === 'place-19' && p.description.includes('정식 상호와 주소가 없는')));
  for (const d of data.days) for (const s of d.stops) for (const group of resolveCandidateGroups(data, s.candidateGroups)) {
    for (const p of group.candidates) {
      assert.ok(p.description); assert.ok(!p.excluded && !p.lowPriority);
      assert.ok(Number.isFinite(p.lat) && Number.isFinite(p.lng));
      assert.ok(p.distanceMeters >= 0);
      const url = new URL(p.walkingURL); assert.equal(url.searchParams.get('travelmode'), 'walking');
      assert.equal(url.searchParams.get('destination'), p.lat + ',' + p.lng);
      assert.equal(url.searchParams.get('origin'), group.anchor.lat + ',' + group.anchor.lng);
    }
  }
});
test('far-away alternatives have separate group anchors rather than one shared walking origin', () => {
  const { resolveCandidateGroups } = require('./trip-core');
  const groups = resolveCandidateGroups(data, ['shinjuku','nakano']);
  assert.equal(groups.length, 2); assert.notDeepEqual(groups[0].anchor, groups[1].anchor);
  assert.ok(groups[0].candidates.every(p => p.id !== 'extra-nakano'));
  assert.equal(groups[1].candidates[0].id, 'extra-nakano');
});
test('invalid coordinates and excluded candidates never generate an unsafe or misleading route', () => {
  const { distanceMeters, walkingURL, resolveCandidateGroups } = require('./trip-core');
  assert.equal(distanceMeters({lat:0,lng:0},{lat:0,lng:0}),0);
  assert.ok(Math.abs(distanceMeters({lat:0,lng:0},{lat:1,lng:0}) - 111195) < 5);
  assert.equal(walkingURL({lat:NaN,lng:0},{lat:35,lng:139}),'');
  assert.equal(walkingURL({lat:0,lng:0},{lat:91,lng:0}),'');
  assert.deepEqual(resolveCandidateGroups(data,['missing']),[]);
  const fixture = {places:[{id:'x',lat:35,lng:139,excluded:true}],venueGroups:{g:{anchor:{lat:35,lng:139},placeIds:['x','missing']}}};
  assert.deepEqual(resolveCandidateGroups(fixture,['g']),[]);
});

test('the researched opening and closure constraints remain visible in the travel plan', () => {
  const p = id => data.places.find(p => p.id === id);
  assert.match(p('place-4').visitWarning, /11\/28.*정기휴무/);
  assert.match(p('place-12').description, /12:00–19:00/);
  assert.ok(!data.venueGroups['kichijoji-yarn'].placeIds.includes('place-31'));
  assert.ok(!data.venueGroups['kichijoji-yarn'].placeIds.includes('place-30'));
  assert.match(p('place-17').name, /デモ&キッチン/);
  assert.match(p('place-24').status, /개최 예정 없음/);
  const airport = data.days[4].stops.find(s => s.start === '09:00');
  assert.match(airport.name, /^세관 면세 확인 → 수하물 위탁/);
  assert.match(airport.adjust, /2026\/11\/1/);
  assert.match(data.days[2].alert, /토요일 정기휴무/);
});
test('all 60 venues have scoped research records and verified claims link primary sources', () => {
  const audit = require('./audit-data.json');
  const places = [...data.places, ...data.extraVenues];
  assert.equal(audit.places.length, 60);
  assert.equal(new Set(audit.places.map(p => p.id)).size, 60);
  for (const p of places) {
    const record = audit.places.find(r => r.id === p.id);
    assert.deepEqual(record.verification, p.verification);
    assert.equal(record.lat, p.lat); assert.equal(record.lng, p.lng);
    assert.ok(p.verification.scope && p.verification.remaining);
    if (p.verification.level === '교차 확인') assert.ok(p.verification.sources.length > 0);
    for (const source of p.verification.sources) assert.ok(safeURL(source.url));
  }
  const market = places.find(p => p.id === 'place-24');
  assert.equal(new Set(market.verification.sources.map(s => new URL(s.url).hostname)).size, 2);
});


test('Boris is a required Sunday visit after Kichijoji, separate from a booked ticket', () => {
  const sunday = data.days.find(d => d.id === '2026-11-29');
  const boris = data.places.find(p => p.id === 'place-42');
  const visits = sunday.stops.filter(s => s.required);
  assert.equal(visits.length, 1);
  assert.equal(visits[0].start, '15:45'); assert.equal(visits[0].end, '16:45');
  assert.equal(visits[0].reserved, false);
  assert.equal(visits[0].url, boris.url); assert.equal(boris.required, true);
  assert.equal(sunday.stops.find(s => s.name.startsWith('추가 잡화')).end, '14:30');
  assert.ok(sunday.stops.find(s => s.start === '14:30' && s.end === '15:45'));
  assert.match(sunday.summaryOverride.afternoon, /보리스/);
  assert.match(boris.address, /神宮前4-16-2/);
  assert.equal(data.places.length, 55);
  assert.ok(!data.venueGroups.harajuku.placeIds.includes('place-42'));
});
