$(function(){
        "use strict";
        var raw_data = "", process_data = "", count = 0, tag_count=0;
        var tag_track=[], tag_track_count=0;
        tag_track[tag_track_count]="";
        var tag_track_line=[];
        var tag_track_line_count=0;
        var slash_n_count=0;
        var tag_track_close=[];
        var tag_track_close_count=0;
        tag_track_close[tag_track_close_count]="";
        var tag_track_close_line=[];
        $(".clic").bind("click", function(){
          if(document.getElementById("text_input").value == "")
            alert("Please Enter Text in Input Field / Press Clear button");
          else
          divCheck();

        });
        $(".clear1").bind("click",clear);
       
        document.getElementById("text_output").readOnly = true;
        document.getElementById("text_input_sheet").readOnly = true;
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input_sheet").value = "";
      
    function clear()
    {  
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input_sheet").value = "";
        document.getElementById("text_input").readOnly = false;

        raw_data = "";
        process_data = "";
        count = 0;
        tag_count=0;
        tag_track=[];
        tag_track_count=0;
        tag_track[tag_track_count]="";
        slash_n_count=1;
        tag_track_line=[];
        tag_track_line_count=0;
        tag_track_close=[];
        tag_track_close_count=0;
        tag_track_close[tag_track_close_count]="";
    }  

    function divCheck() {
      raw_data = "";
        process_data = "";
        count = 0;
        tag_count=0;
        var  temp_tag_track="";
        var temp_tag_track_close="";

        document.getElementById("text_input").readOnly = true;

       raw_data = String(document.getElementById("text_input").value);
       for(var i=0; i<raw_data.length; i++){
        if(raw_data.substring(i, i+1)=="\n")
          slash_n_count++;
        if(raw_data.substring(i, i+1)=="<"){
          for(var i1=i; i1<raw_data.length; i1++){
            if(raw_data.substring(i1, i1+1)=="\n")
              slash_n_count++;
            if(raw_data.substring(i1, i1+1)==" "||raw_data.substring(i1, i1+1)==">"||
              raw_data.substring(i1, i1+1)=="\n"||raw_data.substring(i1, i1+1)=="\t"){
              if(temp_tag_track.substring(1,2)=="/"){
                temp_tag_track_close=temp_tag_track;
                temp_tag_track="";
                i=i1;
              }
              else{
              tag_track[tag_track_count]=temp_tag_track;
              tag_track_line[tag_track_count]=slash_n_count;
              tag_track_count++;
              
             
              temp_tag_track="";
            }
              for(var i2=tag_track_count-1; i2>=0;i2--){     //code to match close and open tags
                // alert(tag_track[i2]+"   check   "+temp_tag_track_close);
                if(tag_track[i2]===undefined){;}
                  else{
                if(tag_track[i2].substring(1)==temp_tag_track_close.substring(2)){
                  
                  delete tag_track[i2];
                  
                  
                  delete tag_track_line[i2];
                  
                  temp_tag_track_close=""
                  temp_tag_track="";
                  break;
                }
               }
              }
              if(i2==-1){
                tag_track_close[tag_track_close_count]=temp_tag_track_close;
                tag_track_close_line[tag_track_close_count]=slash_n_count;
                  tag_track_close_count++;
                  temp_tag_track="";
                  temp_tag_track_close="";
              }
              i=i1;
            
              break;
            }
            
            temp_tag_track+=raw_data.substring(i1, i1+1);
          }
        }
       }
       var tag_line_concat="";
       var tag_track_close_line_concat="";
       for(var i=0;i<tag_track.length;i++){
        
        if(tag_track[i]===undefined||tag_track_line===undefined){;}
        else{
         tag_line_concat+=(parseInt(tag_track_line[i]) + 1)+"---"+tag_track[i]+"\n";
        }
       }

       for(var i=0;i<tag_track_close.length;i++){
          if(tag_track_close[i]===undefined||tag_track_close[i]=="")
            ;
          else
         tag_track_close_line_concat+=(parseInt(tag_track_close_line[i]) + 1)+"---"+tag_track_close[i]+"\n";
        
       }
       document.getElementById("text_input").value ="tags not closed:\n"+tag_line_concat+"    tags extra closed:\n"+tag_track_close_line_concat;

      
       input1();

    }  

    function divCheck_old() {
        raw_data = "";
        process_data = "";
        count = 0;
        tag_count=0;
      lbl:
      {
      document.getElementById("text_input").readOnly = true;

       raw_data = String(document.getElementById("text_input").value);

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
        ;
      else
        if(tag_count > 0)
          alert(tag_count + " tags not closed");
        else
          if(tag_count < 0)
            alert(Math.abs(tag_count) + " tags extra closed");
          input1();
     }

    }

   function input1()
   {
      document.getElementById("text_input").readOnly = true;

       raw_data = String(document.getElementById("text_input").value);

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
                    case(34):
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
                       default: {
                        process_data+= "&#" +
                       raw_data.substring(loop,loop+1).charCodeAt() + ";";
                       count++;
                     }
                   }

               }
              
       }
       document.getElementById("text_input").value = "";
       document.getElementById("text_output").value = process_data;
       document.getElementById("text_input_sheet").value = count;

   }


});