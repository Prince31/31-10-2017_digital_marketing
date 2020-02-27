 var file = "";
 var file_name = [];
 var name_count = 0;
 var page= ""; 
  var date= "";
var flag=0;

function myFunction() {
  
  
  var folders = DriveApp.getFolderById("1zzRlwclIbphkE5TH0SSK0waU-lnZ0Npp");
  
  var contents = folders.getFiles();
  
  while(contents.hasNext()) {
    file = contents.next();
   
    file_name = file.getName();
    
//    var ext= file_name.substring(file_name.length - 4, file_name.length);
    
//    if (ext==".pdf")
//      {
//    
//        
//    
//    }
      
    var folder_name = file_name.substring(0, file_name.length - 4);
    
    var newFolder= folders.createFolder(folder_name);
    
    var folder_id = newFolder.getId();
    var file1 = DriveApp.getFileById(file.getId());
  file1.getParents().next().removeFile(file1);
  DriveApp.getFolderById(folder_id).addFile(file1);
    
    
    var newSS = SpreadsheetApp.create(folder_name);
    newSS.getRange("A1").setValue("Assigned To").setBackgroundColor('#FFED87').setFontWeight("bold");
    newSS.getRange("B1").setValue("Sr. No.").setBackgroundColor('#FFED87').setFontWeight("bold");
    newSS.getRange("C1").setValue("PLU ID").setBackgroundColor('#FFED87').setFontWeight("bold");
    newSS.getRange("D1").setValue("Url").setBackgroundColor('#FFED87').setFontWeight("bold");
    newSS.getRange("E1").setValue("Alt Text").setBackgroundColor('#FFED87').setFontWeight("bold");
    
    
    newSS.getRange("C2").setValue("9478711").setBackgroundColor('#BDFCED');
    newSS.getRange("C3").setValue("9460361+9460351").setBackgroundColor('#BDFCED');
    
    UrlCreation(folder_name);
    
    newSS.getRange("D2").setValue("https://www.frys.com/product/9478711?site=sa:adpages%20page:"+page+"%20date:"+date).setBackgroundColor('#BDFCED');
    newSS.getRange("D3").setValue("https://www.frys.com/search?cat=&query_string=9460361+9460351&nearbyStoreName=false&site=sa:adpages%20page:"+page+"%20date:"+date).setBackgroundColor('#BDFCED');
    
    newSS.getRange("E2").setValue("DJI RYZE Tello Drone Price $99").setBackgroundColor('#BDFCED');
    newSS.getRange("E3").setValue("DJI Mavic Air Drone Fly More Combo Price $999 each").setBackgroundColor('#BDFCED');
    
//    csvUploaded();
    
    var newID = newSS.getId();
    var folder = DriveApp.getFolderById(folder_id);
      var temp = DriveApp.getFileById(newID);
    folder.addFile(temp);
    DriveApp.getRootFolder().removeFile(temp);
    
    
    flag =0;
    page="";
    date="";
    name_count++;
    
    
    
    
    
//    link = file.getUrl();
//    sheet.appendRow( [name, link] );     
  }  
  
}



 
  


function UrlCreation(folder_name){
  
  
//  Browser.msgBox(title_name);

  for(var i=0; i < folder_name.length; i++)
  {
    if(folder_name.charAt(i)=="_"){
    
      flag++;  // or flag=flag+1; 
    
    }
    
//    Browser.msgBox(page);
    
    if(flag==0)
      
    {
      
      page= page+folder_name.charAt(i);
     
      
    }
    
    else if(flag==1){
    
      ;
     }
    
    else if(flag==2){
    
      if(folder_name.charAt(i)!="_"){
      
      date= date+folder_name.charAt(i);
//      Browser.msgBox(date);
        
      }
      
    }
    
    else{
    
    
      break;
    }
       
  
}
  
  
}

//function csvUploaded(){
//  var plu_column="";
//  var ss = SpreadsheetApp.openById("1431310739");
//  var sheets = ss.getActiveSheet();
//  var sheet_name=ss.getName();
//  var data = sheets.getDataRange().getValues();
//  
//  for (var i = 1;i <= 78; i++) {
//    var alpha=String.fromCharCode(97+i-1);
//     column=sheet.getRange(alpha+""+(1)).getDisplayValue();
//   
//    if(column=="PLU"){
//     plu_column=alpha;
//    alert(plu_column);
//    }
//  }
//
//
//
//}

