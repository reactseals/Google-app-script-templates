 function addRules() {
  var ss = SpreadsheetApp.openById(''); //add spreadsheet ID
  var sheet1 = ss.getSheetByName(''); // tab in which the list for data validation is
  var sheet2 = ss.getSheetByName(''); //tab to which the data validation will apply
  
  var range1 = sheet1.getRange('F2:F'); // add range from which the list for data validation will be selected
  var range2 = sheet2.getRange('E2:E'); // add range to which the data validation will apply
  
   //data validation for adding a list of items  to select from 
  var rule1 = SpreadsheetApp.newDataValidation().requireValueInRange(range1).build();
  range2.setDataValidation(rule1);
}
