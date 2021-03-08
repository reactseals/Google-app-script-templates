//to use Asana API, you will need to get a personal access token, 
//you will find the instructions here: https://developers.asana.com/docs/authentication-quick-start

function getAsanaAuth() {
  var options = {
   "headers" : {
     "Authorization": "Bearer x/xxxxxxxxxxxxxxxx:xxxxxxxxxxxxxxxxxxxxxxxxxxxxx"  //your personal access token goes here
   }
  }
  return(options);
  }

//this function gets all tasks in a specified project 
//and sets the list in a google sheet:
//recommend to use the https://developers.asana.com/explorer to generate the link to fetch the needed data fields 
function getTasks() {
  var response = UrlFetchApp.fetch("https://app.asana.com/api/1.0/projects/xxxxxxxxxxxxxxxxx/tasks?opt_fields=assignee,completed,completed_at,name,created_at", getAsanaAuth()),
      dataAll = JSON.parse(response.getContentText()),
      data,
      tasks = [],
      dataSet = dataAll.data;
     
 for (i=0; i < dataSet.length; i++)
     {
       data = dataSet[i];
        //below we are pushing the data into tasks array, keep in mind that you need to list all the data items
        //you want in that array and it also has to match the data you are actually fetching from an API
       tasks.push([data.gid, data.assignee, data.completed, data.completed_at, data.created_at, data.name]) 
     }
  
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); //change the sheet tab title accordingly
  var row = sheet.getLastRow();
  var getL = tasks.length;
  var rangeTo = sheet.getRange('A1:F'+getL); //Keep in mind that the range should match the number of data columns you are fetching from an API
  rangeTo.setValues(tasks); 
}
