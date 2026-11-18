(function (root) {
  'use strict';
  function safeURL(value) {
    try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  }
  function csvRows(text) {
    if (typeof text !== 'string' || text.length > 500000) throw Error('요약 응답을 확인할 수 없습니다.');
    const rows = []; let row = [], field = '', quoted = false;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === '"') {
        if (quoted && text[i + 1] === '"') { field += '"'; i++; }
        else if (quoted || !field) quoted = !quoted;
        else throw Error('잘못된 CSV 형식');
      } else if (char === ',' && !quoted) { row.push(field); field = ''; }
      else if ((char === '\n' || char === '\r') && !quoted) {
        if (char === '\r' && text[i + 1] === '\n') i++;
        row.push(field); rows.push(row); row = []; field = '';
      } else field += char;
    }
    if (quoted) throw Error('완성되지 않은 CSV');
    if (field || row.length) { row.push(field); rows.push(row); }
    return rows;
  }
  function parseSummary(text, expectedIDs) {
    const result = {}; let current = null;
    const labels = { '오전': 'morning', '오후': 'afternoon', '마무리': 'evening', '조정': 'adjust' };
    for (const row of csvRows(text.replace(/^\uFEFF/, ''))) {
      const key = (row[0] || '').trim();
      const date = key.match(/^(?:2026[.\/-])?11[.\/-](2[6-9]|30)(?:\s.*)?$/);
      if (date) {
        current = '2026-11-' + date[1];
        if (result[current]) throw Error('중복된 날짜');
        result[current] = { region: (row[1] || '').trim(), summary: {} };
      } else if (current && labels[key]) {
        const field = labels[key];
        if (result[current].summary[field]) throw Error('중복된 요약');
        result[current].summary[field] = (row[1] || '').trim();
      }
    }
    if (Object.keys(result).length !== expectedIDs.length) throw Error('날짜 수 불일치');
    for (const id of expectedIDs) {
      const item = result[id];
      if (!item || !item.region || Object.values(labels).some(key => !item.summary[key])) throw Error('요약이 완성되지 않았습니다.');
    }
    return result;
  }
  function filterPlaces(places, { query = '', area = '', includeExcluded = false } = {}) {
    const term = query.trim().toLocaleLowerCase();
    return places.filter(p => (includeExcluded || (!p.excluded && !p.lowPriority)) && (!area || p.area === area) && (!term || [p.name, p.area, p.address].some(value => value.toLocaleLowerCase().includes(term))));
  }
  const api = { safeURL, csvRows, parseSummary, filterPlaces };
  root.TokyoTrip = api;
  if (typeof module !== 'undefined') module.exports = api;
})(globalThis);
