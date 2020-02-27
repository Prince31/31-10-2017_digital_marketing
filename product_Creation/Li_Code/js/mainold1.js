$(function(){
    "use strict";

    var process_data = "";
    var remove_data="";
    var raw_data="";
    var highlight_data="";
     var disc_flag=0;
        $(".clic").bind("click",removeDataAndHighlight);
        $(".clear1").bind("click",clear);
        document.getElementById("text_output").readOnly = true;
       

    function clear()
    {  
        process_data = "";
        raw_data="";
        remove_data="";
        highlight_data="";
        disc_flag=0;
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input").readOnly = false;
    }  


function removeDataAndHighlight() {
        
        process_data = "";
        raw_data="";
        remove_data="";
        highlight_data="";
    document.getElementById("text_input").readOnly = true;
    raw_data=String(document.getElementById("text_input").value);
    var counter=1,        // to count sr.no for correct data removal
    sr_flag=1;

    for(var loop=0; loop<raw_data.length; loop++) {
        if(!(raw_data.substring(loop,loop+1)==" " ||
         raw_data.substring(loop,loop+1)=="\n" ||
          raw_data.substring(loop,loop+1)=="\t")) {
            if(raw_data.substring(loop, loop+5)=="Disc " &&
             raw_data.substring(loop+5, loop+6)!= 'NaN')
                {counter=1;
                   
                }

           
             if(raw_data.substring(loop, loop+10) == "Album Only" ) {
                    highlight_data += "^" + raw_data.substring(loop,loop + 10) +
                     "^" + " ";
                    loop+=9;
                   
                    continue;

                  }  

              if(raw_data.substring(loop, loop+13) == "Not Available" ) {
                    highlight_data += "^" + raw_data.substring(loop,loop + 13) +
                     "^" + " ";
                    loop+=12;
                   
                    continue;

                  } 

           


             if(raw_data.substring(loop, loop+1) == "$" &&
                    parseFloat(raw_data.substring(loop+1, loop+2)) != "NaN" &&
                    raw_data.substring(loop+2, loop+3) == "." &&
                    parseFloat(raw_data.substring(loop+3, loop+4)) != "NaN"&&
                    parseFloat(raw_data.substring(loop+4, loop+5)) != "NaN") {
                    highlight_data += "^" + raw_data.substring(loop,loop + 5) +
                     "^" + " ";
                    loop+=4;
                   
                    continue;

                  }

                  if(raw_data.substring(loop, loop+1) == "$" &&
                    parseFloat(raw_data.substring(loop+1, loop+2)) != "NaN" &&
                    parseFloat(raw_data.substring(loop+2, loop+3)) != "NaN" &&
                    raw_data.substring(loop+3, loop+4) == "." &&
                    parseFloat(raw_data.substring(loop+4, loop+5)) != "NaN"&&
                    parseFloat(raw_data.substring(loop+5, loop+6)) != "NaN") {
                    highlight_data += "^" + raw_data.substring(loop,loop + 6) +
                     "^" + " ";
                    loop+=5;
                   
                    continue;

                  }

                  if(parseFloat(raw_data.substring(loop, loop+1)) != "NaN" &&
                    raw_data.substring(loop+1, loop+2) == ":" &&
                    parseFloat(raw_data.substring(loop+2, loop+3)) != "NaN"&&
                    parseFloat(raw_data.substring(loop+3, loop+4)) != "NaN") {
                    highlight_data += "^" + raw_data.substring(loop,loop + 4) +
                     "^" + " ";
                    loop+=3;
                   
                    continue;

                  }
                  if(parseFloat(raw_data.substring(loop, loop+1)) != "NaN" &&
                    raw_data.substring(loop1, loop+2) != "NaN" &&
                    raw_data.substring(loop+2, loop+3) == ":" &&
                    parseFloat(raw_data.substring(loop+3, loop+4)) != "NaN"&&
                    parseFloat(raw_data.substring(loop+4, loop+5)) != "NaN") {
                    highlight_data += "^" + raw_data.substring(loop,loop + 5) +
                     "^" + " ";
                    loop+=4;
                   
                    continue;

                  }  

           for(var loop1=loop; loop1<raw_data.length; loop1++) {

            if(raw_data.substring(loop1, loop1+5)=="Disc " &&
             raw_data.substring(loop1+5, loop1+6)!= 'NaN')
                {
                  counter=1;
                   
                }

                if(raw_data.substring(loop1, loop1+1) == "-" &&
                  raw_data.substring(loop1+1, loop1+7)==" Disc ") {
                    highlight_data += "^" + raw_data.substring(loop1,loop1 + 1) +
                     "^" + " ";
                    loop1+=0;
                   
                    continue;

                  } 

                  if(raw_data.substring(loop1, loop1+1) == "-" &&
                  raw_data.substring(loop1-7, loop1-2)=="Disc ") {
                    highlight_data += "^" + raw_data.substring(loop1,loop1 + 1) +
                     "^" + " ";
                    loop1+=0;
                   
                    continue;

                  }   


                if(raw_data.substring(loop1,loop1+4) == "<li>" ||
                    raw_data.substring(loop1,loop1+4) == "<ul>"){
                    loop1+=3;
                continue;
                }
                else
                    if(raw_data.substring(loop1, loop1+5) == "</li>" ||
                    raw_data.substring(loop1, loop1+5) == "</ul>"){
                    loop1+=4;
                continue;
                }
           

                if((raw_data.substring(loop1, loop1+1) == counter ||
                    raw_data.substring(loop1, loop1+2) == counter ||
                    raw_data.substring(loop1, loop1+3) == counter ||
                     raw_data.substring(loop1, loop1+1) == "." ||
                     raw_data.substring(loop1, loop1+1) == " ") && (sr_flag==1))
                {  
                    if(raw_data.substring(loop1,loop1+1) == counter){
                        counter++;
                        highlight_data += "^" + raw_data.substring(loop1,loop1+1) + "^" + " ";
                    }
                    else
                        if(raw_data.substring(loop1,loop1+2) == counter){
                        counter++;
                        highlight_data += "^" + raw_data.substring(loop1,loop1+2) + "^" + " ";
                        loop1++;
                    }
                    else
                        if(raw_data.substring(loop1,loop1+3) == counter){
                        counter++;
                        highlight_data += "^" + raw_data.substring(loop1,loop1+3) + "^" + " ";
                        loop1+=2;
                    }
                    else
                        highlight_data += "^" + raw_data.substring(loop1,loop1+1) + "^" + "\t";

                }
                else {
                        remove_data += raw_data.substring(loop1,loop1+1);
             
                        highlight_data += raw_data.substring(loop1,loop1+1);
                        sr_flag=0;
                        if(raw_data.substring(loop1,loop1+1)=="\n") {
                           
                            sr_flag=1;
                            loop=loop1;
                            break;
                        }

                    }
            }
            if(loop1>=raw_data.length)
                break;
          }
          else
          {
            highlight_data+=raw_data.substring(loop,loop+1);
          }  
    }  
    document.getElementById("text_input").value = "";
     document.getElementById("text_input").value = highlight_data;
     liCode();
}  


function liCode() {
     
        for(var i=0; i<remove_data.length; i++){
            if(!(remove_data.substring(i,i+1) == " " ||
             remove_data.substring(i,i+1) == "\n" ||
              remove_data.substring(i,i+1) == "\t")){
                

              
                process_data+="<li>";

            for(var i1=i; i1<remove_data.length;i1++) {

              if(remove_data.substring(i1, i1+5)=="Disc " &&
             remove_data.substring(i1+5, i1+6)!= 'NaN')
                {
                    if(disc_flag==1)
                    {
                      var temp_data = process_data.substring(0, process_data.length-4);
                      process_data = temp_data;
                      process_data +="</ul>\n<li>";
                    }
                    disc_flag=1;
                }

             if(remove_data.substring(i1-6, i1-1)=="Disc " &&
             remove_data.substring(i1-1, i1)!= 'NaN')
                {
                 
                      process_data +="</li>\n<ul>\n";
                      var i2=0;
                      for( i2=i1; i2<remove_data.length;i2++) {
                        if(remove_data.substring(i2,i2+1)=="\n") {
                          i1=i2+1;
                          break;
                        }
                      }
                      if(i2<=remove_data.length)
                      break;
                    
                }


                    if(remove_data.substring(i1,i1 + 1)=="\n")
                      { 
                        process_data += "</li>" + remove_data.substring(i1,i1+1);
                        i=i1;
                        break;
                      } 
                    else
                        process_data += remove_data.substring(i1,i1+1);

                    if(i1==remove_data.length-1)
                        process_data += "</li>";
                }
                if(i1>=remove_data.length)
                    break;
        }
        }
            if(disc_flag==1)
                    {
                      process_data +="</ul>\n";
                    }
    document.getElementById("text_output").value = process_data;

}
//     function removeDataAndHighlight()
// {
//     document.getElementById("text_input").readOnly = true;

//         a="";
//         b="";
//         raw_data="";
//         remove_data="";
//         highlight_data="";
//     raw_data=String(document.getElementById("text_input").value);
  

//     for(var loop=0; loop<raw_data.length; loop++)
//     {
//         var loop1;
//         if(raw_data.substring(loop,loop+1)=="\n")
//         {
//             highlight_data+=raw_data.substring(loop, loop+1);
//             for( loop1=loop+1; loop1<raw_data.length; loop1++)
//             {
//                 if(((raw_data.substring(loop1, loop1+1).charCodeAt()>= 48) &&
//                  (raw_data.substring(loop1, loop1+1).charCodeAt()<= 57)) ||
//                   (raw_data.substring(loop1, loop1+1)==" ")||
//                   ((raw_data.substring(loop1, loop1+1).charCodeAt()== 46)))
//                     {
//                         highlight_data+=raw_data.substring(loop1, loop1+1)+"^";
//                      continue;
                   
//                    }
//                    else
//                        {
//                            highlight_data+="      ";
//                            remove_data+=raw_data.substring(loop,loop+1);
//                            loop=loop1-1;
//                            break;
//                        }
//             }
//         }
//        else
//        {
//            highlight_data+=raw_data.substring(loop,loop+1);
//             remove_data+=raw_data.substring(loop,loop+1);
//        }
          
//     }
//     document.getElementById("text_input").value = "";
//     document.getElementById("text_input").value = highlight_data;
//     liCode();
// }
 
  

//     function input1()
//     {
//         b="";
//         a=remove_data;
//         // console.log($("#myTextarea").html());
        
        

      
//          for(var x=0; x<a.length;x++)
//          {
           
//                 if(a.substring(x,x+1)=='\n'||x==a.length-1)
//                     {
//                     for(var y=x-1;y>-1;y--)
//                     {
//                         if(a.substring(y,y+1)=='\n')
//                             {
                              
//                                 break;
                              
//                             }
//                         else
//                             if(a.substring(y,y+1)!=' '||a.substring(y,y+1)!='\t')
//                             {
//                                 if(x==a.length-1)
//                                     b+=a.substring(x,x+1);
//                                 b+='</li>\n';
//                                 break;
//                             }
//                     }

                  


//                 }

                  
//                 else
//                     if(a.substring(x-1,x)=='\n'||x==0)
//                     {
//                     for(var y=x;y<a.length;y++)
//                     {
//                         if(a.substring(y,y+1)=='\n')
//                             {b+='\n';
//                                 break;
//                             }
//                         else
//                             if(a.substring(y,y+1)!=' '||a.substring(y,y+1)!='\t')
//                             {
//                                 if(a.substring(x,x+1)==' ')
//                                 b+='<li>';
//                             else
//                                 b+='<li>'+a.substring(x,x+1);
//                                 break;
//                             }
//                     }

                  


//                 }
//                  else
//                      if(a.substring(x,x+1)==' '&& a.substring(x+1,x+2)==' ')
//                          ;
//                      else
//                          if(b.substring(b.length-1,b.length)=='>'&& a.substring(x,x+1)==' ')
//                              ;
//                          else
//                      b+=a.substring(x,x+1);
           
//          }

      
      
//                 document.getElementById("text_output").value = b;
      
//     }



});