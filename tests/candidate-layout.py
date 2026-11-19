"""Verify visible per-venue rows, exact map coordinates and phone name/detail columns."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import os,json
ROOT=Path(__file__).resolve().parent.parent
raw=(ROOT/'trip-data.js').read_text();data=json.loads(raw[raw.index('= ')+2:raw.index(';\nif ')])
BASE=os.environ.get('TRIP_TEST_URL','http://127.0.0.1:8765/')
OUT=Path(os.environ.get('TRIP_TEST_OUTPUT','/workspace/site-work/candidate-previews'));OUT.mkdir(parents=True,exist_ok=True)
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 c=b.new_context(viewport={'width':390,'height':844},locale='ko-KR',is_mobile=True,has_touch=True)
 c.route('https://docs.google.com/**',lambda route:route.abort())
 page=c.new_page();errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
 page.goto(BASE,wait_until='domcontentloaded');page.locator('#days [data-day="2"]').click()
 group=page.locator('#schedule-view [data-candidate-group="kappabashi"]');rows=group.locator('.candidate-row')
 assert rows.count()==6
 expected={'place-4','place-16','place-17','place-18','place-19','place-20'}
 assert set(rows.evaluate_all('(rows)=>rows.map(row=>row.dataset.venue)'))==expected
 for row in rows.all():
  place=next(p for p in data['places'] if p['id']==row.get_attribute('data-venue'))
  assert row.locator('.candidate-name').get_attribute('href')==place['url']
  assert row.locator('.candidate-name').get_attribute('target')=='_blank'
  assert row.locator('.candidate-description p').inner_text()==place['description']
  assert f'destination={place["lat"]}%2C{place["lng"]}' in row.get_by_role('link',name='도보 경로 ↗').get_attribute('href')
  assert row.locator('.candidate-name').evaluate('(e)=>getComputedStyle(e).backgroundColor')!='rgb(255, 255, 255)'
  assert row.locator('.candidate-description p').evaluate('(e)=>getComputedStyle(e).fontFamily')==page.locator('body').evaluate('(e)=>getComputedStyle(e).fontFamily')
 # The left-name/right-detail arrangement must survive the smallest phone widths.
 for width in [320,360,390,430,768,1280]:
  page.set_viewport_size({'width':width,'height':844})
  assert page.evaluate('document.documentElement.scrollWidth <= innerWidth'),width
  previous_bottom=0
  for row in rows.all():
   left=row.locator('.candidate-name').bounding_box();right=row.locator('.candidate-description').bounding_box();box=row.bounding_box()
   assert left['x']+left['width']<=right['x']+1,(width,left,right)
   assert abs(left['y']-right['y'])<=1
   assert box['y']>=previous_bottom-1
   previous_bottom=box['y']+box['height']
  if width in [390,1280]:
   page.evaluate('document.fonts.ready');group.locator('h4').scroll_into_view_if_needed();group.screenshot(path=str(OUT/f'kappabashi-{width}.png'))
 # Other grouped shopping summaries now expose concrete candidates too.
 for day,groupid,count in [(0,'ikebukuro',4),(1,'ginza',5),(2,'nippori',3),(3,'kichijoji-shops',6)]:
  page.locator(f'#days [data-day="{day}"]').click()
  assert page.locator(f'#schedule-view [data-candidate-group="{groupid}"] .candidate-row').count()==count
 page.locator('#days [data-day="1"]').click()
 assert page.locator('#schedule-view [data-candidate-group="daiso-ginza"] .candidate-row').count()==1
 page.locator('#days [data-day="3"]').click();page.locator('[data-view="options"]').click()
 assert page.locator('#options-view [data-candidate-group="kichijoji-paper"] .candidate-row').count()==2
 assert page.locator('#options-view [data-candidate-group="shinjuku"] .candidate-row').count()==4
 assert page.locator('#options-view [data-candidate-group="nakano"] .candidate-row').count()==1
 assert not page.locator('.candidate-row[data-venue="place-6"]').count()
 assert not page.locator('.candidate-row[data-venue="place-9"]').count()
 assert not errors,errors
 b.close()
print('PASS: six Kappabashi venues each in their own colored-name/detail row; exact map/destination coordinates; original font; side-by-side layout at 320–1280px; all shopping/option groups; no excluded venues or JS errors.')
