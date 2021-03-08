 var spreadsheet = SpreadsheetApp.getActiveSpreadsheet(); 
 var sheet = spreadsheet.getSheetByName('') //here you need to specify sheet tab - replace 'Home' with your sheet tab title
  
//with IF function
var Range1 = sheet.getRange('H5:H10');  // set wanted range
var value = sheet.getRange('M4').getValue().toString(); //set wanted range of a cell for condition
  
   if (value === 'true'){ // you can change the condition or it's word here
    Range1.setFontColor('#365175'); //set wanted color
  } 
else {Range1.setFontColor('#EEEFF2')} //set wanted color for when the condition is not met, or delete this row
; 

//or simply:
var Range1 = sheet.getRange('H5:H10'); // set wanted range
Range1.setFontColor('#365175'); //set wanted color 