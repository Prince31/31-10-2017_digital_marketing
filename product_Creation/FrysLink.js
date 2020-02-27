function link(){
 var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var plu_column="";
  var link_column="";
  var url_flag=2;
  var column="";
  var alpha="";
  
   var data = sheet.getDataRange().getValues();
  for (var i = 1;i <= 78; i++) {
  if(i<=26)
  alpha=String.fromCharCode(97+i-1);
  else
  if(i<=52)
     alpha="a"+String.fromCharCode(97+(i-26)-1);
     else
     alpha="b"+String.fromCharCode(97+(i-26)-1);

    column=sheet.getRange(alpha+""+(1)).getDisplayValue();
   
     if(column=="PLU ID")
     plu_column=alpha;
     if(url_flag==2)
     {
     if(column=="FRYS LINK")
     {
     link_column=alpha;
     url_flag=0;
     
     }
     else if(column=="Alt Text")
     {
     
     link_column=String.fromCharCode(alpha.charCodeAt()-1);;
     
     url_flag=1;
     
     }
     else 
     url_flag=2;
     }
     if(url_flag!=2&& plu_column!="")
     break;
     if(i==25)
     url_flag=2;
    }
 if(url_flag==0)
 {
    for (var i = 2; i <= data.length; i++) {

    var input_plu=sheet.getRange(plu_column+""+(i)).getDisplayValue();
    if(input_plu!="")
      sheet.getRange(link_column+""+(i)).setValue("http://www.frys.com/product/"+input_plu);
  else
  sheet.getRange(link_column+""+(i)).setValue("");
                 
    }
  
}
else
if(url_flag==1)
{
for (var i = 1; i <= data.length; i++) {
       
      var input_plu=sheet.getRange(plu_column+""+(i)).getDisplayValue();
       var input_url=sheet.getRange(link_column+""+(i)).getDisplayValue();
       var input_url_plu="";
       var input_url_plu_flag=0;
       for (var i1 = 0; i1 <= input_url.length; i1++) {
         var input_url_char=input_url.substring(i1,i1+1).charCodeAt();
         if( !(input_url_char>=48&&input_url_char<=57))
         {
         if(input_url_plu_flag==0)
         continue;
         else
         {
         input_url_plu_flag=0;
         break;
         }
         }
         else
         {
         input_url_plu+=input_url_char;
         input_url_plu_flag=1;
         }
         
       }
       if(!(input_url_plu==(input_plu)))
       {
      var url=myFunction(input_plu);
      
      sheet.getRange(link_column+""+i).setValue(url);
    }
    }
  
}
}

function plusCheck(input2){
   var flag=0;
  var input1="";
  input1=input1+input2;
              var y=0;
            do{
                
                y++;
             
                if(input1.substring(y,y+1)=="+")
                {
                    // console.log("prince");
                    flag=1;
                    break;
                }
                else
                    flag=0;
                
                // console.log("+ not working");
                
            } while(y<(input1.length)-1);
  
  return flag;
} 



function myFunction(input) {
            var ss = SpreadsheetApp.getActiveSpreadsheet();
            var s1=ss.getName();
            var input2="";
            var date1="";
            var page1="";
            input2+=input;
             var str="";
            
            for(var xy=0; xy<s1.length;xy++)
                     {
                        var cd=s1.substring(xy,xy+1).charCodeAt();
                        if(xy<(s1.length/2) && (cd>=48&&cd<=57))
                         page1=page1+s1.substring(xy,xy+1);
                            if(xy>=(s1.length/2) && (cd>=48&&cd<=57))
                         date1=date1+s1.substring(xy,xy+1);
                        
                     }
       var flag1=plusCheck(input);     
        var plu_check=input2.substring(0,1).charCodeAt();  
  if(flag1==0&& plu_check>=48&&plu_check<=57)
   str="http://www.frys.com/product/"+input+"?site=sa:adpages page:P"+page1+" date:"+date1;
  else
    if(flag1==1&& plu_check>=48&&plu_check<=57)
     str="http://www.frys.com/search?search_type=regular&sqxts=1&cat=&query_string="+input+"&site=sa:adpages page:P"+page1+" date:"+date1;
  else
    str="";
  return str;



}




//function single_link()
//{
//
//  var ss = SpreadsheetApp.getActiveSpreadsheet();
//  var sheet = ss.getSheets()[0];
//  var selected_cell=ss.getActiveSheet().getActiveCell().getA1Notation();
//  
//  var selected_cell_row=selected_cell.substring(1);
//  
//  if(selected_cell.substring(0,1)=="C")
//  {
//  
//    var input_plu1=sheet.getRange("c"+(selected_cell_row)).getDisplayValue();
//    
//    if(input_plu1!="")
//    {
//      sheet.getRange("d"+(selected_cell_row)).setValue("http://www.frys.com/product/"+input_plu1);
// 
//      }
//  else
//  sheet.getRange("d"+(selected_cell_row)).setValue("");
//  }
//  
//}


