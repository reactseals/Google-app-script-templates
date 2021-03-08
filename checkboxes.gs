//don't forget to declare spreadsheet and sheet variables

  var range = sheet.getRange('K11:AN80'); // select wanted range
  var addCheckbox = SpreadsheetApp.newDataValidation();

  addCheckbox.requireCheckbox();
  addCheckbox.setAllowInvalid(false);
  addCheckbox.build();
  range.setDataValidation(addCheckbox);
