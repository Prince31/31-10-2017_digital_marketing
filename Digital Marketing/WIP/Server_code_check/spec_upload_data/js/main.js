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
        var html_data = "";
        var end_flag=false;
        var head_tab_count=0;
        var sheet_output_field_processed = "";
        var upc_value="";
        var spec_plu=[], spec_genre=[], spec_format=[]; 
        var spec_upload_data_count=0;
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

    function clear()
    {   
      sheet_output_field_processed = "";
      upc_value="";
      end_flag=false;
      html_data="";
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
                          gioFrys:"", 
                          upc:"",
                          manufacturer_url:""};
                        
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
          spec_plu=[];
          spec_format=[];
          spec_genre=[];
          spec_upload_data_count=0;
    } 

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
          if(temp_html =="" && temp_pop_sheet_field !="" && sheet_output_field.value!="")
          {
            sheetReadForUPC();
          }
          else if(temp_html !="" && temp_pop_sheet_field !="" && sheet_output_field.value!="")
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


    if(tab_count==sheet_fill_index[9])
       spec_plu[spec_upload_data_count] = sheetReadLoop();
   
    else if(tab_count==sheet_fill_index[4])
        spec_genre[spec_upload_data_count] =sheetReadLoop();
      else if(tab_count==sheet_fill_index[18]){
        spec_format[spec_upload_data_count] =sheetReadLoop();
      }
      else if(tab_count==sheet_fill_index[6]){
        var temp_spec_format=sheetReadLoop();
        if(temp_spec_format!=""&&temp_spec_format!="-"&&temp_spec_format!==" ")
        spec_format[spec_upload_data_count] = temp_spec_format;
        var spec_format_bracket_index=spec_format[spec_upload_data_count].indexOf("[");
        spec_format[spec_upload_data_count]=
        spec_format[spec_upload_data_count].substring(spec_format_bracket_index);
      }
     
    if(tab_count==sheet_fill_index[16]){
      sheet_fill.upc = sheetReadLoop();

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

  
  specUploadData();
}

function specUploadData(){
  var spec_upload_data_temp="";
  for(var i=0; i<=spec_upload_data_count;i++){
    if(i<spec_upload_data_count)
      spec_upload_data_temp+=spec_plu[i]+"\n"+spec_format[i]+"\n"+spec_genre[i]+"\n";
    else
      spec_upload_data_temp+=spec_plu[i]+"\n"+spec_format[i]+"\n"+spec_genre[i];
  }
  document.getElementById("text_input_upper").value=spec_upload_data_temp;
}