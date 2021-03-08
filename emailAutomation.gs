function sendEmail(){
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('emails'); // change to your sheet's tab name
  //set range of your table, format: https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangerow,-column,-numrows,-numcolumns
  var data = sheet.getRange(2, 1, sheet.getLastRow()-1,6).getValues(); 
  
  data.forEach(function(row, i){ 
   var emailAddress = row[2];	// 3rd column of a row in a table contains email addresses, change accordingly
   var sent = row[3]; // 4th column contains status
    
    if (sent == '0') { // condition - you can modify it accordingly
      var subject = "Testing automated emails"; //change email subject accordingly
      var body = "Hey you! This is my automated email sent from AppScript command, pretty cool, huh?"; //change email text accordingly
      
      GmailApp.sendEmail(emailAddress, subject, body); 
    }
  });
}
