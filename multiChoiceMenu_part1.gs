// File 1 out of 2
//creates a custom menu item with multichoice functionality
function onOpen(e) {
  SpreadsheetApp.getUi()
  .createMenu('Multiple Choice') // you can rename the custom menu here
  .addItem('Show Dialog', 'showDialog')
  .addToUi();
}
function showDialog() {  
  var html = HtmlService.createTemplateFromFile('Page').evaluate();
  SpreadsheetApp.getUi()
  .showSidebar(html);
}
var valid = function(){
  try{
    return SpreadsheetApp.getActiveRange().getDataValidation().getCriteriaValues()[0].getValues();
  }catch(e){
    return null
  }
}
function fillCell(e){
  var s = [];
  for(var i in e){
    if(i.substr(0, 2) == 'ch') s.push(e[i]);
  }
  if(s.length) SpreadsheetApp.getActiveRange().setValue(s.join(', '));
}

