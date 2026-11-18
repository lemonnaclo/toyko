const test = require('node:test');
const assert = require('node:assert/strict');
const { csvRows, parseSummary, safeURL, filterPlaces } = require('./trip-core');
const data = require('./trip-data');
function summaryCSV(days = data.days) {
  return days.flatMap(d => [[d.date + ' ' + d.dow, d.region, '하루'], ['오전', d.summary.morning], ['오후', d.summary.afternoon], ['마무리', d.summary.evening], ['조정', d.summary.adjust], ['', '', '']]).map(row => row.map(v => '"' + v.replace(/"/g, '""') + '"').join(',')).join('\r\n');
}
test('the mobile plan preserves five days, 40 ordered cards and the only fixed booking', () => {
  assert.equal(data.days.length, 5);
  const stops = data.days.flatMap(d => d.stops);
  assert.equal(stops.length, 40); assert.equal(new Set(stops.map(s => s.id)).size, 40);
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
