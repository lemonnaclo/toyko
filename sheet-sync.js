(function(){
  const $=selector=>document.querySelector(selector);
  const config=window.TOKYO_SHEETS_CONFIG||{};
  const storageKey='tokyo-sheets-endpoint';
  let url=localStorage.getItem(storageKey)||config.endpoint||'';
  let pending=false,version='',generation=0,controller;
  $('#sheet-endpoint').value=url;
  function status(message){$('#sync-status').textContent=message}
  function editLink(){
    const link=$('#edit-sheet');
    try{const u=new URL(config.sheetUrl);if(u.origin!=='https://docs.google.com'||!u.pathname.startsWith('/spreadsheets/d/'))throw Error();link.href=u.href;link.hidden=false}catch{link.hidden=true}
  }
  async function sync(){
    if(!url||pending)return false;
    pending=true;const current=++generation;
    controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),20000);
    $('#sync-now').disabled=true;status('시트에서 일정을 불러오는 중…');
    try{
      const request=new URL(TokyoSheets.endpoint(url));request.searchParams.set('_',Date.now());
      const response=await fetch(request,{signal:controller.signal,cache:'no-store',credentials:'omit'});
      if(!response.ok)throw Error('연결 응답을 확인할 수 없어요.');
      const data=await response.json();
      if(current!==generation)return false;
      if(data.error)throw Error(data.error);
      const next=TokyoSheets.parseRows(data.rows),signature=JSON.stringify(data.rows);
      if(signature!==version){applySheetDays(next);version=signature}
      status('동기화 완료 · '+new Date().toLocaleTimeString('ko-KR')+' · 30초마다 확인');
      return true;
    }catch(error){
      if(current===generation)status('동기화 실패 · 현재 일정을 유지합니다. '+(error.name==='AbortError'?'연결 시간이 초과됐어요.':error.message)+' 웹 앱 공개 권한과 URL을 확인해주세요.');
      return false;
    }finally{clearTimeout(timer);if(current===generation){pending=false;$('#sync-now').disabled=false}}
  }
  $('#sheet-connect').onsubmit=async event=>{
    event.preventDefault();
    let candidate;try{candidate=TokyoSheets.endpoint($('#sheet-endpoint').value.trim())}catch(error){status(error.message);return}
    generation++;controller?.abort();pending=false;version='';url=candidate;
    if(await sync()){localStorage.setItem(storageKey,url);$('#sheet-settings').open=false}
  };
  $('#sync-now').onclick=sync;
  $('#sheet-disconnect').onclick=()=>{
    generation++;controller?.abort();pending=false;url='';version='';localStorage.removeItem(storageKey);$('#sheet-endpoint').value='';$('#sync-now').disabled=false;resetSheetDays();
    status(config.endpoint?'이 브라우저 연결을 해제했어요. 새로고침하면 사이트 기본 연결이 적용됩니다.':'연결 해제 · 기본 일정 표시');
  };
  editLink();
  if(url)sync();else status('기본 일정 표시 · 구글 시트를 연결해 세부 일정을 편집하세요.');
  setInterval(()=>{if(!document.hidden)sync()},30000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)sync()});
})();
