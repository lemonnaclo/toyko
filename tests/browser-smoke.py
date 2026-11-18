"""Functional UI checks. Start python3 -m http.server 8765 first; requires Playwright + Chromium."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json,os
ROOT=Path(__file__).resolve().parent.parent
raw=(ROOT/'trip-data.js').read_text();data=json.loads(raw[raw.index('= ')+2:raw.index(';\nif ')])
def csv_summary(days,updated=False):
 import csv,io
 out=io.StringIO();w=csv.writer(out)
 for d in days:
  w.writerow([d['date']+' '+d['dow'],d['region'],'하루'])
  for kr,key in [('오전','morning'),('오후','afternoon'),('마무리','evening'),('조정','adjust')]:w.writerow([kr,'새로 확인한 오후 일정' if updated and d['id']=='2026-11-29' and key=='afternoon' else d['summary'][key]])
  w.writerow([])
 return out.getvalue()
OUT=Path(os.environ.get('TRIP_TEST_OUTPUT','/workspace/site-work/previews'));OUT.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 context=b.new_context(viewport={'width':390,'height':844},locale='ko-KR',is_mobile=True,has_touch=True)
 response_state={'updated':False,'fail':False}
 def source(route):
  if response_state['fail']:route.fulfill(status=503,body='unavailable',headers={'Access-Control-Allow-Origin':'*'})
  else:route.fulfill(status=200,body=csv_summary(data['days'],response_state['updated']),content_type='text/csv',headers={'Access-Control-Allow-Origin':'*'})
 context.route('https://docs.google.com/**',source)
 context.add_init_script("""if(!localStorage.getItem('smoke-seeded')){localStorage.setItem('tokyo-memo-0','기존 메모');localStorage.setItem('tokyo-done',JSON.stringify({'1-2':true}));localStorage.setItem('tokyo-shops',JSON.stringify([{name:'기존 장소',url:'javascript:alert(1)',day:0}]));localStorage.setItem('smoke-seeded','yes')}""")
 page=context.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto('http://127.0.0.1:8765/',wait_until='domcontentloaded')
 page.get_by_text('시트 요약 확인됨',exact=True).wait_for()
 assert page.locator('#days button').count()==5
 for i,count in enumerate([7,9,8,10,6]):
  page.locator(f'#days [data-day="{i}"]').click();assert page.locator('.schedule-card').count()==count
  assert page.locator('.reserved').count()==(1 if i==1 else 0)
  if i==1:assert page.locator('.reserved input').is_checked()
 page.locator('#days [data-day="0"]').click()
 page.locator('[data-view="notes"]').click()
 assert page.locator('#memo').input_value()=='기존 메모'
 assert page.locator('#shops a').get_attribute('href').startswith('https://www.google.com/maps')
 page.locator('#memo').fill('모바일에서 쓴 메모')
 page.locator('#shopname').fill('테스트 상점');page.locator('#shopform button').click()
 page.locator('#days [data-day="3"]').click();assert page.locator('#memo').input_value()==''
 page.locator('#memo').fill('기치조지 메모')
 page.locator('[data-view="schedule"]').click()
 page.locator('.schedule-card input').first.check()
 marked=page.locator('.schedule-card input').first.get_attribute('data-done')
 page.reload(wait_until='domcontentloaded');page.get_by_text('시트 요약 확인됨',exact=True).wait_for()
 assert page.locator(f'[data-done="{marked}"]').is_checked()
 page.locator('[data-view="notes"]').click();assert page.locator('#memo').input_value()=='기치조지 메모'
 page.locator('#days [data-day="0"]').click();assert page.locator('#memo').input_value()=='모바일에서 쓴 메모'
 assert '테스트 상점' in page.locator('#shops').inner_text()
 page.locator('[data-view="places"]').click();assert page.locator('.place-card').count()==52
 page.locator('#place-search').fill('Pokémon');assert page.locator('.place-card').count()==0
 page.locator('#include-excluded').check();assert page.locator('.place-card').count()==1
 page.locator('#place-search').fill('');assert page.locator('.place-card').count()==55
 page.locator('#place-area').select_option('기치조지');assert page.locator('.place-card').count()==7
 page.locator('#days [data-day="3"]').click();page.locator('[data-view="options"]').click()
 assert page.locator('.option-card').count()==12
 page.locator('#all-options').click();assert page.locator('.option-card').count()==14
 # A summary refresh updates its display without resetting notes or visit state.
 response_state['updated']=True;page.locator('#refresh-summary').click();page.get_by_text('시트 요약 확인됨',exact=True).wait_for()
 assert '새로 확인한 오후 일정' in page.locator('#daydesc').inner_text()
 response_state['fail']=True;page.locator('#refresh-summary').click();page.get_by_text('시트 연결 지연 · 11/18 정리본 유지',exact=True).wait_for()
 assert '새로 확인한 오후 일정' in page.locator('#daydesc').inner_text()
 page.locator('[data-view="schedule"]').click();assert page.locator(f'[data-done="{marked}"]').is_checked()
 # All screens at narrow phone, tablet and desktop widths must fit the viewport.
 for width in [320,360,390,430,768,1280]:
  page.set_viewport_size({'width':width,'height':900})
  for view in ['schedule','options','places','notes']:
   page.locator(f'[data-view="{view}"]').click()
   assert page.locator('[role="tabpanel"]:visible').count()==1
   assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),(width,view)
  if width==390:
   page.locator('[data-view="schedule"]').click();page.locator('#content').scroll_into_view_if_needed();page.screenshot(path=str(OUT/'mobile-schedule.png'))
   page.locator('[data-view="options"]').click();page.screenshot(path=str(OUT/'mobile-options.png'))
  if width==1280:
   page.locator('[data-view="schedule"]').click();page.evaluate('scrollTo(0,0)');page.screenshot(path=str(OUT/'desktop.png'),full_page=True)
 assert not errors,errors
 # Corrupt or unavailable storage must not stop the itinerary from rendering.
 bad=b.new_context();bad.route('https://docs.google.com/**',lambda r:r.abort())
 bad.add_init_script("Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}})")
 bp=bad.new_page();bp.goto('http://127.0.0.1:8765/',wait_until='domcontentloaded');assert bp.locator('.schedule-card').count()==7
 assert '저장할 수 없어요' in bp.locator('#save-status').inner_text()
 b.close()
 print('PASS: five days / 40 cards, single booking, legacy + new notes/checks, shops, 55-place filters, 14 choices, live-summary success/failure, blocked storage; no overflow at 320–1280px; no JS errors.')
