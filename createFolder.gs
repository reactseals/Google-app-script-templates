function createFolderStructure() {
  var masterFolder = DriveApp.getFolderById(""); // enter a folder ID to which you want to add a new one
  var newFolder = DriveApp.createFolder(''); //enter a new folder's title
  masterFolder.addFolder(newFolder);
}