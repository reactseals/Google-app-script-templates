//enter the sheet tab name which will be used as a template
 var sheet = spreadsheet.getSheetByName(' '); 
//set a name for the tab that will be created
 var tabName = '';

 spreadsheet.insertSheet(tabName, {template: sheet});
