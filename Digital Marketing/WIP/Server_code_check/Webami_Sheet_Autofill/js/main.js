$(function(){
        "use strict";
        var path="Desktop/webami", command = "", gallery_value = "";
        var title_value = "", artist_value="", track_value = "", spec_value = "", upper = "";
        var aec_main_title_flag = 0, aec_cover_flag = 0;
        var aec_main_artist_flag = false;
        var jp_playlist_tracksonly_flag = 0;
        var gallery_name = "", format_value = "";
        var aec_main_format_flag = false;
        var title = "";
        var date = new Date();
        var genre_value = "";
        var manufacturer_value = "";
        var various_artist_flag=true;
        var pop_sheet_field = document.getElementById("pop_sheet_field");
        var feature_modal = document.getElementById('feature_modal');
        var sheet_output_field = document.getElementById('sheet_output_field');
        var text_input_plu = document.getElementById("text_input_plu");
        var text_input_gallery = document.getElementById("text_input_gallery");
        text_input_plu.readOnly = true;
        text_input_gallery.value ="";
        sheet_output_field.value ="";
        var sheet_fill = {pType:"",
                          dStatus:"",
                          cDate:"",
                          ctc:"",
                          genre:"",
                          manufacturer:"",
                          nTitle:"",
                          gIEnhanced:0,
                          fLink:"",
                          plu:"",
                          bShot:"",
                          hUpper:"",
                          hLower:"",
                          giReplaceable:"",
                          girDone:"",
                          gioFrys:""};

        var sheet_fill_index = [];
        var month = new Array();
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

    function clear()
    {
        title = "";
        path="Desktop/webami";
      
        command = "";
        artist_value="";
        gallery_value = "";
        format_value = "";
        title_value = "";
        track_value = "";
         spec_value = "";
         genre_value = "";
         manufacturer_value = "";
         upper = "";
         gallery_name = "";
         various_artist_flag=true;
        aec_cover_flag = 0;
     
        aec_main_title_flag = 0;
        aec_main_format_flag = false;
        aec_main_artist_flag = false;
        sheet_fill = {pType:"",
                          dStatus:"",
                          cDate:"",
                          ctc:"",
                          genre:"",
                          manufacturer:"",
                          nTitle:"",
                          gIEnhanced:0,
                          fLink:"",
                          plu:"",
                          bShot:"",
                          hUpper:"",
                          hLower:"",
                          giReplaceable:"",
                          girDone:"",
                          gioFrys:""};
                        
        // document.getElementById("text_input_tracks").value = "";
        document.getElementById("text_input_upper").value = "";
        document.getElementById("text_input_html").value = "";
        document.getElementById("text_input_plu").value = "";
        sheet_output_field.value = "";
        document.getElementById("text_input_upper").readOnly = false;
          document.getElementById("text_input_html").readOnly = false;
          text_input_gallery.value = "";
          text_input_gallery.readOnly=false;
          sheet_output_field.value ="";
          sheet_output_field.readOnly= false;
          sheet_fill.ctc="";
    } 

     // File file = new File("home/princesethi/Downloads/webam.sh");
      // alert(file.exists());

$("#sheet_btn").bind("click", function(){
         

        sheet_fill_index = []; 
                   
        sheet_fill_index[0] = "";
        sheet_fill_index[1] = "";
        sheet_fill_index[2] = "";
        sheet_fill_index[3] = "";
        sheet_fill_index[4] = "";
        sheet_fill_index[5] = "";
        sheet_fill_index[6] = "";
        sheet_fill_index[7] = "";
        sheet_fill_index[8] = "";
        sheet_fill_index[9] = "";
        sheet_fill_index[10] = "";
        sheet_fill_index[11] = "";
        sheet_fill_index[12] = "";
        sheet_fill_index[13] = "";
        sheet_fill_index[14] = "";
        sheet_fill_index[15] = "";

          feature_modal.style.display='inline-block';
          // fieldBtnReset();
         });

        $("#pop_sheet_submit_btn").bind("click", function() {
          sheetHead();
          feature_modal.style.display='none';
});
      
                   
     
     
        function sheetHead() {
            var sheet_data = String(pop_sheet_field.value);
       
            var sheet_data_temp = "";
          var tab_count = 0;
            for(var i=0; i<sheet_data.length; i++) {
            // alert(sheet_data.length);
         
                if(sheet_data.substring(i,i+1) == "\t"|| i==(sheet_data.length-1)) {
              // alert(sheet_data_temp);
           
              if(i==(sheet_data.length-1))
                sheet_data_temp += sheet_data.substring(i,i+1);
           
                if((sheet_data_temp).trim().toLowerCase() == "product type")
                    sheet_fill_index[0] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "development status")
                    sheet_fill_index[1] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "creation date")
                    sheet_fill_index[2] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "chandigarh team comment")
                    sheet_fill_index[3] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "genre")
                    sheet_fill_index[4] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "manufacturer")
                    sheet_fill_index[5] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "new title")
                    sheet_fill_index[6] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "# gallery images enhanced")
                    sheet_fill_index[7] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "fry's url")
                    sheet_fill_index[8] = tab_count;
                  else if((sheet_data_temp).trim().toLowerCase() == "plu")
                    sheet_fill_index[9] = tab_count;
                  else if((sheet_data_temp).trim().toLowerCase() == "box shot")
                    sheet_fill_index[10] = tab_count;
                  else if((sheet_data_temp).trim().toLowerCase() == "has upper ? (y/n)")
                    sheet_fill_index[11] = tab_count;
                  else if((sheet_data_temp).trim().toLowerCase() == "has lower ? (y/n)")
                    sheet_fill_index[12] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "gallery images replaceable")
                    sheet_fill_index[13] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "gallery images replaceable done")
                    sheet_fill_index[14] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "# gallery images on frys.com")
                    sheet_fill_index[15] = tab_count;
                else
                    ;
            }
                if(sheet_data.substring(i,i+1) == "\t") {
                    sheet_data_temp = "";
                    tab_count++;
                }

                sheet_data_temp += sheet_data.substring(i,i+1);
            }
            var temp_not_found = "";
            if(sheet_fill_index[0]=="")
                temp_not_found +="Product Type\n";
            if(sheet_fill_index[1]=="")
                temp_not_found +="Development Status\n";
            if(sheet_fill_index[2]=="")
                temp_not_found +="Creation Date\n";
            if(sheet_fill_index[3]=="")
                temp_not_found +="Chandigarh Team Comment\n";
            if(sheet_fill_index[4]=="")
                temp_not_found +="Genre\n";
            if(sheet_fill_index[5]=="")
                temp_not_found +="manufacturer\n";
            if(sheet_fill_index[6]=="")
                temp_not_found +="New Title\n";
            if(sheet_fill_index[7]=="")
                temp_not_found +="# Gallery Images Enhanced\n";
            if(sheet_fill_index[8]=="")
                temp_not_found +="Fry's URL\n";
              if(sheet_fill_index[9]=="")
                temp_not_found +="Plu\n";
              if(sheet_fill_index[10]=="")
                temp_not_found +="Box Shot\n";
              if(sheet_fill_index[11]=="")
                temp_not_found +="Has Upper ? (Y/N)\n";
              if(sheet_fill_index[12]=="")
                temp_not_found +="Has Lower ? (Y/N)\n";
             if(sheet_fill_index[13]=="")
                temp_not_found +="Gallery Images Replaceable\n";
             if(sheet_fill_index[14]=="")
                temp_not_found +="Gallery Images Replaceable Done\n";
            if(sheet_fill_index[15]=="")
                temp_not_found +="# Gallery Images on Frys.com\n";
           
            if(temp_not_found!="") {
              temp_not_found += "\nNot Detected";
              alert(temp_not_found);
            }
        }

     
        document.getElementById("text_input_upper").value = "";
        document.getElementById("text_input_html").value = "";
        document.getElementById("text_input_plu").value = "";
        sheet_output_field.value = "";
        pop_sheet_field.value = "";
        $(".clic").bind("click", function(){
        
          var temp_html = String(document.getElementById("text_input_html").value);
          var temp_pop_sheet_field = String(pop_sheet_field.value);

          if(temp_html !="" && temp_pop_sheet_field !="" && sheet_output_field.value!="")
          {
          createFile();
          document.getElementById("text_input_upper").readOnly = true;
          document.getElementById("text_input_html").readOnly = true;
          text_input_gallery.readOnly=true;
        
        }
        else
          alert("Please fill html fields, sheet field, sheet button and try again");
        });
     
        $(".clear1").bind("click",clear);
       // document.getElementById("text_input_tracks").readOnly = true;
   


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
      if(raw_data.substring(loop, loop+6)== "Label:") {
         
            for(var loop1 = loop+6; loop1<raw_data.length; loop1++) {
            if(raw_data.substring(loop1, loop1+1)=="\n")
              break;
            manufacturer_value += raw_data.substring(loop1, loop1+1);
          }
      
        manufacturer_value = manufacturer_value.trim();
       
      }
      else
        if(raw_data.substring(loop, loop+19)== "Distributor/Studio:") {
         
            for(var loop1 = loop+19; loop1<raw_data.length; loop1++) {
            if(raw_data.substring(loop1, loop1+1)=="\n")
              break;
            manufacturer_value += raw_data.substring(loop1, loop1+1);
          }
      
        manufacturer_value = manufacturer_value.trim();
       
      }
      else
        if(raw_data.substring(loop, loop+6)== "Genre:") {
          for(var loop1 = loop+6; loop1<raw_data.length; loop1++) {
            if(raw_data.substring(loop1, loop1+1)=="\n")
              break;
            genre_value += raw_data.substring(loop1, loop1+1);
          }
      
        genre_value = genre_value.trim();
        if(genre_value=="")
          alert("Genre Not Found");
       
        }
        else
        if(raw_data.substring(loop, loop+13)== "Release Date:") {
          var temp_release_date = "";
          for(var loop1 = loop+12; loop1<raw_data.length; loop1++) {
            if(raw_data.substring(loop1, loop1+1)=="\n")
              break;
            temp_release_date += raw_data.substring(loop1, loop1+1);
          }
      
        if((temp_release_date.substring(temp_release_date.length-4,temp_release_date.length).trim())>
          date.getFullYear())
          alert("Release year is greater than 2018");
        }
      //       else
      //   if(raw_data.substring(loop, loop+13)== "Release Date:") {
         
      //       for(var loop1 = loop+13; loop1<raw_data.length; loop1++) {
      //       if(raw_data.substring(loop1, loop1+4)=="2018") {
      //         break;
      //       }
      //       if(raw_data.substring(loop1, loop1+5)=="</li>") {
      //         alert("Release year is not 2018");
      //         break;
      //       }
      //     }
      
      
       
      // }
   
        if(raw_data.substring(loop, loop+4).toLowerCase()== "upc:" ||
         raw_data.substring(loop, loop+6).toLowerCase()== "label:" ||
        raw_data.substring(loop, loop+11).toLowerCase()== "product id:" ||
        raw_data.substring(loop, loop+17).toLowerCase()== "last return date:" ||
        raw_data.substring(loop, loop+5).toLowerCase()== "this " ||
        raw_data.substring(loop, loop+19).toLowerCase()== "distributor/studio:" ||
        raw_data.substring(loop, loop+7).toLowerCase()== "region:" ||
         raw_data.substring(loop, loop+7).toLowerCase()== "artist:" ||
         raw_data.substring(loop, loop+12).toLowerCase()== "cutout date:" ||
          raw_data.substring(loop, loop+12).toLowerCase()== "rank:")
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
                    case(36):
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

