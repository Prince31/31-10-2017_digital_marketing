$(function(){
        "use strict";
        var raw_data = "", process_data = "", count = 0, tag_count=0;
        var unique_ascii_count = [], unique_ascii_count_counter=0;
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
        unique_ascii_count = [];
         unique_ascii_count_counter=0;
    }  

    function divCheck() {
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
                       unique_ascii_count[unique_ascii_count_counter]="";
                       unique_ascii_count[unique_ascii_count_counter]=raw_data.substring(loop,loop+1)+"\n";
                       unique_ascii_count_counter++;
                     }
                   }

               }
              
       }
       for(var i=0; i<unique_ascii_count_counter;i++)
        console.log(unique_ascii_count[i]);
       document.getElementById("text_input").value = "";
       document.getElementById("text_output").value = unique_ascii_count;
       document.getElementById("text_input_sheet").value = count;

   }


});