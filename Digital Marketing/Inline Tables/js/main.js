$(function(){
        "use strict";
        var sheet_data = "";
        var plu = [], title=[], ctc=[], s_status=[],query_status=[],query_status_checked=[],
        t_date=[], gio_f=[], gi_enhanced=[], giu_date=[], m_name_row =[], m_name_row_index=[],
        t_editable =[], prop65_plu=[];
        var row_count = 0, tab_last =0, prop65_plu_count=0;
        var current_date = new Date();
         var month = new Array();
          month[0] = "january";
          month[1] = "february";
          month[2] = "march";
          month[3] = "april";
          month[4] = "may";
          month[5] = "june";
          month[6] = "july";
          month[7] = "august";
          month[8] = "september";
          month[9] = "october";
          month[10] = "november";
          month[11] = "december";
          document.getElementById("text_quote").value='Warning! Replace " with &#34;';
          document.getElementById("text_quote").readOnly=true;
        var date_checked = [];
        var c_status_option_checked = [];
        var c_status_option =["Created And Uploaded", "Created And Uploaded Offline",
        "Title Updated", "Disclaimer Updated", "Category Updated", "Gallery Image Updated",
         "Gallery Images Updated","Turned Offline",
          "Extra Category Removed", "Already On Fry's", "Product Not Found", "Source Not Found",
           "Plu Not Found In Oracle Database..!", "Plu is Deleted", "Invalid Plu",
            "Remove Plu From Inline Table", "Text Field"];
         var s_status_option = ["Uploaded","Already Uploaded", "-","Text Field"];
         var s_status_option_checked=[];
        plu[row_count]="";
        var m_name_row_count =0;
        m_name_row[m_name_row_count]="";
        m_name_row_index[m_name_row_count]="";
        title[row_count]="";
        ctc[row_count]="";
        query_status[row_count]="";
        s_status[row_count]="";
        t_date[row_count]="";
        gio_f[row_count]="";
        t_editable[row_count]="";
        gi_enhanced[row_count]="";
        giu_date[row_count]="";
        var audit_flag=false;
        var filter_date=[];
        var query_count=0;
        var audit_query_count=0;
        var filter_s_status = [];
        var sortCtcSStatus_flag=true;
         var filter_ctc = [];
         var dateCheckbox_flag = true;
         var cStatusCheckbox_flag = false;
         var sStatusCheckbox_flag = false;
        
         var filter_ctc_count =0;
         var filter_s_status_count = 0;
         var sheet_fill_index = [];
         var s_status_option_checked_count = 0;
         var c_status_option_checked_count = 0;
         var creation_data_editable="",
         creation_data_not_editable="", aof_data="", pnf_data="", plu_invalid_data="";
         c_status_option_checked[c_status_option_checked_count]="";
         s_status_option_checked[s_status_option_checked_count]="";
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
        var month = new Array();
        month[0] = "january";
        month[1] = "february";
        month[2] = "march";
        month[3] = "april";
        month[4] = "may";
        month[5] = "june";
        month[6] = "july";
        month[7] = "august";
        month[8] = "september";
        month[9] = "october";
        month[10] = "november";
        month[11] = "december";

        var text_sheet = document.getElementById("text_sheet");
        // var text_sheet_name = document.getElementById("text_sheet_name");
        var text_inline = document.getElementById("text_inline");
        var c_status_label = document.getElementById("c_status_label");
        text_sheet.value="";
        // text_sheet_name.value="";
        text_inline.value="";
        var inline_data="";
        var plu_t_editable_blank="";
        var plu_s_status_blank="";
        var pop_sheet_input_field=document.getElementById("pop_sheet_input_field");
        pop_sheet_input_field.value="";
        var tested_count=0, created_count=0, uploaded_count=0, 
        pnf_count=0, spec_tested_count=0, spec_uploaded_count=0;
         var spec_tested_hyphen_count=0;
         var data_store_ctc=[];
         var update_data="";
         // var text_update_data=document.getElementById("text_update_data");
         // text_update_data.value="";
         // text_update_data.readOnly=true;
         var script_offline_plu="";
         var ctc_already_saved="";
         var ctc_not_evaluated="";
         var mail_sheet_inline=[];
         var mail_sheet_name=[];
         var mail_sheet_inline_count=0;
         var start_modal=document.getElementById("start_modal");
         start_modal.style.display="inline-block";
         var sheet_url_input_field=document.getElementById("sheet_url_input_field");
         sheet_url_input_field.value="";
         var audit_create_count_not_evaluated=[];
              var audit_create_count_not_evaluated_count=0;
              var audit_create_count_not_evaluated_sum=[];
      var audit_create_count=0;
      var priority_complete_count=0;
      var audit_plu_count=0;
      var audit_plu_error="";
      var audit_test_count=0;
      var text_inline_output_client="";
      text_inline.readOnly=true;
      document.getElementById("pop_sheet_skip_btn").style.display="none";
      var checkbox_top=30;
      var c_status_label_h2=document.getElementById("c_status_label_h2");



        function clear() {
          date_checked = [];
          c_status_option_checked = [];
          s_status_option_checked=[];
          sheet_data = "";
          sheet_fill_index = [];
          prop65_plu=[];
          tab_last =0;
          prop65_plu_count=0;
          creation_data_editable="",
          creation_data_not_editable="", aof_data="", pnf_data="", plu_invalid_data="";
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
        sortCtcSStatus_flag=true;
       
        dateCheckbox_flag = true;
         cStatusCheckbox_flag = false;
        query_count=0;
        audit_query_count=0;
         sStatusCheckbox_flag = false;
         filter_ctc_count =0;
         filter_s_status_count = 0;
         audit_flag=false;
         s_status_option_checked_count = 0;
         c_status_option_checked_count = 0;
         m_name_row_count=0;
         c_status_option_checked[c_status_option_checked_count]="";
         s_status_option_checked[s_status_option_checked_count]="";
        plu = [], title=[], ctc=[], query_status=[], s_status=[],t_date=[],
        m_name_row=[], gio_f=[], t_editable=[], gi_enhanced=[], giu_date=[];
        script_offline_plu="";
        row_count = 0;
        m_name_row[m_name_row_count]="";
        m_name_row_index[m_name_row_count]="";
        plu[row_count]="";
        title[row_count]="";
        ctc[row_count]="";
        query_status[row_count]="";
        s_status[row_count]="";
        t_date[row_count]="";
        gio_f[row_count]="";
        t_editable[row_count]="";
        gi_enhanced[row_count]="";
        giu_date[row_count]="";
        inline_data="";
          text_sheet.value="";
          // text_sheet_name.value="";
        text_inline.value="";
        text_sheet.readOnly=false;
        text_inline.readOnly=false;
        ctc_already_saved="";
           ctc_not_evaluated="";
         filter_date=[];
         filter_s_status = [];
         filter_ctc = [];
         plu_t_editable_blank="";
         plu_s_status_blank="";
         pop_sheet_input_field.style.display="inline-block";
         pop_sheet_input_field.value="";
         pop_sheet_input_field.style.display="none";
         tested_count=0;
          created_count=0;
          uploaded_count=0;
        pnf_count=0;
         spec_tested_count=0;
          spec_uploaded_count=0;
        spec_tested_hyphen_count=0;
        data_store_ctc=[];
        update_data="";
         // text_update_data.value="";
         query_status_checked=[];
         mail_sheet_inline=[];
         mail_sheet_name=[];
         mail_sheet_inline_count=0;
         audit_create_count_not_evaluated=[];
         audit_create_count_not_evaluated_count=0;
         audit_create_count_not_evaluated_sum=[];
         audit_create_count=0;
         priority_complete_count=0;
          checkbox_area.innerHTML="";
                ctc_checkbox_area.innerHTML="";
             audit_plu_count=0;
         audit_plu_error="";
         audit_test_count=0;  
         text_inline_output_client="";  
         document.getElementById("pop_sheet_skip_btn").style.display="none";  
        checkbox_top=30;
      }


        mailCreationDefault();
        // document.getElementById("status_mail_btn").onclick = function(){
        //   status_mail_modal.style.display='inline-block';
        //   // $(".modal-content").css({"height":"100%"});
        //   // $(".modal-content").css({"width":"90%"});
        // }
        $(".clear1").bind("click",clear);


        $("#sheet_url_skip_btn").bind("click",function(){
          start_modal.style.display="none";
        });


        $("#sheet_url_submit_btn").bind("click",function(){
          var sheet_url=[];
          var sheet_url_count=0;
          if(sheet_url_input_field.value!=""){
            var sheet_urls=sheet_url_input_field.value;
            var url_slash_index_count=0;
            for(var i=0;i>-1;i++){
              var url_slash_index=sheet_urls.indexOf("/");
              if(url_slash_index!=-1){
                
                url_slash_index_count++;
                if(url_slash_index_count==6){
                  url_slash_index_count=0;
                  sheet_url[sheet_url_count++]=sheet_urls.substring(0,url_slash_index);
                 
                }
                sheet_urls=sheet_urls.substring(url_slash_index+1,sheet_urls.length);
              }
              else
                break;
              
            }
            if(url_slash_index_count!=0)
              alert(url_slash_index_count+"Invalid Url issue of 6th slash"+sheet_urls);
            else{
              
              var sheet_url_data='var sheet_name=["';
              for(var i=0;i<sheet_url_count;i++){
                if(i==sheet_url.length-1)
                  sheet_url_data+=sheet_url[i]+'"];';
                else
                sheet_url_data+=sheet_url[i]+'","';
              }
              if(sheet_url_data!='var sheet_name=["'){
              text_inline.value=sheet_url_data;
              start_modal.style.display="none";
              window.open("https://script.google.com/a/trantorinc.com/d/M5ggcI44qyCQZD5B5VBk1ZyWPxjYXyQKs/edit?mid=ACjPJvEppFeMBzoB4fQhLzEKyuL3hFG7IzQvZogOYu6Xli9LJ41l09ykwBbOEecXs2Ux4DXrGV-F6fDPleNukEwwy_m-umlxFyVdLQsT8QSYB9ySg8ZOAigfm9QQGzqv2IBBfy7cD7zdhho&uiv=2");
            }
            else{
              alert("Invalid url");
              sheet_url_input_field.value="";
            }

            }
          }
          else
            alert("Please fill text field");

        });

        $("#pop_sheet_skip_btn").bind("click",function(){
          feature_modal.style.display="none";
      

      text_inline.value="\t\t"+current_date.getDate() + "-"+ month[current_date.getMonth()] +
       "-"+current_date.getFullYear()+"\n"+
      text_inline_output_client+
      "\n\t\tDDS\nTested\tCreated\tUploaded\tPNF\tSpec Tested\tSpec Uploaded\tSpec Hyphen\tToday's Query\n"+
      tested_count+"\t"+created_count+"\t"+uploaded_count+
      "\t"+pnf_count+"\t"+spec_tested_count+"\t"+spec_uploaded_count+
      "\t"+spec_tested_hyphen_count+"\t"+query_count;
      // text_update_data.value=update_data;
      if(script_offline_plu!="")
      alert("Plu's turned offline by script"+script_offline_plu);
         

        });

        $("#pop_sheet_submit_btn").bind("click",function(){
          
          if(dateCheckbox_flag)
          dateCheckbox();
         else if(cStatusCheckbox_flag)
          cStatusCheckbox();
        else if(sStatusCheckbox_flag)
          sStatusCheckbox();
         else{

          notEvaluatedCtcSelected();
        }
          text_sheet.value="";

        });

        function dateCheckbox() {

          var i1=0;
          for(var i=0; i<filter_date.length;i++) {
            if(filter_date[i].toLowerCase().trim()!="tested date") {
            if(document.getElementById("checkbox_"+i).checked) {
              date_checked[i1++]=document.getElementById("checkbox_"+i).value;
           

          }
        }
      }
            if(i1>0){
              // feature_modal.style.display='none';

              // for(var i=0;i<filter_date.length;i++) {
              // if(filter_date[i].toLowerCase().trim()!="tested date") {
    
               // $('label[for='+ 'checkbox_'+i+']').remove();
               // $("#checkbox_"+i).remove();
               checkbox_area.innerHTML="";
               ctc_checkbox_area.innerHTML="";
            //   }
            // }
              if(sortCtcSStatus_flag){
                 sortCtcSStatus();
                 sortCtcSStatus_flag= false;
              }
              if(filter_ctc.length>0)
                sortCtc(filter_ctc, filter_ctc_count);
              else
                if(filter_s_status.length>0)
                  sortSStatus();
                else {
                  feature_modal.style.display="none";
                  if(m_name_row_count==0)
                    inlineTableWrite();
                  else
                    inlineTableWriteClient();
                	if(prop65_plu_count>0)
                		alert("Plu's for which we need to add Prop65\n"+prop65_plu);
                }
          }
          else
            alert("Please select atleast one option - Date");
        }

        function cStatusCheckbox() {
       lbl: {
          if(document.getElementById("checkbox_query_yes").checked&&
            document.getElementById("checkbox_query_no").checked){
            alert("Please select only one option in Query");
            break lbl;
        }
          else
            if(!(document.getElementById("checkbox_query_yes").checked||
            document.getElementById("checkbox_query_no").checked)){
              alert("Please select Query as 'Yes/No'");
              break lbl;

            }
            var filter_ctc1=[];
            var filter_ctc2=[];
            var filter_ctc1_count=0;
            var filter_ctc2_count=0;
            var filter_ctc_check_count=0;
            // pop_sheet_input_field.value="";
            for(var i_not=0;i_not<filter_ctc.length;i_not++) {
              if(i_not<filter_ctc_count){
                filter_ctc1[filter_ctc1_count]=filter_ctc[i_not];
                filter_ctc1_count++;
                continue;
              }
              else if(document.getElementById("checkbox_ctc"+i_not).checked) {
                filter_ctc1[filter_ctc1_count]=filter_ctc[i_not];
                filter_ctc1_count++;
                // filter_ctc_count++;
                filter_ctc_check_count++;
              }
              else {
                filter_ctc2[filter_ctc2_count]=filter_ctc[i_not];
                filter_ctc2_count++;
                continue;
              }
                

          for(var i=0; i<c_status_option.length;i++) {
            if(document.getElementById("checkbox_"+i).checked) {
                if(c_status_option_checked[c_status_option_checked_count]==""){
              c_status_option_checked[c_status_option_checked_count]+=
              document.getElementById("checkbox_"+i).value;
              if(document.getElementById("checkbox_query_yes").checked)
                query_status_checked[c_status_option_checked_count]="yes";
              if(document.getElementById("checkbox_query_no").checked)
                query_status_checked[c_status_option_checked_count]="no";
              // alert(query_status_checked[c_status_option_checked_count]);
            }
              else {
                      c_status_option_checked[c_status_option_checked_count]+=" And "+
                      document.getElementById("checkbox_"+i).value;
                      if(document.getElementById("checkbox_query_yes").checked)
                      query_status_checked[c_status_option_checked_count]="yes";
                    if(document.getElementById("checkbox_query_no").checked)
                      query_status_checked[c_status_option_checked_count]="no";
                    // alert(query_status_checked[c_status_option_checked_count]);
                      var option_checked=ctcSStatusComboCheck(c_status_option_checked[c_status_option_checked_count]);
                      if(option_checked==1) {
                          c_status_option_checked[c_status_option_checked_count]="";
                          break lbl;
                      }
                  
                  }
            }
         
          }
          if(c_status_option_checked[c_status_option_checked_count]===undefined)
            break lbl;

          if(c_status_option_checked[c_status_option_checked_count]=="Text Field"){
            
            c_status_option_checked[c_status_option_checked_count]=pop_sheet_input_field.value;
           
         }
            if(c_status_option_checked[c_status_option_checked_count]!="") {

              // pop_sheet_input_field.value="";
                if(c_status_option_checked[c_status_option_checked_count]==
                    "Title Updated And Gallery Image Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Title And Gallery Image Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Title Updated And Gallery Images Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Title And Gallery Images Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Disclaimer Updated And Gallery Image Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Disclaimer And Gallery Image Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Disclaimer Updated And Gallery Images Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Disclaimer And Gallery Images Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Title Updated And Disclaimer Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Title And Disclaimer Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Title Updated And Category Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Title And Category Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Disclaimer Updated And Category Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Disclaimer And Category Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Category Updated And Gallery Image Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Category And Gallery Image Updated";
                else if(c_status_option_checked[c_status_option_checked_count]==
                    "Category Updated And Gallery Images Updated")
                    c_status_option_checked[c_status_option_checked_count]=
                "Category And Gallery Images Updated";

                data_store_ctc[c_status_option_checked_count]=new Array(2);
            data_store_ctc[c_status_option_checked_count][0]=
            filter_ctc[i_not];

            data_store_ctc[c_status_option_checked_count][1]=
            c_status_option_checked[c_status_option_checked_count];
            if(!(query_status_checked[c_status_option_checked_count]=="yes")){
            update_data+='\nelse\nif(ctc[temp_i].toLowerCase().trim()==\n"'+
              data_store_ctc[c_status_option_checked_count][0].toLowerCase().trim()
              +'"){\nctc[temp_i]="'+
              data_store_ctc[c_status_option_checked_count][1].trim()+'";\nquery_status[temp_i]="'+
              query_status_checked[c_status_option_checked_count]+'";}';
            }
            else{
              update_data+='\nelse\nif(ctc[temp_i].toLowerCase().trim()==\n"'+
              data_store_ctc[c_status_option_checked_count][0].toLowerCase().trim()
              +'"){\nctc[temp_i]="'+
              data_store_ctc[c_status_option_checked_count][1].trim()+'";\nquery_status[temp_i]="'+
              query_status_checked[c_status_option_checked_count]+'";\nif(!(audit_flag))\n;\nelse\naudit_query_count++;\n}';
            }

        
            // console.log(data_store_ctc[c_status_option_checked_count][0]+"\n")
            //   console.log(data_store_ctc[c_status_option_checked_count][1]+"\n");
            

              c_status_option_checked_count++;
              c_status_option_checked[c_status_option_checked_count]="";
              filter_ctc_count++;
                     
          //   }
          // }
              // feature_modal.style.display='none';
              // for(var i=0;i<c_status_option.length;i++) {
    
    
               // $('label[for='+ 'checkbox_'+i+']').remove();
               // $("#checkbox_"+i).remove();
            
          }
          else{
            alert("Please select atleast one option or fill text field - Creation");
            break lbl;
            }
                 
              // }
              
            
            }
            if(i_not==filter_ctc.length) {
                filter_ctc=[];
                filter_ctc = filter_ctc1.concat(filter_ctc2);
                
                if(filter_ctc_count<filter_ctc.length) {
                  if(filter_ctc_check_count==0){
                    alert("Please select atleast one Chandigarh Team Comment");
                    break lbl;
                  }
                checkbox_area.innerHTML="";
                ctc_checkbox_area.innerHTML="";
                sortCtc(filter_ctc, filter_ctc_count);
                }
                else
              {
                checkbox_area.innerHTML="";
                ctc_checkbox_area.innerHTML="";
                
                // cStatusCheckbox_flag= false;
                // sStatusCheckbox_flag=true;
                if(filter_s_status.length>0)
                  sortSStatus();
                else
                {
                  feature_modal.style.display="none";
                  if(m_name_row_count==0)
                    inlineTableWrite();
                  else
                    inlineTableWriteClient();
                if(prop65_plu_count>0)
                    alert("Plu's for which we need to add Prop65\n"+prop65_plu);
                }
            }
              }

          }
        } 
        

    

        function ctcSStatusComboCheck(option_checked) {
            
            if(option_checked.indexOf("Created And Uploaded")!==-1||
                option_checked.indexOf("Created And Uploaded Offline")!==-1||
                option_checked.indexOf("Already On Fry's")!==-1||
                option_checked.indexOf("Product Not Found")!==-1||
                option_checked.indexOf("Source Not Found")!==-1||
                option_checked.indexOf("Plu Not Found In Oracle Database..!")!==-1||
                option_checked.indexOf("Plu is Deleted")!==-1||
                option_checked.indexOf("Remove Plu From Inline Table")!==-1||
                option_checked.indexOf("Invalid Plu")!==-1||
                option_checked.indexOf("Text Field")!==-1
                ) {
                alert("Invalid combination for Chandigarh Team Comment. Please select correct options");
                return 1;
        }
            else
                return 0;
        }

         function sStatusCheckbox() {
               lbl: {
          for(var i=0; i<s_status_option.length;i++) {
              if(s_status_option_checked[s_status_option_checked_count]!=""&&document.getElementById("checkbox_"+i).checked) {
                  alert("Invalid combination for Specification Status. Please select correct options");
                  s_status_option_checked[s_status_option_checked_count]="";
                  break lbl;
              }
            if(document.getElementById("checkbox_"+i).checked)
              s_status_option_checked[s_status_option_checked_count]=document.getElementById("checkbox_"+i).value;

          }
          if(s_status_option_checked[s_status_option_checked_count]=="Text Field")
            s_status_option_checked[s_status_option_checked_count]=pop_sheet_input_field.value;

            if(s_status_option_checked[s_status_option_checked_count]!=""){
              pop_sheet_input_field.value="";
              // for(var i=0;i<s_status_option.length;i++) {
    
    
               // $('label[for='+ 'checkbox_'+i+']').remove();
               // $("#checkbox_"+i).remove();
               checkbox_area.innerHTML="";
               ctc_checkbox_area.innerHTML="";
              // }
              if(filter_s_status_count<filter_s_status.length) {
                sortSStatus();
              }
            else
              {
                // cStatusCheckbox_flag= false;
                // sStatusCheckbox_flag=true;
                feature_modal.style.display="none";
                if(m_name_row_count==0)
                    inlineTableWrite();
                  else
                    inlineTableWriteClient();
                if(prop65_plu_count>0)
                		alert("Plu's for which we need to add Prop65\n"+prop65_plu);
            }
            s_status_option_checked_count++;
            s_status_option_checked[s_status_option_checked_count]="";
          }
          else
            alert("Please select atleast one option or fill text field - specification");
            }
        }


        $(".clic").bind("click", function(){
          var temp_sheet = text_sheet.value;
          // var temp_sheet_name = text_sheet_name.value;
          // if(text_sheet_name===undefined)
          //   text_sheet_name="";

          if(temp_sheet===undefined)
            temp_sheet="";
     

          if(temp_sheet !=""&& (!(text_sheet.readOnly)))
          {
            alert('Have you replaced double quotes with &#34;');
            text_sheet.readOnly=true;
        text_inline.readOnly=true;
            sheetHead();
        }
        else
          alert("Please fill 'Enter Sheet Data' field and try again / Press Clear Button");
        });

    function sheetHead() {
      
            var quote_flag=false;
            sheet_data = text_sheet.value;
            var sheet_data_temp = "";
          var tab_count = 0;
          var i=0;
            for(; i<sheet_data.length; i++) {
            // alert(sheet_data.length);
         

                if(sheet_data.substring(i,i+1) == "\t"||sheet_data.substring(i,i+1) == "\n") {
              // alert(sheet_data_temp);
       
         
       
                if((sheet_data_temp).trim().toLowerCase() == "plu")
                    sheet_fill_index[0] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "old title")
                    sheet_fill_index[1] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "new title")
                    sheet_fill_index[2] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "chandigarh team comment")
                    sheet_fill_index[3] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "specification status")
                    sheet_fill_index[4] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "tested date")
                    sheet_fill_index[5] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "# gallery images on frys.com")
                    sheet_fill_index[6] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "# gallery images enhanced")
                    sheet_fill_index[7] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "gallery images uploaded date")
                    sheet_fill_index[8] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "mail name")
                    sheet_fill_index[9] = tab_count;
                else if((sheet_data_temp).trim().toLowerCase() == "title editable")
                    sheet_fill_index[10] = tab_count;
            
                else
                    ;
                 
            }
               if(sheet_data.substring(i,i+1) == "\n") {
                  tab_last= tab_count;
                  
                break;
              }
                if(sheet_data.substring(i,i+1) == "\t") {
                    sheet_data_temp = "";
                    tab_count++;
                }
                sheet_data_temp=sheetReadLoop();
                sheet_data_temp = sheet_data_temp.trim();
               
            }
            var temp_not_found = "";
            if(sheet_fill_index[0]=="")
                temp_not_found +="plu\n";
            if(sheet_fill_index[1]=="")
                temp_not_found +="old title\n";
            if(sheet_fill_index[2]=="")
                temp_not_found +="new title\n";
            if(sheet_fill_index[3]=="")
                temp_not_found +="Chandigarh Team Comment\n";
            if(sheet_fill_index[4]=="")
                temp_not_found +="Specification Status\n";
            if(sheet_fill_index[5]=="")
                temp_not_found +="tested date\n";
            if(sheet_fill_index[6]=="")
                temp_not_found +="# gallery images on frys.com\n";
            if(sheet_fill_index[7]=="")
                temp_not_found +="# Gallery Images Enhanced\n";
            if(sheet_fill_index[8]=="")
                temp_not_found +="Gallery Images Uploaded Date\n";
            if(sheet_fill_index[9]==="")
                temp_not_found +="Mail Name\n";
            if(sheet_fill_index[10]=="")
                temp_not_found +="Title Editable\n";
          
       
            if(temp_not_found!="") {
              temp_not_found += "\nNot Detected";
              alert(temp_not_found);
         
            }
            // alert(sheet_fill_index[0]+" "+sheet_fill_index[1]+" "+sheet_fill_index[2]+" "+sheet_fill_index[3]+" "+
            //   sheet_fill_index[4]+" "+sheet_fill_index[5]+" "+sheet_fill_index[6]+" "+
            //   sheet_fill_index[7]+" "+sheet_fill_index[8]+"    "+tab_last);
            inlineTableRead(i);
            function sheetReadLoop() {
                  // var garbage= '"';
                  // alert(garbage.charCodeAt());
                  var temp_sheet_fill_data = "";
                  var i1=i+1;
                  if(i==0)
                    i1=i;
                  for(; i1<sheet_data.length; i1++) {
                    
                    if(sheet_data.substring(i1,i1+1)=='"') {
                      quote_flag = !(quote_flag);
                  }
                    if((sheet_data.substring(i1,i1+1)=="\t"||sheet_data.substring(i1,i1+1)=="\n")
                      && (!(quote_flag))) {
                    //   if(temp_sheet_fill_data!="")
                    //   i=i1-2;
                    // else
                    //   i=i1-1;
                    i=i1-1;
                      return temp_sheet_fill_data;
                    }
              //       if(row_count>92) {
              // alert(sheet_data.substring(i1,i1+1));
            // }
                    temp_sheet_fill_data += sheet_data.substring(i1,i1+1);
                  }
                }
    }

  function inlineTableRead(index) {
    
      var tab_count = 0;
      var quote_flag=false;
        for(var i=0;i<sheet_data.length;i++) {
         

        // if((sheet_data.substring(i,i+1)=='"')&&(sheet_data.substring(i-1,i)=="\t"||
        //               sheet_data.substring(i+1,i+2)=="\t"))
        //   quote_flag = !quote_flag;

        if((tab_count==0&&sheet_fill_index[9]=="0")&&
      (sheet_data.substring(i,i+1)=="\n")) {
      // alert("tab_count 0");
            m_name_row[m_name_row_count] = sheetReadLoop();
           
            if(m_name_row[m_name_row_count]!=""&&m_name_row[m_name_row_count]!="\n"&&
              m_name_row[m_name_row_count]!="\t") {
              m_name_row_index[m_name_row_count]=row_count;
            

              m_name_row_count++;
            }
          }
 
            if((sheet_data.substring(i,i+1)) == "\t") {
              tab_count++;
              if(tab_count==sheet_fill_index[0]) {
               plu[row_count] = sheetReadLoop();
               plu[row_count] = plu[row_count].trim();
              }
             else if(tab_count==sheet_fill_index[1]) {
              title[row_count] = sheetReadLoop();
              if(title[row_count].indexOf('"')==0)
                title[row_count]=title[row_count].slice(1, title[row_count].length-1);
              title[row_count] = title[row_count].trim();
            }
            else if(tab_count==sheet_fill_index[2]) {
              var temp_title = sheetReadLoop();
              if(temp_title.indexOf('"')==0)
                temp_title=temp_title.substring(1, temp_title.length-1);

              if(temp_title.trim()!=""&&temp_title.trim()!="-"&&
                  temp_title.toLowerCase().trim()!="na"&&temp_title.trim()!=title[row_count]) {
              title[row_count] = temp_title;
            title[row_count]=title[row_count].trim();
            
              }
              else
                t_editable[row_count]="-";
            }

            else if(tab_count==sheet_fill_index[3]) {
              ctc[row_count] = sheetReadLoop();
              ctc[row_count] =ctc[row_count].trim();
              query_status[row_count]="no";
            }
          else if(tab_count==sheet_fill_index[4]) {
              s_status[row_count] = sheetReadLoop();
              s_status[row_count]= s_status[row_count].trim();
            }
          else if(tab_count==sheet_fill_index[5]) {
              t_date[row_count] = sheetReadLoop();
              t_date[row_count]=t_date[row_count].trim().toLowerCase();
              sortDate(t_date[row_count]);
              
            }
          else if(tab_count==sheet_fill_index[6])
              gio_f[row_count] = sheetReadLoop();
            else if(tab_count==sheet_fill_index[7])
              gi_enhanced[row_count] = sheetReadLoop();
            else if(tab_count==sheet_fill_index[8])
              giu_date[row_count] = sheetReadLoop();
            else if(tab_count==sheet_fill_index[10])
              t_editable[row_count] = sheetReadLoop();
            else
              sheetReadLoop();
 
               

    }

    if(tab_count==tab_last) {
       
            row_count++;
            tab_count=0;
            // alert(sheet_data.substring(i+1,i+30))
          }
      else if(tab_count>tab_last)
            alert("error at" + tab_count);

   

      function sheetReadLoop() {
                  // var garbage= '"';
                  // alert(garbage.charCodeAt());
                  var temp_sheet_fill_data = "";
                  for(var i1=i+1; i1<sheet_data.length; i1++) {
                    if(sheet_data.substring(i1,i1+1)=='"') {
                      quote_flag = !(quote_flag);
                  }
                    if((sheet_data.substring(i1,i1+1)=="\t"||sheet_data.substring(i1,i1+1)=="\n")
                      && (!(quote_flag))) {
                    //   if(temp_sheet_fill_data!="")
                    //   i=i1-2;
                    // else
                    //   i=i1-1;
                    i=i1-1;
                      return temp_sheet_fill_data;
                    }
              //       if(row_count>92) {
              // alert(sheet_data.substring(i1,i1+1));
            // }
                    temp_sheet_fill_data += sheet_data.substring(i1,i1+1);
                  }
                }
     
         
 
        }
   
       
        // filter_date.sort(function(a, b){return b-a});
        // console.log(plu);
        // console.log(title);
        // console.log(t_date);
        // console.log(ctc);
        // console.log(s_status);
        // orderFilterDate();
       filterDateSort();
    //     filter_date.sort(function (a, b) {
    //     var aa = a.split('-'),
    //         bb = b.split('-');
    //        // alert(aa[0]+" "+aa[1]+" "+aa[2]);
    //     return aa[2] - bb[2] || month[aa[1]] - month[bb[1]] || aa[0] - bb[0];
    // });

        function filterDateSort() {
          
          var filter_date_rating=[];
          filter_date_rating[0]=0;
          for(var i=1; i<filter_date.length; i++) {
            var temp_filter_date=filter_date[i].split('-');
            if(temp_filter_date[1]=="january")
              temp_filter_date[1]=0;
            else if(temp_filter_date[1]=="february")
              temp_filter_date[1]=31;
            else if(temp_filter_date[1]=="march")
              temp_filter_date[1]=59;
            else if(temp_filter_date[1]=="april")
              temp_filter_date[1]=90;
            else if(temp_filter_date[1]=="may")
              temp_filter_date[1]=120;
            else if(temp_filter_date[1]=="june")
              temp_filter_date[1]=151;
            else if(temp_filter_date[1]=="july")
              temp_filter_date[1]=181;
            else if(temp_filter_date[1]=="august")
              temp_filter_date[1]=212;
            else if(temp_filter_date[1]=="september")
              temp_filter_date[1]=243;
            else if(temp_filter_date[1]=="october")
              temp_filter_date[1]=273;
            else if(temp_filter_date[1]=="november")
              temp_filter_date[1]=304;
            else if(temp_filter_date[1]=="december")
              temp_filter_date[1]=334;
            else
              alert("Incorrect Date");
            if(temp_filter_date[2].length==2){

              temp_filter_date[2]="20"+temp_filter_date[2];
            }
            filter_date_rating[i]=parseInt(temp_filter_date[0])+
            parseInt(temp_filter_date[2])+parseInt(temp_filter_date[1]);
            
          }
          // alert(filter_date_rating);
          var filter_date_rating_sort=[];
	         	
	         filter_date_rating_sort = filter_date_rating.slice();	

            // filter_date_rating_sort=filter_date_rating;
            filter_date_rating_sort.sort(function(a, b){return a-b});
            // alert(filter_date_rating_sort);
            // filter_date_rating=String(filter_date_rating);
            // filter_date_rating_sort=String(filter_date_rating_sort);
            var filter_date_rating_sort_index=[];
            for(var i=0; i<filter_date_rating.length;i++) {
              // alert(i);
              var temp_filter_date_rating_sort=parseInt(filter_date_rating_sort[i]);
            filter_date_rating_sort_index[i]=
            filter_date_rating.indexOf(temp_filter_date_rating_sort);
            filter_date_rating[filter_date_rating_sort_index[i]]="-";
            // alert(filter_date_rating_sort[i]);
          }
          // alert(filter_date_rating+"\n"+filter_date_rating_sort);
          // alert(filter_date_rating_sort_index);
          	var temp_filter_date = filter_date.slice();	
        
            for(var i=0; i<temp_filter_date.length;i++) {
              filter_date[i]=temp_filter_date[filter_date_rating_sort_index[i]];
            }
            
          // var least=0, greatest=0;
          // var filter_date_rating_sort=[];
          // for(var i=0; i<filter_date.length; i++) {
          //   for(var i1=0; i1<filter_date_rating.length; i1++) {
          //     if(filter_date_rating[i1]>least) {
          //       least=filter_date_rating[i1];
              
          //     least_index=i1;
          //     }
          //   }
          //   least+=1;
          //   filter_date_rating_sort[i]=least_index;
          // }
        }
        
        pop_sheet_input_field.style.display="none";
        c_status_label_h2.innerHTML = "Select Date";
        var checkbox_break=0;
        checkbox_top=25;
        for(var i=0;i<filter_date.length;i++) {

         
          if(filter_date[i].toLowerCase().trim()!="tested date") {

            

          var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.name = "name";
          checkbox.value = filter_date[i];
          checkbox.id = "checkbox_"+i;
         
          var label = document.createElement('label');
          label.htmlFor = "checkbox_"+i;
          label.appendChild(document.createTextNode(filter_date[i]));
          label.id="label_"+i;
          checkbox_area.appendChild(checkbox);
          checkbox_area.appendChild(label);
          if(checkbox_break+1==i) {
            $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
           $("#checkbox_"+i).css({"left":"5%"});
          $("#label_"+i).css({"left":"7%"});
          $("#checkbox_"+i).css({"top":(checkbox_top-5)});
          $("#label_"+i).css({"top":checkbox_top});
         
        
        }
          if(checkbox_break+2==i) {
            $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
            $("#checkbox_"+i).css({"left":"35%"});
             $("#label_"+i).css({"left":"37%"});
             $("#checkbox_"+i).css({"top":(checkbox_top-5)});
          $("#label_"+i).css({"top":checkbox_top});
          }
          if(checkbox_break+3==i) {
          checkbox_area.appendChild(document.createElement("br"));   
          $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
          $("#checkbox_"+i).css({"left":"65%"});
          $("#label_"+i).css({"left":"67%"});
          $("#checkbox_"+i).css({"top":(checkbox_top-5)});
          $("#label_"+i).css({"top":checkbox_top});
          checkbox_break+=3;
          checkbox_top+=50;
        }
          // $("label").css({"margin-right":"9.6%"});
        }

      
      }

        feature_modal.style.display='inline-block';
        // $(".modal-content").css({"height":"100%"});
      $("#pop_sheet_submit_btn").css({"top":checkbox_top+120});
      $("#pop_sheet_submit_btn").css({"left":"48%"});
        pluDublicate();
    }

    // function orderFilterDate() {

    // }

    function sortDate(new_date) {
      
      var i=0;
      
      for(; i<filter_date.length; i++) {
        if(new_date==filter_date[i])
          break;
      }
      if(new_date==""||new_date=="-")
        ;
      else if(i==filter_date.length)
      filter_date[i]=new_date;
      
    }

    function sortCtcSStatus() {

      for(var i=0; i<row_count;i++) {
   
        for(var i1=0;i1<date_checked.length;i1++) {
          if(t_date[i]==date_checked[i1]) {
              if(t_editable[i]=="")
              	plu_t_editable_blank+=plu[i]+"\n";
              if(s_status[i]=="")
                	plu_s_status_blank+=plu[i]+"\n";
              if(!(s_status.length==1&&s_status[0]=="")) {
                
                var i2=0;
              for(; i2<filter_s_status.length; i2++) {
                if(s_status[i]==filter_s_status[i2])
                  break;
              }
              if(i2==filter_s_status.length&&
                  (s_status[i].toLowerCase().trim()!="uploaded"&&
                  s_status[i].toLowerCase().trim()!="already uploaded"&&
                  s_status[i].toLowerCase().trim()!="-")){
                
                filter_s_status[i2]=s_status[i];
              }
              

            }

            if(ctc.length>0) {
              i2=0;
              for(; i2<filter_ctc.length; i2++) {
                if(ctc[i]==filter_ctc[i2])
                  break;
              }
              if(i2==filter_ctc.length&&(ctc[i].toLowerCase().trim()!="already on fry's"&&
                  ctc[i].toLowerCase().trim()!="product not found"&&
                  ctc[i].toLowerCase().trim()!="source not found"&&
                  ctc[i].toLowerCase().trim()!="plu not found in oracle database..!"&&
                  ctc[i].toLowerCase().trim()!="invalid plu")){
                   
                      updatedCtc(i, i2);
                  }
                }
            }
          }

      }
      if(plu_s_status_blank!="")
      alert("Specification Status is blank for plu\n"+plu_s_status_blank);
  
  		if(plu_t_editable_blank!="")
      		alert("Title Editable is blank for plu\n"+plu_t_editable_blank);
    }

    function updatedCtc(temp_i, temp_i2){
      var else_flag=true;
        var temp_ctc=ctc[temp_i];
          if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created, title updated, gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
          } 

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created & gallery image added, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created & gallery image enhanced and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created & gallery image enhanced and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created & gallery image added, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created & gallery image enhanced and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created & gallery image enhanced and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created,gallery images enhanced & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created & gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created, gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created & gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created & gallery image added, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
          
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created , gallery image enhanced and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "lower description updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "lower description created & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description crerated, title updated and gallery image enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description crerated, title updated and gallery image enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created and gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created, title updated and gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "(review) upper and lower description created, title updated and gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

        else
        if(ctc[temp_i].toLowerCase().trim()==
        "upper and lower description created, gallery image enhanced and title updated"){
        ctc[temp_i]="Created And Uploaded";
        query_status[temp_i]="no";}
        else
        if(ctc[temp_i].toLowerCase().trim()==
        "upper & lower description created and title updated, gallery images added"){
        ctc[temp_i]="Created And Uploaded";
        query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, lower description created, title updated, gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated, title updated, gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated and gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, title updated and gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, gallery images added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper created, title updated and image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery images enhanced, title updated"){
          ctc[temp_i]="Title And Gallery Images Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated & lower description created, title updated & gallery images enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, title updated & gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already on fry's, title updated"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already on fry's, (product not found)"){
          ctc[temp_i]="Already On Fry's";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already on fry's (upper recreated)"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created and gallery images added (review)"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created and gallery images added, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and gallery images added, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created and gallery images added , title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and gallery images added , title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, title updated and gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery images enhanced"){
          ctc[temp_i]="Gallery Image Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated, title updated and gallery image readded"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "(low resolution image) upper description recreated,title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "(low resolution image) upper description recreated, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated from frys, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated from frys"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery image added, upper description recreated, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created,title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "(low resolution image) upper description created,title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, lower description removed, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, gallery image enhanced & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and gallery image enhanced, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title updated, already on frys"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery image replaced"){
          ctc[temp_i]="Gallery Image Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "lower descripiton removed, already on frys"){
          ctc[temp_i]="Already On Fry's";
          query_status[temp_i]="no";}
            
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated,title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and title updated from gallery image"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}


          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, gallery images added, title updated. (review)"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & description created, gallery images added, title updated."){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created,title updated, gallery images added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created, gallery images added, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}


            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created (plu not found in oracle database..!)"){
            ctc[temp_i]="Plu Not Found In Oracle Database..!";
            query_status[temp_i]="yes";
            if(!(audit_flag))
            ;
            else
            audit_query_count++;
            }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated,gallery image enhanced & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description enahnced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description enahnced and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, title updated & galler image enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already on fry's , title updated"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "plu not found in oracle databse"){
          ctc[temp_i]="Plu Not Found In Oracle Database..!";
          query_status[temp_i]="yes";
          if(!(audit_flag))
          ;
          else
          audit_query_count++;
          }


          else
          if(ctc[temp_i].toLowerCase().trim()==
          "tile updated"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, gallery added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}


          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created and gallery images enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "lower description created and gallery images enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created,gallery images added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created, title updated & gallery images added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description re-created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, title updated & gallery images added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated & lower description created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "lower description created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and gallery images added, tilte created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title updated, upper description recreated and lower description removed"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and gallery images added, tilte updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created and gallery images added, tilte updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created and gallery images added, tilte created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "(review for product) upper description created and gallery images added, tilte created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and gallery images added, title created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, title updated & gallery images added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated, title updated & gallery images added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, gallery images added and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, gallery images added and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created and gallery images added, title created"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description rereated and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title updated, upper and lower description already on frys"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title recreated"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title updated & gallery image added"){
          ctc[temp_i]="Title And Gallery Image Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already on fry's ( lower description removed )"){
          ctc[temp_i]="Already On Fry's";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "(query for art & review) upper description created, title updated"){
          ctc[temp_i]="Created And Uploaded Offline";
          query_status[temp_i]="yes";
          if(!(audit_flag))
          ;
          else
          audit_query_count++;
          }

            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created, gallery image updated & title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper descripiton recreated, lower description created & gallery image enhanced, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "lower description created & gallery image enhanced"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, title updated & gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}



            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created , title updated & gallery images added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "query for product"){
            ctc[temp_i]="Remove Plu From Inline Table";
            query_status[temp_i]="yes";
            if(!(audit_flag))
            ;
            else
            audit_query_count++;
            }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "aleady on fry's"){
            ctc[temp_i]="Already On Fry's";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "(query for art) upper description created, title updated"){
            ctc[temp_i]="Created And Uploaded Offline";
            query_status[temp_i]="yes";
            if(!(audit_flag))
            ;
            else
            audit_query_count++;
            }

            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description recreated, title updated & gallery image enhanced"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, title updated & gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, gallery image added & title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created & title updated (query for art)"){
            ctc[temp_i]="Created And Uploaded Offline";
            query_status[temp_i]="yes";
            if(!(audit_flag))
            ;
            else
            audit_query_count++;
            }


            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created, gallery images added and title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
          else
            if(ctc[temp_i].toLowerCase().trim()==
            "gallery image enhanced and title updated"){
            ctc[temp_i]="Title And Gallery Image Updated";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description recreated & title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description recreated and title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, title updated and gallery image enhanced"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, gallery image enhanced & title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created,gallery images added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "product not found in oracle database"){
          ctc[temp_i]="Plu Not Found In Oracle Database..!";
          query_status[temp_i]="yes";
          if(!(audit_flag))
          ;
          else
          audit_query_count++;
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper recreated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper recreated, gallery images added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, gallery image added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, gallery image added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created, gallery image added, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description recreated, lower description created, gallery images added, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "title updated (already on fry's)"){
            ctc[temp_i]="Title Updated";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "gallery image enhanced"){
            ctc[temp_i]="Gallery Image Updated";
            query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created, title updated, gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already on fry's,product not found"){
          ctc[temp_i]="Already On Fry's";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already on fry's,title updated"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery image enhanced,title updated"){
          ctc[temp_i]="Title And Gallery Image Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title updated (already on fry's)"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "plu not found in oracle database"){
          ctc[temp_i]="Plu Not Found In Oracle Database..!";
          query_status[temp_i]="yes";
          if(!(audit_flag))
          ;
          else
          audit_query_count++;
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, lower description recreated from frys"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upperand lower description recreated, gallery images replaced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description recreated, gallery images replaced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, gallery images replaced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created ,gallery image added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created and gallery image added, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, gallery image added and title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper descripton created & title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created & title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery images updated"){
          ctc[temp_i]="Gallery Images Updated";
          if(!(audit_flag)
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, title updated(review)"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
        else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created and gallery images updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
                    
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "already sent query"){
          ctc[temp_i]="Remove Plu From Inline Table";
          query_status[temp_i]="no";
          if(!(audit_flag))
          ;
          else
          audit_query_count++;
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated, gallery images enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated, gallery images added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, gallery images added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created,gallery image added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "review"){
          ctc[temp_i]="Remove Plu From Inline Table";
          query_status[temp_i]="yes";
          if(!(audit_flag))
          ;
          else
          audit_query_count++;
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, gallery images added, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery image updated"){
          ctc[temp_i]="Gallery Image Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "query"){
          ctc[temp_i]="Remove Plu From Inline Table";
          query_status[temp_i]="yes";
          if(!(audit_flag))
          ;
          else
          audit_query_count++;
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "gallery images added and titlle updated"){
          ctc[temp_i]="Title And Gallery Images Updated";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title updated and upper & lower recreated and gallery images added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created, gallery image added and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description recreated, gallery image replaced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated, gallery image enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper description created, gallery image added, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper, lower description created , image added and  title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper, lower description created  and  title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper, lower description created, image added  and  title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper, lower description created and  title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description added and  title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, gallery images added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "(plu not found in oracle database..!) upper & lower description created, title updated"){
            ctc[temp_i]="Plu Not Found In Oracle Database..!";
            query_status[temp_i]="yes";
            if(!(audit_flag))
            ;
            else
            audit_query_count++;
            }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper created, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description recreated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created, title updated, gallery image enhanced"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
      }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper, lower description created, image added and  title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "turned online"){
          ctc[temp_i]="Turned Online";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper, lower description and image added and  title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created, images added and title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
      }

          else
          if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, title updated, gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
      }
        
        else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created and gallery image added, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
      }
          else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, title updated, gallery image enhanced"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
          else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created, title updated and gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
          else
            if(ctc[temp_i].toLowerCase().trim()==
            "plu not found in oracle database!"){
            ctc[temp_i]="Plu Not Found In Oracle Database..!";
            query_status[temp_i]="yes";
            if(!(audit_flag)) 
              ;
           else
          audit_query_count++;
        }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created, gallery image enhanced"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created & gallery image enhanced"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
           
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created & gallery images added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created and gallery image enhanced, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "title updated"){
          ctc[temp_i]="Title Updated";
          query_status[temp_i]="no";
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description recreated, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
          }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "lower description recreated, title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";
          }

          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper and lower description created , title updated and gallery image added"){
          ctc[temp_i]="Created And Uploaded";
        query_status[temp_i]="no";
      }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created, title updated"){
          ctc[temp_i]="Created And Uploaded";
        query_status[temp_i]="no";
      }
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created and title updated"){
          ctc[temp_i]="Created And Uploaded";
        query_status[temp_i]="no";
      }


            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created, gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created and gallery images added, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created and gallery image added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created and gallery images added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";
        }
        else
          if(ctc[temp_i].toLowerCase().trim()==
          "lower description recreated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created,gallery image added"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          else
          if(ctc[temp_i].toLowerCase().trim()==
          "upper & lower description created,gallery image added & title updated"){
          ctc[temp_i]="Created And Uploaded";
          query_status[temp_i]="no";}
          
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper and lower description created, gallery images added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "(query regarding art)upper and lower description created"){
            ctc[temp_i]="Created And Uploaded Offline";
            query_status[temp_i]="yes";
            if(!(audit_flag))
            ;
            else
            audit_query_count++;
            }

            else
            if(ctc[temp_i].toLowerCase().trim()==
            "already on frys"){
            ctc[temp_i]="Already On Fry's";
            query_status[temp_i]="no";}

            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, title updated, gallery images added"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper description created, gallery image added title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "upper & lower description created, gallery image added, title updated"){
            ctc[temp_i]="Created And Uploaded";
            query_status[temp_i]="no";}
            else
            if(ctc[temp_i].toLowerCase().trim()==
            "gallery image added,category assigned"){
            ctc[temp_i]="Category And Gallery Image Updated";
          query_status[temp_i]="no";}

                      else
            if(!(audit_flag)) 
          filter_ctc[temp_i2]=ctc[temp_i];
        else{
          else_flag=false;
          if(ctc[temp_i].toLowerCase().trim()=="created and uploaded"||
          ctc[temp_i].toLowerCase().trim()=="created and uploaded offline"||
          ctc[temp_i].toLowerCase().trim()=="disclaimer updated"||
          ctc[temp_i].toLowerCase().trim()=="title and gallery image updated"||
          ctc[temp_i].toLowerCase().trim()=="title and gallery images updated"||
          ctc[temp_i].toLowerCase().trim()=="disclaimer and gallery image updated"||
          ctc[temp_i].toLowerCase().trim()=="disclaimer and gallery images updated"||
          ctc[temp_i].toLowerCase().trim()=="title and disclaimer updated"||
          ctc[temp_i].toLowerCase().trim()=="title and category updated"||
          ctc[temp_i].toLowerCase().trim()=="disclaimer and category updated"||
          ctc[temp_i].toLowerCase().trim()=="category updated"||
          ctc[temp_i].toLowerCase().trim()=="gallery image updated"||
          ctc[temp_i].toLowerCase().trim()=="gallery images updated"||
          ctc[temp_i].toLowerCase().trim()=="turned offline"||
          ctc[temp_i].toLowerCase().trim()=="extra category removed"||
          ctc[temp_i].toLowerCase().trim()=="already on fry's"||
          ctc[temp_i].toLowerCase().trim()=="title updated")
            ;
            else if(ctc[temp_i].toLowerCase().trim()=="product not found"||
          ctc[temp_i].toLowerCase().trim()=="source not found"||
          ctc[temp_i].toLowerCase().trim()=="plu not found in oracle database..!"||
          ctc[temp_i].toLowerCase().trim()=="plu is deleted"||
          ctc[temp_i].toLowerCase().trim()=="invalid plu"||
          ctc[temp_i].toLowerCase().trim()=="remove plu from inline table"){
              if(query_status[temp_i]!="yes"){
              query_status[temp_i]="yes";
                if(!(audit_flag))
                ;
                else
                audit_query_count++;

            }
            }

          else{
            var temp_ctc_1=ctc[temp_i]+"*";
            if(ctc[temp_i].trim()!=""&&
              ctc_not_evaluated.indexOf(temp_ctc_1)==-1){
            ctc_not_evaluated+="\n\n"+ctc[temp_i]+"*";
            audit_create_count_not_evaluated[audit_create_count_not_evaluated_count]=
            ctc[temp_i].trim();
            audit_create_count_not_evaluated_sum[audit_create_count_not_evaluated_count++]=0;
          }
             
             var audit_create_count_not_evaluated_index=
             audit_create_count_not_evaluated.indexOf(ctc[temp_i]);

             audit_create_count_not_evaluated_sum[audit_create_count_not_evaluated_index]+=1;
          }
        }

        // var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
        // var uniqueNames = [];
        // $.each(names, function(i, el){
        //     if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
        // });

        var temp_ctc_2=temp_ctc+"*";
        
       if(else_flag&&filter_ctc[temp_i2]!=ctc[temp_i]&&
        ctc_already_saved.indexOf(temp_ctc_2)==-1) {
          ctc_already_saved+="\n\n"+temp_ctc+"*:\t"+ctc[temp_i];
       }
     
    }

    function sortSStatus() {
          dateCheckbox_flag= false;
          

          cStatusCheckbox_flag= false;
            sStatusCheckbox_flag=true;
 
        
      // document.getElementById("c_status_label").innerHTML =
      // "Specification Comment:\t" + filter_s_status[filter_s_status_count++];
      c_status_label_h2.innerHTML ="Specification";

      var label = document.createElement('label')
          
          label.appendChild(document.createTextNode("Specification Comment:\t" + filter_s_status[filter_s_status_count++]));
          label.id="label_specification";
          ctc_checkbox_area.appendChild(label);

      var checkbox_break=-1;
      checkbox_top=300;
       for(var i=0;i<s_status_option.length;i++) {

          var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.name = "name";
          checkbox.value = s_status_option[i];
          checkbox.id = "checkbox_"+i;

          var label = document.createElement('label')
          label.htmlFor = "checkbox_"+i;
          label.appendChild(document.createTextNode(s_status_option[i]));
          label.id="label_"+i;
          checkbox_area.appendChild(checkbox);
          checkbox_area.appendChild(label);
          if(checkbox_break+1==i) {
            $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
           $("#checkbox_"+i).css({"left":"0%"});
          $("#label_"+i).css({"left":"2%"});
          $("#checkbox_"+i).css({"top":(checkbox_top-10)+"%"});
          $("#label_"+i).css({"top":checkbox_top+"%"});
         
        
        }
          if(checkbox_break+2==i) {
            $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
            $("#checkbox_"+i).css({"left":"32%"});
             $("#label_"+i).css({"left":"34%"});
             $("#checkbox_"+i).css({"top":(checkbox_top-10)+"%"});
          $("#label_"+i).css({"top":checkbox_top+"%"});
          }
          if(checkbox_break+3==i) {
          checkbox_area.appendChild(document.createElement("br"));   
          $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
          $("#checkbox_"+i).css({"left":"62%"});
          $("#label_"+i).css({"left":"64%"});
          $("#checkbox_"+i).css({"top":(checkbox_top-10)+"%"});
          $("#label_"+i).css({"top":checkbox_top+"%"});
          checkbox_break+=3;
          checkbox_top+=200;
        }
          // $("label").css({"margin-right":"9.6%"});
        }

      // $(".modal-content").css({"height":checkbox_top+100});
      $("#pop_sheet_submit_btn").css({"top":checkbox_top+50});
      $("#pop_sheet_submit_btn").css({"left":"43%"});

 
    }

    function allFilterCtc(temp_filter_ctc, temp_filter_ctc_count) {
          

            for(var i=temp_filter_ctc_count;i<temp_filter_ctc.length;i++) {
              var checkbox = document.createElement('input');
              checkbox.type = "checkbox";
              checkbox.name = "name";
              checkbox.value = temp_filter_ctc[i];
              checkbox.id = "checkbox_ctc"+i;
              var filter_ctc_temp="";
              var filter_ctc_single_temp=temp_filter_ctc[i];
             

              var label = document.createElement('label')
              label.htmlFor = "checkbox_ctc"+i;
              label.appendChild(document.createTextNode(temp_filter_ctc[i]));
             label.id="label_ctc"+i;
              ctc_checkbox_area.appendChild(checkbox);
              ctc_checkbox_area.appendChild(label);
              ctc_checkbox_area.appendChild(document.createElement("br"));  
              ctc_checkbox_area.appendChild(document.createElement("br"));   
              ctc_checkbox_area.appendChild(document.createElement("br"));
            }
            pop_sheet_input_field.value="";
    }

    function sortCtc(temp_filter_ctc, temp_filter_ctc_count) {
          dateCheckbox_flag= false;
            cStatusCheckbox_flag=true;
            sStatusCheckbox_flag=false;
      allFilterCtc(temp_filter_ctc, temp_filter_ctc_count);
      c_status_label_h2.innerHTML =
      "Chandigarh Team Comment";
      pop_sheet_input_field.style.display="inline-block";
      var checkbox_break=-1;
      checkbox_top=30;
       for(var i=0;i<c_status_option.length;i++) {


         if(i==0) {
                   var label = document.createElement('label');
                  
                  label.appendChild(document.createTextNode("Query:"));
                  label.id="label_query";
                  checkbox_area.appendChild(label);
                  $("#label_query").css({"position":"absolute"});
                  $("#label_query").css({"left":"2%"});
                  $("#label_query").css({"top":checkbox_top+"%"});

                   checkbox = document.createElement('input');
                  checkbox.type = "checkbox";
                  checkbox.name = "name";
                  checkbox.value = "Yes";
                  checkbox.id = "checkbox_query_yes";
                 
                  label = document.createElement('label');
                  label.htmlFor = "checkbox_query_yes";
                  label.appendChild(document.createTextNode("Yes"));
                  label.id="label_query_yes";
                  checkbox_area.appendChild(checkbox);
                  checkbox_area.appendChild(label);

                  $("#checkbox_query_yes").css({"position":"absolute"});
                  $("#label_query_yes").css({"position":"absolute"});
                   $("#checkbox_query_yes").css({"left":"32%"});
                  $("#label_query_yes").css({"left":"34%"});
                  $("#checkbox_query_yes").css({"top":(checkbox_top-5)+"%"});
                  $("#label_query_yes").css({"top":checkbox_top+"%"});

                  

                   checkbox = document.createElement('input');
                  checkbox.type = "checkbox";
                  checkbox.name = "name";
                  checkbox.value = "No";
                  checkbox.id = "checkbox_query_no";
                 
                  label = document.createElement('label');
                  label.htmlFor = "checkbox_query_no";
                  label.appendChild(document.createTextNode("No"));
                  label.id="label_query_no";
                  checkbox_area.appendChild(checkbox);
                  checkbox_area.appendChild(label);

                  $("#checkbox_query_no").css({"position":"absolute"});
                  $("#label_query_no").css({"position":"absolute"});
                   $("#checkbox_query_no").css({"left":"62%"});
                  $("#label_query_no").css({"left":"64%"});
                  $("#checkbox_query_no").css({"top":(checkbox_top-5)+"%"});
                  $("#label_query_no").css({"top":checkbox_top+"%"});
                  checkbox_top+=50;


            }
            




          var checkbox = document.createElement('input');
          checkbox.type = "checkbox";
          checkbox.name = "name";
          checkbox.value = c_status_option[i];
          checkbox.id = "checkbox_"+i;

          var label = document.createElement('label')
          label.htmlFor = "checkbox_"+i;
          label.appendChild(document.createTextNode(c_status_option[i]));
         label.id="label_"+i;
          checkbox_area.appendChild(checkbox);
          checkbox_area.appendChild(label);

          

          if(checkbox_break+1==i) {
            $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
           $("#checkbox_"+i).css({"left":"0%"});
          $("#label_"+i).css({"left":"2%"});
          $("#checkbox_"+i).css({"top":(checkbox_top-5)+"%"});
          $("#label_"+i).css({"top":checkbox_top+"%"});
         
        
        }
          if(checkbox_break+2==i) {
            $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
            $("#checkbox_"+i).css({"left":"32%"});
             $("#label_"+i).css({"left":"34%"});
             $("#checkbox_"+i).css({"top":(checkbox_top-5)+"%"});
          $("#label_"+i).css({"top":checkbox_top+"%"});
          }
          if(checkbox_break+3==i) {
          checkbox_area.appendChild(document.createElement("br"));   
          $("#checkbox_"+i).css({"position":"absolute"});
          $("#label_"+i).css({"position":"absolute"});
          $("#checkbox_"+i).css({"left":"62%"});
          $("#label_"+i).css({"left":"64%"});
          $("#checkbox_"+i).css({"top":(checkbox_top-5)+"%"});
          $("#label_"+i).css({"top":checkbox_top+"%"});
          checkbox_break+=3;
          checkbox_top+=50;
        }
          // $("label").css({"margin-right":"9.6%"});
        }

      // $(".modal-content").css({"height":checkbox_top+100});
      // document.getElementById("query_label").css({"top":checkbox_top+50});
      $("#pop_sheet_submit_btn").css({"top":checkbox_top+150});
      $("#pop_sheet_input_field").css({"top":checkbox_top+150});
      
      $("#pop_sheet_submit_btn").css({"left":"48%"});
      $("#pop_sheet_input_field").css({"left":"58%"});
    }

    function pluDublicate() {
      var dublicate_plu="";
      for(var i=0;i<plu.length;i++) {
      if(plu[i].trim()=="9640233")
        alert("Warning!!! Do not turn online 9640233");
      else if(plu[i].trim()=="9724344")
        alert("Warning!!! Do not turn online 9724344");
        var sub_plu = plu.slice(i+1, plu.length);
        var index=sub_plu.indexOf(plu[i]);
        if(index>-1&&plu[i]!="") {
          
          dublicate_plu+=plu[i]+"\n";
        }
      }
      if(dublicate_plu!="") {
        alert("Error! dublicate plu "+dublicate_plu);
        
      }
    }

    function inlineTableWriteClient() {
      
        
        var text_inline_output="";
        var i=0;
        // console.log(plu+"\n\n\n"+ctc+"\n\n\n"+s_status+"\n\n\n"+frys_link);
        for(; i<row_count;i++) {
         
          if(m_name_row_index.indexOf(i)!=-1) {
            // var m_name_row_index_temp=parseInt(m_name_row_index.indexOf(i));
            if(text_inline_output=="")
            text_inline_output+="\t\t\t\t\t"+m_name_row[m_name_row_index.indexOf(i)]+"\n";
          else {
            subInlineTableWrite();
            text_inline_output+="\t\t\t\t\t"+m_name_row[m_name_row_index.indexOf(i)]+"\n";
          }

        }

        // if(i==0)
        //   inline_data= "Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url";

        // if(i==m_name_row_index[])
       
        // alert(t_date[i]+" "+current_date);
      
        for(var i1=0;i1<date_checked.length;i1++) {

          if(t_date[i]==date_checked[i1]) {
            if(isNaN(plu[i])||plu[i].trim()==""||plu[i].trim()=="-")
              alert("Incorrect plu: "+plu[i]);
            tested_count++;
          	if(title[i].substring(0,4).toLowerCase()=="qfx ")
          		prop65_plu[prop65_plu_count++]=plu[i];
          	if(title[i].substring(0,8).toLowerCase()=="samsung ")
          		prop65_plu[prop65_plu_count++]=plu[i];


            title[i]=asciiToString(title[i]);

          //   if(ctc[i].toLowerCase().trim()!="already on fry's"&&
          //         ctc[i].toLowerCase().trim()!="product not found"&&
          //         ctc[i].toLowerCase().trim()!="source not found"&&
          //         ctc[i].toLowerCase().trim()!="plu not found in oracle database..!"&&
          //         ctc[i].toLowerCase().trim()!="invalid plu"&&
          //         ctc[i].toLowerCase().trim()!="created and uploaded"){
          //   var filter_ctc_index=filter_ctc.indexOf(ctc[i]);
          //   ctc[i]=c_status_option_checked[filter_ctc_index];
          // }
          // else {
          //  ctc[i]=titleCase(ctc[i]);
          // }

          var i2=0;
              for(var i2=0;i2<c_status_option.length;i2++){
                if(ctc[i].toLowerCase().trim()==c_status_option[i2].toLowerCase().trim())
                  { ctc[i]=titleCase(ctc[i]);
                    break;
                  }
             
          }
          if(i2==c_status_option.length){
            var filter_ctc_index=filter_ctc.indexOf(ctc[i]);
            if(!(c_status_option_checked[filter_ctc_index]===undefined))
            ctc[i]=c_status_option_checked[filter_ctc_index];
            if(!(query_status_checked[filter_ctc_index]===undefined))
            query_status[i]=query_status_checked[filter_ctc_index];
         
            }

            if(s_status[i].toLowerCase().trim()!="uploaded"&&
                  s_status[i].toLowerCase().trim()!="already uploaded"&&
                  s_status[i].toLowerCase().trim()!="-") {
            var filter_s_status_index=filter_s_status.indexOf(s_status[i]);
            s_status[i]=s_status_option_checked[filter_s_status_index];
          }
          else {
            s_status[i]=titleCase(s_status[i]);
          }

          if(s_status[i].toLowerCase().trim()=="uploaded"){
            spec_tested_count++;
            spec_uploaded_count++;
           }
           else
            if(s_status[i].toLowerCase().trim()=="already uploaded"){
            spec_tested_count++;
          
           }
           else
            if(s_status[i].toLowerCase().trim()=="-"){
            spec_tested_hyphen_count++;
          
           }



            var frys_link="https://www.frys.com/product/"+ plu[i];
           
            var big_link="https://images.frys.com/art/product/big/"+ plu[i]+".01.big.jpg";
      
            var prod_link="https://images.frys.com/art/product/300x300/"+plu[i]+".01.prod.jpg";
            
            var box_link="https://images.frys.com/art/product/box_shots/"+plu[i]+".box.GIF";

            if(gio_f[i]==0&&(gi_enhanced[i]==0||gi_enhanced[i]=="")&&ctc[i]!="created and uploaded offline"){
          
            frys_link="Uploaded Offline";
            big_link="-";
            prod_link="-";
            box_link="-";
            if(ctc[i].toLowerCase().trim()=="created and uploaded")
              ctc[i]="Created And Uploaded Offline";
               script_offline_plu+="\n"+plu[i];
           }
            if(ctc[i].toLowerCase().trim()=="created and uploaded offline"){
              frys_link="Uploaded Offline";
               big_link="-";
            
            prod_link="-";
            box_link="-";
            }
            if(ctc[i].toLowerCase().trim()=="turned offline"||
              ctc[i].toLowerCase().trim()=="plu is deleted"){
              frys_link="-";
            big_link="-";
            prod_link="-";
            box_link="-";
          }
            if(ctc[i].toLowerCase().trim()=="remove plu from inline table") {
              ;
              // tested_count--;       
            }
            else if(ctc[i].toLowerCase().trim()=="product not found"||
                ctc[i].toLowerCase().trim()=="source not found"){
              query_status[i]="yes";
              pnf_data+=plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\n";
              pnf_count++;
            }
            else if(ctc[i].toLowerCase().trim()=="already on fry's")
              aof_data+=plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\t"+frys_link+
            "\t"+big_link+"\t"+prod_link+"\t"+box_link+"\n";
            else if(ctc[i].toLowerCase().trim()=="plu not found in oracle database..!"||
                ctc[i].toLowerCase().trim()=="invalid plu"||
                ctc[i].toLowerCase().trim()=="plu is deleted"){
              if(ctc[i].toLowerCase().trim()=="plu not found in oracle database..!"||
                ctc[i].toLowerCase().trim()=="invalid plu"){
                query_status[i]="yes";
              // query_count++;
              // audit_query_count++;
            }

              plu_invalid_data+=plu[i]+"\t"+ctc[i]+"\n";

          }
            else {
              var t_editable_temp=String(t_editable[i]);
              t_editable_temp=t_editable_temp.toLowerCase().trim();
              if(t_editable_temp.substring(0,1)!="n")
                creation_data_editable+=
              plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\t"+frys_link+
              "\t"+big_link+"\t"+prod_link+"\t"+box_link+"\n";
              else
                creation_data_not_editable+=
              plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\t"+frys_link+
              "\t"+big_link+"\t"+prod_link+"\t"+box_link+"\n";

              if(ctc[i].toLowerCase().trim()=="created and uploaded"||
              ctc[i].toLowerCase().trim()=="created and uploaded offline"||
              ctc[i].toLowerCase().trim()=="disclaimer updated"||
              ctc[i].toLowerCase().trim()=="title and gallery image updated"||
              ctc[i].toLowerCase().trim()=="title and gallery images updated"||
              ctc[i].toLowerCase().trim()=="disclaimer and gallery image updated"||
              ctc[i].toLowerCase().trim()=="disclaimer and gallery images updated"||
              ctc[i].toLowerCase().trim()=="title and disclaimer updated"||
              ctc[i].toLowerCase().trim()=="title and category updated"||
              ctc[i].toLowerCase().trim()=="disclaimer and category updated"||
              ctc[i].toLowerCase().trim()=="title updated"){
              created_count++;
              uploaded_count++;
            }

              if((ctc[i].toLowerCase().trim()=="title updated"||ctc[i].toLowerCase().trim()=="title and gallery image updated"||
                ctc[i].toLowerCase().trim()=="title and gallery images updated"||ctc[i].toLowerCase().trim()=="title and disclaimer updated")&&t_editable[i].toLowerCase().trim()=="no")
               { 
              uploaded_count--;}
            }
            if(query_status[i]=="yes")
               { query_count++;
            audit_query_count++;
              }
          }
        }
       
      }
      if(i==row_count){
       
        subInlineTableWrite();
      }
     
      function subInlineTableWrite() {
      if(creation_data_editable!="")
        text_inline_output+=
      "Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url"+
      "\tBig Shot Url for Images\t300x300 Url for Images\tBox Shot Url for Images\n"+
      creation_data_editable+"\n\n";
      if(creation_data_not_editable!="")
        text_inline_output+="\t\tTitle Not Editable\n"+
      "Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url"+
      "\tBig Shot Url for Images\t300x300 Url for Images\tBox Shot Url for Images\n"+
      creation_data_not_editable+"\n\n";
      if(aof_data!="")
        text_inline_output+=
      "Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url"+
      "\tBig Shot Url for Images\t300x300 Url for Images\tBox Shot Url for Images\n"+
      aof_data+"\n\n";
      if(pnf_data!="")
        text_inline_output+="Plu\tDescription\tStatus\tSpecification Status\n"+
      pnf_data+"\n\n";
      if(plu_invalid_data!="")
        text_inline_output+="Plu\tStatus\n"+
      plu_invalid_data+"\n\n";
      if(creation_data_editable!=""||creation_data_not_editable!=""||
        aof_data!=""||pnf_data!=""||plu_invalid_data!="")
      text_inline_output_client+=text_inline_output;
      text_inline_output="";
      pnf_data="";
      aof_data="";
      plu_invalid_data="";
      creation_data_editable="";
      creation_data_not_editable="";
      

    
    }

    auditSheet();
     

      // if(ctc_already_saved!="")
      //   alert("----------Plu's who's 'CTC' is selected by script:----------"+ctc_already_saved+"\n\n");

      // if(ctc_not_evaluated!="")
      //   alert("----------Plu's who's 'CTC' has not been evaluated:----------"+ctc_not_evaluated+"\n\n");

       mail_sheet_inline[mail_sheet_inline_count]=text_inline_output_client;
         // mail_sheet_name[mail_sheet_inline_count]=text_sheet_name.value;
         StatusMailTable(text_inline_output_client);

      // var div = document.createElement('div');             
      // div.appendChild(document.createTextNode(mail_sheet_name[mail_sheet_inline_count]+"\n"+
      //   mail_sheet_inline[mail_sheet_inline_count]));
      // div.id="div_sheets_data";
      // sheets_data.appendChild(div);

      // mail_sheet_inline_count++;

    }

    function titleCase(str) {
              return str.split(' ').map(function(val){
                return val.charAt(0).toUpperCase() + val.substr(1).toLowerCase();
              }).join(' ');
            }

    function asciiToString(temp_title) {
      var temp1_title="";
      for(var i=0;i<temp_title.length;i++) {
        if(temp_title.substring(i,i+5)=="&#34;") {
          temp1_title+='"';
          i+=4;
        }
        else
          temp1_title+=temp_title.charAt(i);
      }
      return temp1_title;
    }        

    function inlineTableWrite() {
 
 
      for(var i=0; i<row_count;i++) {
        if(ctc[i]===undefined)
          ctc[i]="";

        if(s_status[i]===undefined)
          s_status[i]="";

        // if(i==0)
        //   inline_data="Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url";
        // alert(t_date[i]+" "+current_date);
      
        for(var i1=0;i1<date_checked.length;i1++) {
           

          if(t_date[i]==date_checked[i1]) {
          
            if(isNaN(plu[i])||plu[i].trim()==""||plu[i].trim()=="-")
              alert("Incorrect plu: "+plu[i]);

              tested_count++;
          	if(title[i].substring(0,4).toLowerCase()=="qfx ") {
          		prop65_plu[prop65_plu_count++]=plu[i];
          		
          	}
          	if(title[i].substring(0,8).toLowerCase()=="samsung ") {
          		prop65_plu[prop65_plu_count++]=plu[i];
          		
          	}

            title[i]=asciiToString(title[i]);

            if(ctc[i]===undefined)
          ctc[i]="";

        if(s_status[i]===undefined) {
         
          s_status[i]="";
        }

        if(ctc[i1]===undefined)
          ctc[i1]="";

        if(s_status[i1]===undefined)
          s_status[i1]="";

        if(gio_f[i]===undefined)
          gio_f[i]="";

        if(gi_enhanced[i]===undefined)
          gi_enhanced[i]="";
        

       

            // if(ctc[i].toLowerCase().trim()!="already on fry's"&&
            //       ctc[i].toLowerCase().trim()!="product not found"&&
            //       ctc[i].toLowerCase().trim()!="source not found"&&
            //       ctc[i].toLowerCase().trim()!="plu not found in oracle database..!"&&
            //       ctc[i].toLowerCase().trim()!="invalid plu"&&
            //       ctc[i].toLowerCase().trim()!="created and uploaded")
            var i2=0;
              for(var i2=0;i2<c_status_option.length;i2++){
                if(ctc[i].toLowerCase().trim()==c_status_option[i2].toLowerCase().trim())
                  { ctc[i]=titleCase(ctc[i]);
                    // if(!(query_status_checked[i2]===undefined))
                    // query_status[i]=query_status_checked[i2];
                    // if(query_status[i]=="yes"){
                    //   query_count++;

                    //   audit_query_count++;
                    // }
                    break;
                  }
             
          }
          if(i2==c_status_option.length){
            var filter_ctc_index=filter_ctc.indexOf(ctc[i]);
            if(!(c_status_option_checked[filter_ctc_index]===undefined))
            ctc[i]=c_status_option_checked[filter_ctc_index];
            if(!(query_status_checked[filter_ctc_index]===undefined)){
            query_status[i]=query_status_checked[filter_ctc_index];
            
          }
            // if(query_status[i]=="yes") {
            //           query_count++;
            //           audit_query_count++;
            //         }
            }
         

            if(s_status[i].toLowerCase().trim()!="uploaded"&&
                  s_status[i].toLowerCase().trim()!="already uploaded"&&
                  s_status[i].toLowerCase().trim()!="-") {
            var filter_s_status_index=filter_s_status.indexOf(s_status[i]);
          if(!(s_status_option_checked[filter_s_status_index]===undefined))
            s_status[i]=s_status_option_checked[filter_s_status_index];
          }
             else {
               s_status[i]=titleCase(s_status[i]);

            
          }

          if(s_status[i].toLowerCase().trim()=="uploaded"){
            spec_tested_count++;
            spec_uploaded_count++;
           }
           else
            if(s_status[i].toLowerCase().trim()=="already uploaded"){
            spec_tested_count++;
          
           }
           else
            if(s_status[i].toLowerCase().trim()=="-"){
            spec_tested_hyphen_count++;
          
           }

           


            var frys_link="https://www.frys.com/product/"+ plu[i];
       
            if(gio_f[i]==0&&(gi_enhanced[i]==0||gi_enhanced[i]=="")&&ctc[i]!="created and uploaded offline"){
              
            frys_link="Uploaded Offline";
            if(ctc[i].toLowerCase().trim()=="created and uploaded")
              ctc[i]="Created And Uploaded Offline";
            script_offline_plu+="\n"+plu[i];
           }
            if(ctc[i].toLowerCase().trim()=="created and uploaded offline") {
              frys_link="Uploaded Offline";
              
            }

            if(ctc[i].toLowerCase().trim()=="turned offline"||
              ctc[i].toLowerCase().trim()=="plu is deleted")
              frys_link="-";

            if(ctc[i].toLowerCase().trim()=="remove plu from inline table"){
              ;
              // tested_count--;
            }
            else if(ctc[i].toLowerCase().trim()=="product not found"||
                ctc[i].toLowerCase().trim()=="source not found") {
              query_status[i]="yes";
            // query_count++;
            // audit_query_count++;
              pnf_data+=plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\n";
            pnf_count++;
            
          }
            else if(ctc[i].toLowerCase().trim()=="already on fry's")
              aof_data+=plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\t"+frys_link+"\n";
            else if(ctc[i].toLowerCase().trim()=="plu not found in oracle database..!"||
                ctc[i].toLowerCase().trim()=="invalid plu"||
                ctc[i].toLowerCase().trim()=="plu is deleted") {
              if(ctc[i].toLowerCase().trim()=="plu not found in oracle database..!"||
                ctc[i].toLowerCase().trim()=="invalid plu"){
                query_status[i]="yes";

              // query_count++;
              // audit_query_count++;
            }
              plu_invalid_data+=plu[i]+"\t"+ctc[i]+"\n";
            
              

          }
            else
              {
              var t_editable_temp=String(t_editable[i]);
              t_editable_temp=t_editable_temp.toLowerCase().trim();
              if(t_editable_temp.substring(0,1)!="n")
                creation_data_editable+=
              plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\t"+frys_link+"\n";
              else
                creation_data_not_editable+=
              plu[i]+"\t"+title[i]+"\t"+ctc[i]+"\t"+s_status[i]+"\t"+frys_link+"\n";

              if(ctc[i].toLowerCase().trim()=="created and uploaded"||
              ctc[i].toLowerCase().trim()=="created and uploaded offline"||
              ctc[i].toLowerCase().trim()=="disclaimer updated"||
              ctc[i].toLowerCase().trim()=="title and gallery image updated"||
              ctc[i].toLowerCase().trim()=="title and gallery images updated"||
              ctc[i].toLowerCase().trim()=="disclaimer and gallery image updated"||
              ctc[i].toLowerCase().trim()=="disclaimer and gallery images updated"||
              ctc[i].toLowerCase().trim()=="title and disclaimer updated"||
              ctc[i].toLowerCase().trim()=="title and category updated"||
              ctc[i].toLowerCase().trim()=="disclaimer and category updated"||
              ctc[i].toLowerCase().trim()=="title updated"){
              created_count++;
              uploaded_count++;
            }
              if((ctc[i].toLowerCase().trim()=="title updated"||ctc[i].toLowerCase().trim()=="title and gallery image updated"||
                ctc[i].toLowerCase().trim()=="title and gallery images updated"||ctc[i].toLowerCase().trim()=="title and disclaimer updated")&&t_editable[i].toLowerCase().trim()=="no")
               { 
              uploaded_count--;}
              
            }
            if(query_status[i]=="yes")
               { query_count++;
            audit_query_count++;
              }
          }
        }
       
      }
      var text_inline_output="";
      if(creation_data_editable!="")
        text_inline_output+=
      "Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url\t\n"+
      creation_data_editable+"\n\n";
      if(creation_data_not_editable!="")
        text_inline_output+="\t\tTitle Not Editable\n"+
      "Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url\t\n"+
      creation_data_not_editable+"\n\n";
      if(aof_data!="")
        text_inline_output+=
      "Plu\tDescription\tCreation Status\tSpecification Status\tFry's Url\t\n"+
      aof_data+"\n\n";
      if(pnf_data!="")
        text_inline_output+="Plu\tDescription\tStatus\tSpecification Status\n"+
      pnf_data+"\n\n";
      if(plu_invalid_data!="")
        text_inline_output+="Plu\tStatus\n"+
      plu_invalid_data+"\n\n";
      text_inline_output_client=text_inline_output;
      auditSheet();


     

      // if(ctc_already_saved!="")
      //   alert("----------Plu's who's 'CTC' is selected by script----------"+ctc_already_saved+"\n\n");

      // if(ctc_not_evaluated!="")
      //   alert("----------Plu's who's 'CTC' has not been evaluated----------"+ctc_not_evaluated+"\n\n");
       
           mail_sheet_inline[mail_sheet_inline_count]=text_inline_output;
         // mail_sheet_name[mail_sheet_inline_count]=text_sheet_name.value;
         StatusMailTable(text_inline_output);

      // var label = document.createElement('label');             
      // label.appendChild(document.createTextNode(mail_sheet_name[mail_sheet_inline_count]+"\n"+
      //   mail_sheet_inline[mail_sheet_inline_count]));
      // label.id="label_sheets_data";
      // sheets_data.appendChild(label);

      // mail_sheet_inline_count++;


    }

    function StatusMailTable(text_inline_output) {
      var td_count=0;
      var td_flag=false;
      for(var i=0;i<text_inline_output.length;i++) {
        if(td_count>0&&text_inline_output.substring(i,i+1)=="\n")
          td_flag=true;
        
        if((text_inline_output.substring(i,i+5)=="\nPlu\t"||
            text_inline_output.substring(i,i+13)=="\tDescription\t"||
            text_inline_output.substring(i,i+17)=="\tCreation Status\t"||
            text_inline_output.substring(i,i+8)=="\tStatus\t"||
            text_inline_output.substring(i,i+22)=="\tSpecification Status\t"||
            text_inline_output.substring(i,i+11)=="\tFry's Url\t")&&(!(td_flag))) {
          td_count++;

         

          var th = document.createElement('th'); 
          th.appendChild(document.createTextNode(text_inline_output.substring(i+1,i+4)));
          th.id="sheets_data_tr1th1";
          th.className="mail-border";
          sheets_data_tr1.appendChild(th);
        }
        if(td_flag) {
          var tr = document.createElement('tr'); 
          
          tr.id="sheets_data_tr2";
          tr.className="mail-border";
          sheets_data_table.appendChild(tr);
        }
        



      }
    }

    function auditSheet() {
      audit_flag=true;
      // var audit_plu_count=0;
      // var audit_plu_error="";
      // var audit_test_count=0;
      // audit_create_count=0;
      // priority_complete_count=0;
      //27-march-2019

      for(var i=0; i<plu.length;i++) {
        if(isNaN(plu[i]))
          audit_plu_error+=plu[i]+"\n";
        else if(plu[i]=="")
          ;
        else
          audit_plu_count++;

        
         

        if(t_date[i].trim()!=""&&t_date[i].toLowerCase().trim()!="wip"&&
         t_date[i].toLowerCase().trim()!="-"&& t_date[i].toLowerCase().trim()!="tested date")
        {
          updatedCtc(i,0);
         audit_test_count++;
         if(ctc[i].toLowerCase().trim()=="created and uploaded"||
          ctc[i].toLowerCase().trim()=="created and uploaded offline"||
          ctc[i].toLowerCase().trim()=="disclaimer updated"||
          ctc[i].toLowerCase().trim()=="title and gallery image updated"||
          ctc[i].toLowerCase().trim()=="title and gallery images updated"||
          ctc[i].toLowerCase().trim()=="disclaimer and gallery image updated"||
          ctc[i].toLowerCase().trim()=="disclaimer and gallery images updated"||
          ctc[i].toLowerCase().trim()=="title and disclaimer updated"||
          ctc[i].toLowerCase().trim()=="title and category updated"||
          ctc[i].toLowerCase().trim()=="disclaimer and category updated"||
          ctc[i].toLowerCase().trim()=="title updated")
          audit_create_count++;


        if(query_status[i]=="no"){
          priority_complete_count++;
          
        }

          }
        
        
          
        
      }
      if(audit_create_count_not_evaluated.length>0){
      feature_modal.style.display='inline-block';
      checkbox_area.innerHTML="";
                ctc_checkbox_area.innerHTML="";
                dateCheckbox_flag= false;
            cStatusCheckbox_flag=false;
            sStatusCheckbox_flag=false;
            $("#pop_sheet_skip_btn").css({"top":checkbox_top+50});
            document.getElementById("pop_sheet_skip_btn").style.display="inline-block";
             notEvaluatedCtc();
    }
    else
      {
        var audit_data="\n\n\t\tAudit Sheet\nTask Deliver\tTested\tCreated/Uploaded\tQuery Status\n"+
      audit_plu_count+"\t"+audit_test_count+"\t"+audit_create_count+"\t"+audit_query_count+
      "\n\n\t\tPriority / Open Query Sheet\nTask Deliver\tTested\tCompleted\tQuery Status\n"+
      audit_plu_count+"\t"+audit_test_count+"\t"+priority_complete_count+"\t"+audit_query_count;

      text_inline.value="\t\t"+current_date.getDate() + "-"+ month[current_date.getMonth()] +
       "-"+current_date.getFullYear()+"\n"+
      text_inline_output_client+
      "\n\t\tDDS\nTested\tCreated\tUploaded\tPNF\tSpec Tested\tSpec Uploaded\tSpec Hyphen\tToday's Query\n"+
      tested_count+"\t"+created_count+"\t"+uploaded_count+
      "\t"+pnf_count+"\t"+spec_tested_count+"\t"+spec_uploaded_count+
      "\t"+spec_tested_hyphen_count+"\t"+query_count+audit_data;
      // text_update_data.value=update_data;
      if(script_offline_plu!="")
      alert("Plu's turned offline by script"+script_offline_plu);
      }
      
              
      // sortCtc(audit_create_count_not_evaluated, 0);
      var temp_date1=current_date.getDate() + "-"+ month[current_date.getMonth()] +
       "-"+current_date.getFullYear();
      if(temp_date1=="29-march-2019"||temp_date1=="30-april-2019"||
        temp_date1=="31-may-2019"||temp_date1=="28-june-2019"||
        temp_date1=="31-july-2019"||temp_date1=="30-august-2019"||
        temp_date1=="30-september-2019"||temp_date1=="31-october-2019"||
        temp_date1=="29-november-2019"||temp_date1=="31-december-2019")
      alert("Count total plu's of audit sheet for this month");
      
      
    }

    function notEvaluatedCtc() {
      c_status_label_h2.innerHTML =
      "Audit & Priority Sheet";
      pop_sheet_input_field.style.display="none";
      checkbox_area.appendChild(document.createElement("br"));  
              checkbox_area.appendChild(document.createElement("br"));   
              
      var audit_rows=0.7;
      for(var i=0; i<audit_create_count_not_evaluated.length;i++){
          var label = document.createElement('label')
              label.appendChild(document.createTextNode(audit_create_count_not_evaluated[i]));
             label.id="label_ctc"+i;
              checkbox_area.appendChild(label);
              checkbox_area.appendChild(document.createElement("br"));  
              

              var checkbox = document.createElement('input');
              checkbox.type = "checkbox";
              checkbox.name = "name";
              checkbox.value = "Created";
              checkbox.id = "checkbox_created"+i;
              label = document.createElement('label')
              label.htmlFor = "checkbox_created"+i;
              label.appendChild(document.createTextNode("Created"));
             label.id="label_created"+i;
              checkbox_area.appendChild(checkbox);
              checkbox_area.appendChild(label);

              $("#checkbox_created"+i).css({"position":"absolute"});
          $("#label_created"+i).css({"position":"absolute"});
           $("#checkbox_created"+i).css({"left":"2%"});
          $("#label_created"+i).css({"left":"4%"});
          // $("#checkbox_created"+i).css({"top":(checkbox_top-5)+"%"});
          // $("#label_created"+i).css({"top":checkbox_top+"%"});

              // checkbox_area.appendChild(document.createElement("br"));  
              // checkbox_area.appendChild(document.createElement("br"));   
              // checkbox_area.appendChild(document.createElement("br"));

              checkbox = document.createElement('input');
              checkbox.type = "checkbox";
              checkbox.name = "name";
              checkbox.value = "Completed";
              checkbox.id = "checkbox_completed"+i;
              label = document.createElement('label')
              label.htmlFor = "checkbox_completed"+i;
              label.appendChild(document.createTextNode("Completed"));
             label.id="label_completed"+i;
              checkbox_area.appendChild(checkbox);
              checkbox_area.appendChild(label);

              $("#checkbox_completed"+i).css({"position":"absolute"});
          $("#label_completed"+i).css({"position":"absolute"});
           $("#checkbox_completed"+i).css({"left":"12%"});
          $("#label_completed"+i).css({"left":"14%"});


              checkbox_area.appendChild(document.createElement("br"));  
              checkbox_area.appendChild(document.createElement("br"));   
              checkbox_area.appendChild(document.createElement("br"));
              audit_rows++;
      }
      $("#pop_sheet_submit_btn").css({"top":(audit_rows*100)});
      $("#pop_sheet_submit_btn").css({"left":"20%"});

      $("#pop_sheet_skip_btn").css({"top":(audit_rows*100)});
      $("#pop_sheet_skip_btn").css({"left":"60%"});
      
    }


    function notEvaluatedCtcSelected() {
      
      for(var i=0; i<audit_create_count_not_evaluated.length;i++) {
        if(document.getElementById("checkbox_created"+i).checked&&
          document.getElementById("checkbox_completed"+i).checked){
        
          audit_create_count+=audit_create_count_not_evaluated_sum[i];
          
        }
        else if(!(document.getElementById("checkbox_created"+i).checked&&
          document.getElementById("checkbox_completed"+i).checked)){
          
          priority_complete_count-=audit_create_count_not_evaluated_sum[i];
          audit_query_count+=audit_create_count_not_evaluated_sum[i];
        }
        else if(!(document.getElementById("checkbox_created"+i).checked)&&
          document.getElementById("checkbox_completed"+i).checked){
          
          ;
        }
        else{
         
          audit_create_count+=audit_create_count_not_evaluated_sum[i];
          priority_complete_count-=audit_create_count_not_evaluated_sum[i];
          audit_query_count+=audit_create_count_not_evaluated_sum[i];
        }
      }
      feature_modal.style.display="none";
      var audit_data="\n\n\t\tAudit Sheet\nTask Deliver\tTested\tCreated/Uploaded\tQuery Status\n"+
      audit_plu_count+"\t"+audit_test_count+"\t"+audit_create_count+"\t"+audit_query_count+
      "\n\n\t\tPriority / Open Query Sheet\nTask Deliver\tTested\tCompleted\tQuery Status\n"+
      audit_plu_count+"\t"+audit_test_count+"\t"+priority_complete_count+"\t"+audit_query_count;

      text_inline.value="\t\t"+current_date.getDate() + "-"+ month[current_date.getMonth()] +
       "-"+current_date.getFullYear()+"\n"+
      text_inline_output_client+
      "\n\t\tDDS\nTested\tCreated\tUploaded\tPNF\tSpec Tested\tSpec Uploaded\tSpec Hyphen\tToday's Query\n"+
      tested_count+"\t"+created_count+"\t"+uploaded_count+
      "\t"+pnf_count+"\t"+spec_tested_count+"\t"+spec_uploaded_count+
      "\t"+spec_tested_hyphen_count+"\t"+query_count+audit_data;
      // text_update_data.value=update_data;
      if(script_offline_plu!="")
      alert("Plu's turned offline by script"+script_offline_plu);
    }

    function mailCreationDefault() {
      var temp_date=current_date.getDate() + "-"+ month[current_date.getMonth()] +
       "-"+current_date.getFullYear();
      var label = document.createElement('label');             
      label.appendChild(document.createTextNode("Dept 3 : Status of "+ temp_date));
      label.id="label_subject";
      subject.appendChild(label);

      
    }

});