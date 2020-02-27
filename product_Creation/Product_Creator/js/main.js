$(function(){
        "use strict";
        var plu = "9654633";
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
        var lower = "";
        var col_type1_flag = true, col_type2_flag = true,
        col_type3_flag = true, col_type4_flag = true;
        var field1_empty = "", field2_empty = "",
        field3_empty = "";
        var feature_modal = document.getElementById('feature_modal'),
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
        col_no = document.getElementById("col_no"),
        back_btn = document.getElementById("back_btn");
        col_no_field.value = 0;
        var back_btn_flag =0, col_type_drop_flag = 0, add_btn_flag=0, del_btn_flag = 0, 
        edit_btn_flag = 0;
        fieldBtnReset();
    
           document.getElementById("expand_field").onkeydown = function(event) {
          if(event.which=="17" )
          ctrl = 1;
         }

         document.getElementById("expand_field").onkeyup = function(event) {
          ctrl = 0;
         }

         $("#expand_field").bind("click", function() {
          
         
          if(ctrl == 1) {
            expand_field.readOnly = true;
            // alert(expand_field.selectionStart);
            select_index.push(expand_field.selectionStart);
            var temp_data = expand_field.value;
            var select_data ="";
            var select_data1 = "";
            for(var i = 0; i<temp_data.length; i++) {

              if(i == expand_field.selectionStart) {
                select_data += "<";
                select_data1 += " ";
              }
              select_data += temp_data.charAt(i);
               select_data1 += temp_data.charAt(i);
            }
           expand_field.value = select_data;
            // if(select_id==0)
            //  select_id = setInterval(function() {
            //   if(select_count%2==0)
            //   expand_field.value = select_data;
            //   else
            //     expand_field.value = select_data1;
            //   select_count++;
            // }, 1000);

          }
          else {
            expand_field.readOnly = false;
            select_count = 0;
          }
         });

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


        $("#features").bind("click", function() {
          feature_modal.style.display='inline-block';
          // fieldBtnReset();
         });

        col_no_field.setAttribute("max",col_max);
        
        $("#edit_btn").bind("click", editing);
        $("#create").bind("click", createFile);

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
  col_type_drop.disabled = false
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
      

      display_arr[col_max] = '<div id="features" class="toplevel"><div class="header">Features</div><div class="onecol even horizontal clearfix"><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><img src="'+pop_data[col_max][2] +'"/><div class="body"><div class="text">'+pop_data[col_max][1] +'</div></div></div>' ;
         if(pop_data[col_max][2]!="") {
          
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else 
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
       else
        image_name1 = "";
        lower_des[col_max] = '\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\t<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\t'+pop_data[col_max][0] +'\n\t\t</div>\n\t\t'+image_name1+'\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;


    }
    else {
      display_arr[col_max] = '<div class="onecol even horizontal clearfix"><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><img src="'+pop_data[col_max][2] +'"/><div class="body"><div class="text">'+pop_data[col_max][1] +'</div></div></div>' ;
        if(pop_data[col_max][2]!="") {
         
          if(image_count>9)
           image_name1 = '<img src=\\"images/' + plu +'_' + image_count + '.jpg\\"/>';
         else 
          image_name1 = '<img src=\\"images/' + plu +'_0' + image_count + '.jpg\\"/>';
      }
       else
        image_name1 = "";
      lower_des[col_max] = '\n\t<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\t'+pop_data[col_max][0] +'\n\t\t</div>\n\t\t'+image_name1+'\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;
      
    }
    

    
    
  }

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
       display_arr[col_max] = '<div id="features" class="toplevel"><div class="header">Features</div><div class="threecol even horizontal clearfix"><div class="row"><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][2] +'"/></div><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><div class="text">'+pop_data[col_max][1] +'</div></div><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][5] +'"/></div><div class="header">'+pop_data[col_max][3] +'</div><div class="text">'+pop_data[col_max][4] +'</div></div><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][8] +'"/></div><div class="header">'+pop_data[col_max][6] +'</div><div class="text">'+pop_data[col_max][7] +'</div></div></div></div>' ;
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

      lower_des[col_max] = '\n<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\t<div class=\\"threecol even horizontal clearfix\\">\n\t\t<div class=\\"row\\">\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name1+'</div>\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t' +pop_data[col_max][0] + '\n\t\t\t\t</div>\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name2+'</div>\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t\t</div>\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name3+'</div>\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][6] +'\n\t\t\t\t</div>\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][7] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;
    }
    else {
      display_arr[col_max] = '<div class="threecol even horizontal clearfix"><div class="row"><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][2] +'"/></div><div class="header">'+col_max+' - '+pop_data[col_max][0] +'</div><div class="text">'+pop_data[col_max][1] +'</div></div><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][5] +'"/></div><div class="header">'+pop_data[col_max][3] +'</div><div class="text">'+pop_data[col_max][4] +'</div></div><div class="cell"><div style="text-align: center"><img src="'+pop_data[col_max][8] +'"/></div><div class="header">'+pop_data[col_max][6] +'</div><div class="text">'+pop_data[col_max][7] +'</div></div></div></div>' ;
     
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
     lower_des[col_max] = '\n\t<div class=\\"threecol even horizontal clearfix\\">\n\t\t<div class=\\"row\\">\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name1+'</div>\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t' +pop_data[col_max][0] + '\n\t\t\t\t</div>\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][1] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name2+'</div>\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][3] +'\n\t\t\t\t</div>\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][4] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\\"cell\\">\n\t\t\t\t<div style=\\"text-align: center\\">'+image_name3+'</div>\n\t\t\t\t<div class=\\"header\\">\n\t\t\t\t\t'+pop_data[col_max][6] +'\n\t\t\t\t</div>\n\t\t\t\t<div class=\\"text\\">\n\t\t\t\t\t'+pop_data[col_max][7] +'\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>' ;

    }
    
    
    
  }

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

    document.getElementById("template").innerHTML = display_arr1;
    col_no_field.setAttribute("max",col_max);
    col_no_field.value = parseInt(col_max);
    col_max_temp = col_max;
    col_type = 0;
    // feature_modal.style.display='none';
    fieldBtnReset();

  }

  function makeLower() {
    var temp_lower = "";
    lower += '<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />'
    var image_count_temp = 1;
    for(var i=0; i<col_max; i++) {
      
        for(var i1=0; i1<lower_des[i].length; i1++) {
          

          if(lower_des[i].substring(i1,i1+7) == "_00.jpg")
          {
            if(image_count_temp<10)
            image_count_temp = "0"+image_count_temp;
            lower += "_"+ image_count_temp+".jpg";
          i1+=6;
         
          parseInt(image_count_temp); 
          image_count_temp++;
        }
        else
          lower += lower_des[i].substring(i1,i1+1);

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
    lower += "\n</div>";
  }

  function createFile() {
    makeLower();
    command += '#!/bin/bash\ncd\ncd Downloads\nif [ -f webam\\(1\\).sh ]\nthen\nrm -f webam\\(1\\).sh\n\nzenity --error --text="An error occurred. Webam file already exists\!" --title="Warning\!";else echo "File Read";\ncd\ncd ' + path + '\nif [ -d ' + plu +
     ' ]; then zenity --error --text="An error occurred. Folder with same plu already exists\!" --title="Warning\!"; else echo "Product Created";\nmkdir -p ' +
      plu + '\ncd ' + plu ;

     command += '\ntouch ' + plu + '_lower.html' +
        '\necho "' + lower +'">> ' + plu + '_lower.html'; 

        
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
        divCheck();
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