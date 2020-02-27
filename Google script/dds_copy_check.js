/** @OnlyCurrentDoc */
function ddsCheck(){
  var spreadsheet = SpreadsheetApp.getActive();
  
  for(var i=4;i<=8;i++){
  if(spreadsheet.getRange('B'+i).getValue()==""&&spreadsheet.getRange('B'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range B'+i);
   if(spreadsheet.getRange('C'+i).getValue()==""&&spreadsheet.getRange('C'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range C'+i);
   if(spreadsheet.getRange('D'+i).getValue()==""&&spreadsheet.getRange('D'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range D'+i);
   if(spreadsheet.getRange('E'+i).getValue()==""&&spreadsheet.getRange('E'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range E'+i);
   if(spreadsheet.getRange('F'+i).getValue()==""&&spreadsheet.getRange('F'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range F'+i);
   if(spreadsheet.getRange('G'+i).getValue()==""&&spreadsheet.getRange('G'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range G'+i);
   if(spreadsheet.getRange('H'+i).getValue()==""&&spreadsheet.getRange('H'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range H'+i);
   if(spreadsheet.getRange('I'+i).getValue()==""&&spreadsheet.getRange('I'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range I'+i);
   if(spreadsheet.getRange('J'+i).getValue()==""&&spreadsheet.getRange('J'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range J'+i);
   if(spreadsheet.getRange('K'+i).getValue()==""&&spreadsheet.getRange('K'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range K'+i);
   if(spreadsheet.getRange('L'+i).getValue()==""&&spreadsheet.getRange('L'+i).getValue()!="0")
   Browser.msgBox('Data not filled of range L'+i);
   
   }
   
   if(spreadsheet.getRange('B9').getValue()=="")
   Browser.msgBox('Data not filled of range B9');
   if(spreadsheet.getRange('C9').getValue()=="")
   Browser.msgBox('Data not filled of range C9');
   if(spreadsheet.getRange('D9').getValue()=="")
   Browser.msgBox('Data not filled of range D9');
   if(spreadsheet.getRange('E9').getValue()=="")
   Browser.msgBox('Data not filled of range E9');
   if(spreadsheet.getRange('F9').getValue()=="")
   Browser.msgBox('Data not filled of range F9');
   if(spreadsheet.getRange('G9').getValue()=="")
   Browser.msgBox('Data not filled of range G9');
   if(spreadsheet.getRange('H9').getValue()=="")
   Browser.msgBox('Data not filled of range H9');
   if(spreadsheet.getRange('I9').getValue()=="")
   Browser.msgBox('Data not filled of range I9');
   if(spreadsheet.getRange('J9').getValue()=="")
   Browser.msgBox('Data not filled of range J9');
   
   for(var i=10;i<=25;i++){
   if(spreadsheet.getRange('B'+i+':K'+i).getValue()=="")
   Browser.msgBox('Data not filled of range B'+i+':K'+i);
   
   }
}

function newsheet() {
  var date = new Date();
  var month = new Array();
  var current_date="";
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A26:K26').activate();
  spreadsheet.duplicateActiveSheet();
  spreadsheet.getRange('B4:L8').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  spreadsheet.getRange('B10:K25').activate();
  spreadsheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});
  
  if(date.getDate()>9)
      current_date=date.getDate() + "-"+ month[date.getMonth()] + "-"+date.getFullYear();
   else
      current_date="0" + date.getDate() + "-"+ month[date.getMonth()] + "-"+date.getFullYear();
      
   spreadsheet.getRange('A1:K1').setValue(current_date);   
   spreadsheet.getActiveSheet().setName(current_date);
};

