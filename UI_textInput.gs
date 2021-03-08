//sets a pop up in the sheet
var ui = SpreadsheetApp.getUi(); 
  var result = ui.prompt(
      'Enter your name', //change text accordingly
      ui.ButtonSet.OK);

  // Process the user's response
  var button = result.getSelectedButton();
  var name = result.getResponseText();
  
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Thanks!'); //once OK button clicked, user gets an alert, change text accordingly 
  } 
  