function ascii_title(data) {

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
                    case(34):
                       process_data+=raw_data.substring(loop,loop+1);
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
  var html_data = String(document.getElementById("text_input_html").value);

  for(var i = 0; i < html_data.length; i++) {
    var track_flag = 0;
    if(html_data.substring(i, i+22) == "jp-playlist tracksonly") {
        for(var i1 = i+22; i1 < html_data.length; i1++) {
        if(track_flag == 1 && html_data.substring(i1, i1+5) == "</ul>")
        {
        track_value += "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>"
          break;
        }
            if(html_data.substring(i1, i1+7) == "discnum") {
                if(track_flag == 0) {

                track_value += "\n\t\t\t\t\t<li>" + html_data.substring(i1+11, i1+18) + "\n\t\t\t\t\t\t<ul>";
                    track_flag = 1;
                }
                else {
                    track_value += "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>" + html_data.substring(i1+11, i1+18) + "\n\t\t\t\t\t\t<ul>";
                }
            }

            if(html_data.substring(i1, i1+12) == "aec-tracknum") {
 
                for(var i2 = i1+12; i2 < html_data.length; i2++) {
                    if(html_data.substring(i2, i2+7) == "</span>") {
                        if(track_flag==1)
                          track_value += "\n\t\t";
                        else
                          track_value += "\n";
                            track_value += "\t\t\t\t\t<li>";
                        for(var i3 = i2+7; i3 < html_data.length; i3++) {
                            
                            if(html_data.substring(i3, i3+5) == "</li>") {
                              track_value = track_value.trim();
                              track_value +="</li>"
                              break;
                            }
                            track_value += html_data.substring(i3, i3+1) ;
                            // if(html_data.substring(i3-5, i3) == "</li>") 
                            //     break;

                        }
                     
                                break;
                    }
                 
                }
                             
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
          if(gallery_value.substring(0,1) != "h"){
         
            gallery_value = "https://webami.aent.com" + gallery_value;
           
          }

          if(text_input_gallery.value!="")
            gallery_value = text_input_gallery.value;

          for(var i1 = gallery_value.length - 1; i1 >= 0; i1--) {

              if(gallery_value.substring(i1, i1+1) == "/") {

                gallery_name += gallery_value.substring(i1+1, gallery_value.length);
                gallery_name = gallery_name.replace("%2B","+");
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
    if(html_data.substring(i, i+23) == 'aec-main-artist"><span>' && (!(aec_main_artist_flag))) {
      for(var i0 = i+23; i0 < html_data.length; i0++) {
        if(html_data.substring(i0-2, i0) == '">') {
          aec_main_artist_flag = true;
          for(var i1 = i0; i1 < html_data.length; i1++) {
         
            if(html_data.substring(i1, i1+4) == '</a>') {
              i = i1;

              if (artist_value == "Various Artists") {
                various_artist_flag=false;
                    artist_value = "";
              }
              break;
            }
           
              artist_value += html_data.substring(i1, i1+1)
           
         
          
            // artist_value = artist_value.charAt(0).toUpperCase() +
            //  artist_value.substr(1).toLowerCase();
          }
          break;
        }
      }
    }

    if(html_data.substring(i, i+36) == 'aec-title-featurelist"><span>Format:' && (!(aec_main_format_flag))) {
      for(var i0 = i+36; i0 < html_data.length; i0++) {
        if(html_data.substring(i0-2, i0) == 'n>') {
          aec_main_format_flag = true;
          for(var i1 = i0; i1 < html_data.length; i1++) {
         
            if(html_data.substring(i1, i1+5) == '</li>') {
              i = i1;
              if(format_value == "LP")
                format_value = "Vinyl";
              else
                if(format_value == "CD")
                  format_value = "Audio CD";
                else
                  if(format_value == "DVD")
                    format_value = "DVD";
                else
                  if(format_value == "Blu-ray"){
                    format_value = "Blu-Ray";
                    alert("Check other formats of movie on image");
                  }

                else
                  if(format_value == "SACD")
                    format_value = "SACD";
                else
                  if(format_value == "4K Ultra HD") {
                    format_value = "4K UHD";
                    alert("Check other formats of movie on image");
                    alert("Please check 'TM' in Logo");
                  }
                  else
                  if(format_value == "Blu-ray 3-D") {
                    format_value = "Blu-Ray 3D";
                    alert("Check other formats of movie on image");
                    
                  }
             
                else;
              break;
            }
         
            format_value += html_data.substring(i1, i1+1);
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


function createFile()
{
  track_value = ""; spec_value = ""; upper = ""; command = ""; gallery_value = "";
 
  dataCollection();
 
 
     spec_value = specification();
     track_value = ascii(track_value);
  
  
    path="Desktop/webami";
  
    var upper_value = String(document.getElementById("text_input_upper").value);
    if(artist_value!="")
      title = ascii_title(title_value+" - "+artist_value+" ["+format_value+"]");
    else {
      title = ascii_title(title_value+" ["+format_value+"]");

      if((format_value == "Audio CD" || format_value == "Vinyl")&& various_artist_flag )
        alert("Artist name not found");
    }
   
    if(upper_value!="")
      upper_value = ascii(upper_value);
    else if(upper!="")
    upper_value = ascii(upper);
  else {
    if(artist_value!="")
    upper_value = ascii(title_value+" by "+artist_value+" in "+format_value);
    else
      upper_value = ascii(title_value+" in "+format_value);
  }
 
 
    // command += '\ncd\ncd Downloads\nif [ -f webam.sh(1) ]\nthen\nrm -f webam.sh\nrm -f webam.sh(1)\nfi';

    sheetRead();
    sheetAnalyse();
    sheetFill();

    command += '#!/bin/bash\ncd\ncd Downloads\nif [ -f webam\\(1\\).sh ]\nthen\nrm -f webam\\(1\\).sh\n\nzenity --error --text="error- Another webam.sh file already exists. Try again.\!" --title="Warning\!";else echo "Product Created";\ncd\ncd ' + path + '\nif [ -d ' + sheet_fill.plu +
     ' ]; then zenity --error --text="error- Another folder with same plu already exists.\!" --title="Warning\!"; else echo "Product Created";\nmkdir -p ' +
      sheet_fill.plu ;
   
     if(gallery_value.substring(0,44) != "https://webami.aent.com/content/img/no_image") 
      command += '\nwget  -P ' + sheet_fill.plu +'_galleryimages "' + gallery_value + '"\nmv ' + sheet_fill.plu + '_galleryimages/' + gallery_name + ' ' + sheet_fill.plu + '_galleryimages/' + sheet_fill.plu +'.01.prod.jpg' + '\ncd ' + sheet_fill.plu;
      else
        command += '\ncd ' + sheet_fill.plu;

    if(upper_value != "")
      command += '\ntouch ' + sheet_fill.plu + '_upper.html' + '\necho "' + upper_value + '">> ' + sheet_fill.plu + '_upper.html';

    if(spec_value != "" && track_value != "")
      command += '\ntouch ' + sheet_fill.plu + '_lower.html' +
        '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\t<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\tTracks\n\t\t</div>\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>\n\t\t\t\t\t' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + sheet_fill.plu + '_lower.html\nfi';
    else
      if(spec_value != "")
        command += '\ntouch ' + sheet_fill.plu + '_lower.html' +
       '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + sheet_fill.plu + '_lower.html\nfi';
    else
      if(track_value != "")
        command += '\ntouch ' + sheet_fill.plu + '_lower.html' +
       '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\t<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\tTracks\n\t\t</div>\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>\n\t\t\t\t\t' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>">> ' + sheet_fill.plu + '_lower.html\nfi';
       else
        command +='\nfi';
      command += '\nfi\ncd \ncd Downloads\nrm -f webam.sh';
       // document.getElementById("text_input_tracks").value = "";
    
       document.getElementById("text_input_html").value = "";
    // document.getElementById("text_input_tracks").value = command;
    document.getElementById("text_input_upper").value = "";
    divCheck();

  
  
  
}



function sheetAnalyse() {


    sheet_fill.pType="Small";
      // sheet_fill.dStatus="Completed";
      if(date.getDate()>9)
      sheet_fill.cDate=date.getDate() + "-"+ month[date.getMonth()] + "-"+date.getFullYear();
    else
      sheet_fill.cDate="0" + date.getDate() + "-"+ month[date.getMonth()] + "-"+date.getFullYear();
      sheet_fill.genre=genre_value;
      if(genre_value.toLowerCase().trim()=="gospel")
        sheet_fill.genre = "Gospel(Religion)";
      else if(genre_value.toLowerCase().trim()=="christian")
        sheet_fill.genre = "Christian(Religion)";
      else if(genre_value.toLowerCase().trim()=="electronic")
        sheet_fill.genre = "Electronic(DJ/Dance)";
      else if(genre_value.toLowerCase().trim()=="international")
        sheet_fill.genre = "International(World)";
      else if(genre_value.toLowerCase().trim()=="african")
        sheet_fill.genre = "African(Latin)";
      else if(genre_value.toLowerCase().trim()=="pop")
        sheet_fill.genre = "Pop(Classical/Opera)";
      else if(genre_value.toLowerCase().trim()=="easy listening")
        sheet_fill.genre = "Easy listening(Country/folk)";
      else if(genre_value.toLowerCase().trim()=="chamber music")
        sheet_fill.genre = "Chamber music(Classical)";
      else if(genre_value.toLowerCase().trim()=="western")
        sheet_fill.genre = "Western(Action / Adventure)";
      else if(genre_value.toLowerCase().trim()=="ambient")
        sheet_fill.genre = "Ambient(Classical)";
      else if(genre_value.toLowerCase().trim()=="western-contemporary")
        sheet_fill.genre = "Western-contemporary(Foreign Films)";
      else if(genre_value.toLowerCase().trim()=="western-classical")
        sheet_fill.genre = "Western-classical(Music / Video & Concerts)";
      else if(genre_value.toLowerCase().trim()=="instrumental")
        sheet_fill.genre = "Instrumental(DJ / Dance)";
      else if(genre_value.toLowerCase().trim()=="holiday-christmas (animated)")
        sheet_fill.genre = "Holiday-Christmas Animated(Anime)";
      else if(genre_value.toLowerCase().trim()=="heavy metel")
        sheet_fill.genre = "Rock";
      var genre_value_temp=genre_value.toLowerCase().trim();
    if(genre_value_temp.indexOf("erotica")!=-1)
        alert("Genre erotica no need to create");

      sheet_fill.manufacturer=manufacturer_value;
      sheet_fill.nTitle=title;
  
          if(sheet_fill.hUpper.toLowerCase() == "y" && sheet_fill.hLower.toLowerCase() == "y")
              sheet_fill.ctc += "Upper & Lower Description Recreated, Title Updated";
          else if(sheet_fill.hUpper.toLowerCase() == "n" && sheet_fill.hLower.toLowerCase() == "n")
              sheet_fill.ctc += "Upper & Lower Description Created, Title Updated";
          else if(sheet_fill.hUpper.toLowerCase() == "y")
              sheet_fill.ctc += "Upper Description Recreated, Lower Description Created, Title Updated";
          else if(sheet_fill.hUpper.toLowerCase() == "n")
              sheet_fill.ctc += "Upper Description Created, Lower Description Recreated, Title Updated";
          else {
              alert("error in Data Collection from Vnc or Fry's");
              sheet_fill.ctc += "Upper & Lower Description Created, Title Updated";
            }
          if(sheet_fill.bShot.charAt(0).toLowerCase() == "y")
          {

          if(gallery_value.substring(0,44) == "https://webami.aent.com/content/img/no_image") {
            
              sheet_fill.ctc += "";
              sheet_fill.gIEnhanced="0";
              sheet_fill.fLink="-";

            }
            else {
              sheet_fill.ctc +=", Gallery Image Enhanced";
              sheet_fill.gIEnhanced="1(PS)";
              sheet_fill.fLink="https://www.frys.com/product/"+ sheet_fill.plu;
            }
    }
    else if(sheet_fill.bShot.charAt(0).toLowerCase() == "n") {
         if(gallery_value.substring(0,44) == "https://webami.aent.com/content/img/no_image") {
            
              sheet_fill.ctc += "";
              sheet_fill.gioFrys = "0";
              sheet_fill.giReplaceable = "No";
              sheet_fill.girDone = "-";
              sheet_fill.gIEnhanced="0";
              sheet_fill.fLink="-";

            }
            else {
                sheet_fill.gioFrys = "0";
              sheet_fill.ctc +=", Gallery Image Added";
              sheet_fill.giReplaceable = "No";
              sheet_fill.girDone = "-";
              sheet_fill.gIEnhanced="1(PS)";
              sheet_fill.fLink="https://www.frys.com/product/"+ sheet_fill.plu;
            }
    }
    else {
        alert("error in data collection from VNC or Fry's");
        if(gallery_value.substring(0,44) == "https://webami.aent.com/content/img/no_image") {
            
              sheet_fill.ctc += "";
             
              sheet_fill.gIEnhanced="0";
             

            }
            else {
             
              sheet_fill.ctc +=", Gallery Image Added";
             
              sheet_fill.gIEnhanced="1(PS)";
              sheet_fill.fLink="https://www.frys.com/product/"+ sheet_fill.plu;
            }
      }
}

function sheetRead() {
  var tab_count = 0;
  for(var i=0; i<sheet_output_field.value.length; i++) {
    if((sheet_output_field.value.substring(i,i+1)) == "\t") {
      tab_count++;
      if(tab_count==sheet_fill_index[9])
       sheet_fill.plu = sheetReadLoop();
     else if(tab_count==sheet_fill_index[10])
      sheet_fill.bShot = sheetReadLoop();
    else if(tab_count==sheet_fill_index[11])
      sheet_fill.hUpper = sheetReadLoop();
    else if(tab_count==sheet_fill_index[12])
      sheet_fill.hLower = sheetReadLoop();
  else if(tab_count==sheet_fill_index[13])
      sheet_fill.giReplaceable = sheetReadLoop();
  else if(tab_count==sheet_fill_index[14])
      sheet_fill.girDone = sheetReadLoop();
  else if(tab_count==sheet_fill_index[15])
      sheet_fill.gioFrys = sheetReadLoop();


  
    function sheetReadLoop() {
      var temp_sheet_fill_data = "";
      for(var i1=i+1; i1<sheet_output_field.value.length; i1++) {
        if(sheet_output_field.value.substring(i1,i1+1)=="\t") {
          i=i1-2;
          return temp_sheet_fill_data;
        }

        temp_sheet_fill_data += sheet_output_field.value.substring(i1,i1+1);
      }
    }

    }
  }
  // alert(sheet_fill.hLower+" "+sheet_fill.hUpper+" "+sheet_fill.bShot+" "+sheet_fill.plu);
}

function sheetFill() {
  var sheet_output_field_processed = "",tab_flag = false;
  var tab_count = 0;
  text_input_plu.value = String(sheet_fill.plu);
  for(var i=0; i<sheet_output_field.value.length; i++) {

    if((sheet_output_field.value.substring(i,i+1)) == "\t") {
      tab_count++;
      if(tab_count==sheet_fill_index[0])
        sheet_output_field_processed +="\t"+ sheet_fill.pType;
      // else if(tab_count==sheet_fill_index[1])
        // sheet_output_field_processed +="\t"+ sheet_fill.dStatus;
      else if(tab_count==sheet_fill_index[2])
        sheet_output_field_processed +="\t"+ sheet_fill.cDate;
      else if(tab_count==sheet_fill_index[3])
        sheet_output_field_processed +="\t"+ sheet_fill.ctc;
      else if(tab_count==sheet_fill_index[4]&& sheet_fill.genre!="")
        sheet_output_field_processed +="\t"+ sheet_fill.genre;
      else if(tab_count==sheet_fill_index[5])
        sheet_output_field_processed +="\t"+ sheet_fill.manufacturer;
      else if(tab_count==sheet_fill_index[6])
        sheet_output_field_processed +="\t"+ sheet_fill.nTitle;
      else if(tab_count==sheet_fill_index[7])
        sheet_output_field_processed +="\t"+ sheet_fill.gIEnhanced;
      else if(tab_count==sheet_fill_index[8])
        sheet_output_field_processed +="\t"+ sheet_fill.fLink;
    else if(tab_count==sheet_fill_index[13])
        sheet_output_field_processed +="\t"+ sheet_fill.giReplaceable;
    else if(tab_count==sheet_fill_index[14])
        sheet_output_field_processed +="\t"+ sheet_fill.girDone;
    else if(tab_count==sheet_fill_index[15])
        sheet_output_field_processed +="\t"+ sheet_fill.gioFrys;
      else
        tab_flag = true;

     
        if(!(tab_flag)) {
            var i1 =i+1
          for(; i1<sheet_output_field.value.length; i1++) {
            if(sheet_output_field.value.substring(i1,i1+1)=="\t") {
              i=i1-1;

              break;
            }
          }
          if(i1==sheet_output_field.value.length)
              i=i1-1;
        }
        else {
         tab_flag = false;
         sheet_output_field_processed += "\t";
        }

     }
     else
         sheet_output_field_processed += sheet_output_field.value.substring(i,i+1);
  }
  sheet_output_field.value = sheet_output_field_processed;
  sheet_output_field.readOnly= true;
}

function divCheck() {
        var raw_data = "";
        var process_data = "";
        var count = 0;
        var tag_count=0;
      lbl:
      {
      // document.getElementById("text_input").readOnly = true;

       raw_data = command;

       for(var loop = 0; loop < raw_data.length;loop++) {

          if(raw_data.substring(loop,loop+1) == ("<") && raw_data.substring(loop+1,loop+2) == ("/"))
          {

            for(var loop1 = loop; loop1 < raw_data.length; loop1++) {
              if(raw_data.substring(loop1,loop1+1) == (">"))
              {
                tag_count--;
                loop=loop1;
                break;
              }
              else
                if(raw_data.substring(loop1,loop1+1) == ("\n") || (loop1 == raw_data.length - 1))
                {
                  alert("An Error Occurred on line" + raw_data.substring(loop,loop1+1));
                  break lbl;
                }
            }
          }
          else
            if(raw_data.substring(loop,loop+1) == ("<") && (!(raw_data.substring(loop+1,loop+2) == ("/"))))
              {
                for(var loop1 = loop; loop1 < raw_data.length; loop1++) {

                  if(raw_data.substring(loop1,loop1+1) == (">") && (!(raw_data.substring(loop1-1,loop1) == ("/"))))
                    {
                    tag_count++;
                
                    loop=loop1;
                    break;
                    }
                    else
                    if(raw_data.substring(loop1,loop1+1) == (">") && raw_data.substring(loop1-1,loop1) == ("/"))
                      {

                        loop=loop1;
                          break;
                      }
                    else
                      if(raw_data.substring(loop1,loop1+1) == ("\n") || (loop1 == raw_data.length - 1))
                        {
                          alert("An Error Occurred on line" + raw_data.substring(loop,loop1+1));
                          break lbl;
                        }
                }
              }
          }

   
       if(tag_count == 0) {
        saveTextAsFile();
        // document.getElementById("sheet_output_field").value = title;
      }
      else
        if(tag_count > 0)
          alert(tag_count + " tags not closed");
        else
          if(tag_count < 0)
            alert(Math.abs(tag_count) + " tags extra closed");
       
     }

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