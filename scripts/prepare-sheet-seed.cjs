// Rebuild the Apps Script seed from the original itinerary. No spreadsheet API needed.
const fs=require('node:fs');
const vm=require('node:vm');
const source=fs.readFileSync('app.js','utf8').split('let selected=')[0];
const days=vm.runInNewContext(source+';days');
const {columns}=require('../sheets.js');
const rows=[columns,...days.flatMap((day,d)=>day.stops.map((s,i)=>[
  `day${d+1}-stop${i+1}`,'2026-'+day.date.replace('.','-'),s[0],'',s[1],s[2],s[3],s[4],s[5],'',s[2]==='예약 완료'?s[2]:'',day.title,day.desc
]))];
fs.mkdirSync('google-apps-script',{recursive:true});
fs.writeFileSync('google-apps-script/Seed.gs','// Existing itinerary; no new bookings or times inferred.\nconst SEED_ROWS = '+JSON.stringify(rows,null,2)+';\n');
