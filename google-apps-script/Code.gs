/** Bind this project to the trip spreadsheet. Run setupItinerary once. */
function setupItinerary(){
  const book=SpreadsheetApp.getActiveSpreadsheet();
  const existing=book.getSheetByName('일정');
  if(existing&&existing.getLastRow()>0)throw new Error('일정 탭에 데이터가 있어요. 기존 내용은 덮어쓰지 않습니다.');
  const sheet=existing||book.insertSheet('일정');
  // Store the bound sheet explicitly; web app executions need not have an active UI.
  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID',book.getId());
  sheet.getRange(1,1,sheet.getMaxRows(),SEED_ROWS[0].length).setNumberFormat('@');
  sheet.getRange(1,1,SEED_ROWS.length,SEED_ROWS[0].length).setValues(SEED_ROWS);
  sheet.setFrozenRows(1);
  sheet.getRange(1,1,1,SEED_ROWS[0].length).setBackground('#628b7b').setFontColor('#ffffff').setFontWeight('bold');
  sheet.getDataRange().setWrap(true).setVerticalAlignment('top');
  sheet.setColumnWidths(1,SEED_ROWS[0].length,130);
  sheet.setColumnWidth(5,260);sheet.setColumnWidth(7,480);sheet.setColumnWidth(9,320);
  sheet.getRange(2,11,sheet.getMaxRows()-1,1).setDataValidation(SpreadsheetApp.newDataValidation().requireValueInList(['예약 완료','예약 필요','확인 필요','예약 불필요'],true).setAllowInvalid(true).build());
  sheet.getDataRange().createFilter();
}

/** Read only: exposes exactly the itinerary columns, never other tabs. */
function doGet(){
  let payload;
  try{
    const id=PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
    if(!id)throw new Error('setupItinerary 함수를 먼저 실행해주세요.');
    const sheet=SpreadsheetApp.openById(id).getSheetByName('일정');
    if(!sheet)throw new Error('일정 탭을 찾을 수 없어요.');
    const values=sheet.getDataRange().getDisplayValues();
    const headers=values[0]||[];
    const allowed=SEED_ROWS[0];
    payload={rows:[allowed,...values.slice(1).map(row=>allowed.map(name=>{const i=headers.indexOf(name);return i<0?'':row[i]}))],updatedAt:new Date().toISOString()};
  }catch(error){payload={error:error.message}}
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
