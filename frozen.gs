//e.g. want to froze 4 rows
function freeze(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Home'); //here you need to specify sheet tab - replace 'Home' with your sheet tab title

  var frozen = sheet.setFrozenRows(4);
}
