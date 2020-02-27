function onOpen() {



var sheet_name=["1WeFUXgn-I6P_IKDcCQKpB0sfdnIBpU4YeAhQrRdy7OY","1CfoeXPljFULeof3QXv9kdyzMjxCg8T38qwEo3BDCDDA","196yt2-EXJgwjAQWdMnXWHtdQ0aIYNHpOgqL6oQq43A4"];


for(var i=0;i<sheet_name.length;i++){
  var ss = SpreadsheetApp.openById(sheet_name[i]);
  var sheets=[];
  sheets = ss.getSheets();
  for(var i1=0;i1<sheets.length;i1++) {
    // Get full range of data
   
  var range = sheets[i1].getDataRange();

  // get A1 notation identifying the range
//  var A1Range = SRange.getA1Notation();

  // get the data values in range
//  var SData = SRange.getValues();
  
  
  
//  var range = sheet.getRange("h1:h10");
  var to_replace = '"';
  var replace_with = "&#34;";
  replaceInSheet(sheets[i1],range, to_replace, replace_with);
}
}

function replaceInSheet(sheet, range, to_replace, replace_with) {

 

  // Process the user's response.


    var data  = range.getValues();

    var oldValue="";
    var newValue="";
    
    for (var x=0; x>-1; x++) {
    var cellsChanged = 0;
    for (var row=0; row<data.length; row++) {
    
      for (var item=0; item<data[row].length; item++) {
        var item_flag=true;
        oldValue = data[row][item];
        try{
        newValue = data[row][item].replace(to_replace, replace_with);
        }
        catch (e){
        item_flag=false;}
        if (oldValue!=newValue&&item_flag)
        {
          cellsChanged++;
          data[row][item] = newValue;
        }
        
      }
    }
    if(cellsChanged==0)
    break;
    }
    range.setValues(data);
    

 }
}