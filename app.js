const mapURL=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
const dirURL=(a,b)=>'https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(a)+'&destination='+encodeURIComponent(b)+'&travelmode=transit';
const hotel='Hotel Grand City, 1-30-7 Higashiikebukuro, Tokyo';
// Times are planning estimates, not live transit schedules. Confirmed entry is user-provided.
let days=[
 {date:'11.26',dow:'목',title:'짐은 이케부쿠로에, 첫 모험은 닛포리',desc:'나리타 → 이케부쿠로 호텔 짐 보관 → 닛포리 → 이케부쿠로',route:['나리타 공항','호텔 · 짐 보관','닛포리 TOMATO','이케부쿠로'],stops:[
 ['09:50','인천 → 나리타','항공 정보','12:15 나리타 도착. 입국·수하물 수령 후 이케부쿠로 호텔로 먼저 이동합니다.','Narita Airport','입국·수하물 수령 60–90분 여유'],
 ['13:45','나리타 → 이케부쿠로','호텔 먼저','스카이라이너로 닛포리까지 이동한 뒤 JR 야마노테선으로 이케부쿠로 환승 후보. 닛포리 관광은 짐을 맡긴 이후에 합니다.','Ikebukuro Station','열차·환승·도보 약 75–100분 가안'],
 ['15:15','호텔 그랜드 시티 · 짐 맡기기','짐 보관 먼저','히가시이케부쿠로 1-30-7. 도착 즉시 짐을 맡기고 가볍게 출발해요. 체크인 전 짐 보관 가능 여부는 호텔에 사전 확인. 체크인이 가능하면 함께 진행합니다.',hotel,'짐 보관 약 15–20분 · 이후 닛포리로'],
 ['16:15','TOMATO · 닛포리 원단 거리','필수 방문','호텔에 짐을 맡긴 뒤 방문. 본관 통상 10:30–18:00, 일요일·공휴일 휴무. 입국·호텔 도착이 늦어지면 무리하지 않고 토요일 오전 일정과 조정하세요.','トマト 本館 東日暮里5-33-25','이케부쿠로 → 닛포리 JR + 도보 · 약 35–45분'],
 ['18:30','이케부쿠로 귀환 & 저녁','저녁 쇼핑','호텔로 돌아와 체크인 마무리 후 저녁. 돈키호테는 식사 후 귀갓길에 필요한 것만 가볍게 쇼핑해요.','ドン・キホーテ 池袋東口駅前店','닛포리 → 이케부쿠로 · 약 35–45분'] ]},
 {date:'11.27',dow:'금',title:'치이카와 파크, 그리고 긴자',desc:'예약 시간은 여유 있게 · 오후에는 긴자 산책',route:['호텔 그랜드 시티','치이카와 파크','긴자','이케부쿠로'],stops:[
 ['10:00','이케부쿠로에서 느긋한 아침','여유 일정','숙소 근처에서 아침 식사. 티켓·신분 확인에 필요한 내용을 미리 확인하세요.',hotel,'파크로 도보 이동 · 대기 여유 포함'],
 ['11:10','치이카와 파크 도착 준비','입장 준비','이케부쿠로 선샤인시티로 이동. 예약 입장 구간 전 현장 도착을 목표로 합니다.','ちいかわパーク サンシャインシティ','현장 티켓 안내 확인'],
 ['11:40','치이카와 파크','예약 완료','11/27 11:40–12:00 입장 예약 완료 · 2인 여행. 체류 시간은 가안이며 퇴장·쇼핑 상황에 따라 조절하세요.','ちいかわパーク サンシャインシティ','관람 후 점심 · 14:30 전후 출발 가안'],
 ['15:30','긴자 · 취향 쇼핑 & 카페','필수 지역','긴자 산책과 카페. 개별 상점 목록은 추가 정보를 받으면 교체할 수 있도록 구성했습니다.','Ginza Tokyo','이케부쿠로 → 긴자 · 마루노우치선 등 약 35–45분'],
 ['18:00','무인양품 긴자 & 저녁','저녁 쇼핑','낮 동선을 마친 뒤 무인양품에 들러요. 구매량이 많으면 이후 일정은 줄이고 호텔로 돌아가세요.','無印良品 銀座','긴자 → 이케부쿠로 · 약 35–45분'] ]},
 {date:'11.28',dow:'토',title:'키치조지에서 오모테산도까지',desc:'골목 산책, 작은 가게, 히구치 유코의 세계',route:['이케부쿠로','키치조지','보리스 잡화점','이케부쿠로'],stops:[
 ['09:30','이케부쿠로 → 키치조지','이동 계획','신주쿠에서 JR 주오선 환승 후보. 아침 식사 후 출발합니다.','Kichijoji Station','환승 포함 약 40–55분'],
 ['10:30','키치조지 골목 산책','필수 지역','잡화 골목을 둘러보고 점심. 여유가 있으면 이노카시라 공원에서 잠깐 쉬어가요.','Kichijoji Tokyo','점심·카페 포함 약 3시간'],
 ['14:00','키치조지 → 오모테산도','이동 계획','주오선·지하철 환승 경로를 당일 지도에서 선택하세요. 하라주쿠·시부야 관광은 넣지 않았습니다.','Omotesando Station Tokyo','환승·도보 포함 약 50–65분'],
 ['15:15','보리스 잡화점 · 히구치 유코','필수 상점','ボリス雑貨店 · 진구마에 4-16-2. 공식 안내: 오모테산도 A2 출구 도보 약 8분. 당일 영업·입장 방식은 공식 사이트 확인.','ボリス雑貨店 神宮前4-16-2','오모테산도 역 기준 도보 약 8분'],
 ['18:00','이케부쿠로 저녁 & 휴식','자유 일정','숙소 근처로 돌아와 저녁 식사. 추가 쇼핑은 체력에 맞춰 선택하세요.','Ikebukuro Station','오모테산도 → 이케부쿠로 · 약 35–50분'] ]},
 {date:'11.29',dow:'일',title:'일요일 골동품 시장과 신주쿠',desc:'아침의 오래된 물건들 · 마지막 저녁은 편안하게',route:['이케부쿠로','하나조노 신사','신주쿠','이케부쿠로'],stops:[
 ['08:30','호텔 → 신주쿠','이동 계획','골동품 시장은 오전 방문으로 계획합니다. 개최 공지와 날씨를 전날 다시 확인하세요.','新宿三丁目駅','지하철 후 도보 · 약 30–40분'],
 ['09:15','하나조노 신사 골동품 시장','개최 확인 필요','일요일 정기 시장 방문 가안. 2026/11/29 개별 개최는 미확정이며 신사 행사·기상에 따라 변경될 수 있습니다. 미개최 시 신사 산책 후 카페로 전환.','花園神社 新宿5-17-3','신주쿠산초메 역에서 도보'],
 ['11:00','신주쿠 쇼핑 & 점심','필수 지역','백화점·잡화점 중심으로 둘러봐요. 추가 상점은 아래 입력창에 이름과 원본 지도 링크를 저장할 수 있습니다.','Shinjuku Tokyo','지역 내 도보 이동'],
 ['17:00','이케부쿠로 · 마지막 저녁','저녁 쇼핑','돈키호테·무인양품 추가 쇼핑이 필요하면 귀갓길에. TOMATO는 일요일 일정에서 제외했습니다.','Ikebukuro Station','JR 야마노테선 약 10분 + 도보'],
 ['20:00','짐 정리 & 공항 이동 점검','출발 준비','여권·기념품·수하물 무게 확인. 항공사 터미널과 다음 날 스카이라이너 시간표·예약을 확인하세요.',hotel,'내일은 공항 이동만 진행'] ]},
 {date:'11.30',dow:'월',title:'다시 집으로, 또 만나 도쿄',desc:'관광 없이 공항 이동만 · 여유 있게 귀국',route:['호텔 그랜드 시티','닛포리 역','나리타 공항','인천 공항'],stops:[
 ['06:45','기상 & 체크아웃 준비','준비','여권·전자항공권·휴대품 최종 확인. 이른 체크아웃 방식은 호텔에 미리 문의하세요.',hotel,'07:00–07:15 출발 목표'],
 ['07:15','호텔 → 닛포리 → 나리타','공항 이동','이케부쿠로에서 JR로 닛포리 이동 후 스카이라이너 환승 후보. 공항 09:00 도착 목표에 맞는 실제 열차를 사전 확인하세요.','Narita Airport','전체 약 90–110분 여유 · 열차는 미예약'],
 ['09:00','나리타 공항 도착 목표','탑승 준비','항공사 터미널에서 체크인·수하물 위탁·보안 검색. 국제선 출발 약 3시간 전 도착 목표입니다.','Narita Airport','항공사 마감 시각 우선 확인'],
 ['12:05','나리타 → 인천','항공 정보','12:05 출발 → 15:10 인천 도착. 항공편 번호·터미널은 예약 확인서 기준입니다.','Incheon International Airport','한국·일본 시차 없음'] ]}
];
const defaultDays=days;
function applySheetDays(next){
 const date=days[selected].isoDate||'2026-'+days[selected].date.replace('.','-');
 days=next;selected=Math.max(0,days.findIndex(day=>day.isoDate===date));render();
}
function resetSheetDays(){days=defaultDays;selected=Math.min(selected,days.length-1);render()}
const stopKey=(day,index)=>day.stops[index].id?'sheet:'+day.stops[index].id:defaultDays.indexOf(day)+'-'+index;
const dayKey=day=>day.isoDate?'sheet:'+day.isoDate:defaultDays.indexOf(day);
let selected=Number(localStorage.getItem('tokyo-day')||0);if(!days[selected])selected=0;
const read=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};
let done=read('tokyo-done',{}),checks=read('tokyo-checks',{}),shops=read('tokyo-shops',[]);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function showMap(q,name){document.querySelector('#map').src='https://maps.google.com/maps?q='+encodeURIComponent(q)+'&output=embed';document.querySelector('#mapname').textContent=name;document.querySelector('#maplink').href=mapURL(q)}
function render(){const d=days[selected];localStorage.setItem('tokyo-day',selected);document.querySelector('#days').innerHTML=days.map((x,i)=>`<button class="${i===selected?'active':''}" aria-pressed="${i===selected}" data-day="${i}">DAY ${i+1} <small>${x.date} ${x.dow}요일</small></button>`).join('');document.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=+b.dataset.day;render()});document.querySelector('#daynum').textContent=`DAY ${selected+1} · ${d.isoDate||'2026-'+d.date.replace('.','-')}`;document.querySelector('#daytitle').textContent=d.title;document.querySelector('#daydesc').textContent=d.desc;document.querySelector('#datestamp').textContent=d.date+' '+d.dow;document.querySelector('#route').innerHTML=d.route.map(x=>`<span>${esc(x)}</span>`).join('<b>→</b>');const queries=[...new Set(d.stops.map(x=>x[4]))].filter(x=>x!=='Incheon International Airport');document.querySelector('#dayroute').href='https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(queries[0])+'&destination='+encodeURIComponent(queries.at(-1))+'&waypoints='+encodeURIComponent(queries.slice(1,-1).join('|'))+'&travelmode=driving';document.querySelector('#dayroute').title='전체 동선은 도로 경로 미리보기입니다. 구간별 대중교통 버튼을 이용하세요.';document.querySelector('#timeline').innerHTML=d.stops.map((s,i)=>{const key=stopKey(d,i);return `<article class="stop"><span class="time">${esc(s[0])}${s.end?'<small>– '+esc(s.end)+'</small>':''}</span><div class="stop-card ${s[2]==='예약 완료'?'reserved':''}" data-stop="${i}" tabindex="0" role="button" aria-label="${esc(s[1])} 지도 표시"><div class="stop-top"><span class="stop-title">${esc(s[1])}</span><span class="tag">${esc(s[2])}</span></div><p>${esc(s[3])}</p>${s.budget?`<p class="stop-budget">예산 · ${esc(s.budget)}</p>`:''}<div class="stop-actions"><a target="_blank" rel="noopener" href="${mapURL(s[4])}">⌖ 지도</a>${i&&s[2]!=='항공 정보'?`<a target="_blank" rel="noopener" href="${dirURL(d.stops[i-1][4],s[4])}">대중교통 ↗</a>`:''}<label><input type="checkbox" data-done="${esc(key)}" ${done[key]?'checked':''}> 다녀옴</label></div><div class="transfer">↳ ${esc(s[5])}</div></div></article>`}).join('');document.querySelectorAll('[data-stop]').forEach(b=>{const action=()=>{document.querySelectorAll('.stop-card').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');const s=d.stops[+b.dataset.stop];showMap(s[4],s[1])};b.onclick=e=>{if(!e.target.closest('a,label,input'))action()};b.onkeydown=e=>{if(e.target===b&&(e.key==='Enter'||e.key===' ')){e.preventDefault();action()}}});document.querySelectorAll('[data-done]').forEach(b=>b.onchange=()=>{done[b.dataset.done]=b.checked;localStorage.setItem('tokyo-done',JSON.stringify(done));progress()});document.querySelector('#memo').value=localStorage.getItem('tokyo-memo-'+dayKey(days[selected]))||'';showMap(d.stops[0][4],d.stops[0][1]);renderShops();progress()}
function progress(){document.querySelector('#progress').textContent=days[selected].stops.filter((_,i)=>done[stopKey(days[selected],i)]).length+' / '+days[selected].stops.length+' 방문'}
function renderShops(){document.querySelector('#shops').innerHTML=shops.map((s,i)=>s.day===dayKey(days[selected])?`<div><a href="${esc(s.url||mapURL(s.name+' Tokyo'))}" target="_blank" rel="noopener">⌖ ${esc(s.name)} ↗</a><button data-remove="${i}" aria-label="${esc(s.name)} 삭제">×</button></div>`:'').join('');document.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{shops.splice(+b.dataset.remove,1);localStorage.setItem('tokyo-shops',JSON.stringify(shops));renderShops()})}
document.querySelector('#memo').oninput=e=>{localStorage.setItem('tokyo-memo-'+dayKey(days[selected]),e.target.value);document.querySelector('#saved').textContent='저장했어요 ✓'};
document.querySelector('#shopform').onsubmit=e=>{e.preventDefault();const name=document.querySelector('#shopname').value.trim(),url=document.querySelector('#shopurl').value.trim();if(!name)return;if(url&&!/^https?:\/\//i.test(url))return;shops.push({name,url,day:dayKey(days[selected])});localStorage.setItem('tokyo-shops',JSON.stringify(shops));e.target.reset();renderShops()};
['여권 & 항공권','파크 예약 티켓','eSIM / 로밍','교통카드 & 엔화','공항 열차·터미널 확인'].forEach((x,i)=>{const l=document.createElement('label');l.innerHTML=`<input type="checkbox" ${checks[i]?'checked':''}> ${x}`;l.querySelector('input').onchange=e=>{checks[i]=e.target.checked;localStorage.setItem('tokyo-checks',JSON.stringify(checks))};document.querySelector('#checklist').append(l)});
document.querySelector('#print').onclick=()=>window.print();render();
