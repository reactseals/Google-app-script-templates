function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom Menu') //you can change Custom Menu into other title that will appear on sheet top menu bar
    .addItem("Title", 'className' ) //set title and enter class name that will call that function
    .addToUi();
}
