$(function(){
        "use strict";
        var raw_data = "", process_data = "", count = 0;
        $(".clic").bind("click",input1);
        $(".clear1").bind("click",clear);
       
        document.getElementById("text_output").readOnly = true;
        document.getElementById("text_input_sheet").readOnly = true;

      
    function clear()
    {  
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input_sheet").value = "";
        document.getElementById("text_input").readOnly = false;

        raw_data = "";
        process_data = "";
        count = 0;
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

       document.getElementById("text_output").value = process_data;
       document.getElementById("text_input_sheet").value = count;

   }


});