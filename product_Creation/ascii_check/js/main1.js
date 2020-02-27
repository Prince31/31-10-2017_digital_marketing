$(function(){
        "use strict";
        var raw_data = "", process_data = "", count = 0, tag_count=0;
        $(".clic").bind("click",divCheck);
        $(".clear1").bind("click",clear);
       
        document.getElementById("text_output").readOnly = true;
        document.getElementById("text_input_sheet").readOnly = true;
        document.getElementById("text_output").innerHTML = "<li>prince</li><li>prince</li>";
      
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
    }  

    function divCheck() {
        tag_count=0;
        var tag_allowed = ["link", "b", "div", "img", "ul", "li", "a", "iframe", "br", "span", "script"];
        var tag_order = [];
      lbl_loop:
      {
      document.getElementById("text_input").readOnly = true;

       raw_data = String(document.getElementById("text_input").value);

       for(var loop = 0; loop < raw_data.length;loop++) {

          if(raw_data.substring(loop,loop+1) == ("<") && raw_data.substring(loop+1,loop+2) == ("/"))
          {

            var temp_tag = "";

            for(var loop1 = loop + 1; loop1 < raw_data.length; loop1++) {

               if(raw_data.substring(loop1, loop1+1) != " ")
                   temp_tag += raw_data.substring(loop1,loop1+1);
                else
                {
                   if(temp_tag == tag order[tag_count-1])
                    {
                        for(var loop2 = loop1 + 1; loop2 < raw_data.length; loop2++) {
                      if(raw_data.substring(loop2,loop2+1) == (">"))
                        {
                          tag_count--;
                          loop=loop2;
                          break lbl_loop1;
                        }
                        else
                          if(raw_data.substring(loop2,loop2+1) == ("\n") || (loop2 == raw_data.length - 1))
                          {
                            alert("An Error Occurred on line" + raw_data.substring(loop,loop2+1));
                            break lbl_loop;
                          }

                    }
                }    
              }
          }
        }  
          else
            if(raw_data.substring(loop,loop+1) == ("<") && (!(raw_data.substring(loop+1,loop+2) == ("/"))))
              {

                var temp_tag = "";
                lbl_loop1:
                {
                for(var loop1 = loop; loop1 < raw_data.length; loop1++) {

                  if(raw_data.substring(loop1, loop1+1) != " ")
                   temp_tag += raw_data.substring(loop1,loop1+1);
                else
                {
                  for(var loop2 = 0; loop2 <tag_allowed.length; loop2++)
                  {
                    if(temp_tag == tag_allowed[loop2])
                    {
                      tag order.push(temp_tag);
                      for(var loop3 = loop1; loop3 < raw_data.length; loop3++)
                      {
                            if(raw_data.substring(loop3,loop3+1) == (">") && (!(raw_data.substring(loop3-1,loop3) == ("/"))))
                            {
                            tag_count++;
                           
                            loop=loop3;
                            break lbl_loop1;
                            }
                            else
                            if(raw_data.substring(loop3,loop3+1) == (">") && raw_data.substring(loop3-1,loop3) == ("/"))
                              {

                                loop=loop3;
                                  break lbl_loop1;
                              }
                            else
                              if(raw_data.substring(loop3,loop3+1) == ("\n") || (loop3 == raw_data.length - 1))
                                {
                                  alert("An Error Occurred on line" + raw_data.substring(loop,loop3+1));
                                  break lbl_loop;
                                }
                      }
                    }
                      else
                        {
                                  alert("An Error Occurred on line" + raw_data.substring(loop,loop3+1));
                                  break lbl_loop;
                                }
                  }
                }

                  
                }
                }
              }
          }

      
       if(tag_count == 0)
        input1();
      else
        if(tag_count > 0)
          alert(tag_count + " tags not closed");
        else
          if(tag_count < 0)
            alert(Math.abs(tag_count) + " tags extra closed");

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

       document.getElementById("text_output").value = process_data;
       document.getElementById("text_input_sheet").value = count;

   }


});