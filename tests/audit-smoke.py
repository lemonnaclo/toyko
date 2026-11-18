"""Check research navigation, fact alerts after a sheet refresh, and mobile report layout."""
from pathlib import Path
from playwright.sync_api import sync_playwright
from urllib.parse import urljoin
import os
BASE=os.environ.get('TRIP_TEST_URL','http://127.0.0.1:8790/')
OUT=Path(os.environ.get('TRIP_TEST_OUTPUT','/workspace/site-work/audit-previews'));OUT.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 c=b.new_context(viewport={'width':390,'height':844},locale='ko-KR')
 c.route('https://docs.google.com/**',lambda r:r.abort())
 page=c.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE,wait_until='domcontentloaded')
 page.locator('#days [data-day="2"]').click()
 assert '토요일 정기휴무' in page.locator('#day-fact').inner_text()
 assert '이날 방문 제외' in page.locator('.visit-warning').inner_text()
 page.locator('#refresh-summary').click()
 page.get_by_text('시트 연결 지연 · 11/18 정리본 유지',exact=True).wait_for()
 assert '토요일 정기휴무' in page.locator('#day-fact').inner_text()
 page.locator('#days [data-day="4"]').click()
 assert '수하물 위탁·보안검색 전에' in page.locator('#day-fact').inner_text()
 assert '세관 면세 확인 → 수하물 위탁' in page.locator('#timeline').inner_text()
 page.goto(urljoin(BASE,'audit.html'),wait_until='domcontentloaded')
 assert page.locator('.audit-place').count()==61
 assert page.locator('#place-24 .audit-sources a').count()==3
 for href in page.locator('a[href^="#"]').evaluate_all('(els)=>els.map(e=>e.getAttribute("href"))'):
  assert page.locator(href).count()==1,href
 assert page.locator('#tax-refund .audit-sources a').count()==3
 for width in [320,360,390,430,768,1280]:
  page.set_viewport_size({'width':width,'height':844})
  assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),width
 page.set_viewport_size({'width':390,'height':844})
 page.locator('#tax-refund').scroll_into_view_if_needed()
 page.screenshot(path=str(OUT/'refund-mobile.png'))
 page.locator('#place-4').scroll_into_view_if_needed()
 page.screenshot(path=str(OUT/'seven-mobile.png'))
 assert not errors,errors
 b.close()
print('PASS: research report 61 cards, source and anchor navigation, closure/refund alerts after summary refresh, no overflow at 320–1280px, no JS errors.')
