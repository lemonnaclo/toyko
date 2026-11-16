const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const {columns,parseRows,endpoint}=require('../sheets.js');
const root=path.resolve(__dirname,'..');
const seed=()=>vm.runInNewContext(fs.readFileSync(path.join(root,'google-apps-script/Seed.gs'),'utf8')+';SEED_ROWS');
test('seed preserves all original itinerary fields for five days and 24 stops',()=>{
  const original=vm.runInNewContext(fs.readFileSync(path.join(root,'app.js'),'utf8').split('const defaultDays=')[0]+';days');
  const rows=seed(),days=parseRows(rows);
  assert.equal(days.length,5);assert.equal(rows.length-1,24);
  days.forEach((day,d)=>day.stops.forEach((stop,i)=>{
    assert.equal(JSON.stringify(stop.slice(0,6)),JSON.stringify(original[d].stops[i]));
    assert.equal(stop.end,'');assert.equal(stop.budget,'');
  }));
});
test('sorting and moving rows preserve stable IDs and optional details',()=>{
  const rows=seed();rows[1][3]='12:30';rows[1][9]='2인 ¥3,000';
  const parsed=parseRows([columns,...rows.slice(1).reverse(),columns.map(()=> '')]);
  assert.equal(parsed[0].stops[0].id,'day1-stop1');
  assert.equal(parsed[0].stops[0].end,'12:30');
  assert.equal(parsed[0].stops[0].budget,'2인 ¥3,000');
});
test('rejects invalid dates, times, duplicate IDs, missing columns and empty schedules',()=>{
  for(const [column,value] of [[1,'2026-02-30'],[2,'25:00'],[3,'9:00'],[4,'']]){
    const rows=seed();rows[1][column]=value;assert.throws(()=>parseRows(rows),/2행/);
  }
  const rows=seed();rows[2][0]=rows[1][0];assert.throws(()=>parseRows(rows),/중복/);
  assert.throws(()=>parseRows([['date'],['2026-11-26']]),/필수 열/);
  assert.throws(()=>parseRows([columns,columns.map(()=> '')]),/한 줄 이상/);
});
test('accepts only deployed Google Apps Script read endpoints',()=>{
  assert.equal(endpoint('https://script.google.com/macros/s/test_ID-1/exec?x=1'),'https://script.google.com/macros/s/test_ID-1/exec');
  for(const url of ['http://script.google.com/macros/s/id/exec','https://example.com/macros/s/id/exec','https://script.google.com/macros/s/id/dev','https://docs.google.com/spreadsheets/d/id/edit'])assert.throws(()=>endpoint(url));
});
