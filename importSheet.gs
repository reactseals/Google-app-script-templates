  //option1
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('') //here you need to specify sheet tab - replace 'Home' with your sheet tab title
  
  //option2
  var ss = SpreadsheetApp.openById(''); //specify the spreadsheet by inserting its id
  var sDevices = ss.getSheetByName(''); // specify the tab by entering its title
  