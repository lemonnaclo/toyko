(() => {
  'use strict';
  const data = window.TOKYO_TRIP_DATA;
  const { safeURL, parseSummary, filterPlaces, resolveCandidateGroups } = window.TokyoTrip;
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const mapURL = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  const transitURL = (a, b) => 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(a) + '&destination=' + encodeURIComponent(b) + '&travelmode=transit';
  const link = (url, text, css = '') => safeURL(url) ? `<a class="${css}" href="${esc(safeURL(url))}" target="_blank" rel="noopener">${esc(text)}</a>` : '';
  let storageAvailable = true;
  function raw(key) { try { return localStorage.getItem(key); } catch { storageAvailable = false; return null; } }
  function read(key, fallback) {
    try {
      const value = JSON.parse(raw(key));
      if (Array.isArray(fallback)) return Array.isArray(value) ? value : fallback;
      if (fallback && typeof fallback === 'object') return value && typeof value === 'object' && !Array.isArray(value) ? value : fallback;
      return value ?? fallback;
    } catch { return fallback; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, value); return true; }
    catch { storageAvailable = false; $('#save-status').textContent = '이 브라우저에서는 저장할 수 없어요. 메모를 따로 보관해주세요.'; return false; }
  }
  const done = read('tokyo-trip-v2-done', {}), legacyDone = read('tokyo-done', {}), checks = read('tokyo-checks', {});
  let shops = read('tokyo-shops', []).filter(s => s && typeof s.name === 'string' && ['number', 'string'].includes(typeof s.day));
  const storedDay = raw('tokyo-trip-day');
  const oldIndex = Number(raw('tokyo-day'));
  let selected = data.days.some(d => d.id === location.hash.slice(1)) ? data.days.findIndex(d => d.id === location.hash.slice(1)) : data.days.findIndex(d => d.id === storedDay);
  if (selected < 0) selected = Number.isInteger(oldIndex) && data.days[oldIndex] ? oldIndex : 0;
  let view = 'schedule', allOptions = false, syncing = false;
  const day = () => data.days[selected];
  const isDone = stop => Object.hasOwn(done, stop.id) ? !!done[stop.id] : !!(stop.legacyKey && legacyDone[stop.legacyKey]);
  function query(stop) {
    if (!stop.url) return '';
    try { const u = new URL(stop.url); return u.searchParams.get('query') || stop.name; } catch { return ''; }
  }
  function setDay(index, scroll = false) {
    if (!data.days[index]) return;
    selected = index;
    write('tokyo-trip-day', day().id);
    try { history.replaceState(null, '', '#' + day().id); } catch { /* File previews can lack history access. */ }
    renderDay(); renderOptions(); renderNotes();
    document.querySelectorAll('[data-day]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.day) === selected)));
    const active = $(`#days [data-day="${selected}"]`);
    if (active) $('#days').scrollLeft = Math.max(0, active.offsetLeft - $('#days').offsetLeft - 16);
    if (scroll) $('#content').scrollIntoView({ block: 'start', behavior: 'auto' });
  }
  function setView(next) {
    if (!['schedule', 'options', 'places', 'notes'].includes(next)) return;
    view = next;
    document.querySelectorAll('[data-view]').forEach(button => {
      const active = button.dataset.view === view;
      button.setAttribute('aria-selected', String(active)); button.tabIndex = active ? 0 : -1;
    });
    for (const name of ['schedule', 'options', 'places', 'notes']) $(`#${name}-view`).hidden = name !== view;
    if (view === 'places') renderPlaces();
  }
  function renderOverview() {
    $('#overview-cards').innerHTML = data.days.map((d, i) => `<button class="overview-card" type="button" data-overview="${i}"><span class="overview-date">${esc(d.date)} ${esc(d.dow)}</span><strong>${esc(d.region)}</strong><span><b>오전</b> ${esc(d.summary.morning)}</span><span><b>오후</b> ${esc(d.summary.afternoon)}</span><span><b>마무리</b> ${esc(d.summary.evening)}</span><small>${esc(d.summary.adjust)}</small></button>`).join('');
    document.querySelectorAll('[data-overview]').forEach(button => button.onclick = () => { setView('schedule'); $('#overview').open = false; setDay(Number(button.dataset.overview), true); });
  }
  function progress() {
    $('#progress').textContent = day().stops.filter(isDone).length + ' / ' + day().stops.length + ' 완료';
  }
  function renderCandidates(ids) {
    const groups = resolveCandidateGroups(data, ids);
    return groups.map(group => `<section class="candidate-group" data-candidate-group="${esc(group.id)}"><div class="candidate-group-heading"><h4>${esc(group.label)}</h4><span>${group.candidates.length}곳 중 선택</span></div><p class="candidate-hint">매장 이름은 개별 지도 · 도보 경로는 이 구역의 기준점에서 출발</p><ul class="candidate-list">${group.candidates.map(place => {
      const tone = ['craft', 'paper', 'character', 'outdoor', 'browse', 'cafe', 'walk'].includes(place.tone) ? place.tone : 'browse';
      const distance = place.distanceMeters < 30 ? '구역 기준점 부근' : place.distanceMeters >= 1000 ? `기준점에서 직선 약 ${(place.distanceMeters / 1000).toFixed(1)}km` : `기준점에서 직선 약 ${Math.max(25, Math.round(place.distanceMeters / 25) * 25)}m`;
      return `<li class="candidate-row" data-venue="${esc(place.id)}"><a class="candidate-name tone-${tone}" href="${esc(safeURL(place.url))}" target="_blank" rel="noopener" aria-label="${esc(place.name)} 개별 지도 열기"><span>${esc(place.displayName || place.name)}</span></a><div class="candidate-description"><p>${esc(place.description)}</p><span class="candidate-distance">${esc(distance)}</span><div class="candidate-links">${link(place.url, '매장 지도 ↗')}${link(place.walkingURL, '도보 경로 ↗')}</div></div></li>`;
    }).join('')}</ul></section>`).join('');
  }
  function renderDay() {
    const d = day();
    $('#daynum').textContent = `DAY ${selected + 1} · ${d.date} ${d.dow}요일`;
    $('#daytitle').textContent = d.title;
    $('#daydesc').textContent = d.region + ' · ' + d.summary.afternoon;
    $('#route').innerHTML = d.route.map(p => `<span>${esc(p)}</span>`).join('<b aria-hidden="true">→</b>');
    $('#day-adjust').textContent = d.summary.adjust;
    $('#timeline').innerHTML = d.stops.map((s, i) => {
      const previous = d.stops.slice(0, i).reverse().find(p => query(p));
      return `<article class="schedule-card ${s.reserved ? 'reserved' : ''} ${isDone(s) ? 'completed' : ''}" data-card="${esc(s.id)}"><div class="card-top"><time>${esc(s.start)}<span>–${esc(s.end)}</span></time><span class="tag">${esc(s.kind)}</span></div><h3>${esc(s.name)}</h3><p class="card-detail">${esc(s.detail)}</p>${renderCandidates(s.candidateGroups)}<details class="adjust-detail" ${s.reserved ? 'open' : ''}><summary>조정·확인</summary><p>${esc(s.adjust)}</p></details><div class="card-actions">${link(s.url, '지도 열기 ↗')}${previous && query(s) ? link(transitURL(query(previous), query(s)), '이전 장소에서 대중교통 ↗') : ''}${s.url ? `<button class="preview-map" type="button" data-preview="${i}">지도 미리보기</button>` : ''}<label class="done-label"><input type="checkbox" data-done="${esc(s.id)}" ${isDone(s) ? 'checked' : ''}> 완료</label></div></article>`;
    }).join('');
    document.querySelectorAll('[data-done]').forEach(input => input.onchange = () => {
      done[input.dataset.done] = input.checked;
      write('tokyo-trip-v2-done', JSON.stringify(done));
      input.closest('article').classList.toggle('completed', input.checked); progress();
    });
    document.querySelectorAll('[data-preview]').forEach(button => button.onclick = () => {
      const s = d.stops[Number(button.dataset.preview)];
      $('#map').src = 'https://maps.google.com/maps?q=' + encodeURIComponent(query(s)) + '&output=embed';
      $('#map').hidden = false; $('#mapname').textContent = s.name;
      $('#maplink').href = safeURL(s.url); $('#maplink').hidden = false;
      if (matchMedia('(max-width: 850px)').matches) $('.map-panel').scrollIntoView({ block: 'start', behavior: 'auto' });
    });
    $('#map').hidden = true; $('#map').removeAttribute('src'); $('#maplink').hidden = true;
    $('#mapname').textContent = '일정의 ‘지도 미리보기’를 눌러주세요.';
    progress();
  }
  function renderOptions() {
    $('#options-title').textContent = allOptions ? '시간이 남으면 · 모든 선택지' : day().date + ' · 시간이 남으면';
    $('#all-options').setAttribute('aria-pressed', String(allOptions));
    $('#all-options').textContent = allOptions ? '선택한 날만 보기' : '전체 선택지 보기';
    const options = data.options.filter(o => allOptions || o.day === day().id || o.day === 'all');
    $('#option-cards').innerHTML = options.map(o => `<article class="option-card"><span class="option-duration">${esc(o.duration)}</span><h3>${esc(o.name)}</h3><p>${esc(o.detail)}</p><div class="option-travel"><b>이동</b> ${esc(o.travel)}</div>${renderCandidates(o.candidateGroups)}<details><summary>방문 전 확인</summary><p>${esc(o.note)}</p></details>${link(o.url, '지도 열기 ↗', 'option-map')}</article>`).join('');
  }
  function renderPlaces() {
    const places = filterPlaces(data.places, { query: $('#place-search').value, area: $('#place-area').value, includeExcluded: $('#include-excluded').checked });
    $('#place-count').textContent = `전체 ${data.places.length}곳 중 ${places.length}곳 표시`;
    $('#place-cards').innerHTML = places.length ? places.map(p => `<article class="place-card"><span class="place-area">${esc(p.area)}</span><h3>${esc(p.name)}</h3><span class="place-status">${esc(p.status)}</span><p>${esc(p.address || '정식 주소 미확인 · 지도 좌표로 확인')}</p><details><summary>어느 날 가면 좋을까?</summary><p>${esc(p.when)}</p><p>${esc(p.note)}</p></details>${link(p.url, 'Google 지도 ↗')}</article>`).join('') : '<p class="empty-state">일치하는 장소가 없어요. 이름이나 지역을 바꿔보세요.</p>';
  }
  function renderShops() {
    $('#shops').innerHTML = shops.map((s, i) => {
      if (s.day !== day().id && s.day !== selected) return '';
      return `<div class="saved-shop">${link(safeURL(s.url) || mapURL(s.name + ' Tokyo'), s.name + ' ↗')}<button type="button" data-remove="${i}" aria-label="${esc(s.name)} 삭제">삭제</button></div>`;
    }).join('');
    document.querySelectorAll('[data-remove]').forEach(button => button.onclick = () => {
      shops.splice(Number(button.dataset.remove), 1); write('tokyo-shops', JSON.stringify(shops)); renderShops();
    });
  }
  function renderNotes() {
    $('#memo-title').textContent = day().date + ' · 나만의 일정 메모';
    $('#memo').value = raw('tokyo-memo-' + day().id) ?? raw('tokyo-memo-' + selected) ?? '';
    $('#saved').textContent = storageAvailable ? '이 브라우저에 저장' : '브라우저 저장을 사용할 수 없습니다.';
    $('#shop-error').textContent = ''; renderShops();
  }
  $('#days').innerHTML = data.days.map((d, i) => `<button type="button" data-day="${i}" aria-pressed="${i === selected}"><span>${esc(d.date)}</span><small>${esc(d.dow)} · DAY ${i + 1}</small></button>`).join('');
  document.querySelectorAll('#days [data-day]').forEach(button => button.onclick = () => setDay(Number(button.dataset.day)));
  document.querySelectorAll('[data-view]').forEach(button => {
    button.onclick = () => setView(button.dataset.view);
    button.onkeydown = event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault(); const buttons = [...document.querySelectorAll('[data-view]')]; const i = buttons.indexOf(button);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (i + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length;
      buttons[next].click(); buttons[next].focus();
    };
  });
  $('#show-options').onclick = () => { setView('options'); $('#content').scrollIntoView({ block: 'start' }); };
  $('#all-options').onclick = () => { allOptions = !allOptions; renderOptions(); };
  $('#place-area').innerHTML += [...new Set(data.places.map(p => p.area))].map(area => `<option value="${esc(area)}">${esc(area)}</option>`).join('');
  $('#place-search').oninput = renderPlaces; $('#place-area').onchange = renderPlaces; $('#include-excluded').onchange = renderPlaces;
  $('#memo').oninput = event => { $('#saved').textContent = write('tokyo-memo-' + day().id, event.target.value) ? '저장했어요 ✓' : '저장되지 않았어요. 따로 보관해주세요.'; };
  $('#shopform').onsubmit = event => {
    event.preventDefault(); const name = $('#shopname').value.trim(), url = $('#shopurl').value.trim();
    if (!name) return;
    if (url && !safeURL(url)) { $('#shop-error').textContent = 'http 또는 https 지도 링크를 입력해주세요.'; return; }
    shops.push({ name, url, day: day().id }); write('tokyo-shops', JSON.stringify(shops)); event.target.reset(); $('#shop-error').textContent = ''; renderShops();
  };
  ['여권 & 항공권', '파크 예약 티켓', 'eSIM / 로밍', '교통카드 & 엔화', '공항 열차·터미널 확인'].forEach((text, i) => {
    const label = document.createElement('label'); const input = document.createElement('input'); input.type = 'checkbox'; input.checked = !!checks[i];
    input.onchange = () => { checks[i] = input.checked; write('tokyo-checks', JSON.stringify(checks)); };
    label.append(input, ' ' + text); $('#checklist').append(label);
  });
  $('#print').onclick = () => window.print();
  $('#sheet-link').href = safeURL(data.sheetURL);
  renderOverview(); setDay(selected); renderPlaces();
  $('#overview').open = matchMedia('(min-width: 851px)').matches;
  async function refreshSummary() {
    if (syncing) return;
    syncing = true; $('#refresh-summary').disabled = true; $('#sync-status').textContent = '시트 요약 확인 중…';
    try {
      const response = await fetch(data.summaryCSV, { credentials: 'omit', cache: 'no-store', signal: AbortSignal.timeout(12000) });
      if (!response.ok) throw Error('시트 응답 오류');
      const next = parseSummary(await response.text(), data.days.map(d => d.id));
      for (const d of data.days) { d.region = next[d.id].region; d.summary = next[d.id].summary; }
      renderOverview();
      // Summary updates must not replace a card list or lose in-progress note edits.
      $('#daydesc').textContent = day().region + ' · ' + day().summary.afternoon;
      $('#day-adjust').textContent = day().summary.adjust;
      $('#sync-status').textContent = '시트 요약 확인됨';
    } catch { $('#sync-status').textContent = '시트 연결 지연 · 11/18 정리본 유지'; }
    finally { syncing = false; $('#refresh-summary').disabled = false; }
  }
  $('#refresh-summary').onclick = refreshSummary;
  refreshSummary();
  setInterval(() => { if (!document.hidden) refreshSummary(); }, 60000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshSummary(); });
  if (!storageAvailable) $('#save-status').textContent = '이 브라우저에서는 저장할 수 없어요. 메모를 따로 보관해주세요.';
})();
