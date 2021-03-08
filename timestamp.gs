function onEdit(){ // This function should work on edit, once there are some changes on the sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Sheet2'); //change the sheet tab title accordingly
  
  //here we get the range that has any data in it
  var row = sheet.getLastRow();
  var cellRange = 'A'+ row;
  
  //code snippet below checks if the last row is empty, 
  //if yes - gets the range of the last row in A column and sets the formula, which in this case is a date stamp. 
  //if no - logs 'Hi!' into a log
  //getValue here is important to prevent the NOW() formula change all lines to current time once the new line is added
  if (row != ''){
    sheet.getRange(cellRange).setValue(sheet.getRange(cellRange).setFormula('=NOW()').getValue()); 
  } else {
    Logger.log('Hi!');
  }
}
