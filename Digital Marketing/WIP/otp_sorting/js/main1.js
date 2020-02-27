 $(function(){
         "use strict";
         var match_index = [];
         var match_index_count = 0;
         var otp_data = "";
	    var sorting_data = "";
	    var sorting_list = [];
	    var sorting_list_count = 0;
	    sorting_list[sorting_list_count] = "";
	    var otp_list = [];
	    var otp_list_count = 0;
	    otp_list[otp_list_count] = "";
	    var plu_list = [];
	    var plu_list_count = 0;
	    plu_list[plu_list_count] = "";
	    var tab_counter = 0;
         var sorted_data = "";
         document.getElementById("otp_field").readOnly = false;
         document.getElementById("sort_field").readOnly = false;
         document.getElementById("text_input_sheet").readOnly = false;
         document.getElementById("otp_field").value = "";
         document.getElementById("sort_field").value = "";
         document.getElementById("text_input_sheet").value = "";

         
          $(".clic").bind("click",function() {
            otp_data = document.getElementById("otp_field").value;
            sorting_data = document.getElementById("sort_field").value;
              if(otp_data!="" && sorting_data!="") {
              pluCollect();
              document.getElementById("otp_field").readOnly= true;
              document.getElementById("sort_field").readOnly= true;
            }
            else
              alert("Please fill Otp Data & Sorting Plu field");
          });
          $(".clear1").bind("click",clear);

  function clear() {
      match_index = [];
      match_index_count = 0;
      otp_data = "";
      sorting_data = "";
      sorting_list = [];
      sorting_list_count = 0;
      sorting_list[sorting_list_count] = "";
      otp_list = [];
      otp_list_count = 0;
      otp_list[otp_list_count] = "";
      plu_list = [];
      plu_list_count = 0;
      plu_list[plu_list_count] = "";
      tab_counter = 0;
      sorted_data = "";
      document.getElementById("otp_field").readOnly= false;
      document.getElementById("sort_field").readOnly= false;
      document.getElementById("otp_field").value = "";
      document.getElementById("sort_field").value = "";
      document.getElementById("text_input_sheet").value = "";
      document.getElementById("sort_lbl").innerHTML = "Sorting Plu";
  }       

  function pluCollect() {
      

    for(var i = 0; i<sorting_data.length;i++) {
    	if(sorting_data.substring(i,i+1)=="\n") {
        sorting_list[sorting_list_count]= sorting_list[sorting_list_count].trim();
    		sorting_list_count++;
    		sorting_list[sorting_list_count] = "";
    		continue;
    	}
    	sorting_list[sorting_list_count] += sorting_data.substring(i,i+1);

    }

    for(var i = 0; i<otp_data.length;i++) {
    	otp_list[otp_list_count] +=  otp_data.substring(i,i+1);
    	if(otp_data.substring(i,i+1)=="\t") {
    		tab_counter++;
    		continue;
    		
    	}
    	else if(otp_data.substring(i,i+1)=="\n") {
    		otp_list_count++;
    		otp_list[otp_list_count] = "";
    		tab_counter = 0;
        plu_list[plu_list_count] = plu_list[plu_list_count].trim();
    		plu_list_count++;
    		plu_list[plu_list_count] = "";
    	}
    	if(tab_counter == 1) 
    		plu_list[plu_list_count] +=  otp_data.substring(i,i+1);
    	
    	
    }
    pluSorting();
    
  }

  // function pluSorting() {
  //   alert("plu1");
  // 	for(var i = 0; i<sorting_list.length; i++) {
  //     if(sorting_list[i]=="")
  //       continue;
  // 		for(var i1 = 0; i1<plu_list.length; i1++) {
      
  // 			if(sorting_list[i]==plu_list[i1]) {
          	
  // 				match_index[match_index_count] = i1;
  // 				match_index_count++;
  // 				break;

  // 			}
  //       else
  //        ; 
  // 		}
  // 	}
    
    
  // 	sortedList();
  // }    

    function pluSorting() {
      alert("plu2");
    for(var i = 0; i<plu_list.length; i++) {
      if(plu_list[i]=="")
        continue;
      for(var i1 = 0; i1<sorting_list.length; i1++) {
        if(sorting_list[i1]=="")
        continue;
        if(sorting_list[i1]==plu_list[i]) {
            
          match_index[match_index_count] = i;
          match_index_count++;
          break;

        }
        else
         ; 
      }
    }
    
    
    sortedList();
  }      

  function sortedList() {
  	for(var i = 0; i<otp_list.length; i++) {
  		for(var i1 = 0; i1<match_index.length; i1++) {
	  		if(i==match_index[i1])
	  			{
	  				
	  			break;
	  			}
	  		if(i1==match_index.length-1)
	  		sorted_data += otp_list[i];
	  }
    if(match_index.length == 0)
      sorted_data += otp_list[i];
  	}
    document.getElementById("otp_field").value = "";
    document.getElementById("sort_field").value = "";
    document.getElementById("text_input_sheet").value = "";
    document.getElementById("text_input_sheet").value = match_index_count;
    document.getElementById("sort_lbl").innerHTML = "Sorted Data";
    document.getElementById("sort_field").value = sorted_data;
  	console.log("sorted data" + sorted_data);
  	console.log("otp list"+ otp_list);
  }










//         var gallery_data = [], plu_data = [];
//         var process_data = "", count = 0;
//         var command = "#!/bin/bash", plu_move = "", plu_notfound ="";
//         $(".clic").bind("click",input1);
//         $(".clear1").bind("click",clear);
       
//         // document.getElementById("text_output").readOnly = true;
//         // document.getElementById("text_input_sheet").readOnly = true;

      
//     function clear()
//     {  
//         document.getElementById("text_input").value = "";
//         document.getElementById("text_output").value = "";
//         document.getElementById("text_input_sheet").value = "";
//         // document.getElementById("text_input").readOnly = false;
//         command = "#!/bin/bash";
//         gallery_data = "";
//         plu_data = "";
//         process_data = "";
//         plu_move = "";
//          plu_notfound ="";
//         count = 0;
//     }  

//    function input1()
//    {
   
    
//       document.getElementById("text_input").readOnly = true;

//        var gallery_data1 = String(document.getElementById("text_input").value);
//        var plu_data1 = String(document.getElementById("text_output").value);
//        var temp = "";
//        for(var loop = 0; loop < plu_data1.length;loop++) {
//           // temp += plu_data1.substring(loop, loop+1);
//             if(plu_data1.substring(loop, loop+1) == '\n') {
//               // alert(temp);
//               plu_data.push(temp);
//               temp = "";
//             }
//             else
//             temp += plu_data1.substring(loop, loop+1);
//           }
//           var temp1 =""
//        for(var loop = 0; loop < gallery_data1.length;loop++) {
//           // temp1 += gallery_data1.substring(loop, loop+1);
//             if(gallery_data1.substring(loop, loop+1) == '\n') {
//               // alert(temp1);
//               gallery_data.push(temp1);
//               temp1 = "";
//             }
//             else
//             temp1 += gallery_data1.substring(loop, loop+1);
//           }    
//           var plu_count =0;

//        //    document.getElementById("text_output").value = gallery_data;
//        // document.getElementById("text_input").value = plu_data ;

//           for(var loop = 0; loop < plu_data.length;loop++) {
//              plu_count =0; 
//             for(var loop1 = 0; loop1 < gallery_data.length;loop1++) {
//                count++;
//               if(plu_data[loop] == gallery_data[loop1]) {

//                 command += '\nmv Rovi_Script/' + gallery_data[loop1] + '.jpg Rovi_Script1/' + gallery_data[loop1] + '.jpg';
//                 plu_move += gallery_data[loop1] +"\n";
//                 plu_count=1;
//                 break;
//               }
//             }
//             if(plu_count == 0)
//               plu_notfound += plu_data[loop] +"\n";
//           }  
              
       
//           // document.getElementById("text_input").value = gallery_data ;
//        document.getElementById("text_output").value = "plu_move:" +  plu_move +"\n plu_notfound:" + plu_notfound;
//        document.getElementById("text_input").value = command ;
//        // document.getElementById("text_input_sheet").value = count;

//    }


});