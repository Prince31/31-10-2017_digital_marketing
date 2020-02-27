$(function(){
        "use strict";
        var plu = "";
        var display_arr = [];
        var path="Desktop/webami";
      
        var col_max = 0, col_max_temp = 0, col_prev = 0, col_cur = 0;
        var col_type = 0;
        var col_type_no = [];
         var select_count = 2;
         var  image_download = [], image_download_name = [];
        // var pop_input_count=0;
        // var max_pop_input = 0;
        var pop_data = [];
        var lower_des = [];
        var select_index = [];
        var command = "";
        var image_link = [];
        var image_name1 ="", image_name2 = "", image_name3 = "";
        var image_count = 0, ctrl = 0;
        var select_id = 0;
        var feature_data = "";
        var col_type1_flag = true, col_type2_flag = true,
        col_type3_flag = true, col_type4_flag = true;
        var field1_empty = "", field2_empty = "",
        field3_empty = "";
        var feature_modal = document.getElementById('feature_modal'),
        feature_option_modal = document.getElementById('feature_option_modal'),
        expand_modal = document.getElementById('expand_modal'),
        col_no_field = document.getElementById("col_no_field"),
        edit_btn = document.getElementById("edit_btn"),
        col_type_drop = document.getElementById("col_type_drop"),
        image_btn = document.getElementById("image_btn"),
        head_field1 = document.getElementById("head_field1"),
        head_field2 = document.getElementById("head_field2"),
        head_field3 = document.getElementById("head_field3"),
        text_field1 = document.getElementById("text_field1"),
        text_field2 = document.getElementById("text_field2"),
        text_field3 = document.getElementById("text_field3"),
        image_field1 = document.getElementById("image_field1"),
        image_field2 = document.getElementById("image_field2"),
        image_field3 = document.getElementById("image_field3"),
        expand_field = document.getElementById("expand_field"),
        specification_field = document.getElementById('specification_field'),
        upper_field = document.getElementById('upper_field'),
        wit_box_field = document.getElementById('wit_box_field'),
        requirement_field = document.getElementById('requirement_field'),
        feature_template = document.getElementById('feature_template'),
        specification_template = document.getElementById('specification_template'),
        upper_template = document.getElementById('upper_template'),
        wit_box_template = document.getElementById('wit_box_template'),
        requirement_template = document.getElementById('requirement_template');
        var col_no = document.getElementById("col_no"),
        back_btn = document.getElementById("back_btn");
        feature_option_modal.style.display='inline-block';
        var save_plu_btn=document.getElementById("save_plu_btn");
        col_no_field.value = 0;
        var spec_data = "", upper_data ="",wit_box_data ="", requirement_data="";
        var back_btn_flag =0, col_type_drop_flag = 0, add_btn_flag=0, del_btn_flag = 0,
        edit_btn_flag = 0;
        col_no_field.setAttribute("max",col_max);
        var screen_0=document.getElementById("screen_0");
        var screen_1=document.getElementById("screen_1");
        var screen_2=document.getElementById("screen_2");
        var screen_1_update_btn=document.getElementById("screen_1_update_btn");
        var screen_1_head_field=document.getElementById("screen_1_head_field");
        var screen_1_text_field=document.getElementById("screen_1_text_field");
        var screen_1_image_field=document.getElementById("screen_1_image_field");
        var screen_1_next_btn=document.getElementById("screen_1_next_btn");
        var screen_1_colspan_btn=document.getElementById("screen_1_colspan_btn"),
        pop_image_no=-1.0;
        document.getElementById("text_input_plu").value ="";
        var expand_btn4=document.getElementById("expand_btn4");
        var expand_btn5=document.getElementById("expand_btn5");
        var expand_btn6=document.getElementById("expand_btn6");
        var mycanvas=document.getElementById("mycanvas");
        var top_crop= document.getElementById("top_crop");
        var bottom_crop= document.getElementById("bottom_crop");
        var right_crop= document.getElementById("right_crop");
        var left_crop= document.getElementById("left_crop");
        var myimg = [];
        var crop_img = [];
        var max_width=1000;
        var max_height=600, virtual_width=0, virtual_height=0, ratio=0.0;
        fieldBtnReset();
        screen_0.style.display='none';
        screen_2.style.display='none';
        screen_1_head_field.value="";
        screen_1_text_field.value="";
        screen_1_image_field.value="";
function clear() {

        head_field1.value="";
        text_field1.value="";
        image_field1.value="";
         display_arr = [];
         col_max = 0, col_max_temp = 0, col_prev = 0, col_cur = 0;
         col_type = 0;
        col_type_no = [];
          select_count = 2;
         image_download = [], image_download_name = [];
        pop_data = [];
        lower_des = [];
        select_index = [];
        command = "";
        image_link = [];
       image_name1 ="", image_name2 = "", image_name3 = "";
        image_count = 0, ctrl = 0;
       select_id = 0;
        feature_data = "";
        col_type1_flag = true, col_type2_flag = true,
        col_type3_flag = true, col_type4_flag = true;
        field1_empty = "", field2_empty = "",
        field3_empty = "";
        col_no_field.value = 0;
        spec_data = "";
        upper_data ="",wit_box_data ="", requirement_data="";
         back_btn_flag =0, col_type_drop_flag = 0, add_btn_flag=0, del_btn_flag = 0,
        edit_btn_flag = 0;
        col_no_field.setAttribute("max",col_max);
        fieldBtnReset();
        document.getElementById("specification_template").innerHTML ="";
        upper_template.innerHTML ="";
        wit_box_template.innerHTML ="";
        requirement_template.innerHTML ="";
          document.getElementById("feature_template").innerHTML ="";
          upper_template.innerHTML="";
          wit_box_template.innerHTML="";
          requirement_template.innerHTML="";
          document.getElementById("text_input_plu").value ="";
          plu="";
          save_plu_btn.disabled = false;
          myimg = [];
          max_width=1000;
          virtual_width=0, virtual_height=0;
        max_height=600;
        ratio=0.0;
}


      $("#clear").bind("click", function(){
        clear();
      });

       $("#save_plu_btn").bind("click", function(){
        plu=document.getElementById("text_input_plu").value;
        save_plu_btn.disabled = true;
      });
      
        $(".col-break").bind( "click", function() {
          alert( "User clicked on 'foo.'" );
        });
      //  $(".col-break").click(function(){
      //   alert("hi");
      //   // alert($('selector').attr('id'));
      // });


       $("#screen_1_colspan_btn").bind("click", function(){
          if(screen_1_colspan_btn.innerHTML=="One Col") {
            screen_1_colspan_btn.innerHTML="Three Col";
            screen_1_update_btn.innerHTML="1";
          }
          else {
            screen_1_colspan_btn.innerHTML="One Col";
            screen_1_update_btn.innerHTML="Update";
          }
       
       });
       $("#image_no_submit").bind("click", function(){
          pop_image_no=text_image_no.value;
          if(pop_image_no>=col_max)
            alert("Image no. should be less than:"+ col_max);
          else {
            var pop_image_no_dot=pop_image_no.indexOf(".");
            if(pop_image_no_dot!=-1) {
            var pop_image_no_1=pop_image_no.substring(0,pop_image_no_dot);
            var pop_image_no_2=pop_image_no.substring(pop_image_no_dot+1,pop_image_no.length);
            height_resize.value=
            document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height;

            width_resize.value=
            document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width;
            }
            else
              alert("Please provide correct image number");

          }
       });
//
       $("#top_crop").bind("click", function(){
          pop_image_no=text_image_no.value;
          if(pop_image_no>=col_max)
            alert("Image no. should be less than:"+ col_max);
          else {
            var pop_image_no_dot=pop_image_no.indexOf(".");
            if(pop_image_no_dot!=-1) {
            var pop_image_no_1=pop_image_no.substring(0,pop_image_no_dot);
            var pop_image_no_2=pop_image_no.substring(pop_image_no_dot+1,pop_image_no.length);
            // var dataURL =
            //  document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").toDataURL();
            //  var temp_image=new Image();
            //  temp_image.src=dataURL;
              virtual_width=crop_img[pop_image_no_1][pop_image_no_2].width;
             virtual_height=crop_img[pop_image_no_1][pop_image_no_2].height;
             document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height =
              virtual_height-top_crop.value-bottom_crop.value;   
             var context = document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").getContext("2d");

             var temp_crop=-top_crop.value;
             context.drawImage(crop_img[pop_image_no_1][pop_image_no_2],0,temp_crop,virtual_width,virtual_height);

              // top_crop.value=0;
            }
            else
              alert("Please provide correct image number");

          }
       });

        $("#bottom_crop").bind("click", function(){
          pop_image_no=text_image_no.value;
          if(pop_image_no>=col_max)
            alert("Image no. should be less than:"+ col_max);
          else {
            var pop_image_no_dot=pop_image_no.indexOf(".");
            if(pop_image_no_dot!=-1) {
            var pop_image_no_1=pop_image_no.substring(0,pop_image_no_dot);
            var pop_image_no_2=pop_image_no.substring(pop_image_no_dot+1,pop_image_no.length);
            virtual_width=crop_img[pop_image_no_1][pop_image_no_2].width;
             virtual_height=crop_img[pop_image_no_1][pop_image_no_2].height;
             document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height =
              virtual_height-top_crop.value-bottom_crop.value;   
             var context = document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").getContext("2d");
             var temp_crop=-top_crop.value;
             context.drawImage(myimg[pop_image_no_1][pop_image_no_2], 0,temp_crop,virtual_width,virtual_height);
  
            }
            else
              alert("Please provide correct image number");

          }
       });

       $("#right_crop").bind("click", function(){
          pop_image_no=text_image_no.value;
          if(pop_image_no>=col_max)
            alert("Image no. should be less than:"+ col_max);
          else {
            var pop_image_no_dot=pop_image_no.indexOf(".");
            if(pop_image_no_dot!=-1) {
            var pop_image_no_1=pop_image_no.substring(0,pop_image_no_dot);
            var pop_image_no_2=pop_image_no.substring(pop_image_no_dot+1,pop_image_no.length);
            virtual_width=document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width;
             virtual_height=document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height;
             document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width  = virtual_width;
           
             document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height =
              virtual_height-top_crop.value;   
             var context = document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").getContext("2d");
             var temp_crop=0-top_crop.value;
             context.drawImage(myimg[pop_image_no_1][pop_image_no_2], 0,temp_crop,virtual_width,virtual_height);
  
            }
            else
              alert("Please provide correct image number");

          }
       });

     

       $("#left_crop").bind("click", function(){
          pop_image_no=text_image_no.value;
          if(pop_image_no>=col_max)
            alert("Image no. should be less than:"+ col_max);
          else {
            var pop_image_no_dot=pop_image_no.indexOf(".");
            if(pop_image_no_dot!=-1) {
            var pop_image_no_1=pop_image_no.substring(0,pop_image_no_dot);
            var pop_image_no_2=pop_image_no.substring(pop_image_no_dot+1,pop_image_no.length);
            virtual_width=document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width;
             virtual_height=document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height;
             document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width  = virtual_width;
           
             document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height =
              virtual_height-top_crop.value;   
             var context = document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").getContext("2d");
             var temp_crop=0-top_crop.value;
             context.drawImage(myimg[pop_image_no_1][pop_image_no_2], 0,temp_crop,virtual_width,virtual_height);
  
            }
            else
              alert("Please provide correct image number");

          }
       });
     
       $("#width_resize").bind("click", function(){
        pop_image_no=text_image_no.value;
          if(pop_image_no>=col_max)
            alert("Image no. should be less than:"+ col_max);
          else {
            var pop_image_no_dot=pop_image_no.indexOf(".");
            if(pop_image_no_dot!=-1) {
            var pop_image_no_1=pop_image_no.substring(0,pop_image_no_dot);
            var pop_image_no_2=pop_image_no.substring(pop_image_no_dot+1,pop_image_no.length);
            // var dataURL =document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").toDataURL();
            //  alert(dataURL);
            //  crop_img[pop_image_no_1][pop_image_no_2].src=dataURL;
            max_width=width_resize.value;
          virtual_width = document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width;
        virtual_height = document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height;
   
 
     scaleImage();
   
     document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width  = virtual_width;
   
     document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height = virtual_height;   
     var context = document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").getContext("2d");
     // var temp_crop=-top_crop.value;
     context.drawImage(crop_img[pop_image_no_1][pop_image_no_2], 0,0,virtual_width,virtual_height);
     crop_img[pop_image_no_1][pop_image_no_2].width=virtual_width;
     crop_img[pop_image_no_1][pop_image_no_2].height=virtual_height;

     height_resize.value=virtual_height;
   
     // crop_img[pop_image_no_1][pop_image_no_1].src=
     // document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").toDataURL();
            }
            else
              alert("Please provide correct image number");

          }
        
       });

       $("#height_resize").bind("click", function(){
        pop_image_no=text_image_no.value;
          if(pop_image_no>=col_max)
            alert("Image no. should be less than:"+ col_max);
          else {
            var pop_image_no_dot=pop_image_no.indexOf(".");
            if(pop_image_no_dot!=-1) {
            var pop_image_no_1=pop_image_no.substring(0,pop_image_no_dot);
            var pop_image_no_2=pop_image_no.substring(pop_image_no_dot+1,pop_image_no.length);
            // var dataURL =document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").toDataURL();
            //  crop_img[pop_image_no_1][pop_image_no_2].src=dataURL;
            max_height=height_resize.value;
          virtual_width = document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width;
        virtual_height = document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height;
   
 
     scaleImage1();
   
     document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").width  = virtual_width;
   
     document.getElementById(""+pop_image_no_1+"."+pop_image_no_2+"image").height = virtual_height;   
     var context = document.getElementById(pop_image_no_1+"."+pop_image_no_2+"image").getContext("2d");
     crop_img[pop_image_no_1][pop_image_no_2]=context.getImageData(0, 0, 50, 50);
     // var temp_crop=-top_crop.value;
     context.drawImage(crop_img[pop_image_no_1][pop_image_no_2], 0,0,virtual_width,virtual_height);

     crop_img[pop_image_no_1][pop_image_no_2].width=virtual_width;
     crop_img[pop_image_no_1][pop_image_no_2].height=virtual_height;
     width_resize.value=virtual_width;
            }
            else
              alert("Please provide correct image number");

          }
        
       });

       $("#screen_1_update_btn").bind("click", function(){
        if(screen_1_update_btn.innerHTML=="Update") {
        document.getElementById("drop_1").click();
        head_field1.value=screen_1_head_field.value;
        text_field1.value=screen_1_text_field.value;
        image_field1.value=screen_1_image_field.value;
        saveData();
        }
        else if(screen_1_update_btn.innerHTML=="1") {
        document.getElementById("drop_4").click();
        head_field1.value=screen_1_head_field.value;
        text_field1.value=screen_1_text_field.value;
        image_field1.value=screen_1_image_field.value;
        screen_1_update_btn.innerHTML="2";
        }
        else if(screen_1_update_btn.innerHTML=="2") {
      
        head_field2.value=screen_1_head_field.value;
        text_field2.value=screen_1_text_field.value;
        image_field2.value=screen_1_image_field.value;
        screen_1_update_btn.innerHTML="3 Update";
        }
        else if(screen_1_update_btn.innerHTML=="3 Update") {
      
        head_field3.value=screen_1_head_field.value;
        text_field3.value=screen_1_text_field.value;
        image_field3.value=screen_1_image_field.value;
         screen_1_update_btn.innerHTML="1";
        saveData();
        }
        screen_1_head_field.value="";
        screen_1_text_field.value="";
        screen_1_image_field.value="";
      });
    
        $("#screen_1_next_btn").bind("click", function(){
          screen_2.style.display='inline-block';
          screen_1.style.display='none';
        
        });
        // expand_field.style.border="solid blue";
   //      $('#expand_field').bind('keydown', function(event) {
    //    //console.log(event.keyCode);
    //    alert("hi");
    //    expand_field.innerHTML=event.keyCode;
    //       //....your actions for the keys .....
      
    // });

      // expand_field.onkeydown = function(event) {
   //         alert("hi");
   //        expand_field.innerHTML=event;
   //       alert("ctrl1");
   //       }
         //  document.getElementById("expand_field").onkeydown = function(event) {
         //   alert("hi");
         //  expand_field.innerHTML=event;
          // // alert("ctrl1");
         // }

         //   document.getElementById("expand_field").onkeydown = function(event) {
         //  if(event.which=="17" )
         //  ctrl = 1;
          // // alert("ctrl1");
         // }

         // document.getElementById("expand_field").onkeyup = function(event) {
         //  ctrl = 0;
         //  // alert("ctrl0");
         // }

         // $("#expand_field").bind("click", function() {
        
       
         //  if(ctrl == 1) {
         //    expand_field.readOnly = true;
         //    // alert(expand_field.selectionStart);
         //    select_index.push(expand_field.selectionStart);
         //    var temp_data = expand_field.value;
         //    var select_data ="";
         //    var select_data1 = "";
         //    for(var i = 0; i<temp_data.length; i++) {

         //      if(i == expand_field.selectionStart) {
         //        select_data += "<";
         //        select_data1 += " ";
         //      }
         //      select_data += temp_data.charAt(i);
         //       select_data1 += temp_data.charAt(i);
         //    }
         //   expand_field.value = select_data;
         //    // if(select_id==0)
         //    //  select_id = setInterval(function() {
         //    //   if(select_count%2==0)
         //    //   expand_field.value = select_data;
         //    //   else
         //    //     expand_field.value = select_data1;
         //    //   select_count++;
         //    // }, 1000);

         //  }
         //  else {
         //    expand_field.readOnly = false;
         //    select_count = 0;
         //  }
         // });

        col_no_field.onkeypress=function(evt){
            evt.preventDefault();
        };
        col_no_field.onclick= function() {
          if(col_no_field.value != col_cur) {
            back_btn.disabled = true;

          col_cur = parseInt(col_no_field.value);
          col_no.innerHTML="Col No. " + col_no_field.value;
        
          if(col_prev != col_cur) {
            col_type_drop.disabled = true;
            edit_btn.disabled = false;
            add_btn.disabled = false;
            del_btn.disabled = false;
          }
          else {
            col_type_drop.disabled = false;
            edit_btn.disabled = true;
            add_btn.disabled = true;
            del_btn.disabled = true;
          }
          }
        }

      
      
        // document.getElementById("expand_field").innerHTML =
        //   localStorage["title"] || "Just Write"; // default text
      

        // setInterval(function() {
        //   // fuction that is saving the innerHTML of the div
        //   localStorage["title"] = document.getElementById("expand_field").innerHTML;
        
        // }, 1000);

        $("#specification_template_pop").bind("click", function() {
          specification_modal.style.display='inline-block';
          specification_field.value= spec_data;
          // fieldBtnReset();
         });
        $("#upper_template_pop").bind("click", function() {
          upper_modal.style.display='inline-block';
          upper_field.value= upper_data;
          // fieldBtnReset();
         });
        $("#wit_box_template_pop").bind("click", function() {
          wit_box_modal.style.display='inline-block';
          wit_box_field.value= wit_box_data;
          // fieldBtnReset();
         });
        $("#requirement_template_pop").bind("click", function() {
          requirement_modal.style.display='inline-block';
          requirement_field.value= requirement_data;
          // fieldBtnReset();
         });
        $("#feature_template_pop").bind("click", function() {
          if(plu!="")
          feature_modal.style.display='inline-block';
        else
          alert("Please save plu and try again");
          // fieldBtnReset();
         });
      
        $("#specification_submit_btn").bind("click", function() {
          specification_modal.style.display='none';
          spec_data= ascii(String(specification_field.value));
          if(spec_data!="")
          document.getElementById("specification_template").innerHTML = '<table class="table">'+
            spec_data+
           '</table>';
           else
            document.getElementById("specification_template").innerHTML ="";
          // fieldBtnReset();
         });

        $("#upper_submit_btn").bind("click", function() {
          upper_modal.style.display='none';
          upper_data= ascii(String(upper_field.value));
          if(upper_data!="")
          document.getElementById("upper_template").innerHTML = upper_data;
        else
          document.getElementById("upper_template").innerHTML ="";
          // fieldBtnReset();
         });

        $("#wit_box_submit_btn").bind("click", function() {
          wit_box_modal.style.display='none';
          wit_box_data= ascii(String(wit_box_field.value));
          if(wit_box_data!="")
          document.getElementById("wit_box_template").innerHTML = '<div id="in_box" class="toplevel"><div class="header">What&#39;s in the Box</div>'+
            wit_box_data+'</div>';
            else
              document.getElementById("wit_box_template").innerHTML ="";
          // fieldBtnReset();
         });

        $("#requirement_submit_btn").bind("click", function() {
          requirement_modal.style.display='none';
          requirement_data= ascii(String(requirement_field.value));
          if(requirement_data!="")
          document.getElementById("requirement_template").innerHTML = '<div id="in_box" class="toplevel"><div class="header">Requirements</div>'+
            requirement_data+'</div>';
            else
              document.getElementById("requirement_template").innerHTML ="";
          // fieldBtnReset();
         });

      
      
        $("#edit_btn").bind("click", editing);
        $("#create").bind("click", function(){
          if((specification_template.innerHTML!=""||
            feature_template.innerHTML!=""||
            upper_template.innerHTML!=""||
            requirement_template.innerHTML!=""||
            wit_box_template.innerHTML!="")&&plu!="") {
              createFile();
              clear();
            }
          else
            alert("Please create upper or lower description and enter plu id");
 
        });

       $("#drop_1").bind("click", function() {
          col_type = 1;
          $("#col_type_drop").text('One Col');
          field1_empty = "not_empty";
        field2_empty = "";
        field3_empty = "";
          col_type1_flag = false;
          col_type2_flag = true;
          col_type3_flag = true;
          col_type_reset();
          pop_data[col_max] = new Array(3);
          });

       $("#drop_2").bind("click", function() {
          col_type = 2;
          $("#col_type_drop").text('Two Col Hor');
          field1_empty = "not_empty";
        field2_empty = "not_empty";
        field3_empty = "";
          col_type1_flag = false;
          col_type2_flag = false;
          col_type3_flag = true;
          col_type_reset();

            pop_data[col_max] = new Array(6);
          });

       $("#drop_3").bind("click", function() {
          col_type = 3;
          $("#col_type_drop").text('Two Col Ver');
          field1_empty = "not_empty";
        field2_empty = "not_empty";
        field3_empty = "";
          col_type1_flag = false;
          col_type2_flag = false;
          col_type3_flag = true;
          col_type_reset();
            pop_data[col_max] = new Array(6);
          });

       $("#drop_4").bind("click", function() {
          col_type = 4;
          $("#col_type_drop").text('Three Col');
           field1_empty = "not_empty";
        field2_empty = "not_empty";
        field3_empty = "not_empty";
          col_type1_flag = false;
          col_type2_flag = false;
          col_type3_flag = false;
          col_type_reset();
            pop_data[col_max] = new Array(9);
          });

        $(".drop").bind("click", function() {
          // col_no.innerHTML="Col No. " + col_no_field.value;
          col_type_drop_flag = 1;
          back_btn.disabled = false;
          col_no_field.style.display= "none";
          col_type_drop.disabled  = true;
          add_btn.disabled = true;
          edit_btn.disabled  = true;
          del_btn.disabled = true;
          // image_btn.disabled = false;
        

        
        });

          $("#done_btn").bind("click", saveData);
          $("#add_btn").bind("click", addData);

          $("#back_btn").bind("click", backData);

          $("#del_btn").bind("click", deleteData);
          $("#expand_btn1").bind("click", function() {
            expand_modal.style.display='inline-block';
            expand_field.value = text_field1.value;
          });
          $("#expand_btn2").bind("click", function() {
            expand_modal.style.display='inline-block';
            expand_field.value = text_field2.value;
          });
          $("#expand_btn3").bind("click", function() {
            expand_modal.style.display='inline-block';
            expand_field.value = text_field3.value;
          });

          $("#expand_btn4").bind("click", function() {
            expand_modal.style.display='inline-block';
            imageCrop();
          });

          $("#expand_btn5").bind("click", function() {
            expand_modal.style.display='inline-block';
            expand_field.value = image_field2.value;
          });

          $("#expand_btn6").bind("click", function() {
            expand_modal.style.display='inline-block';
            expand_field.value = image_field3.value;
          });

          $("#canvas_refresh_btn").bind("click", function() {
            imageCrop();
          });
        

// function imageCrop() {

   
//      myimg.src =image_field1.value;
//      virtual_width = myimg.width;
//      virtual_height = myimg.height;
//      scaleImage();
//      mycanvas.width  = virtual_width;
//      mycanvas.height = virtual_height;   
   
//      var context = mycanvas.getContext("2d");
//      context.drawImage(myimg, 0,0,virtual_width,virtual_height);
//      alert(virtual_height+" "+virtual_width+" "+myimg.width+" "+myimg.height);
   
// }


    function scaleImage() {
      // if(virtual_height>=virtual_width)
      //      ratio = max_height/ virtual_height;
      //  else
      //       if(virtual_height<virtual_width)
                ratio = max_width/ virtual_width;

        virtual_width =Math.round(0.0 + ratio * virtual_width);
        virtual_height =Math.round(0.0 + ratio * virtual_height);    
    }

    function scaleImage1() {

                ratio = max_height/ virtual_height;

        virtual_width =Math.round(0.0 + ratio * virtual_width);
        virtual_height =Math.round(0.0 + ratio * virtual_height);    
    }


    // function scaleImage(i_count)
    // {
       
    //      // var  ratio = Math.min( maxWidth / width, maxHeight/ height );
    //      if(maxWidth[i_count]!=1000)
    //      {
    //      if(height>width)
    //        ratio = maxHeight[i_count]/ height;
    //    else
    //         if(height<=width)
    //             ratio = maxWidth[i_count]/ width;
    // }
    // else
    //     ratio = 0.0 + maxWidth[i_count]/ width;

    //     width =0.0 + ratio * width;
    //     height =0.0 + ratio * height;
    // }

function deleteData() {

      col_max_temp = col_max;
      for(var i = col_cur; i<col_max_temp-1; i++) {
        col_type_no[i] = col_type_no[i+1];
        lower_des[i] = lower_des[i+1];
        var col_type_no_2d =0;
        if(col_type_no[i] == 1) {
            col_type_no_2d = 3;
            pop_data[i] = new Array(3);
            for(var i1 = 0; i1< col_type_no_2d; i1++) {
                pop_data[i][i1] = pop_data[i+1][i1];
            }
            col_max = i;
            oneCol();
    }
    else if(col_type_no[i] == 2) {
            col_type_no_2d = 6;
            pop_data[i] = new Array(6);
            for(var i1 = 0; i1< col_type_no_2d; i1++) {
                pop_data[i][i1] = pop_data[i+1][i1];
            }
            col_max = i;
            twoColHorizontal();
    }

    else if(col_type_no[i] == 3) {
            col_type_no_2d = 6;
            pop_data[i] = new Array(6);
            for(var i1 = 0; i1< col_type_no_2d; i1++) {
                pop_data[i][i1] = pop_data[i+1][i1];
            }
            col_max = i;
            twoColVertical();
    }
    else if(col_type_no[i] == 4) {
                col_type_no_2d = 9;
              pop_data[i] = new Array(9);
              for(var i1 = 0; i1< col_type_no_2d; i1++) {
                pop_data[i][i1] = pop_data[i+1][i1];
            }
            col_max = i;
            threeCol();
    }
    else
    alert("An error in col_type_no occur in delete functionprince" + col_type_no[i]);
    
  

  }
  col_max++;
    col_max_temp -=2;
    display();
}


function backData() {
  back_btn.disabled = true;
  col_no_field.style.display = "inline-block";
  col_type_drop.disabled = true;
  add_btn.disabled = false;
  edit_btn.disabled = false;
  del_btn.disabled = false;
  if(add_btn_flag == 1) {
    add_btn_flag = 0;
  }

  else if(edit_btn_flag == 1) {
        edit_btn_flag = 0;
  }
  else {
    col_type_drop.disabled= false;
    add_btn.disabled = true;
    del_btn.disabled = true;
    edit_btn.disabled = true;
  }
          field1_empty = "";
          field2_empty = "";
          field3_empty = "";
          col_type1_flag = true;
          col_type2_flag = true;
          col_type3_flag = true;
          col_type_reset(); 
          $("#col_type_drop").text('Col Type');
}


function addData() {
  add_btn_flag = 1;
  back_btn.disabled = false;
  col_no_field.style.display = "none";
  del_btn.disabled = true;
  col_type_drop.disabled = false;
  add_btn.disabled = true;
  edit_btn.disabled = true;
  field1_empty = "";
  field2_empty = "";
  field3_empty = "";
  col_type1_flag = true;
  col_type2_flag = true;
  col_type3_flag = true;
  col_type_reset();

  $("#col_type_drop").text('Col Type');


} 

function editing() {
          col_no.innerHTML="Col No. " + col_no_field.value;
          edit_btn_flag = 1;
          back_btn.disabled = false;
          del_btn.disabled = true;
          edit_btn.disabled  = true;
          col_no_field.style.display = "none";
          col_type_drop.disabled  = false;
          add_btn.disabled = true;
          col_type = col_type_no[col_cur];
        
          if(col_type == 1) {
            $("#col_type_drop").text('One Col');
          col_type1_flag = false;
          col_type2_flag = true;
          col_type3_flag = true;
          head_field1.value = pop_data[col_cur][0];
          text_field1.value = pop_data[col_cur][1];
          image_field1.value = pop_data[col_cur][2];
        }
        else if(col_type == 2) {
          $("#col_type_drop").text('Two Col Hor');
          col_type1_flag = false;
          col_type2_flag = false;
          col_type3_flag = true;
          head_field1.value = pop_data[col_cur][0];
          text_field1.value = pop_data[col_cur][1];
          image_field1.value = pop_data[col_cur][2];
          head_field2.value = pop_data[col_cur][3];
          text_field2.value = pop_data[col_cur][4];
          image_field2.value = pop_data[col_cur][5];
        }
        else if(col_type == 3) {
          $("#col_type_drop").text('Two Col Ver');
          col_type1_flag = false;
          col_type2_flag = false;
          col_type3_flag = true;
          head_field1.value = pop_data[col_cur][0];
          text_field1.value = pop_data[col_cur][1];
          image_field1.value = pop_data[col_cur][2];
          head_field2.value = pop_data[col_cur][3];
          text_field2.value = pop_data[col_cur][4];
          image_field2.value = pop_data[col_cur][5];
        }
        else if(col_type == 4) {
          $("#col_type_drop").text('Three Col');
          col_type1_flag = false;
          col_type2_flag = false;
          col_type3_flag = false;
          head_field1.value = pop_data[col_cur][0];
          text_field1.value = pop_data[col_cur][1];
          image_field1.value = pop_data[col_cur][2];
          head_field2.value = pop_data[col_cur][3];
          text_field2.value = pop_data[col_cur][4];
          image_field2.value = pop_data[col_cur][5];
          head_field3.value = pop_data[col_cur][6];
          text_field3.value = pop_data[col_cur][7];
          image_field3.value = pop_data[col_cur][8];
        }
        else {
          alert("error in col_type of editing function")
        }
        field1_empty = "not_empty";
        field2_empty = "not_empty";
        field3_empty = "not_empty";
          col_type_reset();
}

function addDataDisplay() {
  add_btn_flag = 0;
    col_max_temp = col_max;
  for(var i = col_max; i>col_cur; i--) {

    col_type_no[i] = col_type_no[i-1];
    lower_des[i] = lower_des[i-1];
    var col_type_no_2d =0;
    if(col_type_no[i]==1) {
      col_type_no_2d = 3;
      pop_data[i] = new Array(3);
      for(var i1 = 0; i1< col_type_no_2d; i1++) {
        pop_data[i][i1] = pop_data[i-1][i1];
      }
      col_max = i;
      oneCol();
    
    }
    else if(col_type_no[i] ==2) {
      col_type_no_2d = 6;
      pop_data[i] = new Array(6);
      for(var i1 = 0; i1< col_type_no_2d; i1++) {
        pop_data[i][i1] = pop_data[i-1][i1];
      }
      col_max = i;
      twoColHorizontal();
    
    }
    else if(col_type_no[i] ==3) {
      col_type_no_2d = 6;
      pop_data[i] = new Array(6);
      for(var i1 = 0; i1< col_type_no_2d; i1++) {
        pop_data[i][i1] = pop_data[i-1][i1];
      }
      col_max = i;
      twoColVertical();
    
    }
    else if(col_type_no[i] ==4) {
      col_type_no_2d = 9;
      pop_data[i] = new Array(9);
      for(var i1 = 0; i1< col_type_no_2d; i1++) {
        pop_data[i][i1] = pop_data[i-1][i1];
      }
      col_max = i;
      threeCol();
  
    }
    else
    alert("An error in col_type_no occur in add function" + col_type_no[i]);

 
  }

    col_max = col_cur;
}

function fieldBtnReset() {    
          field1_empty = "";
          field2_empty = "";
          field3_empty = "";

          col_type1_flag = true;
          col_type2_flag = true;
          col_type3_flag = true;
          col_type_reset();
          col_type_drop.disabled = false;
        
          // image_btn.disabled = true;
          $("#col_type_drop").text('Col Type');
          edit_btn.disabled  = true;
          del_btn.disabled  = true;
          add_btn.disabled = true;
          back_btn.disabled = true;
          col_type_drop.disabled = false;
          col_no_field.style.display = "inline-block";
          back_btn_flag =0;
           col_type_drop_flag = 0;
           add_btn_flag=0;
           del_btn_flag = 0;
          edit_btn_flag = 0;
        
          col_no.innerHTML="Col No. " + col_no_field.value;

      }

 function col_type_reset() {

          if(field1_empty == "") {
            head_field1.value = "";
            text_field1.value = "";
            image_field1.value = "";
          }
          if(field2_empty == "") {
            head_field2.value = "";
            text_field2.value = "";
            image_field2.value = "";
          }
          if(field3_empty == "") {
            head_field3.value = "";
            text_field3.value = "";
            image_field3.value = "";
          }

          head_field1.readOnly = col_type1_flag;
          head_field2.readOnly = col_type2_flag;
          head_field3.readOnly = col_type3_flag;
          text_field1.readOnly = col_type1_flag;
          text_field2.readOnly = col_type2_flag;
          text_field3.readOnly = col_type3_flag;
          image_field1.readOnly = col_type1_flag;
          image_field2.readOnly = col_type2_flag;
          image_field3.readOnly = col_type3_flag;
          document.getElementById("expand_btn1").disabled = col_type1_flag;
          document.getElementById("expand_btn2").disabled = col_type2_flag;
          document.getElementById("expand_btn3").disabled = col_type3_flag;
          expand_btn4.disabled = col_type1_flag;
          expand_btn5.disabled = col_type2_flag;
          expand_btn6.disabled = col_type3_flag;
 }   

function saveData() {
 
      if(edit_btn_flag == 1) {
        
          col_max_temp = col_max;
        
          col_max_temp--;
          col_max = col_cur;
      }
 
  if(add_btn_flag == 1)
    addDataDisplay();
  if(col_type==1) {
    pop_data[col_max][0] =
     ascii(String(head_field1.value));
    pop_data[col_max][1] =
     ascii(String(text_field1.value));
    pop_data[col_max][2] =
     ascii(String(image_field1.value));
     if(pop_data[col_max][0]!="" || pop_data[col_max][1]!="" ||
      pop_data[col_max][2]!="") {
     oneCol();
      display();
    }
   else
    alert("Fields can't be empty");
  }
  else if(col_type==2) {
    pop_data[col_max][0] =
     ascii(String(head_field1.value));
    pop_data[col_max][1] =
     ascii(String(text_field1.value));
    pop_data[col_max][2] =
     ascii(String(image_field1.value));
     pop_data[col_max][3] =
     ascii(String(head_field2.value));
    pop_data[col_max][4] =
     ascii(String(text_field2.value));
    pop_data[col_max][5] =
     ascii(String(image_field2.value));
     if(pop_data[col_max][0]!="" || pop_data[col_max][1]!="" ||
      pop_data[col_max][2]!="" ||pop_data[col_max][3]!="" ||
       pop_data[col_max][4]!="" || pop_data[col_max][5]!="") {
     twoColHorizontal();
      display();
    }
   else
    alert("Fields can't be empty");
  }
   else if(col_type==3) {
    pop_data[col_max][0] =
     ascii(String(head_field1.value));
    pop_data[col_max][1] =
     ascii(String(text_field1.value));
    pop_data[col_max][2] =
     ascii(String(image_field1.value));
     pop_data[col_max][3] =
     ascii(String(head_field2.value));
    pop_data[col_max][4] =
     ascii(String(text_field2.value));
    pop_data[col_max][5] =
     ascii(String(image_field2.value));
     if(pop_data[col_max][0]!="" || pop_data[col_max][1]!="" ||
      pop_data[col_max][2]!="" ||pop_data[col_max][3]!="" ||
       pop_data[col_max][4]!="" || pop_data[col_max][5]!="") {
     twoColVertical();
      display();
    }
   else
    alert("Fields can't be empty");
  }
   else if(col_type==4) {
    pop_data[col_max][0] =
     ascii(String(head_field1.value));
    pop_data[col_max][1] =
     ascii(String(text_field1.value));
    pop_data[col_max][2] =
    ascii(String(image_field1.value));
     pop_data[col_max][3] =
     ascii(String(head_field2.value));
    pop_data[col_max][4] =
     ascii(String(text_field2.value));
    pop_data[col_max][5] =
     ascii(String(image_field2.value));
    pop_data[col_max][6] =
     ascii(String(head_field3.value));
    pop_data[col_max][7] =
     ascii(String(text_field3.value));
    pop_data[col_max][8] =
     ascii(String(image_field3.value));
     if(pop_data[col_max][0]!="" || pop_data[col_max][1]!="" ||
      pop_data[col_max][2]!="" ||pop_data[col_max][3]!="" ||
       pop_data[col_max][4]!="" || pop_data[col_max][5]!="" ||
       pop_data[col_max][6]!="" || pop_data[col_max][7]!="" ||
       pop_data[col_max][8]!="") {
     threeCol();
      display();
        // debugger;

    }
   else
    alert("Fields can't be empty");

  }
  else
    alert("Fields can't be empty");
 
}

  function oneCol() {
     image_link[col_max] = new Array(1);
      image_link[col_max][0] = pop_data[col_max][2];

      if(col_max == 0) {
        display_arr[col_max] ="";
        // display_arr[col_max] = '<div id="features" class="toplevel"><div class="header">Features</div>';
        lower_des[col_max] = '<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>';
      }
      else {
        display_arr[col_max] ="";
        lower_des[col_max] ="";
      }

      if(display_arr[col_max]===undefined)
        display_arr[col_max]="";
      if(lower_des[col_max]===undefined)
        lower_des[col_max]="";

      display_arr[col_max] += '<div class="row col" style="border: 1px solid black"><div id="'+
      col_max+'head" style="font-weight:bold; background: #99f;">ttt'+col_max+'.0 - '+pop_data[col_max][0] +
      '</div></div><div class="row"><div class="col-xs-2" id="'+col_max+'text" style="border: 1px solid red"><p>'+
      pop_data[col_max][1] +'</p></div>'+
                    '<div class="col-xs-8" style="border: 1px solid orange">'+
                      '<canvas id="'+col_max+'.0image" style="border: 1px solid blue;"></canvas></div>'+
                      '<div class="col-xs-2"></div></div>';
                  
        if(pop_data[col_max][2]!="") {
       
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
       else
        image_name1 = "";
      lower_des[col_max] += '\n\t<div class=\\"onecol even horizontal clearfix\\">';

      if(pop_data[col_max][0]!="")
        lower_des[col_max] += '\n\t\t<div class=\\"header\\">\n\t\t\t'+
      pop_data[col_max][0] +'\n\t\t</div>';
      if(pop_data[col_max][2]!="")
        lower_des[col_max] += '\n\t\t'+image_name1;
      if(pop_data[col_max][1]!="")
      lower_des[col_max] += '\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t</div>\n\t\t</div>' ;
      lower_des[col_max] += '\n\t</div>';
  

    }


  // function oneCol() {
  //     image_link[col_max] = new Array(1);
  //     image_link[col_max][0] = pop_data[col_max][2];

  //     if(col_max == 0) {
  //       display_arr[col_max] = '<div id="features" class="toplevel"><div class="header">Features</div>';
  //       lower_des[col_max] = '<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>';
  //     }
  //     else {
  //       display_arr[col_max] ="";
  //       lower_des[col_max] ="";
  //     }

  //     if(display_arr[col_max]===undefined)
  //       display_arr[col_max]="";
  //     if(lower_des[col_max]===undefined)
  //       lower_des[col_max]="";

  //     display_arr[col_max] += '<div class="onecol even horizontal clearfix"><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><img src="'+pop_data[col_max][2] +'"/><div class="body"><div class="text">'+pop_data[col_max][1] +'</div></div></div>' ;
  //       if(pop_data[col_max][2]!="") {
       
  //         if(image_count>9)
  //          image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
  //        else
  //         image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
  //     }
  //      else
  //       image_name1 = "";
  //     lower_des[col_max] += '\n\t<div class=\\"onecol even horizontal clearfix\\">';

  //     if(pop_data[col_max][0]!="")
  //       lower_des[col_max] += '\n\t\t<div class=\\"header\\">\n\t\t\t'+
  //     pop_data[col_max][0] +'\n\t\t</div>';
  //     if(pop_data[col_max][2]!="")
  //       lower_des[col_max] += '\n\t\t'+image_name1;
  //     if(pop_data[col_max][1]!="")
  //     lower_des[col_max] += '\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t</div>\n\t\t</div>' ;
  //     lower_des[col_max] += '\n\t</div>';
  
  // }

  function twoColHorizontal() {
    image_link[col_max] = new Array(2);
      image_link[col_max][0] = pop_data[col_max][2];
       image_link[col_max][1] = pop_data[col_max][5];
    if(col_max == 0) {
      display_arr[col_max] = '<div id="features" class="toplevel"><div class="header">Features</div><div class="twocol even horizontal clearfix"><div class="cell clearfix"><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><img src="'+pop_data[col_max][2] +'"/><div class="body"><div class="text">'+pop_data[col_max][1] +'</div></div></div><div class="cell clearfix"><div class="header">'+pop_data[col_max][3] +'</div><img src="'+pop_data[col_max][5] +'"/><div class="body"><div class="text">'+pop_data[col_max][4] +'</div></div></div></div>' ;
      if(pop_data[col_max][2]!="") {
        
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
       else
        image_name1 = "";
      if(pop_data[col_max][5]!="") {
       
          if(image_count>9)
           image_name2 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name2 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
       else
        image_name2 = "";
          lower_des[col_max] = '\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\t<div class=\\"twocol even horizontal clearfix\\">\n\t\t<div class=\\"cell clearfix\\">\n\t\t\t<div class=\\"header\\">\n\t\t\t\t'+pop_data[col_max][0] +'\n\t\t\t</div>\n\t\t\t'+image_name1+'\n\t\t\t<div class=\\"body\\">\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\\"cell clearfix\\">\n\t\t\t<div class=\\"header\\">\n\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t</div>\n\t\t\t'+image_name2+'\n\t\t\t<div class=\\"body\\">\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;

   
    }
    else {
      display_arr[col_max] = '<div class="twocol even horizontal clearfix"><div class="cell clearfix"><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><img src="'+pop_data[col_max][2] +'"/><div class="body"><div class="text">'+pop_data[col_max][1] +'</div></div></div><div class="cell clearfix"><div class="header">'+pop_data[col_max][3] +'</div><img src="'+pop_data[col_max][5] +'"/><div class="body"><div class="text">'+pop_data[col_max][4] +'</div></div></div></div>';
      if(pop_data[col_max][2]!="") {
       
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name1 = "";
      if(pop_data[col_max][5]!="") {
       
          if(image_count>9)
           image_name2 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name2 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name2 = "";
          lower_des[col_max] = '\n\t<div class=\\"twocol even horizontal clearfix\\">\n\t\t<div class=\\"cell clearfix\\">\n\t\t\t<div class=\\"header\\">\n\t\t\t\t'+pop_data[col_max][0] +'\n\t\t\t</div>\n\t\t\t'+image_name1+'\n\t\t\t<div class=\\"body\\">\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\\"cell clearfix\\">\n\t\t\t<div class=\\"header\\">\n\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t</div>\n\t\t\t'+image_name2+'\n\t\t\t<div class=\\"body\\">\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;

    }
  
  
  
  }

  function twoColVertical() {
    image_link[col_max] = new Array(2);
      image_link[col_max][0] = pop_data[col_max][2];
       image_link[col_max][1] = pop_data[col_max][5];
    if(col_max == 0) {
      display_arr[col_max] = '<div id="features" class="toplevel"><div class="header">Features</div><div class="twocol even vertical"><div class="row top"><div class="cell"><img src="'+pop_data[col_max][2] +'"/></div><div class="cell"><img src="'+pop_data[col_max][5] +'"/></div></div><div class="row bottom"><div class="cell"><div class="body"><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><div class="text">'+pop_data[col_max][1] +'</div></div></div><div class="cell"><div class="body"><div class="header">'+pop_data[col_max][3] +'</div><div class="text">'+pop_data[col_max][4] +'</div></div></div></div></div>' ;
      if(pop_data[col_max][2]!="") {
       
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name1 = "";
      if(pop_data[col_max][5]!="") {
        
          if(image_count>9)
           image_name2 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name2 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name2 = "";

      lower_des[col_max] = '\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\t<div class=\\"twocol even vertical\\">\n\t\t<div class=\\"row top\\">\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t'+image_name1+'\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t'+image_name2+'\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\\"row bottom\\">\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div class=\\"body\\">\n\t\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t\t'+pop_data[col_max][0] +'\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div class=\\"body\\">\n\t\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;
   
    }
    else {
      display_arr[col_max] = '<div class="twocol even vertical"><div class="row top"><div class="cell"><img src="'+pop_data[col_max][2] +'"/></div><div class="cell"><img src="'+pop_data[col_max][5] +'"/></div></div><div class="row bottom"><div class="cell"><div class="body"><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><div class="text">'+pop_data[col_max][1] +'</div></div></div><div class="cell"><div class="body"><div class="header">'+pop_data[col_max][3] +'</div><div class="text">'+pop_data[col_max][4] +'</div></div></div></div></div>' ;
      if(pop_data[col_max][2]!="") {
        
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name1 = "";
      if(pop_data[col_max][5]!="") {
        
          if(image_count>9)
           image_name2 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name2 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name2 = "";

      lower_des[col_max] = '\n\t<div class=\\"twocol even vertical\\">\n\t\t<div class=\\"row top\\">\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t'+image_name1+'\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t'+image_name2+'\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\\"row bottom\\">\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div class=\\"body\\">\n\t\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t\t'+pop_data[col_max][0] +'\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div class=\\"body\\">\n\t\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;
   
    }
  
  
  
  }

    function threeCol() {
    image_link[col_max] = new Array(3);
      image_link[col_max][0] = pop_data[col_max][2];
       image_link[col_max][1] = pop_data[col_max][5];
       image_link[col_max][2] = pop_data[col_max][8];

       if(col_max == 0) {
        display_arr[col_max] = "";
        lower_des[col_max] = '<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>';
      }
      else {
        display_arr[col_max] ="";
        lower_des[col_max] ="";
      }

      if(display_arr[col_max]===undefined)
        display_arr[col_max]="";
      if(lower_des[col_max]===undefined)
        lower_des[col_max]="";
      display_arr[col_max] +='<div class="row" style="border: 1px solid black">'+
'<div class="col-xs-11"><div class="col-xs-3">'+
'<div class="row" style="border: 1px solid orange">'+
'<canvas id="'+col_max+'.0image" style="border: 1px solid blue;"></canvas>'+
'</div><div class="row"><div class="col-xs-1" id="'+col_max+'.0col_no">'+
''+col_max+'.0</div><div class="col-xs-7" id="'+col_max+'.0head">'+
''+pop_data[col_max][0]+'</div><div class="col-xs-1" id="'+col_max+'.0More">M</div>'+
'<div class="col-xs-1" id="'+col_max+'.0col_check">T</div>'+
'<div class="col-xs-1 col-break" id="'+col_max+'.0col_break" style="border: 1px solid blue;">B</div>'+
'<div class="col-xs-1" id="'+col_max+'.0col_del">D</div>'+
'</div><div class="row" id="'+col_max+'.0text">'+pop_data[col_max][1]+'</div></div>'+
'<div class="col-xs-1"></div><div class="col-xs-3">'+
'<div class="row" style="border: 1px solid orange">'+
'<canvas id="'+col_max+'.1image" style="border: 1px solid blue;"></canvas>'+
'</div><div class="row"><div class="col-xs-1" id="'+col_max+'.1col_no">'+
''+col_max+'.1</div><div class="col-xs-7" id="'+col_max+'.1head">'+pop_data[col_max][3]+
'</div><div class="col-xs-1" id="'+col_max+'.1More">M</div>'+
'<div class="col-xs-1" id="'+col_max+'.1col_check">T</div>'+
'<div class="col-xs-1 col-break" id="'+col_max+'.1col_break">B</div>'+
'<div class="col-xs-1" id="'+col_max+'.1col_del">D</div>'+
'</div><div class="row" id="'+col_max+'.1text">'+pop_data[col_max][4]+'</div></div>'+
'<div class="col-xs-1"></div><div class="col-xs-3">'+
'<div class="row" style="border: 1px solid orange">'+
'<canvas id="'+col_max+'.2image" style="border: 1px solid blue;"></canvas>'+
'</div><div class="row"><div class="col-xs-1" id="'+col_max+'.2col_no">'+
''+col_max+'.2</div><div class="col-xs-7" id="'+col_max+'.2head">'+
''+pop_data[col_max][6]+'</div><div class="col-xs-1" id="'+col_max+'.2More">M</div>'+
'<div class="col-xs-1" id="'+col_max+'.2col_check">T</div>'+
'<div class="col-xs-1 col-break" id="'+col_max+'.2col_break">B</div>'+
'<div class="col-xs-1" id="'+col_max+'.2col_del">D</div>'+
'</div><div class="row" id="'+col_max+'.2text">'+pop_data[col_max][7]+'</div>'+
'</div><div class="col-xs-1"></div></div><div class="col-xs-1"></div></div>';

       if(pop_data[col_max][2]!="") {
        
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name1 = "";
      if(pop_data[col_max][5]!="") {
        
          if(image_count>9)
           image_name2 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name2 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name2 = "";
      if(pop_data[col_max][8]!="") {
        
          if(image_count>9)
           image_name3 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else
          image_name3 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
      else
        image_name3 = "";

        lower_des[col_max] += '\n\t<div class=\\"threecol even horizontal clearfix\\">\n\t\t<div class=\\"row\\">';

        if(pop_data[col_max][0]!=""||pop_data[col_max][1]!=""||pop_data[col_max][2]!="")
          lower_des[col_max] += '\n\t\t\t<div class=\\"cell\\">';

          if(pop_data[col_max][2]!="")
              lower_des[col_max] += '\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name1+'</div>';

          if(pop_data[col_max][0]!="")
            lower_des[col_max] += '\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t' +pop_data[col_max][0] + '\n\t\t\t\t</div>';

          if(pop_data[col_max][1]!="")
            lower_des[col_max] += '\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t</div>';
        
          if(pop_data[col_max][0]!=""||pop_data[col_max][1]!=""||pop_data[col_max][2]!="")
          lower_des[col_max] += '\n\t\t\t</div>';

          if(pop_data[col_max][3]!=""||pop_data[col_max][4]!=""||pop_data[col_max][5]!="")
          lower_des[col_max] += '\n\t\t\t<div class=\\"cell\\">';

          if(pop_data[col_max][5]!="")
              lower_des[col_max] += '\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name2+'</div>';

           if(pop_data[col_max][3]!="")
            lower_des[col_max] += '\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t\t</div>';

          if(pop_data[col_max][4]!="")
            lower_des[col_max] += '\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t</div>';

          if(pop_data[col_max][3]!=""||pop_data[col_max][4]!=""||pop_data[col_max][5]!="")
          lower_des[col_max] += '\n\t\t\t</div>';

        if(pop_data[col_max][6]!=""||pop_data[col_max][7]!=""||pop_data[col_max][8]!="")
          lower_des[col_max] += '\n\t\t\t<div class=\\"cell\\">';

          if(pop_data[col_max][8]!="")
              lower_des[col_max] += '\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name3+'</div>';

           if(pop_data[col_max][6]!="")
            lower_des[col_max] += '\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][6] +'\n\t\t\t\t</div>';

          if(pop_data[col_max][7]!="")
            lower_des[col_max] += '\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][7] +'\n\t\t\t\t</div>';

          if(pop_data[col_max][6]!=""||pop_data[col_max][7]!=""||pop_data[col_max][8]!="")
          lower_des[col_max] += '\n\t\t\t</div>';

        lower_des[col_max] += '\n\t\t</div>\n\t</div>' ;


  
  
  }

  function threeColBreak(temp_col_max) {
    var temp_pop_data=[];
    temp_pop_data[0]=pop_data[temp_col_max][0];
    temp_pop_data[1]=pop_data[temp_col_max][1];
    temp_pop_data[2]=pop_data[temp_col_max][2];
    temp_pop_data[3]=pop_data[temp_col_max][3];
    temp_pop_data[4]=pop_data[temp_col_max][4];
    temp_pop_data[5]=pop_data[temp_col_max][5];
    temp_pop_data[6]=pop_data[temp_col_max][6];
    temp_pop_data[7]=pop_data[temp_col_max][7];
    temp_pop_data[8]=pop_data[temp_col_max][8];
    col_cur=temp_col_max;
    deleteData();
    if(temp_pop_data[8]!=""||temp_pop_data[7]!=""||temp_pop_data[6]!="") {
      add_btn_flag=1;
      col_type=1;
      head_field1=temp_pop_data[6];
      text_field1=temp_pop_data[7];
      image_field1=temp_pop_data[8];
      saveData();
    }
    if(temp_pop_data[5]!=""||temp_pop_data[4]!=""||temp_pop_data[3]!="") {
      add_btn_flag=1;
      col_type=1;
      head_field1=temp_pop_data[5];
      text_field1=temp_pop_data[4];
      image_field1=temp_pop_data[3];
      saveData();
    }
    if(temp_pop_data[2]!=""||temp_pop_data[1]!=""||temp_pop_data[0]!="") {
      add_btn_flag=1;
      col_type=1;
      head_field1=temp_pop_data[2];
      text_field1=temp_pop_data[1];
      image_field1=temp_pop_data[0];
      saveData();
    }
  }

  // function threeCol() {
  //   image_link[col_max] = new Array(3);
  //     image_link[col_max][0] = pop_data[col_max][2];
  //      image_link[col_max][1] = pop_data[col_max][5];
  //      image_link[col_max][2] = pop_data[col_max][8];

  //      if(col_max == 0) {
  //       display_arr[col_max] = '<div id="features" class="toplevel"><div class="header">Features</div>';
  //       lower_des[col_max] = '<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>';
  //     }
  //     else {
  //       display_arr[col_max] ="";
  //       lower_des[col_max] ="";
  //     }

  //     if(display_arr[col_max]===undefined)
  //       display_arr[col_max]="";
  //     if(lower_des[col_max]===undefined)
  //       lower_des[col_max]="";
  //     display_arr[col_max] += '<div class="threecol even horizontal clearfix"><div class="row"><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][2] +'"/></div><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><div class="text">'+pop_data[col_max][1] +'</div></div><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][5] +'"/></div><div class="header">'+pop_data[col_max][3] +'</div><div class="text">'+pop_data[col_max][4] +'</div></div><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][8] +'"/></div><div class="header">'+pop_data[col_max][6] +'</div><div class="text">'+pop_data[col_max][7] +'</div></div></div></div>';

  //      if(pop_data[col_max][2]!="") {
        
  //         if(image_count>9)
  //          image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
  //        else
  //         image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
  //     }
  //     else
  //       image_name1 = "";
  //     if(pop_data[col_max][5]!="") {
        
  //         if(image_count>9)
  //          image_name2 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
  //        else
  //         image_name2 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
  //     }
  //     else
  //       image_name2 = "";
  //     if(pop_data[col_max][8]!="") {
        
  //         if(image_count>9)
  //          image_name3 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
  //        else
  //         image_name3 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
  //     }
  //     else
  //       image_name3 = "";

  //       lower_des[col_max] += '\n\t<div class=\\"threecol even horizontal clearfix\\">\n\t\t<div class=\\"row\\">';

  //       if(pop_data[col_max][0]!=""||pop_data[col_max][1]!=""||pop_data[col_max][2]!="")
  //         lower_des[col_max] += '\n\t\t\t<div class=\\"cell\\">';

  //         if(pop_data[col_max][2]!="")
  //             lower_des[col_max] += '\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name1+'</div>';

  //         if(pop_data[col_max][0]!="")
  //           lower_des[col_max] += '\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t' +pop_data[col_max][0] + '\n\t\t\t\t</div>';

  //         if(pop_data[col_max][1]!="")
  //           lower_des[col_max] += '\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t</div>';
        
  //         if(pop_data[col_max][0]!=""||pop_data[col_max][1]!=""||pop_data[col_max][2]!="")
  //         lower_des[col_max] += '\n\t\t\t</div>';

  //         if(pop_data[col_max][3]!=""||pop_data[col_max][4]!=""||pop_data[col_max][5]!="")
  //         lower_des[col_max] += '\n\t\t\t<div class=\\"cell\\">';

  //         if(pop_data[col_max][5]!="")
  //             lower_des[col_max] += '\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name2+'</div>';

  //          if(pop_data[col_max][3]!="")
  //           lower_des[col_max] += '\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t\t</div>';

  //         if(pop_data[col_max][4]!="")
  //           lower_des[col_max] += '\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t</div>';

  //         if(pop_data[col_max][3]!=""||pop_data[col_max][4]!=""||pop_data[col_max][5]!="")
  //         lower_des[col_max] += '\n\t\t\t</div>';

  //       if(pop_data[col_max][6]!=""||pop_data[col_max][7]!=""||pop_data[col_max][8]!="")
  //         lower_des[col_max] += '\n\t\t\t<div class=\\"cell\\">';

  //         if(pop_data[col_max][8]!="")
  //             lower_des[col_max] += '\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name3+'</div>';

  //          if(pop_data[col_max][6]!="")
  //           lower_des[col_max] += '\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][6] +'\n\t\t\t\t</div>';

  //         if(pop_data[col_max][7]!="")
  //           lower_des[col_max] += '\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][7] +'\n\t\t\t\t</div>';

  //         if(pop_data[col_max][6]!=""||pop_data[col_max][7]!=""||pop_data[col_max][8]!="")
  //         lower_des[col_max] += '\n\t\t\t</div>';

  //       lower_des[col_max] += '\n\t\t</div>\n\t</div>' ;


  
  
  // }
       //     var Thread = {      code to pause the entire project
      //   sleep: function(ms) {
      //     var start = Date.now();
        
      //     while (true) {
      //       var clock = (Date.now() - start);
      //       if (clock >= ms) break;
      //     }
        
      //   }
      // };
      //     var d1 = new Date();
      //     console.log('start ' + d1.toLocaleTimeString());

      //     Thread.sleep(10000);

      //     var d2 = new Date();
      //   console.log('end ' + d2.toLocaleTimeString());


  function display() {
    col_type_no[col_max] = col_type;
    col_max = col_max_temp;
    col_max++;
    col_prev = col_max;
    col_cur = col_max;
  
    var i1 = 0;
    var display_arr1 = "";
    do {
        if(col_max!=0)
      display_arr1 += display_arr[i1++];
    }while(i1 < col_max);

    document.getElementById("feature_template").innerHTML = display_arr1;
    i1 = 0;
  
    do {
        if(col_max!=0) {
          if(lower_des[i1].indexOf("onecol")!=-1) {
            max_width=350;
          }
          if(lower_des[i1].indexOf("threecol")!=-1) {
            max_width=275;
          }
      myimg[i1]=new Array(3);  
      crop_img[i1]=new Array(3);
         var i2=0;
    do{
 
      myimg[i1][i2]=new Image();
      var i3=(i2+1)*2;
      myimg[i1][i2].src =pop_data[i1][i2+i3];

     virtual_width = myimg[i1][i2].width;
     virtual_height = myimg[i1][i2].height;
   
 
     scaleImage();
   
     document.getElementById(""+i1+"."+i2+"image").width  = virtual_width;
   
     document.getElementById(""+i1+"."+i2+"image").height = virtual_height; 
     crop_img[i1][i2]=new Image();
      crop_img[i1][i2]=myimg[i1][i2];
     var context = document.getElementById(i1+"."+i2+"image").getContext("2d");
     context.drawImage(crop_img[i1][i2], 0,0,virtual_width,virtual_height);
   
     alert(crop_img[i1][i2].width);
     crop_img[i1][i2].width=virtual_width;
     crop_img[i1][i2].height=virtual_height;
     alert(crop_img[i1][i2].width);
     i2++;
     var check_element=document.getElementById(i1+"."+i2+"image");
   

    }while(i2<3&&check_element);
     i1++;
   
    }
    }while(i1 < col_max);

    col_no_field.setAttribute("max",col_max);
    col_no_field.value = parseInt(col_max);
    col_max_temp = col_max;
    col_type = 0;
    // feature_modal.style.display='none';
    fieldBtnReset();

  }

  function makeLower() {
    var temp_lower = "";
  
    var image_count_temp = 1;
    for(var i=0; i<col_max; i++) {
    
        for(var i1=0; i1<lower_des[i].length; i1++) {
        

          if(lower_des[i].substring(i1,i1+7) == "_00.jpg")
          {
            if(image_count_temp<10)
            image_count_temp = "0"+image_count_temp;
            feature_data += "_"+ image_count_temp+".jpg";
          i1+=6;
       
          parseInt(image_count_temp);
          image_count_temp++;
        }
        else
          feature_data += lower_des[i].substring(i1,i1+1);

       }
          for(var i1=0; i1<col_type_no[i]; i1++) {
              if(col_type_no[i]==3) {
                if(i1==2)
                  break;
              }
              else if(col_type_no[i]==4) {
                if(i1==3)
                  break;
              }
              if(image_link[i][i1]!="") {
              image_download[image_count] = image_link[i][i1];
              for(var i2 = image_download[image_count].length; i2 >= 0; i2--) {
              if(image_download[image_count].substring(i2, i2+1) == "/") {

                image_download_name[image_count] = image_download[image_count].substring(i2+1, image_download[image_count].length);
              
                break;
              }
            }
            image_count++;
            }
          }
    }
    if(feature_data!="")
    feature_data += "\n</div>\n";
    if(spec_data!="")
    spec_data= '<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n'+ spec_data + '\n\t</table>\n</div>\n'
    if(wit_box_data!="")
    wit_box_data= '<div id=\\"in_box\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tWhat&#39;s in the Box\n\t</div>\n'+
            wit_box_data+'\n</div>\n';
    if(requirement_data!="")
    requirement_data= '<div id=\\"in_box\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tRequirements\n\t</div>\n'+
            requirement_data+'\n</div>\n';      
  }

  function createFile() {
    var css = '<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />';
    makeLower();
    command += '#!/bin/bash\ncd\ncd Downloads\nif [ -f webam\\(1\\).sh ]\nthen\nrm -f webam\\(1\\).sh\n\nzenity --error --text="An error occurred. Webam file already exists\!" --title="Warning\!";else echo "File Read";\ncd\ncd ' + path + '\nif [ -d ' + plu +
     ' ]; then zenity --error --text="An error occurred. Folder with same plu already exists\!" --title="Warning\!"; else echo "Product Created";\nmkdir -p ' +
      plu + '\ncd ' + plu ;

      if(upper_data!="")
        command += '\ntouch ' + plu + '_upper.html' + '\necho "'+ upper_data + '">>' + plu + '_upper.html';
      if(feature_data!=""|| spec_data!=""|| requirement_data!=""|| wit_box_data!="")
     command += '\ntouch ' + plu + '_lower.html' +
        '\necho "'+ css +'\n' + feature_data +'\n' + spec_data + wit_box_data + requirement_data + '">> ' + plu + '_lower.html';

      
        var temp_count = "";
        for(var i = 0; i < image_count; i++) {
          if(i==0)
            command += '\ntouch images';
          if(i<9)
            temp_count = "0"+(i+1);
          else
            temp_count = (i+1);
        command += '\nwget  -P images "' + image_download[i] + '"\nmv images/' + image_download_name[i] + ' images/' + plu +'_'+(temp_count)+'.jpg';
      
        }
          command += '\nfi';
        command += '\nfi\ncd \ncd Downloads\nrm -f webam.sh';
        // divCheck(); Check tags of each field and display errors there
        saveTextAsFile();
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

    
       if(tag_count == 0)
        saveTextAsFile();
      else
        if(tag_count > 0) {
            console.log(command);
          alert(tag_count + " tags not closed");
        }
        else
          if(tag_count < 0) {
              console.log(command);
            alert(Math.abs(tag_count) + " tags extra closed");
        }

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
                            if(raw_data.substring(loop-1,loop)!="\\")
                            process_data += "\\" + raw_data.substring(loop,loop+1);
                            else
                              process_data += raw_data.substring(loop,loop+1);
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

});






        // $("#drop_1").bind("click", function() {
        //   col_type = 1;
        //   $("#col_type_drop").text('One Col');
        //   max_pop_input =3;
        //   pop_data[col_max] = new Array(max_pop_input);
        // });

        // $("#drop_2").bind("click", function() {
        //   col_type = 2;
        //   $("#col_type_drop").text('Two Col Hor');
        //   max_pop_input =6;
        //   pop_data[col_max] = new Array(max_pop_input);
        // });

        // $("#drop_3").bind("click", function() {
        //   col_type = 3;
        //   $("#col_type_drop").text('Two Col Ver');
        //   max_pop_input =6;
        //   pop_data[col_max] = new Array(max_pop_input);
        // });

        // $("#drop_4").bind("click", function() {
        //   col_type = 4;
        //   $("#col_type_drop").text('Three Col');
        //   max_pop_input =9;
        //   pop_data[col_max] = new Array(max_pop_input);
        // });
     
        // $("#pop_next").bind("click", PopNext);

       



  // function PopNext() {
  
  //   if(col_type == 0 && $("#col_type_drop").text() == "Col Type ")
  //     alert("Please Select Col Type");

  //   else if( pop_input_count < max_pop_input){
  //       // need to change for col type assign required memory.
    
    
  //     pop_data[col_max][pop_input_count] = String(document.getElementById("data_field").value);
  //     pop_data[col_max][pop_input_count] = ascii(pop_data[col_max][pop_input_count]);
  //     pop_input_count++;
  //     $("#col_type_drop").css({"display": "none"});
  //     var pop_submit = $("#pop_name").text();
  //     if(pop_submit == "Head")
  //       $("#pop_name").text("Text");
  //     else
  //       if(pop_submit == "Text")
  //         $("#pop_name").text("Image Link");
  //       else
  //         if(pop_submit == "Image Link")
  //           $("#pop_name").text("Head");
        
  //    document.getElementById("data_field").value = "";   
          

  //         if( pop_input_count == max_pop_input){
  //           max_pop_input = 0;
  //           pop_input_count = 0;
  //           if(col_type == 1)
  //             oneCol();
  //           else if(col_type ==2)
  //             twoColHorizontal();
  //           else if(col_type ==3)
  //             twoColVertical();
  //           else if(col_type ==4)
  //             threeCol();
  //           $("#col_type_drop").css({"display": "inline-block"});
  //           document.getElementById('feature_modal').style.display='none';
  //           $("#col_type_drop").text('Col Type ');
  //           col_type = 0;
  //         }
        
  //   }
  
  // }