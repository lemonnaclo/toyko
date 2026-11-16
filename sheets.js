/* Shared by the browser and Node validation tests. */
(function(root){
  const columns=['ID','날짜','시작','종료','일정','분류','상세 내용','장소 검색어','이동 메모','예산','예약 상태','일 제목','일 설명'];
  function parseRows(rows){
    if(!Array.isArray(rows)||rows.length<2)throw Error('일정 시트에 일정을 한 줄 이상 입력해주세요.');
    const headers=rows[0].map(x=>String(x).trim());
    for(const name of ['ID','날짜','시작','일정'])if(!headers.includes(name))throw Error('필수 열이 없어요: '+name);
    const groups=new Map(),ids=new Set();
    rows.slice(1).forEach((row,index)=>{
      if(!row.some(x=>String(x).trim()))return;
      const get=name=>String(row[headers.indexOf(name)]??'').trim();
      const fail=message=>{throw Error((index+2)+'행: '+message)};
      const id=get('ID'),date=get('날짜'),start=get('시작'),end=get('종료');
      const stamp=new Date(date+'T00:00:00Z');
      if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||isNaN(stamp)||stamp.toISOString().slice(0,10)!==date)fail('날짜는 YYYY-MM-DD 형식으로 입력해주세요.');
      if(!id||ids.has(id))fail('ID가 비어 있거나 중복돼요. 각 일정에 고유한 ID를 입력해주세요.');
      if(!get('일정'))fail('일정 이름을 입력해주세요.');
      if(!/^([01]\d|2[0-3]):[0-5]\d$/.test(start)||(end&&!/^([01]\d|2[0-3]):[0-5]\d$/.test(end)))fail('시간은 HH:mm 형식으로 입력해주세요.');
      ids.add(id);
      if(!groups.has(date))groups.set(date,{date:date.slice(5).replace('-','.'),isoDate:date,dow:'일월화수목금토'[stamp.getUTCDay()],title:get('일 제목')||'도쿄에서의 하루',desc:get('일 설명'),route:[],stops:[]});
      const day=groups.get(date);
      const stop=[start,get('일정'),get('예약 상태')||get('분류'),get('상세 내용'),get('장소 검색어')||get('일정'),get('이동 메모')];
      Object.assign(stop,{id,end,budget:get('예산'),category:get('분류')});
      day.stops.push(stop);
    });
    if(!groups.size)throw Error('일정 시트에 일정을 한 줄 이상 입력해주세요.');
    return [...groups.values()].sort((a,b)=>a.isoDate.localeCompare(b.isoDate)).map(day=>{
      day.stops.sort((a,b)=>a[0].localeCompare(b[0]));
      day.route=[...new Set(day.stops.map(s=>s[4]))];return day;
    });
  }
  function endpoint(value){
    const url=new URL(value);
    if(url.origin!=='https://script.google.com'||!/^\/macros\/s\/[\w-]+\/exec$/.test(url.pathname))throw Error('Apps Script 웹 앱의 https://script.google.com/macros/s/…/exec 주소를 입력해주세요.');
    return url.origin+url.pathname;
  }
  root.TokyoSheets={columns,parseRows,endpoint};
  if(typeof module!=='undefined')module.exports=root.TokyoSheets;
})(globalThis);
