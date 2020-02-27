$(function(){
        "use strict";
        var gallery_data = [], plu_data = [];
        var process_data = "", count = 0;
        var command = "#!/bin/bash", plu_move = "", plu_notfound ="";
        $(".clic").bind("click",input1);
        $(".clear1").bind("click",clear);
       
        // document.getElementById("text_output").readOnly = true;
        // document.getElementById("text_input_sheet").readOnly = true;

      
    function clear()
    {  
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input_sheet").value = "";
        // document.getElementById("text_input").readOnly = false;
        command = "#!/bin/bash";
        gallery_data = "";
        plu_data = "";
        process_data = "";
        plu_move = "";
         plu_notfound ="";
        count = 0;
    }  

   function input1()
   {
   
    
      document.getElementById("text_input").readOnly = true;

       var gallery_data1 = String(document.getElementById("text_input").value);
       var plu_data1 = String(document.getElementById("text_output").value);
       var temp = "";
       for(var loop = 0; loop < plu_data1.length;loop++) {
          // temp += plu_data1.substring(loop, loop+1);
            if(plu_data1.substring(loop, loop+1) == '\n') {
              // alert(temp);
              plu_data.push(temp);
              temp = "";
            }
            else
            temp += plu_data1.substring(loop, loop+1);
          }
          var temp1 =""
       for(var loop = 0; loop < gallery_data1.length;loop++) {
          // temp1 += gallery_data1.substring(loop, loop+1);
            if(gallery_data1.substring(loop, loop+1) == '\n') {
              // alert(temp1);
              gallery_data.push(temp1);
              temp1 = "";
            }
            else
            temp1 += gallery_data1.substring(loop, loop+1);
          }    
          var plu_count =0;

       //    document.getElementById("text_output").value = gallery_data;
       // document.getElementById("text_input").value = plu_data ;

          for(var loop = 0; loop < plu_data.length;loop++) {
             plu_count =0; 
            for(var loop1 = 0; loop1 < gallery_data.length;loop1++) {
               count++;
              if(plu_data[loop] == gallery_data[loop1]) {

                command += '\nmv Rovi_Script/' + gallery_data[loop1] + '.jpg Rovi_Script1/' + gallery_data[loop1] + '.jpg';
                plu_move += gallery_data[loop1] +"\n";
                plu_count=1;
                break;
              }
            }
            if(plu_count == 0)
              plu_notfound += plu_data[loop] +"\n";
          }  
              
       
          // document.getElementById("text_input").value = gallery_data ;
       document.getElementById("text_output").value = "plu_move:" +  plu_move +"\n plu_notfound:" + plu_notfound;
       document.getElementById("text_input").value = command ;
       // document.getElementById("text_input_sheet").value = count;

   }


});