  $(function(){
        "use strict";
        var path="Desktop/webami", plu = "", command = "", gallery_value = "";
        var title_value = "", track_value = "", spec_value = "", upper = "";
        var aec_main_title_flag = 0, aec_cover_flag = 0;
        var jp_playlist_tracksonly_flag = 0;
        var gallery_name = "", artist = "", label = "";
        $(".clic").bind("click", function(){
          var temp_plu = String(document.getElementById("text_input_plu").value);
          var temp_html = String(document.getElementById("text_input_upper").value);
          // var temp_path = String(document.getElementById("text_input_path").value);

          if(temp_plu !="" && temp_html !="")
          {
          createFile();
          document.getElementById("text_input_specification").readOnly = true;
          document.getElementById("text_input_upper").readOnly = true;
          document.getElementById("text_input_plu").readOnly = true;
        }
        else
          alert("Please fill plu, html fields and try again");
        });
        
        $(".clear1").bind("click",clear);
       // document.getElementById("text_input_tracks").readOnly = true;
      
    function clear()
    {  
        path="Desktop/webami";
        plu = "";
        command = "";
        artist = "";
         label = "";
        gallery_value = "";
        title_value = "";
        track_value = "";
         spec_value = "";
         upper = "";
         gallery_name = "";
        aec_cover_flag = 0;
        aec_main_title_flag = 0;
        // document.getElementById("text_input_tracks").value = "";
        document.getElementById("text_input_specification").value = "";
        document.getElementById("text_input_upper").value = "";
        document.getElementById("text_input_plu").value = "";
        document.getElementById("text_input_specification").readOnly = false;
          document.getElementById("text_input_upper").readOnly = false;
          document.getElementById("text_input_plu").readOnly = false;
    } 

function tracks() {
  
    var process_data = "";
    var remove_data="";
    var raw_data="";
     
     var disc_flag=0;
     //Code for removedata
     
    
    raw_data=track_value;
    var counter=1,        // to count sr.no for correct data removal
    sr_flag=1;
    if(raw_data != "")
    {
    	remove_data = raw_data;


     for(var i=0; i<remove_data.length; i++){
            if(!(remove_data.substring(i,i+1) == " " ||
             remove_data.substring(i,i+1) == "\n" ||
              remove_data.substring(i,i+1) == "\t")){
                

              
                process_data+="\t\t\t\t\t<li>";

            for(var i1=i; i1<remove_data.length;i1++) {

              if(remove_data.substring(i1, i1+5)=="Disc " &&
             remove_data.substring(i1+5, i1+6)!= 'NaN')
                {
                    
                    {
                      var temp_data = process_data.substring(0, process_data.length-4);
                      process_data = temp_data;
                      process_data +="\t\t\t\t</ul>\n\t\t\t\t\t<li>";
                       for( i2=i1; i2<remove_data.length;i2++) {
                        if(remove_data.substring(i2,i2+1)=="\n") {
                          i=i1;
                          i1=i2+1;
                          break;
                        }
                      }
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

    raw_data=spec_value;
    for(var loop=0; loop<raw_data.length; loop++)
    {
        if(raw_data.substring(loop, loop+4)== "UPC:" ||
         raw_data.substring(loop, loop+6)== "Label:" ||
        raw_data.substring(loop, loop+11)== "Product ID:" ||
        raw_data.substring(loop, loop+17)== "Last Return Date:" ||
        raw_data.substring(loop, loop+5)== "This " ||
        raw_data.substring(loop, loop+19)== "Distributor/Studio:" ||
        raw_data.substring(loop, loop+7)== "Region:" ||
         raw_data.substring(loop, loop+7)== "Artist:")
        {
        
            for(var loop1=loop; loop1<raw_data.length; loop1++)
            {

              

                if(raw_data.substring(loop1, loop1+1)== "\n")
                    {
                     loop=loop1;
                     break;
                   }
                   if(raw_data.substring(loop, loop+6)== "Label:") {
                      loop1 += 6;
                      label += raw_data.substring(loop1, loop1+1);
                   }
                    if(raw_data.substring(loop, loop+7)== "Artist:") {
                        loop1 += 7;
                      artist += raw_data.substring(loop1, loop1+1);
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

function dataCollection() {
  var html_data = String(document.getElementById("text_input_upper").value);
  for(var i = 0; i < html_data.length; i++) {
    if(html_data.substring(i, i+22) == "jp-playlist tracksonly") {
    
      for(var i0 = i+22; i0 < html_data.length; i0++) {
        
        if(html_data.substring(i0-4, i0) == '<ul>') {
          
          for(var i1 = i0; i1 < html_data.length; i1++) {
           
            if(html_data.substring(i1, i1+5) == '</ul>') {
              i = i1;
              break;
            }
            if(html_data.substring(i2, i2+5) == '</li>') {
              spec_value += "\n";
              continue;
            }
            if(html_data.substring(i1, i1+5) == '<span') {
              for(var i2 = i1; i2 < html_data.length; i2++) {
                
                if(html_data.substring(i2, i2+5) == 'span>') {
                  i1=i2+5;
                  
                  break;
                }
              }
            }
            if(html_data.substring(i1, i1+1) == '<') {
              for(var i2 = i1; i2 < html_data.length; i2++) {
                if(html_data.substring(i2, i2+1) == '>' && html_data.substring(i2+1, i2+2) != "<") {
                  i1=i2+1;
                  
                  break;
                }
              }
            }
            
            track_value += html_data.substring(i1, i1+1); 
          }
          break;
        }
      }
    }
    if(html_data.substring(i, i+9) == "aec-cover" && aec_cover_flag == 0) {
      for(var i0 = i+9; i0 < html_data.length; i0++) {
        
        if(html_data.substring(i0-5, i0) == 'src="') {
          aec_cover_flag = 1;
          for(var i1 = i0; i1 < html_data.length; i1++) {
            
            if(html_data.substring(i1, i1+1) == '"') {
              i = i1;
              break;
            }

            gallery_value += html_data.substring(i1, i1+1); 
          }

          for(var i1 = gallery_value.length - 1; i1 >= 0; i1--) {
              if(gallery_value.substring(i1, i1+1) == "/") {
                gallery_name += gallery_value.substring(i1+1, gallery_value.length);
                break;
              }
            }
          break;
        }
      }  
    }
    if(html_data.substring(i, i+14) == "aec-main-title" && aec_main_title_flag == 0) {
      for(var i0 = i+14; i0 < html_data.length; i0++) {
        
        if(html_data.substring(i0-4, i0) == '<h1>') {
          aec_main_title_flag = 1;
          for(var i1 = i0; i1 < html_data.length; i1++) {
            
            if(html_data.substring(i1, i1+5) == '</h1>') {
              i = i1;
              break;
            }
            
            title_value += html_data.substring(i1, i1+1); 
          }
          break;
        }
      }
    }
    if(html_data.substring(i, i+19) == "product-primaryinfo") {
      for(var i0 = i+19; i0 < html_data.length; i0++) {
        
        if(html_data.substring(i0-4, i0) == '<ul>') {
          
          for(var i1 = i0; i1 < html_data.length; i1++) {
            
            if(html_data.substring(i1, i1+5) == '</ul>') {
              i = i1;
              break;
            }
            if(html_data.substring(i2, i2+5) == '</li>') {
              spec_value += "\n";
              continue;
            }
            if(html_data.substring(i1, i1+1) == '<') {
              for(var i2 = i1; i2 < html_data.length; i2++) {
                if(html_data.substring(i2, i2+1) == '>' && html_data.substring(i2+1, i2+2) != "<") {
                  i1=i2+1;
                  
                  break;
                }
              }
            }
            
            spec_value += html_data.substring(i1, i1+1); 
          }
          break;
        }
      }
    }
    if(html_data.substring(i, i+24) == "aec-desc-review collapse") {
      for(var i0 = i+24; i0 < html_data.length; i0++) {
        
        if(html_data.substring(i0-3, i0) == '<p>') {
         
          for(var i1 = i0; i1 < html_data.length; i1++) {
            
            if(html_data.substring(i1, i1+4) == '</p>') {
              i = i1;
              break;
            }
            
            upper += html_data.substring(i1, i1+1); 
          }
          break;
        }
      }
    }

  }

  
    
    
  
} 

function searching() {

}

function createFile()
{
  track_value = ""; spec_value = ""; upper = ""; command = ""; gallery_value = "";
  
  dataCollection();
    
    
     spec_value = specification();
     track_value = tracks();
     
     
    path="Desktop/webami";
    plu=String(document.getElementById("text_input_plu").value);
    var upper_value = String(document.getElementById("text_input_specification").value);

    if(upper_value=="")
    upper_value = ascii(upper);
  else
    upper_value = ascii(upper_value);

    if(upper_value == "")
      searching();
    // command += '\ncd\ncd Downloads\nif [ -f webam.sh(1) ]\nthen\nrm -f webam.sh\nrm -f webam.sh(1)\nfi';



    command += '#!/bin/bash\ncd\ncd Downloads\nif [ -f webam\\(1\\).sh ]\nthen\nrm -f webam\\(1\\).sh\n\nzenity --error --text="An error occurred\!" --title="Warning\!";else echo "Product Created";\ncd\ncd ' + path + '\nif [ -d ' + plu +
     ' ]; then zenity --error --text="An error occurred\!" --title="Warning\!"; else echo "Product Created";\nmkdir -p ' +
      plu ;
      
     if(gallery_value != "")
      command += '\nwget  -P ' + plu +'_galleryimages "' + gallery_value + '"\nmv ' + plu + '_galleryimages/' + gallery_name + ' ' + plu + '_galleryimages/' + plu +'.01.prod.jpg' + '\ncd ' + plu;
      

    if(upper_value != "")
      command += '\ntouch ' + plu + '_upper.html' + '\necho "' + upper_value + '">> ' + plu + '_upper.html';

    if(spec_value != "" && track_value != "")
      command += '\ntouch ' + plu + '_lower.html' +
        '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\tTracks\n\t\t</div>\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>\n' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + plu + '_lower.html\nfi';
    else
      if(spec_value != "")
        command += '\ntouch ' + plu + '_lower.html' +
       '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + plu + '_lower.html\nfi';
    else
      if(track_value != "")
        command += '\ntouch ' + plu + '_lower.html' +
       '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\tTracks\n\t\t</div>\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>\n' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>">> ' + plu + '_lower.html\nfi';   
       else
        command +='\nfi';
      command += '\nfi\ncd \ncd Downloads\nrm -f webam.sh';
       // document.getElementById("text_input_tracks").value = "";
       
       document.getElementById("text_input_upper").value = "";
    // document.getElementById("text_input_tracks").value = command;
    document.getElementById("text_input_specification").value = "";
    saveTextAsFile();

}

function saveTextAsFile()
{
    var textToSave = command;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "webam.sh"
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 

});