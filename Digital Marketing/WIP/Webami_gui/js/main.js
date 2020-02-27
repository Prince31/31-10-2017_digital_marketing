$(function(){
        "use strict";
        var path="Desktop/webami", command = "", gallery_value = "";
        var title_value = "", artist_value="", track_value = "", spec_value = "", upper = "";
        var aec_main_title_flag = 0, aec_cover_flag = 0;
        var aec_main_artist_flag = false;
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
        var text_input_upper = document.getElementById("text_input_upper");
        text_input_plu.readOnly = true;
        text_input_gallery.readOnly = true;
        text_input_upper.readOnly = true;
        text_input_gallery.value ="";
        sheet_output_field.value ="";
        var html_data = "";
        var end_flag=false;
        var head_tab_count=0;
        var sheet_output_field_processed = "";
        var upc_value="";
        var spec_plu=[], spec_genre=[], spec_format=[], add_on_plu=[], title_upload=[];
        var spec_upload_data_count=0;
        var release_date_flag=false;
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
                          gioFrys:"",
                          upc:"",
                          manufacturer_url:""};

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

    // function clearOld(){
    //   sheet_output_field_processed = "";
    //   upc_value="";
    //   end_flag=false;
    //   html_data="";
    //     title = "";
    //     path="Desktop/webami";
      
    //     command = "";
    //     artist_value="";
    //     gallery_value = "";
    //     format_value = "";
    //     title_value = "";
    //     track_value = "";
    //      spec_value = "";
    //      genre_value = "";
    //      manufacturer_value = "";
    //      upper = "";
    //      gallery_name = "";
    //      various_artist_flag=true;
    //     aec_cover_flag = 0;
     
    //     aec_main_title_flag = 0;
    //     aec_main_format_flag = false;
    //     aec_main_artist_flag = false;
    //     sheet_fill = {pType:"",
    //                       dStatus:"",
    //                       cDate:"",
    //                       ctc:"",
    //                       genre:"",
    //                       manufacturer:"",
    //                       nTitle:"",
    //                       gIEnhanced:0,
    //                       fLink:"",
    //                       plu:"",
    //                       bShot:"",
    //                       hUpper:"",
    //                       hLower:"",
    //                       giReplaceable:"",
    //                       girDone:"",
    //                       gioFrys:"", 
    //                       upc:"",
    //                       manufacturer_url:""};
                        
    //     // document.getElementById("text_input_tracks").value = "";

    //       text_input_gallery.value = "";
    //       text_input_gallery.readOnly=false;
    //       sheet_output_field.value ="";
    //       sheet_output_field.readOnly= false;
    //       sheet_fill.ctc="";
    //       spec_plu=[];
    //       spec_format=[];
    //       title_upload=[]
    //       add_on_plu=[]
    //       spec_genre=[];
    //       spec_upload_data_count=0;
    //       release_date_flag=false;
    //       sheet_output_field.value = "";

    //     document.getElementById("text_input_upper").value = "";
    //     document.getElementById("text_input_html").value = "";
    //     document.getElementById("text_input_plu").value = "";
    //     document.getElementById("text_input_upper").readOnly = false;
    //     document.getElementById("text_input_html").readOnly = false;
    // }

    function clear()
    {   
       path="Desktop/webami", command = "", gallery_value = "";
         title_value = "", artist_value="", track_value = "", spec_value = "", upper = "";
         aec_main_title_flag = 0, aec_cover_flag = 0;
         aec_main_artist_flag = false;
         gallery_name = "", format_value = "";
         aec_main_format_flag = false;
         title = "";
         genre_value = "";
         manufacturer_value = "";
         various_artist_flag=true;
        text_input_plu.readOnly = true;
        text_input_gallery.value ="";
        sheet_output_field.value ="";
        html_data = "";
        end_flag=false;
        // head_tab_count=0;
        sheet_output_field_processed = "";
        upc_value="";
        spec_plu=[], spec_genre=[], spec_format=[], add_on_plu=[], title_upload=[];
        spec_upload_data_count=0;
        release_date_flag=false;
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
                          gioFrys:"",
                          upc:"",
                          manufacturer_url:""};

     
      
          sheet_output_field.readOnly= false;
      document.getElementById("text_input_upper").value = "";
        document.getElementById("text_input_html").value = "";
        document.getElementById("text_input_plu").value = "";
        document.getElementById("text_input_html").readOnly = false;
    } 

     // File file = new File("home/princesethi/Downloads/webam.sh");
     

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
        sheet_fill_index[16] = "";
        sheet_fill_index[17] = "";
        sheet_fill_index[18] = "";
        sheet_fill_index[19] = "";

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
           
         
                if(sheet_data.substring(i,i+1) == "\t"|| i==(sheet_data.length-1)) {
             
           
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
                else if((sheet_data_temp).trim().toLowerCase() == "upc")
                    sheet_fill_index[16] = tab_count;
                  else if((sheet_data_temp).trim().toLowerCase() == "manufacture urls")
                    sheet_fill_index[17] = tab_count;
                  else if((sheet_data_temp).trim().toLowerCase() == "old title")
                    sheet_fill_index[18] = tab_count;
                  else if((sheet_data_temp).trim().toLowerCase() == "add on plu's")
                    sheet_fill_index[19] = tab_count;
                else
                    ;
            }
                if(sheet_data.substring(i,i+1) == "\t") {
                    sheet_data_temp = "";
                    tab_count++;
                    head_tab_count++;
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
                ;// temp_not_found +="manufacturer\n";
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
              if(sheet_fill_index[16]=="")
                temp_not_found +="UPC\n";
              if(sheet_fill_index[17]=="")
                temp_not_found +="Manufacture URLs\n";
              if(sheet_fill_index[18]=="")
                temp_not_found +="Old Title\n";
              if(sheet_fill_index[18]=="")
                temp_not_found +="add on plu's\n";
           
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
          spec_plu=[];
          spec_format=[];
          spec_genre=[];
          add_on_plu=[];
          spec_upload_data_count=0;
          title_upload=[];
          sheet_output_field.readOnly=true;
          if(temp_html =="" && temp_pop_sheet_field !="" && sheet_output_field.value!="")
          {
            sheetReadForUPC();
          }
          else if(temp_html !="" && temp_pop_sheet_field !="" && sheet_output_field.value!="")
          {
          createFile();
          document.getElementById("text_input_html").readOnly = true;
        
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
          alert("Genre Not Found"+" "+sheet_fill.plu);
       
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
          release_date_flag=true;
          
        }
      //       else
      //   if(raw_data.substring(loop, loop+13)== "Release Date:") {
         
      //       for(var loop1 = loop+13; loop1<raw_data.length; loop1++) {
      //       if(raw_data.substring(loop1, loop1+4)=="2018") {
      //         break;
      //       }
      //       if(raw_data.substring(loop1, loop1+5)=="</li>") {
      //         
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
         raw_data.substring(loop, loop+9).toLowerCase()== "add date:" ||
          raw_data.substring(loop, loop+5).toLowerCase()== "rank:"||
          raw_data.substring(loop, loop+9).toLowerCase()== "onesheet:")
        {

          if(raw_data.substring(loop, loop+4).toLowerCase()== "upc:") {
          for(var loop1 = loop+4; loop1<raw_data.length; loop1++) {
            if(raw_data.substring(loop1, loop1+1)=="\n")
              break;
            upc_value += raw_data.substring(loop1, loop1+1);
          }
      
        upc_value = upc_value.trim();
        if(upc_value=="")
          alert("UPc Not Found "+sheet_fill.plu);
       
        }

          if(raw_data.substring(loop, loop+9).toLowerCase()== "add date:")
            alert("Product should not be created as 'Add Date' is detected on Webami"+" "+sheet_fill.plu);
    
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

                    case(96):
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
  
lbl:{
  var i = 0;
  
  for( ; i < html_data.length; i++) {
  
    if(html_data.substring(i,i+12)=="*1234567890#"){
      html_data=html_data.substring(i+12,html_data.length);
      i=i+11;
     
      break lbl;
    }

    var track_flag = 0;
    if(html_data.substring(i, i+22) == "jp-playlist tracksonly") {
       
        for(var i1 = i+22; i1 < html_data.length; i1++) {
          if(html_data.substring(i1,i1+12)=="*1234567890#"){
      html_data=html_data.substring(i1+12,html_data.length);
      i=i1+11;
      break lbl;
    }
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
                    if(html_data.substring(i2,i2+12)=="*1234567890#"){
                      html_data=html_data.substring(i2+12,html_data.length);
                      i=i2+11;
                      break lbl;
                    }
                    if(html_data.substring(i2, i2+7) == "</span>") {
                        if(track_flag==1)
                          track_value += "\n\t\t";
                        else
                          track_value += "\n";
                            track_value += "\t\t\t\t\t<li>";
                        for(var i3 = i2+7; i3 < html_data.length; i3++) {
                            if(html_data.substring(i3,i3+12)=="*1234567890#"){
                              html_data=html_data.substring(i3+12,html_data.length);
                              i=i3+11;
                              break lbl;
                            }
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
        if(html_data.substring(i0,i0+12)=="*1234567890#"){
                      html_data=html_data.substring(i0+12,html_data.length);
                      i=i0+11;
                      break lbl;
                    }
        if(html_data.substring(i0-5, i0) == 'src="') {
          aec_cover_flag = 1;
          for(var i1 = i0; i1 < html_data.length; i1++) {
            if(html_data.substring(i1,i1+12)=="*1234567890#"){
                      html_data=html_data.substring(i1+12,html_data.length);
                      i=i1+11;
                      break lbl;
                    }
            if(html_data.substring(i1, i1+1) == '"') {
              i = i1;
              break;
            }

            gallery_value += html_data.substring(i1, i1+1);
          }
          if(gallery_value.substring(0,1) != "h"){
         
            gallery_value = "https://webami.aent.com" + gallery_value;
           
          }

          // if(text_input_gallery.value!="")
          //   gallery_value = text_input_gallery.value;

          for(var i1 = gallery_value.length - 1; i1 >= 0; i1--) {
                if(html_data.substring(i1,i1+12)=="*1234567890#"){
                      html_data=html_data.substring(i1+12,html_data.length);
                      i=i1+11;
                      break lbl;
                    }
              if(gallery_value.substring(i1, i1+1) == "/") {

                gallery_name += gallery_value.substring(i1+1, gallery_value.length);
                break;
              }

            }

          break;
        }

      }
     
      gallery_name=decodeURIComponent(gallery_name);

      // gallery_value="https://webami.aent.com/content/img/no_image";
      // gallery_name="https://webami.aent.com/content/img/no_image";
     
    }
    if(html_data.substring(i, i+14) == "aec-main-title" && aec_main_title_flag == 0) {
   
      for(var i0 = i+14; i0 < html_data.length; i0++) {
        if(html_data.substring(i0,i0+12)=="*1234567890#"){
                      html_data=html_data.substring(i0+12,html_data.length);
                      i=i0+11;
                      break lbl;
                    }
        if(html_data.substring(i0-4, i0) == '<h1>') {
          aec_main_title_flag = 1;
          for(var i1 = i0; i1 < html_data.length; i1++) {
              if(html_data.substring(i1,i1+12)=="*1234567890#"){
                      html_data=html_data.substring(i1+12,html_data.length);
                      i=i1+11;
                      break lbl;
                    }
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
        if(html_data.substring(i0,i0+12)=="*1234567890#"){
                      html_data=html_data.substring(i0+12,html_data.length);
                      i=i0+11;
                      break lbl;
                    }
        if(html_data.substring(i0-2, i0) == '">') {
          aec_main_artist_flag = true;
          for(var i1 = i0; i1 < html_data.length; i1++) {
            if(html_data.substring(i1,i1+12)=="*1234567890#"){
                      html_data=html_data.substring(i1+12,html_data.length);
                      i=i1+11;
                      break lbl;
                    }
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
        if(html_data.substring(i0,i0+12)=="*1234567890#"){
                      html_data=html_data.substring(i0+12,html_data.length);
                      i=i0+11;
                      break lbl;
                    }
        if(html_data.substring(i0-2, i0) == 'n>') {
          aec_main_format_flag = true;
          for(var i1 = i0; i1 < html_data.length; i1++) {
            if(html_data.substring(i1,i1+12)=="*1234567890#"){
                      html_data=html_data.substring(i1+12,html_data.length);
                      i=i1+11;
                      break lbl;
                    }
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
                    // alert("Check other formats of movie on image"+" "+sheet_fill.plu);
                  }

                else
                  if(format_value == "SACD")
                    format_value = "SACD";
                else
                  if(format_value == "4K Ultra HD") {
                    format_value = "4K UHD";
                    // alert("Check other formats of movie on image\ncheck TM in 4K UHD Logo"+" "+sheet_fill.plu);

                    
                  }
                  else
                  if(format_value == "Blu-ray 3-D") {
                    format_value = "Blu-Ray 3D";
                    // alert("Check other formats of movie on image"+" "+sheet_fill.plu);
                    
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
          if(html_data.substring(i0,i0+12)=="*1234567890#"){
                      html_data=html_data.substring(i0+12,html_data.length);
                      i=i0+11;
                      break lbl;
                    }
        if(html_data.substring(i0-4, i0) == '<ul>') {
       
          for(var i1 = i0; i1 < html_data.length; i1++) {
              if(html_data.substring(i1,i1+12)=="*1234567890#"){
                      html_data=html_data.substring(i1+12,html_data.length);
                      i=i1+11;
                      break lbl;
                    }
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
                  if(html_data.substring(i2,i2+12)=="*1234567890#"){
                      html_data=html_data.substring(i2+12,html_data.length);
                      i=i2+11;
                      break lbl;
                    }
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
            if(html_data.substring(i0,i0+12)=="*1234567890#"){
                      html_data=html_data.substring(i0+12,html_data.length);
                       i=i0+11;
                      break lbl;
                    }
        if(html_data.substring(i0-3, i0) == '<p>') {
      
          for(var i1 = i0; i1 < html_data.length; i1++) {
              if(html_data.substring(i1,i1+12)=="*1234567890#"){
                      html_data=html_data.substring(i1+12,html_data.length);
                      i=i1+11;
                      break lbl;
                    }
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
  if(i==html_data.length){
    
    end_flag=true;
  }

 
 }
 
 
}


function createFile()
{
  html_data = String(document.getElementById("text_input_html").value);
  while(!(end_flag)) {

  track_value = ""; spec_value = ""; upper = ""; gallery_value = ""; title_value="";artist_value="";
  format_value=""; aec_cover_flag=0; gallery_name="";
  various_artist_flag=true;
  aec_cover_flag = 0;
  aec_main_title_flag = 0;
  aec_main_format_flag = false;
  aec_main_artist_flag = false; genre_value=""; upc_value="";
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
                          gioFrys:"",
                          upc:"",
                          manufacturer_url:""};
 
  dataCollection();
 
 
     spec_value = specification();
     track_value = ascii(track_value);
     var temp_day=date.getDate() ;
     var temp_month=date.getMonth() ;
     temp_month=temp_month+1

     if(temp_day<10)
      temp_day="0"+temp_day;

      if(temp_month<10)
      temp_month="0"+temp_month;
  
    var temp_date=date.getFullYear()+ "-"+ temp_month + "-"+temp_day ;
    path="Desktop/webami/"+temp_date;
    
    var upper_value = "";
    // var upper_value = String(document.getElementById("text_input_upper").value);
    if(artist_value!="")
      title = ascii_title(title_value+" - "+artist_value+" ["+format_value+"]");
    else {
      title = ascii_title(title_value+" ["+format_value+"]");

      if((format_value == "Audio CD" || format_value == "Vinyl")&& various_artist_flag )
        alert("Artist name not found"+" "+sheet_fill.plu);
    }
   
    if(upper_value!="")
      upper_value = ascii(upper_value);
    else if(upper!=""&&upper.toLowerCase().trim()!="no information available.")
    upper_value = ascii(upper);
  else {
    if(artist_value!="")
    upper_value = ascii(title_value+" by "+artist_value+" in "+format_value+".");
    else
      upper_value = ascii(title_value+" in "+format_value+".");
  }
 
 
    // command += '\ncd\ncd Downloads\nif [ -f webam.sh(1) ]\nthen\nrm -f webam.sh\nrm -f webam.sh(1)\nfi';
    
    sheetRead();
    sheetAnalyse();
    sheetFill();

    if(command==""){
      command = '#!/bin/bash\ncd\ncd Downloads\nif [ -f webam\\(1\\).sh ]\nthen\nrm -f webam\\(1\\).sh\n\nzenity --error --text="error- Another webam.sh file already exists. Try again.\!" --title="Warning\!";else echo "Product Created"';
    }
    command += '\ncd\ncd ' + path + '\nif [ -d ' + sheet_fill.plu +
     ' ]; then zenity --error --text="error- Another folder with same plu already exists.\!" --title="Warning\!"; else echo "Product Created";\nmkdir -p ' +
      sheet_fill.plu ;
   
     if(gallery_value.substring(0,44) != "https://webami.aent.com/content/img/no_image") 
      command += '\nwget  -P ' + sheet_fill.plu +'_galleryimages "' + gallery_value + '"\nmv ' + sheet_fill.plu + '_galleryimages/' + gallery_name + ' ' + sheet_fill.plu + '_galleryimages/' + sheet_fill.plu +'.01.prod.jpg' + '\ncd ' +
       sheet_fill.plu +'_galleryimages\nif [ -f ' + sheet_fill.plu +'.01.prod.jpg ]\nthen echo "Gallery Rename"; else echo "Gallery Not Rename";\nfi\ncd ..\ncd ' + sheet_fill.plu;
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
      
    
      
    divCheck();

    
  }
  command += '\nfi\ncd \ncd Downloads\nrm -f webam.sh\nrm -f sel.py';
       // document.getElementById("text_input_tracks").value = "";
   document.getElementById("text_input_html").value = "";
    // document.getElementById("text_input_tracks").value = command;
    document.getElementById("text_input_upper").value = "";
  sheet_output_field.value = sheet_output_field_processed;
  sheet_output_field.readOnly= true;
  saveTextAsFile();
  
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
      else if(genre_value.toLowerCase().trim()=="heavy metal")
        sheet_fill.genre = "Heavy Metal(Rock)";
      var genre_value_temp=genre_value.toLowerCase().trim();
    if(genre_value_temp.indexOf("erotica")!=-1)
        alert("Genre erotica no need to create"+" "+sheet_fill.plu);

      sheet_fill.manufacturer=manufacturer_value;
      sheet_fill.nTitle=title;

      var temp_upc_length=sheet_fill.upc.length;
       
    if(temp_upc_length<12){
      for(var i_upc=0;i_upc<12-temp_upc_length;i_upc++){
        sheet_fill.upc="0"+sheet_fill.upc;
      }
    }

      if(sheet_fill.manufacturer_url==""){
        

        sheet_fill.manufacturer_url="https://webami.aent.com/"+sheet_fill.upc;
      }
      if(release_date_flag){
        alert("Release year is greater than 2019 Plu: "+sheet_fill.plu+" upc: "+sheet_fill.upc );
        release_date_flag=false;
      }
  if(upc_value!=sheet_fill.upc&&upc_value!=""){
      alert("Upc mismatch html upc"+ upc_value+" sheet_fill_upc"+ sheet_fill.upc+" plu: "+sheet_fill.plu);
      sheet_fill.ctc += "Wrong UPC";
     } 
     else if(upc_value!=sheet_fill.upc){
      // alert("Product Not Found for plu: "+sheet_fill.plu);
      sheet_fill.ctc += "Product Not Found";
     }
          else if(sheet_fill.hUpper.toLowerCase() == "y" && sheet_fill.hLower.toLowerCase() == "y")
              sheet_fill.ctc += "Upper & Lower Description Recreated, Title Updated";
          else if(sheet_fill.hUpper.toLowerCase() == "n" && sheet_fill.hLower.toLowerCase() == "n")
              sheet_fill.ctc += "Upper & Lower Description Created, Title Updated";
          else if(sheet_fill.hUpper.toLowerCase() == "y")
              sheet_fill.ctc += "Upper Description Recreated, Lower Description Created, Title Updated";
          else if(sheet_fill.hUpper.toLowerCase() == "n")
              sheet_fill.ctc += "Upper Description Created, Lower Description Recreated, Title Updated";
          else {
              // alert("error in Data Collection from Vnc or Fry's");
              sheet_fill.ctc += "Upper & Lower Description Created, Title Updated";
            }
          if(sheet_fill.bShot.charAt(0).toLowerCase() == "y")
          {

          if(gallery_value.substring(0,44) == "https://webami.aent.com/content/img/no_image"||sheet_fill.ctc == "Product Not Found") {
            
              sheet_fill.ctc += "";
              sheet_fill.gIEnhanced="0";
              sheet_fill.fLink="https://www.frys.com/product/"+ sheet_fill.plu;

            }
            else {
              sheet_fill.ctc +=", Gallery Image Enhanced";
              sheet_fill.gIEnhanced="1(PS)";
              sheet_fill.fLink="https://www.frys.com/product/"+ sheet_fill.plu;
            }
    }
    else if(sheet_fill.bShot.charAt(0).toLowerCase() == "n") {
         if(gallery_value.substring(0,44) == "https://webami.aent.com/content/img/no_image" || sheet_fill.ctc == "Product Not Found") {
            
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
        // alert("error in data collection from VNC or Fry's");
        if(gallery_value.substring(0,44) == "https://webami.aent.com/content/img/no_image"  || sheet_fill.ctc == "Product Not Found") {
            
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

function sheetReadForUPC() {
  var quote_flag=false;
  var tab_count = 0;
  var upc_fordata_collection=[];
  var upc_fordata_collection_count=0;
  for(var i=0; i<sheet_output_field.value.length; i++) {

    if(sheet_output_field.value.substring(i,i+1)=='"') {
                      quote_flag = !(quote_flag);
                      
                  }

    if((sheet_output_field.value.substring(i,i+1)) == "\t" && (!(quote_flag))) {
      
      tab_count++;


    if(tab_count==sheet_fill_index[9]){
       spec_plu[spec_upload_data_count] = sheetReadLoop();
       spec_plu[spec_upload_data_count]=spec_plu[spec_upload_data_count].trim();
       if(spec_plu[spec_upload_data_count]!="-")
        spec_plu[spec_upload_data_count]=NewLineInCellCheck(spec_plu[spec_upload_data_count]);
   }
    else if(tab_count==sheet_fill_index[4]){
        spec_genre[spec_upload_data_count] =sheetReadLoop();
         spec_genre[spec_upload_data_count] = spec_genre[spec_upload_data_count].trim();
         spec_genre[spec_upload_data_count]=NewLineInCellCheck(spec_genre[spec_upload_data_count]);
      }
      else if(tab_count==sheet_fill_index[18]){
        spec_format[spec_upload_data_count] =sheetReadLoop();
        spec_format[spec_upload_data_count]=spec_format[spec_upload_data_count].trim();
      }
      else if(tab_count==sheet_fill_index[19]){
        add_on_plu[spec_upload_data_count] = sheetReadLoop();
        add_on_plu[spec_upload_data_count]=add_on_plu[spec_upload_data_count].trim();
        if(add_on_plu[spec_upload_data_count]!="-")
        add_on_plu[spec_upload_data_count]=addOnPluArrange(add_on_plu[spec_upload_data_count]);
      }
      else if(tab_count==sheet_fill_index[6]){
        var temp_spec_format=sheetReadLoop();
        temp_spec_format=temp_spec_format.trim();
        if(temp_spec_format!=""&&temp_spec_format!="-"&&temp_spec_format!==" ")
        spec_format[spec_upload_data_count] = temp_spec_format;
        
        spec_format[spec_upload_data_count]=NewLineInCellCheck(spec_format[spec_upload_data_count]);

       title_upload[spec_upload_data_count]=spec_format[spec_upload_data_count];

       var spec_format_bracket_index=parseInt(spec_format[spec_upload_data_count].indexOf("["));


       spec_format_bracket_index=parseInt(spec_format[spec_upload_data_count].indexOf("[Explicit Content]"));
       if(spec_format_bracket_index!=-1){
        spec_format[spec_upload_data_count]=
          spec_format[spec_upload_data_count].substring(spec_format_bracket_index+1);
       }

       spec_format_bracket_index=parseInt(spec_format[spec_upload_data_count].indexOf("["));
        if(spec_format_bracket_index!=-1){
       spec_format[spec_upload_data_count]=
          spec_format[spec_upload_data_count].substring(spec_format_bracket_index);
        }
        // for(var i1=0;i1<spec_format[spec_upload_data_count].length;i1++){
        //   //title
        //   var spec_format_bracket_index=parseInt(spec_format[spec_upload_data_count].indexOf("["));
        //   var temp1_spec_format=spec_format[spec_upload_data_count].substring((spec_format_bracket_index+1));
        //   spec_format[spec_upload_data_count]=
        //   spec_format[spec_upload_data_count].substring(spec_format_bracket_index);

          
        //   // alert(temp1_spec_format);
        //   var temp1_spec_format_index=parseInt(temp1_spec_format.indexOf("["));
        //   if(temp1_spec_format_index==-1){
        //     // alert(spec_format[spec_upload_data_count]);
        //     break;
        //   }
        //   else{
        //     alert(spec_format[spec_upload_data_count]);
        //     alert(spec_format[spec_upload_data_count].substring(1));
        //     spec_format[spec_upload_data_count]=
        //   spec_format[spec_upload_data_count].substring(1);
          
        //   }
        // }

        var vinyl_check_temp=spec_format[spec_upload_data_count].indexOf("Vinyl]")
        if(vinyl_check_temp!=-1)
          spec_format[spec_upload_data_count]="[Vinyl]";
      }
     else if(tab_count==sheet_fill_index[16]){
      sheet_fill.upc = sheetReadLoop();
      sheet_fill.upc=sheet_fill.upc.trim();
      sheet_fill.upc=NewLineInCellCheck(sheet_fill.upc);
    var upc_length=sheet_fill.upc.length;
    upc_fordata_collection[upc_fordata_collection_count]=sheet_fill.upc;
    if(upc_length<12){
      for(var i_upc=0;i_upc<12-upc_length;i_upc++){
        upc_fordata_collection[upc_fordata_collection_count]="0"+
        upc_fordata_collection[upc_fordata_collection_count];
      }
    }
   
    
    upc_fordata_collection_count++;
   
  }
    function addOnPluArrange(temp_add_on_plu){
      var  temp_add_on_plu_updated="";
      for(var i1=0;i1<temp_add_on_plu.length;i1++){
        if(temp_add_on_plu.charAt(i1).charCodeAt()>=48&&temp_add_on_plu.charAt(i1).charCodeAt()<=57)
          temp_add_on_plu_updated+=temp_add_on_plu.charAt(i1);
        else if(i1!=0&&i1!=(temp_add_on_plu.length-1)&&
temp_add_on_plu_updated.substring(temp_add_on_plu_updated.length-1,temp_add_on_plu_updated.length)!=",")
          temp_add_on_plu_updated+=",";
      }
      return temp_add_on_plu_updated;
    }

    function NewLineInCellCheck(temp2_data){
      var temp3_data="";
      for(var i1=0;i1<temp2_data.length;i1++){
        if(temp2_data.substring(i1,i1+1)=="\n")
          temp3_data+=",";
        else
          temp3_data+=temp2_data.substring(i1,i1+1);
      }
      return temp3_data;
    }


    
    function sheetReadLoop() {
      var temp_sheet_fill_data = "";
      for(var i1=i+1; i1<sheet_output_field.value.length; i1++) {

         if(sheet_output_field.value.substring(i1,i1+1)=='"') {
                      quote_flag = !(quote_flag);
                    
                  }

        if((sheet_output_field.value.substring(i1,i1+1)=="\t"||
          sheet_output_field.value.substring(i1,i1+1)=="\n")
                      && (!(quote_flag))) {
         
          i=i1-1;
          return temp_sheet_fill_data;
        }

        temp_sheet_fill_data += sheet_output_field.value.substring(i1,i1+1);
      }
    }
      // if(tab_count==head_tab_count && sheet_output_field.value.substring(i+1,i+2)=="\n"
      //                 && (!(quote_flag))){
     
      //   tab_count = 0;
      // }
    }
    if(tab_count==head_tab_count && sheet_output_field.value.substring(i,i+1)=="\n"
                      && (!(quote_flag))){
       
       tab_count = 0;
        spec_upload_data_count++;
      }
     
  }


    var python_upc_script=`#!/usr/bin/env python3
import pyautogui, time, pyperclip, tkinter.messagebox, getpass
import os.path
from os import path
from datetime import date
pyautogui.FAILSAFE = False

def loading():
  global upc, username
  while True:
    try:
      tab_logo_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/webami_infinite/tab_logo.png")
      print("Page load for upc: "+upc)
      break
    except:
      try:
        tab_logo1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/webami_infinite/tab_logo1.png")
        print("Page load for upc: "+upc)
        break
      except:
        print("waiting for page load for upc: "+upc)
      
def body():
  global upc, last_upc, username
  while True:
    try:
      # time.sleep(1.0)
      body_locationx, body_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/webami_infinite/body.png")
      print("body detected for upc: "+upc)
      pyautogui.click(body_locationx-30,body_locationy)
      # time.sleep(1.0)
      pyautogui.hotkey('ctrl', 'c')
      time.sleep(0.5)
      page = pyperclip.paste()
      file_.write(page)
      if(last_upc == 0):
        file_.write("*1234567890#")
      break
    except:
      print("waiting for body for upc: "+upc)
    # inspector_close() 

def inspector_close():
  global upc, username
  while True:
    try:
      # time.sleep(1.0)
      inspector_close_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/webami_infinite/inspector_close.png")
      pyautogui.click(inspector_close_location) 
      break
    except:
      print("waiting for inspector_close for upc: "+upc)    

def html():
  global upc, file_, username
  while True:
    try:  
      # time.sleep(1.0)
      search_locationx, search_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/webami_infinite/search.png")
      pyautogui.click(search_locationx-800,search_locationy)
      pyautogui.hotkey('ctrl', 'a')
      # time.sleep(1.0)
      pyperclip.copy("https://webami.aent.com/"+upc)
      pyautogui.hotkey('ctrl', 'v')
      pyautogui.press('enter')
      break           
    except: 
      print("Waiting for response from search at upc: "+ upc)
  loading()
  pyautogui.press("f12")
  body()    

def sel_check():
  global username
  if not(os.path.exists('/home/'+username+'/Desktop/webami/'+str(date.today()))):
      os.makedirs('/home/'+username+'/Desktop/webami/'+str(date.today()))
  if(path.exists("sel(1).py")):
    os.remove("sel(1).py")
    os.remove("sel.py")
    print('another file sel.py already exists')
    return 0
  else:
    return 1

username = getpass.getuser()
sel_check_var = 1
last_upc = 0
file_ = open('page.html', 'w')
sel_check_var = sel_check()
if(sel_check_var):
  upc = '`;
  for(var i=0; i<upc_fordata_collection_count;i++){
    if(i<upc_fordata_collection_count-1){
      if(i==0){
        python_upc_script+=upc_fordata_collection[i]+
    `'
  html()
`;
      }
      else{
    python_upc_script+="  upc = '"+upc_fordata_collection[i]+
    `'
  html()
`;
}
  }
  else{
    python_upc_script+=`  last_upc = 1
  upc = '`+upc_fordata_collection[i]+`'
  html()
  file_.close()

tkinter.messagebox.showinfo(title="Greetings", message="Data Collected")`;
  }
  }

  
  saveTextAsFileForSelenium(python_upc_script);
  specUploadData();
}

function specUploadData(){
  var spec_upload_data_temp="", plu_upload_data_temp="", add_on_plu_upload_data_temp="";
  var title_upload_data_temp="";
  var incomplete_plu="";
  for(var i=0; i<=spec_upload_data_count;i++){
    if(spec_format[i]==""||spec_genre[i]==""||add_on_plu[i]==""||title_upload[i]=="")
      incomplete_plu+=spec_plu[i]+"\n";
    if(i<spec_upload_data_count){
      spec_upload_data_temp+=spec_plu[i]+"\n"+spec_format[i]+"\n"+spec_genre[i]+"\n";
      plu_upload_data_temp+=spec_plu[i]+"\n";
      add_on_plu_upload_data_temp+=add_on_plu[i]+"\n";
      title_upload_data_temp+=title_upload[i]+"\n";
    }
    else{
      spec_upload_data_temp+=spec_plu[i]+"\n"+spec_format[i]+"\n"+spec_genre[i];
      plu_upload_data_temp+=spec_plu[i];
      add_on_plu_upload_data_temp+=add_on_plu[i];
      title_upload_data_temp+=title_upload[i];
    }
  }
  // document.getElementById("text_input_html").value=
  document.getElementById("text_input_upper").value= plu_upload_data_temp;
  document.getElementById("text_input_gallery").value=add_on_plu_upload_data_temp;
  document.getElementById("text_input_plu").value= spec_upload_data_temp;
  if(incomplete_plu!="")
  alert("Incomplete Plu's\n\n"+incomplete_plu);
  
}

function saveTextAsFileForSelenium(python_upc_script)
{
    var textToSave = python_upc_script;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "sel.py"
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}

function sheetRead() {
  var quote_flag=false;
  var tab_count = 0;
  for(var i=0; i<sheet_output_field.value.length; i++) {

    if(sheet_output_field.value.substring(i,i+1)=='"') {
                      quote_flag = !(quote_flag);
                  }

    if((sheet_output_field.value.substring(i,i+1)) == "\t" && (!(quote_flag))) {
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
    else if(tab_count==sheet_fill_index[16])
      sheet_fill.upc = sheetReadLoop();
    else if(tab_count==sheet_fill_index[17])
      sheet_fill.manufacturer_url = sheetReadLoop();

    var temp_upc_length=sheet_fill.upc.length;

    if(temp_upc_length<12){
      for(var i_upc=0;i_upc<12-temp_upc_length;i_upc++){
        sheet_fill.upc="0"+sheet_fill.upc;
      }
    }

  
    function sheetReadLoop() {
      var temp_sheet_fill_data = "";
      for(var i1=i+1; i1<sheet_output_field.value.length; i1++) {

         if(sheet_output_field.value.substring(i1,i1+1)=='"') {
                      quote_flag = !(quote_flag);
                  }

        if((sheet_output_field.value.substring(i1,i1+1)=="\t"||
          sheet_output_field.value.substring(i1,i1+1)=="\n")
                      && (!(quote_flag))) {
          i=i1-1;
          return temp_sheet_fill_data;
        }

        temp_sheet_fill_data += sheet_output_field.value.substring(i1,i1+1);
      }
    }
      // if(tab_count==head_tab_count && sheet_output_field.value.substring(i+1,i+2)=="\n"
      //                 && (!(quote_flag))){
      //   break;
      // }
    }
     if(tab_count==head_tab_count && sheet_output_field.value.substring(i,i+1)=="\n"
                      && (!(quote_flag))){
      
        break;
      }
    
  }
  
}

function sheetFill() {
  var tab_flag = false;
  var tab_count = 0;
  var quote_flag=false;
  text_input_plu.value = String(sheet_fill.plu);
  for(var i=0; i<sheet_output_field.value.length; i++) {

    if(sheet_output_field.value.substring(i,i+1)=='"') {
                      quote_flag = !(quote_flag);
                  }
               
    if(head_tab_count==tab_count&&sheet_output_field.value.substring(i,i+1)=="\n"&&(!(quote_flag))){
     
        sheet_output_field.value=sheet_output_field.value.substring(i+1,sheet_output_field.value.length);
        sheet_output_field_processed+="\n";
      break;
    }
    if((sheet_output_field.value.substring(i,i+1)) == "\t" &&(!(quote_flag))) {
      tab_count++;
      if(tab_count==sheet_fill_index[0])
        sheet_output_field_processed +="\t"+ sheet_fill.pType;
      // else if(tab_count==sheet_fill_index[1])
        // sheet_output_field_processed +="\t"+ sheet_fill.dStatus;
      else if(tab_count==sheet_fill_index[2])
        sheet_output_field_processed +="\t";
      else if(tab_count==sheet_fill_index[3])
        sheet_output_field_processed +="\t"+ sheet_fill.ctc;
      else if(tab_count==sheet_fill_index[4]&& sheet_fill.genre!="")
        sheet_output_field_processed +="\t"+ sheet_fill.genre;
      else if(tab_count==sheet_fill_index[5])
        sheet_output_field_processed +="\t"+ sheet_fill.manufacturer;
      else if(tab_count==sheet_fill_index[6]){
        var temp_title_check=sheet_output_field_processed.indexOf(sheet_fill.nTitle);
        // if(temp_title_check!=-1){
        //   if(temp_title_check==(sheet_output_field_processed.length-sheet_fill.nTitle.length));
        //   sheet_fill.nTitle="-";
        // }
        sheet_output_field_processed +="\t"+ sheet_fill.nTitle;
      }
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
      else if(tab_count==sheet_fill_index[17])
        sheet_output_field_processed +="\t"+ sheet_fill.manufacturer_url;
      else
        tab_flag = true;

     
        if(!(tab_flag)) {
            var i1 =i+1
          for(; i1<sheet_output_field.value.length; i1++) {
              if(sheet_output_field.value.substring(i1,i1+1)=='"') {
                      quote_flag = !(quote_flag);
                  }
            if((sheet_output_field.value.substring(i1,i1+1)=="\t"||
              sheet_output_field.value.substring(i1,i1+1)=="\n")&&(!(quote_flag))) {
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
                  alert("An Error Occurred on line" + raw_data.substring(loop,loop1+1)+" "+sheet_fill.plu);
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
                          alert("An Error Occurred on line" + raw_data.substring(loop,loop1+1)+" "+sheet_fill.plu);
                          break lbl;
                        }
                }
              }
          }

   
       if(tag_count == 0) {
        ;
        // document.getElementById("sheet_output_field").value = title;
      }
      else
        if(tag_count > 0)
          alert(tag_count + " tags not closed"+" "+sheet_fill.plu);
        else
          if(tag_count < 0)
            alert(Math.abs(tag_count) + " tags extra closed"+" "+sheet_fill.plu);
       
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