  $(function(){
        "use strict";
        var path="", plu = "", command = "", highlight_data="";
        $(".clic").bind("click",createFile);
        $(".clear1").bind("click",clear);
       
      
    function clear()
    {  
        path="";
        plu = "";
        command = "";
        highlight_data="";
        document.getElementById("text_input_tracks").value = "";
        document.getElementById("text_input_specification").value = "";
        document.getElementById("text_input_upper").value = "";
        document.getElementById("text_input_plu").value = "";
    } 

function tracks() {
    var process_data = "";
    var remove_data="";
    var raw_data="";
     highlight_data="";
     var disc_flag=0;
     //Code for removedataAndHighlight
     process_data = "";
        raw_data="";
        remove_data="";
        highlight_data="";
    
    remove_data=String(document.getElementById("text_input_tracks").value);
    var counter=1,        // to count sr.no for correct data removal
    sr_flag=1;
    if(remove_data != "")
    {
    // for(var loop=0; loop<raw_data.length; loop++) {
    //     if(!(raw_data.substring(loop,loop+1)==" " ||
    //      raw_data.substring(loop,loop+1)=="\n" ||
    //       raw_data.substring(loop,loop+1)=="\t")) {
    //         if(raw_data.substring(loop, loop+5)=="Disc " &&
    //          raw_data.substring(loop+5, loop+6)!= 'NaN')
    //             {counter=1;
                   
    //             }

           
              

    //        for(var loop1=loop; loop1<raw_data.length; loop1++) {

    //         if(raw_data.substring(loop1, loop1+5)=="Disc " &&
    //          raw_data.substring(loop1+5, loop1+6)!= 'NaN')
    //             {
    //               counter=1;
                   
    //             }

    //             if(raw_data.substring(loop1, loop1+1) == "-" &&
    //               raw_data.substring(loop1+1, loop1+7)==" Disc ") {
    //                 highlight_data += "^" + raw_data.substring(loop1,loop1 + 1) +
    //                  "^" + " ";
    //                 loop1+=0;
                   
    //                 continue;

    //               } 

    //               if(raw_data.substring(loop1, loop1+1) == "-" &&
    //               raw_data.substring(loop1-7, loop1-2)=="Disc ") {
    //                 highlight_data += "^" + raw_data.substring(loop1,loop1 + 1) +
    //                  "^" + " ";
    //                 loop1+=0;
                   
    //                 continue;

    //               }   


    //             if(raw_data.substring(loop1,loop1+4) == "<li>" ||
    //                 raw_data.substring(loop1,loop1+4) == "<ul>"){
    //                 loop1+=3;
    //             continue;
    //             }
    //             else
    //                 if(raw_data.substring(loop1, loop1+5) == "</li>" ||
    //                 raw_data.substring(loop1, loop1+5) == "</ul>"){
    //                 loop1+=4;
    //             continue;
    //             }
           

    //             if((raw_data.substring(loop1, loop1+1) == counter ||
    //                 raw_data.substring(loop1, loop1+2) == counter ||
    //                 raw_data.substring(loop1, loop1+3) == counter ||
    //                  raw_data.substring(loop1, loop1+1) == "." ||
    //                  raw_data.substring(loop1, loop1+1) == " ") && (sr_flag==1))
    //             {  
    //                 if(raw_data.substring(loop1,loop1+1) == counter){
    //                     counter++;
    //                     highlight_data += "^" + raw_data.substring(loop1,loop1+1) + "^" + " ";
    //                 }
    //                 else
    //                     if(raw_data.substring(loop1,loop1+2) == counter){
    //                     counter++;
    //                     highlight_data += "^" + raw_data.substring(loop1,loop1+2) + "^" + " ";
    //                     loop1++;
    //                 }
    //                 else
    //                     if(raw_data.substring(loop1,loop1+3) == counter){
    //                     counter++;
    //                     highlight_data += "^" + raw_data.substring(loop1,loop1+3) + "^" + " ";
    //                     loop1+=2;
    //                 }
    //                 else
    //                     highlight_data += "^" + raw_data.substring(loop1,loop1+1) + "^" + "\t";

    //             }
    //             else {
    //                     remove_data += raw_data.substring(loop1,loop1+1);
             
    //                     highlight_data += raw_data.substring(loop1,loop1+1);
    //                     sr_flag=0;
    //                     if(raw_data.substring(loop1,loop1+1)=="\n") {
                           
    //                         sr_flag=1;
    //                         loop=loop1;
    //                         break;
    //                     }

    //                 }
    //         }
    //         if(loop1>=raw_data.length)
    //             break;
    //       }
    //       else
    //       {
    //         highlight_data+=raw_data.substring(loop,loop+1);
    //       }  
    // }  

    // document.getElementById("text_input").value = "";
    //  document.getElementById("text_input").value = highlight_data;
     // Code ends for removedataAndHighlight

     for(var i=0; i<remove_data.length; i++){
            if(!(remove_data.substring(i,i+1) == " " ||
             remove_data.substring(i,i+1) == "\n" ||
              remove_data.substring(i,i+1) == "\t")){
                

              
                process_data+="\t\t\t\t\t<li>";

            for(var i1=i; i1<remove_data.length;i1++) {

              if(remove_data.substring(i1, i1+5)=="Disc " &&
             remove_data.substring(i1+5, i1+6)!= 'NaN')
                {
                    if(disc_flag==1)
                    {
                      var temp_data = process_data.substring(0, process_data.length-4);
                      process_data = temp_data;
                      process_data +="\t\t\t\t</ul>\n\t\t\t\t\t<li>";
                    }
                    disc_flag=1;
                }

             if(remove_data.substring(i1-5, i1)=="Disc " &&
             remove_data.substring(i1, i1+1)!= 'NaN')
                {
                 
                      process_data += remove_data.substring(i1, i1+1) + "</li>\n\t\t\t\t<ul>\n";
                      var i2=0;
                      for( i2=i1; i2<remove_data.length;i2++) {
                        if(remove_data.substring(i2,i2+1)=="\n") {
                          i=i1;
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
                      process_data +="\t\t\t\t</ul>\n";
                    }
    // 
    }
    return(ascii(process_data));
}    




function specification() {
        var raw_data="";
        var process_data="";
        var count=0;
        var raw_data1="";
    
    //code for removeDataSpecification

    raw_data=String(document.getElementById("text_input_specification").value);
    for(var loop=0; loop<raw_data.length; loop++)
    {
        if(raw_data.substring(loop, loop+4)== "UPC:" ||
         raw_data.substring(loop, loop+6)== "Label:" ||
        raw_data.substring(loop, loop+11)== "Product ID:" ||
        raw_data.substring(loop, loop+17)== "Last Return Date:" ||
        raw_data.substring(loop, loop+5)== "This " ||
        raw_data.substring(loop, loop+19)== "Distributor/Studio:" ||
        raw_data.substring(loop, loop+7)== "Region:" ||
        raw_data.substring(loop, loop+13)== "Release Date:" ||
         raw_data.substring(loop, loop+7)== "Artist:")
        {
        
            for(var loop1=loop; loop1<raw_data.length; loop1++)
            {
                if(raw_data.substring(loop1, loop1+1)== "\n")
                    {
                     loop=loop1;
                     break;
                   }
            }
        }
        else
            raw_data1+=raw_data.substring(loop,loop+1);
    }

    //code ends for removeDataSpecification

        for(var loop=0; loop<raw_data1.length;loop++)
    {
        loop1_exit:
        {
        if(!(raw_data1.substring(loop,loop+1)==" " ||
         raw_data1.substring(loop,loop+1)=="\n" ||
          raw_data1.substring(loop,loop+1)=="\t"))
        {
          var comma_counter=0;
            process_data+="\t\t\t<tr>\n\t\t\t\t<td>";
               
                for(var loop1=loop; loop1<raw_data1.length;loop1++)
                {
                    process_data+=raw_data1.substring(loop1,loop1+1);
                    if(raw_data1.substring(loop1,loop1+1)==":")
                    {
                        process_data+="</td>\n\t\t\t\t<td>";
                        
                         for(var loop2=loop1+1; loop2<raw_data1.length;loop2++)
                            {
                                if(!(raw_data1.substring(loop2,loop2+1)==" " ||
                                 raw_data1.substring(loop2,loop2+1)=="\n" ||
                                  raw_data1.substring(loop2,loop2+1)=="\t"))
                                {
                                   
                                    for(var loop3=loop2; ;loop3++)
                                        {
                                            if(loop3==raw_data1.length)
                                            {
                                                process_data+="</td>\n\t\t\t</tr>\n";
                                                loop=loop3;
                                                loop1=loop3;
                                                loop2=loop3;
                                                break loop1_exit;
                                            }    
                                            if(raw_data1.substring(loop3,loop3+1)=="\n")
                                                {
                                                    process_data+="</td>\n\t\t\t</tr>\n";
                                                    loop=loop3;
                                                     break loop1_exit;
                                                }

                                                 process_data+=raw_data1.substring(loop3,loop3+1);

                                                if(raw_data1.substring(loop3,loop3+1)==",")
                                                  {
                                                  comma_counter++;
                                                  
                                              if(comma_counter % 4 == 0)
                                                process_data+="<br />";
                                            }
                                        }
                                }
                            }
                    }       
                }
  

        }
        
    }
    }
    // document.getElementById("text_output").value = process_data;
    return(ascii(process_data));
} 



function ascii(data) {

    var raw_data = "", process_data = "";

    

       raw_data = data;

       for(var loop = 0; loop < raw_data.length;loop++) {
               if((raw_data.substring(loop,loop+1).charCodeAt() >= 65 &&
                   raw_data.substring(loop,loop+1).charCodeAt() <= 90) ||
                   (raw_data.substring(loop,loop+1).charCodeAt() >= 97 &&
                   raw_data.substring(loop,loop+1).charCodeAt() <= 122)||
                   (raw_data.substring(loop,loop+1).charCodeAt() >= 48 &&
                   raw_data.substring(loop,loop+1).charCodeAt() <= 57) ||
                   (raw_data.substring(loop,loop+1) === "\n" ||
                   raw_data.substring(loop,loop+1) === "\t")) {
                   process_data+= raw_data.substring(loop,loop+1);
               }
                  
               else {
                // var abn = "'";
                // alert(abn.charCodeAt());
                   switch(raw_data.substring(loop,loop+1).charCodeAt()) {
                       case(126):
                    case(33):
                    case(64):
                    case(35):
                    case(36):
                    case(37):
                    case(94):
                    case(38):
                    case(42):
                    case(40):
                    case(41):
                    case(95):
                    case(43):
                    case(96):
                    case(45):
                    case(61):
                    case(123):
                    case(125):
                    case(124):
                    case(91):
                    case(93):
                    case(92):
                    case(58):
                    case(59):
                    case(39):
                    case(60):
                    case(62):
                    case(63):
                    case(44):
                    case(46):
                    case(47):
                    case(10):
                    case(32):
                       process_data+=raw_data.substring(loop,loop+1);
                       break;  

                    case(34):   
                            process_data += "\\" + raw_data.substring(loop,loop+1);
                            break;     
                       default: {
                        process_data+= "&#" +
                       raw_data.substring(loop,loop+1).charCodeAt() + ";";
                       
                     }
                   }

               }
              
       }

       // document.getElementById("text_output").value = process_data;
       // document.getElementById("text_input_sheet").value = count;
       return(process_data);
}  


function createFile()
{
    var track_value = "", spec_value = "", upper = "";
    command = "";
     spec_value = specification();
     track_value = tracks();
     
     upper=String(document.getElementById("text_input_upper").value);
    path=String(document.getElementById("text_input_path").value);
    plu=String(document.getElementById("text_input_plu").value);

    var upper_value = ascii(upper);

    command += '#!/bin/bash\ncd\ncd ' + path + '\nif [ -d ' + plu +
     ' ]; then zenity --error --text="An error occurred\!" --title="Warning\!"; else echo "Not found";\nmkdir -p ' +
      plu + '\ncd ' + plu;

    if(upper != "")
      command += '\ntouch ' + plu + '_upper.html' + '\necho "' + upper_value + '">> ' + plu + '_upper.html';

    if(spec_value != "" && track_value != "")
      command += '\ntouch ' + plu + '_lower.html' +
        '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>\n' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + plu + '_lower.html\nfi';
    else
      if(spec_value != "")
        command += '\ntouch ' + plu + '_lower.html' +
       '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + plu + '_lower.html\nfi';
    else
      if(track_value != "")
        command += '\ntouch ' + plu + '_lower.html' +
       '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>\n' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>">> ' + plu + '_lower.html\nfi';   
       else
        command +='\nfi'
       document.getElementById("text_input_tracks").value = "";
       document.getElementById("text_input_specification").value = "";
       document.getElementById("text_input_upper").value = "";
    document.getElementById("text_input_upper").value = command;
    document.getElementById("text_input_tracks").value = highlight_data;
}


});