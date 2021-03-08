//Using this code sample you can add google sheet formulas into your...google sheet
function addFormulas(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Home'); //here you need to specify sheet tab - replace 'Home' with your sheet tab title
  
  var row = sheet.getLastRow(); //gets the number of the last filled row
  var sheetID = '1RfHp_mzg1QW5V3rgZc2qAgTMEdOgdXojdg40gkN57T4';//change to your sheet ID number
  //examples of ways the range can be saved in a variable
  var range1 = 'Home!A1:B7'; 
  var range2 = 'A1:A3';
  var range3 = 'D2';
  
  //you can save a whole formula in a variable
  var formulaToInsert = '=QUERY(IMPORTRANGE('+ '"'+ sheetID + '"'+ ',"'+ range1 +'") , "select Col2 where Col1= 5", 0)'; 
  //this formula uses saved sheet ID and range. This way we can reuse the same sheet id and range in multiple formulas

  //formula insertion in google sheet examples:
  //here we use a mixed range and reuse a variable of formula saved above
  sheet.getRange ('C' + row).setFormula(formulaToInsert);
  
  //here we reuse the saved range variable, enter the formula that reuses sheet ID and range variables
  var formula2 = sheet.getRange(range3).setFormula('=IMPORTRANGE("'+ sheetID + '", "'+ range2 + '")')
}

