  $(function(){
        "use strict";
        var sheet_data = "", date_input = "16-July-2018", date = "";
        var tab_count = 0;
        var plu = [];
        var row_count = 0;
        plu[row_count] = "";
        function clear() {
          sheet_data = "", date_input = "16-July-2018", date = "";
          tab_count = 0;
          plu = [];
          row_count = 0;
          plu[row_count] = "";
        }
        $(".clic").bind("click", function(){
          var temp_sheet_data = String(document.getElementById("text_input").value);
          

          if(temp_sheet_data !="")
          {
            inlineTable();
        }
        else
          alert("Please fill 'Enter Sheet Data' field and try again");
        });

    function inlineTable() {
      sheet_data = String(document.getElementById("text_input").value);
      for(var i = 0; i<sheet_data.length; i++) {
        if(sheet_data.substring(i,i+1) =="\t")
          tab_count++;
        if(tab_count==1 && sheet_data.substring(i,i+1) != "\t") {
          plu[row_count] += sheet_data.substring(i,i+1);
        }
        if(tab_count==2 && sheet_data.substring(i,i+1) == "\t") {
          var temp_plu = plu[row_count];
          plu[row_count] = temp_plu.trim();
        }
        if(tab_count==14 && sheet_data.substring(i,i+1) != "\t") {
          date += sheet_data.substring(i,i+1);
        }
        if(tab_count==15 && sheet_data.substring(i,i+1) == "\t") {
          
          if(date.trim() == date_input.trim())
            ; //consider it statements
          else
            ; //no consider skip upto \n statements
        }
      }

    }

});        
//         var path="Desktop/webami", plu = "", command = "", gallery_value = "";
//         var title_value = "", artist_value="", track_value = "", spec_value = "", upper = "";
//         var aec_main_title_flag = 0, aec_cover_flag = 0;
//         var aec_main_artist_flag = false;
//         var jp_playlist_tracksonly_flag = 0;
//         var gallery_name = "", format_value = "";
//         var aec_main_format_flag = false;
//         var title = "";
//         document.getElementById("title_field").readOnly = true;
//         document.getElementById("text_input_specification").value = "";
//         document.getElementById("text_input_upper").value = "";
//         document.getElementById("text_input_plu").value = "";
//         document.getElementById("title_field").value = "";
//         $(".clic").bind("click", function(){
//           var temp_plu = String(document.getElementById("text_input_plu").value);
//           var temp_html = String(document.getElementById("text_input_upper").value);
//           // var temp_path = String(document.getElementById("text_input_path").value);

//           if(temp_plu !="" && temp_html !="")
//           {
//           createFile();
//           document.getElementById("text_input_specification").readOnly = true;
//           document.getElementById("text_input_upper").readOnly = true;
//           document.getElementById("text_input_plu").readOnly = true;
//         }
//         else
//           alert("Please fill plu, html fields and try again");
//         });
        
//         $(".clear1").bind("click",clear);
//        // document.getElementById("text_input_tracks").readOnly = true;
      
//     function clear()
//     {  
//         title = "";
//         path="Desktop/webami";
//         plu = "";
//         command = "";
//         artist_value="";
//         gallery_value = "";
//         format_value = "";
//         title_value = "";
//         track_value = "";
//          spec_value = "";
//          upper = "";
//          gallery_name = "";
//         aec_cover_flag = 0;
//         aec_main_title_flag = 0;
//         aec_main_format_flag = false;
//         aec_main_artist_flag = false;
//         // document.getElementById("text_input_tracks").value = "";
//         document.getElementById("text_input_specification").value = "";
//         document.getElementById("text_input_upper").value = "";
//         document.getElementById("text_input_plu").value = "";
//         document.getElementById("title_field").value = "";
//         document.getElementById("text_input_specification").readOnly = false;
//           document.getElementById("text_input_upper").readOnly = false;
//           document.getElementById("text_input_plu").readOnly = false;
//     } 

// function tracks() {
  
//     var process_data = "";
//     var remove_data="";
//     var raw_data="";
     
//      var disc_flag=0;
//      //Code for removedata
     
    
//     raw_data=track_value;
//     var counter=1,        // to count sr.no for correct data removal
//     sr_flag=1;
//     if(raw_data != "")
//     {
//     	remove_data = raw_data;
//     // for(var loop=0; loop<raw_data.length; loop++) {
//     //     if(!(raw_data.substring(loop,loop+1)==" " ||
//     //      raw_data.substring(loop,loop+1)=="\n" ||
//     //       raw_data.substring(loop,loop+1)=="\t")) {
//     //         if(raw_data.substring(loop, loop+5)=="Disc " &&
//     //          raw_data.substring(loop+5, loop+6)!= 'NaN')
//     //             {counter=1;
                   
//     //             }

           
              

//     //        for(var loop1=loop; loop1<raw_data.length; loop1++) {

//     //         if(raw_data.substring(loop1, loop1+5)=="Disc " &&
//     //          raw_data.substring(loop1+5, loop1+6)!= 'NaN')
//     //             {
//     //               counter=1;
                   
//     //             }

//     //             if(raw_data.substring(loop1, loop1+1) == "-" &&
//     //               raw_data.substring(loop1+1, loop1+7)==" Disc ") {
                    
//     //                 loop1+=0;
                   
//     //                 continue;

//     //               } 

//     //               if(raw_data.substring(loop1, loop1+1) == "-" &&
//     //               raw_data.substring(loop1-7, loop1-2)=="Disc ") {
                    
//     //                 loop1+=0;
                   
//     //                 continue;

//     //               }   


//     //             if(raw_data.substring(loop1,loop1+4) == "<li>" ||
//     //                 raw_data.substring(loop1,loop1+4) == "<ul>"){
//     //                 loop1+=3;
//     //             continue;
//     //             }
//     //             else
//     //                 if(raw_data.substring(loop1, loop1+5) == "</li>" ||
//     //                 raw_data.substring(loop1, loop1+5) == "</ul>"){
//     //                 loop1+=4;
//     //             continue;
//     //             }
           

//     //             if((raw_data.substring(loop1, loop1+1) == counter ||
//     //                 raw_data.substring(loop1, loop1+2) == counter ||
//     //                 raw_data.substring(loop1, loop1+3) == counter ||
//     //                  raw_data.substring(loop1, loop1+1) == "." ||
//     //                  raw_data.substring(loop1, loop1+1) == " ") && (sr_flag==1))
//     //             {  
                    
//     //                 ;

//     //             }
//     //             else {
//     //                     remove_data += raw_data.substring(loop1,loop1+1);
             
                        
//     //                     sr_flag=0;
//     //                     if(raw_data.substring(loop1,loop1+1)=="\n") {
                           
//     //                         sr_flag=1;
//     //                         loop=loop1;
//     //                         break;
//     //                     }

//     //                 }
//     //         }
//     //         if(loop1>=raw_data.length)
//     //             break;
//     //       }
//     //       else
//     //       {
//     //        ;
//     //       }  
//     // }  

   
//      // Code ends for removedataAndHighlight

//      for(var i=0; i<remove_data.length; i++){
//             if(!(remove_data.substring(i,i+1) == " " ||
//              remove_data.substring(i,i+1) == "\n" ||
//               remove_data.substring(i,i+1) == "\t")){
                

              
//                 process_data+="\t\t\t\t\t<li>";

//             for(var i1=i; i1<remove_data.length;i1++) {

//               if(remove_data.substring(i1, i1+5)=="Disc " &&
//              remove_data.substring(i1+5, i1+6)!= 'NaN')
//                 {
                    
//                     {
//                       var temp_data = process_data.substring(0, process_data.length-4);
//                       process_data = temp_data;
//                       process_data +="\t\t\t\t</ul>\n\t\t\t\t\t<li>";
//                        for( i2=i1; i2<remove_data.length;i2++) {
//                         if(remove_data.substring(i2,i2+1)=="\n") {
//                           i=i1;
//                           i1=i2+1;
//                           break;
//                         }
//                       }
//                     }
//                     disc_flag=1;
//                 }

//              if(remove_data.substring(i1-5, i1)=="Disc " &&
//              remove_data.substring(i1, i1+1)!= 'NaN')
//                 {
                 
//                       process_data += remove_data.substring(i1, i1+1) + "</li>\n\t\t\t\t<ul>\n";
//                       var i2=0;
//                       for( i2=i1; i2<remove_data.length;i2++) {
//                         if(remove_data.substring(i2,i2+1)=="\n") {
//                           i=i1;
//                           i1=i2+1;
//                           break;
//                         }
//                       }
//                       if(i2<=remove_data.length)
//                       break;
                    
//                 }


//                     if(remove_data.substring(i1,i1 + 1)=="\n")
//                       { 
//                         process_data += "</li>" + remove_data.substring(i1,i1+1);
//                         i=i1;
//                         break;
//                       } 
//                     else
//                         process_data += remove_data.substring(i1,i1+1);

//                     if(i1==remove_data.length-1)
//                         process_data += "</li>";
//                 }
//                 if(i1>=remove_data.length)
//                     break;
//         }
//         }
//             if(disc_flag==1)
//                     {
//                       process_data +="\t\t\t\t</ul>\n";
//                     }
//     // 
//     }
//     return(ascii(process_data));
// }    




// function specification() {

//         var raw_data="";
//         var process_data="";
//         var count=0;
//         var raw_data1="";
    
//     //code for removeDataSpecification

//     raw_data=spec_value;
//     for(var loop=0; loop<raw_data.length; loop++)
//     {
//         if(raw_data.substring(loop, loop+4)== "UPC:" ||
//          raw_data.substring(loop, loop+6)== "Label:" ||
//         raw_data.substring(loop, loop+11)== "Product ID:" ||
//         raw_data.substring(loop, loop+17)== "Last Return Date:" ||
//         raw_data.substring(loop, loop+5)== "This " ||
//         raw_data.substring(loop, loop+19)== "Distributor/Studio:" ||
//         raw_data.substring(loop, loop+7)== "Region:" ||
//          raw_data.substring(loop, loop+7)== "Artist:")
//         {
        
//             for(var loop1=loop; loop1<raw_data.length; loop1++)
//             {
//                 if(raw_data.substring(loop1, loop1+1)== "\n")
//                     {
//                      loop=loop1;
//                      break;
//                    }
//             }
//         }
//         else
//             raw_data1+=raw_data.substring(loop,loop+1);
//     }

//     //code ends for removeDataSpecification

//         for(var loop=0; loop<raw_data1.length;loop++)
//     {
//         loop1_exit:
//         {
//         if(!(raw_data1.substring(loop,loop+1)==" " ||
//          raw_data1.substring(loop,loop+1)=="\n" ||
//           raw_data1.substring(loop,loop+1)=="\t"))
//         {
//           var comma_counter=0;
//             process_data+="\t\t\t<tr>\n\t\t\t\t<td>";
               
//                 for(var loop1=loop; loop1<raw_data1.length;loop1++)
//                 {
//                     process_data+=raw_data1.substring(loop1,loop1+1);
//                     if(raw_data1.substring(loop1,loop1+1)==":")
//                     {
//                         process_data+="</td>\n\t\t\t\t<td>";
                        
//                          for(var loop2=loop1+1; loop2<raw_data1.length;loop2++)
//                             {
//                                 if(!(raw_data1.substring(loop2,loop2+1)==" " ||
//                                  raw_data1.substring(loop2,loop2+1)=="\n" ||
//                                   raw_data1.substring(loop2,loop2+1)=="\t"))
//                                 {
                                   
//                                     for(var loop3=loop2; ;loop3++)
//                                         {
//                                             if(loop3==raw_data1.length)
//                                             {
//                                                 process_data+="</td>\n\t\t\t</tr>\n";
//                                                 loop=loop3;
//                                                 loop1=loop3;
//                                                 loop2=loop3;
//                                                 break loop1_exit;
//                                             }    
//                                             if(raw_data1.substring(loop3,loop3+1)=="\n")
//                                                 {
//                                                     process_data+="</td>\n\t\t\t</tr>\n";
//                                                     loop=loop3;
//                                                      break loop1_exit;
//                                                 }

//                                                  process_data+=raw_data1.substring(loop3,loop3+1);

//                                                 if(raw_data1.substring(loop3,loop3+1)==",")
//                                                   {
//                                                   comma_counter++;
                                                  
//                                               if(comma_counter % 4 == 0)
//                                                 process_data+="<br />";
//                                             }
//                                         }
//                                 }
//                             }
//                     }       
//                 }
  

//         }
        
//     }
//     }
//     // document.getElementById("text_output").value = process_data;
//     return(ascii(process_data));
// } 



// function ascii(data) {

//     var raw_data = "", process_data = "";

    

//        raw_data = data;

//        for(var loop = 0; loop < raw_data.length;loop++) {
//                if((raw_data.substring(loop,loop+1).charCodeAt() >= 65 &&
//                    raw_data.substring(loop,loop+1).charCodeAt() <= 90) ||
//                    (raw_data.substring(loop,loop+1).charCodeAt() >= 97 &&
//                    raw_data.substring(loop,loop+1).charCodeAt() <= 122)||
//                    (raw_data.substring(loop,loop+1).charCodeAt() >= 48 &&
//                    raw_data.substring(loop,loop+1).charCodeAt() <= 57) ||
//                    (raw_data.substring(loop,loop+1) === "\n" ||
//                    raw_data.substring(loop,loop+1) === "\t")) {
//                    process_data+= raw_data.substring(loop,loop+1);
//                }
                  
//                else {
//                 // var abn = "'";
//                 // alert(abn.charCodeAt());
//                    switch(raw_data.substring(loop,loop+1).charCodeAt()) {
//                        case(126):
//                     case(33):
//                     case(64):
//                     case(35):
//                     case(36):
//                     case(37):
//                     case(94):
//                     case(38):
//                     case(42):
//                     case(40):
//                     case(41):
//                     case(95):
//                     case(43):
//                     case(96):
//                     case(45):
//                     case(61):
//                     case(123):
//                     case(125):
//                     case(124):
//                     case(91):
//                     case(93):
//                     case(92):
//                     case(58):
//                     case(59):
//                     case(39):
//                     case(60):
//                     case(62):
//                     case(63):
//                     case(44):
//                     case(46):
//                     case(47):
//                     case(10):
//                     case(32):
//                        process_data+=raw_data.substring(loop,loop+1);
//                        break;  

//                     case(34):   
//                             process_data += "\\" + raw_data.substring(loop,loop+1);
//                             break;     
//                        default: {
//                         process_data+= "&#" +
//                        raw_data.substring(loop,loop+1).charCodeAt() + ";";
                       
//                      }
//                    }

//                }
              
//        }

//        // document.getElementById("text_output").value = process_data;
//        // document.getElementById("text_input_sheet").value = count;
//        return(process_data);
// } 

// function ascii_title(data) {

//     var raw_data = "", process_data = "";

    

//        raw_data = data;

//        for(var loop = 0; loop < raw_data.length;loop++) {
//                if((raw_data.substring(loop,loop+1).charCodeAt() >= 65 &&
//                    raw_data.substring(loop,loop+1).charCodeAt() <= 90) ||
//                    (raw_data.substring(loop,loop+1).charCodeAt() >= 97 &&
//                    raw_data.substring(loop,loop+1).charCodeAt() <= 122)||
//                    (raw_data.substring(loop,loop+1).charCodeAt() >= 48 &&
//                    raw_data.substring(loop,loop+1).charCodeAt() <= 57) ||
//                    (raw_data.substring(loop,loop+1) === "\n" ||
//                    raw_data.substring(loop,loop+1) === "\t")) {
//                    process_data+= raw_data.substring(loop,loop+1);
//                }
                  
//                else {
//                 // var abn = "'";
//                 // alert(abn.charCodeAt());
//                    switch(raw_data.substring(loop,loop+1).charCodeAt()) {
//                        case(126):
//                     case(33):
//                     case(64):
//                     case(35):
//                     case(36):
//                     case(37):
//                     case(94):
//                     case(38):
//                     case(42):
//                     case(40):
//                     case(41):
//                     case(95):
//                     case(43):
//                     case(96):
//                     case(45):
//                     case(61):
//                     case(123):
//                     case(125):
//                     case(124):
//                     case(91):
//                     case(93):
//                     case(92):
//                     case(58):
//                     case(59):
//                     case(39):
//                     case(60):
//                     case(62):
//                     case(63):
//                     case(44):
//                     case(46):
//                     case(47):
//                     case(10):
//                     case(32):
//                     case(34):
//                        process_data+=raw_data.substring(loop,loop+1);
//                        break;  

//                        default: {
//                         process_data+= "&#" +
//                        raw_data.substring(loop,loop+1).charCodeAt() + ";";
                       
//                      }
//                    }

//                }
              
//        }

//        // document.getElementById("text_output").value = process_data;
//        // document.getElementById("text_input_sheet").value = count;
//        return(process_data);
// } 




// function dataCollection() {
//   var html_data = String(document.getElementById("text_input_upper").value);
//   // for(var i = 0; i < html_data.length; i++) {
//   //   if(html_data.substring(i, i+22) == "jp-playlist tracksonly") {
    
//   //     for(var i0 = i+22; i0 < html_data.length; i0++) {
        
//   //       if(html_data.substring(i0-4, i0) == '<ul>') {
          
//   //         for(var i1 = i0; i1 < html_data.length; i1++) {
           
//   //           if(html_data.substring(i1, i1+5) == '</ul>') {
//   //             i = i1;
//   //             break;
//   //           }

//   //           ////////check this below
//   //           if(html_data.substring(i2, i2+5) == '</li>') {
//   //             spec_value += "\n";
//   //             continue;
//   //           }

//   //           ////////upto this


//   //           if(html_data.substring(i1, i1+5) == '<span') {
//   //             for(var i2 = i1; i2 < html_data.length; i2++) {
                
//   //               if(html_data.substring(i2, i2+5) == 'span>') {
//   //                 i1=i2+5;
                  
//   //                 break;
//   //               }
//   //             }
//   //           }
//   //           if(html_data.substring(i1, i1+1) == '<') {
//   //             for(var i2 = i1; i2 < html_data.length; i2++) {
//   //               if(html_data.substring(i2, i2+1) == '>' && html_data.substring(i2+1, i2+2) != "<") {
//   //                 i1=i2+1;
                  
//   //                 break;
//   //               }
//   //             }
//   //           }
            
//   //           track_value += html_data.substring(i1, i1+1); 
//   //         }
//   //         break;
//   //       }
//   //     }
//   //   }
//   for(var i = 0; i < html_data.length; i++) {
//     var track_flag = 0;
//     if(html_data.substring(i, i+22) == "jp-playlist tracksonly") {
//     	for(var i1 = i+22; i1 < html_data.length; i1++) {
//         if(track_flag == 1 && html_data.substring(i1, i1+5) == "</ul>")
//         {
//         track_value += "\n\t\t\t\t</ul>"
//           break;
//         }
//     		if(html_data.substring(i1, i1+7) == "discnum") {
//     			if(track_flag == 0) {
//     			track_value += "\n\t\t\t\t\t<li>" + html_data.substring(i1+11, i1+18) + "\t\t\t\t\t</li>\n\t\t\t\t<ul>"; 
//     				track_flag = 1;
//     			}
//     			else {
//     				track_value += "\n\t\t\t\t</ul>\n\t\t\t\t\t<li>" + html_data.substring(i1+11, i1+18) + "\t\t\t\t\t</li>\n\t\t\t\t<ul>"; 
//     			}
//     		}

//     		if(html_data.substring(i1, i1+12) == "aec-tracknum") {
//     			// if(track_flag == 0) {
//     			// 	track_value += "<ul>";
//     			// 	track_flag = 1;
//     			// }
//     			for(var i2 = i1+12; i2 < html_data.length; i2++) {
//     				if(html_data.substring(i2, i2+7) == "</span>") {
//     						track_value += "\n\t\t\t\t\t<li>";
//     					for(var i3 = i2+7; i3 < html_data.length; i3++) {
//     						track_value += html_data.substring(i3, i3+1) ;
//     						if(html_data.substring(i3-5, i3) == "</li>")
//     							break;

//     					}
    					
//     							break;
//     				}
    				
//     			}
    							
//     		}

//     	}
      

//     }

//     if(html_data.substring(i, i+9) == "aec-cover" && aec_cover_flag == 0) {
//       for(var i0 = i+9; i0 < html_data.length; i0++) {
        
//         if(html_data.substring(i0-5, i0) == 'src="') {
//           aec_cover_flag = 1;
//           for(var i1 = i0; i1 < html_data.length; i1++) {
            
//             if(html_data.substring(i1, i1+1) == '"') {
//               i = i1;
//               break;
//             }

//             gallery_value += html_data.substring(i1, i1+1); 
//           }

//           for(var i1 = gallery_value.length - 1; i1 >= 0; i1--) {
//               if(gallery_value.substring(i1, i1+1) == "/") {

//                 gallery_name += gallery_value.substring(i1+1, gallery_value.length);
//                 gallery_name = gallery_name.replace("%2B","+");
//                 break;
//               }

//             }
//           break;
//         }
//       }  
//     }
//     if(html_data.substring(i, i+14) == "aec-main-title" && aec_main_title_flag == 0) {
      
//       for(var i0 = i+14; i0 < html_data.length; i0++) {
        
//         if(html_data.substring(i0-4, i0) == '<h1>') {
//           aec_main_title_flag = 1;
//           for(var i1 = i0; i1 < html_data.length; i1++) {
            
//             if(html_data.substring(i1, i1+5) == '</h1>') {
//               i = i1;
//               break;
//             }
            
//             title_value += html_data.substring(i1, i1+1); 
//           }
//           break;
//         }
//       }
      
//     }
//     if(html_data.substring(i, i+23) == 'aec-main-artist"><span>' && (!(aec_main_artist_flag))) {
//       for(var i0 = i+23; i0 < html_data.length; i0++) {
//         if(html_data.substring(i0-2, i0) == '">') {
//           aec_main_artist_flag = true;
//           for(var i1 = i0; i1 < html_data.length; i1++) {
            
//             if(html_data.substring(i1, i1+4) == '</a>') {
//               i = i1;

//               if (artist_value == "Various Artists") 
//                     artist_value = "";
        
//               break;
//             }
            
//             artist_value += html_data.substring(i1, i1+1); 
//           }
//           break;
//         }
//       }
//     }

//     if(html_data.substring(i, i+36) == 'aec-title-featurelist"><span>Format:' && (!(aec_main_format_flag))) {
//       for(var i0 = i+36; i0 < html_data.length; i0++) {
//         if(html_data.substring(i0-2, i0) == 'n>') {
//           aec_main_format_flag = true;
//           for(var i1 = i0; i1 < html_data.length; i1++) {
            
//             if(html_data.substring(i1, i1+5) == '</li>') {
//               i = i1;
//               if(format_value == "LP")
//                 format_value = "Vinyl";
//               else
//                 if(format_value == "CD")
//                   format_value = "Audio CD";
//                 else
//                   if(format_value == "DVD")
//                     format_value = "DVD";
//                 else
//                   if(format_value == "Blu-ray")
//                     format_value = "Blu-Ray";
//                 else
//                   if(format_value == "SACD")
//                     format_value = "SACD";
//                 else  
//                   if(format_value == "4K Ultra HD") {
//                     format_value = "4K UHD";
//                     alert("Please check 'TM' in Logo");
//                   }
                
//                 else;
//               break;
//             }
            
//             format_value += html_data.substring(i1, i1+1); 
//           }
//           break;
//         }
//       }
//     }  
//     if(html_data.substring(i, i+19) == "product-primaryinfo") {
//       for(var i0 = i+19; i0 < html_data.length; i0++) {
        
//         if(html_data.substring(i0-4, i0) == '<ul>') {
          
//           for(var i1 = i0; i1 < html_data.length; i1++) {
            
//             if(html_data.substring(i1, i1+5) == '</ul>') {
//               i = i1;
//               break;
//             }
//             if(html_data.substring(i2, i2+5) == '</li>') {
//               spec_value += "\n";
//               continue;
//             }
//             if(html_data.substring(i1, i1+1) == '<') {
//               for(var i2 = i1; i2 < html_data.length; i2++) {
//                 if(html_data.substring(i2, i2+1) == '>' && html_data.substring(i2+1, i2+2) != "<") {
//                   i1=i2+1;
                  
//                   break;
//                 }
//               }
//             }
            
//             spec_value += html_data.substring(i1, i1+1); 
//           }
//           break;
//         }
//       }
//     }
//     if(html_data.substring(i, i+24) == "aec-desc-review collapse") {
//       for(var i0 = i+24; i0 < html_data.length; i0++) {
        
//         if(html_data.substring(i0-3, i0) == '<p>') {
         
//           for(var i1 = i0; i1 < html_data.length; i1++) {
            
//             if(html_data.substring(i1, i1+4) == '</p>') {
//               i = i1;
//               break;
//             }
            
//             upper += html_data.substring(i1, i1+1); 
//           }
//           break;
//         }
//       }
//     }

//   }

  
    
    
  
// } 


// function createFile()
// {
//   track_value = ""; spec_value = ""; upper = ""; command = ""; gallery_value = "";
  
//   dataCollection();
    
    
//      spec_value = specification();
//      track_value = ascii(track_value);
     
     
//     path="Desktop/webami";
//     plu=String(document.getElementById("text_input_plu").value);
//     var upper_value = String(document.getElementById("text_input_specification").value);
//     if(artist_value!="")
//       title = ascii_title(title_value+" - "+artist_value+" ["+format_value+"]");
//     else
//       title = ascii_title(title_value+" ["+format_value+"]");
//     if(upper_value!="") 
//       upper_value = ascii(upper_value);
//     else if(upper!="")
//     upper_value = ascii(upper);
//   else {
//     if(artist_value!="")
//     upper_value = ascii(title_value+" by "+artist_value+" in "+format_value);
//     else
//       upper_value = ascii(title_value+" in "+format_value);
//   }
    
    
//     // command += '\ncd\ncd Downloads\nif [ -f webam.sh(1) ]\nthen\nrm -f webam.sh\nrm -f webam.sh(1)\nfi';



//     command += '#!/bin/bash\ncd\ncd Downloads\nif [ -f webam\\(1\\).sh ]\nthen\nrm -f webam\\(1\\).sh\n\nzenity --error --text="An error occurred\!" --title="Warning\!";else echo "Product Created";\ncd\ncd ' + path + '\nif [ -d ' + plu +
//      ' ]; then zenity --error --text="An error occurred\!" --title="Warning\!"; else echo "Product Created";\nmkdir -p ' +
//       plu ;
      
//      if(gallery_value != "")
//       command += '\nwget  -P ' + plu +'_galleryimages "' + gallery_value + '"\nmv ' + plu + '_galleryimages/' + gallery_name + ' ' + plu + '_galleryimages/' + plu +'.01.prod.jpg' + '\ncd ' + plu;
//       else
//         command += '\ncd ' + plu;

//     if(upper_value != "")
//       command += '\ntouch ' + plu + '_upper.html' + '\necho "' + upper_value + '">> ' + plu + '_upper.html';

//     if(spec_value != "" && track_value != "")
//       command += '\ntouch ' + plu + '_lower.html' +
//         '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n\t<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\tTracks\n\t\t</div>\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + plu + '_lower.html\nfi';
//     else
//       if(spec_value != "")
//         command += '\ntouch ' + plu + '_lower.html' +
//        '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n<div id=\\"#specifications\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tSpecifications\n\t</div>\n\t<table class=\\"specifications\\">\n\t\t<tbody>\n'+ spec_value + '\n\t\t</tbody>\n\t</table>\n</div>">> ' + plu + '_lower.html\nfi';
//     else
//       if(track_value != "")
//         command += '\ntouch ' + plu + '_lower.html' +
//        '\necho "<link rel=\\"stylesheet\\" href=\\"https://images.frys.com/art/css/product_page.css\\" />\n\t<div id=\\"features\\" class=\\"toplevel\\">\n\t<div class=\\"header\\">\n\t\tFeatures\n\t</div>\n\<div class=\\"onecol even horizontal clearfix\\">\n\t\t<div class=\\"header\\">\n\t\t\tTracks\n\t\t</div>\n\t\t<div class=\\"body\\">\n\t\t\t<div class=\\"text\\">\n\t\t\t\t<ul>' + track_value + '\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>">> ' + plu + '_lower.html\nfi';   
//        else
//         command +='\nfi';
//       command += '\nfi\ncd \ncd Downloads\nrm -f webam.sh';
//        // document.getElementById("text_input_tracks").value = "";
       
//        document.getElementById("text_input_upper").value = "";
//     // document.getElementById("text_input_tracks").value = command;
//     document.getElementById("text_input_specification").value = "";
//     divCheck();

    

// }

// function divCheck() {
//         var raw_data = "";
//         var process_data = "";
//         var count = 0;
//         var tag_count=0;
//       lbl:
//       {
//       // document.getElementById("text_input").readOnly = true;

//        raw_data = command;

//        for(var loop = 0; loop < raw_data.length;loop++) {

//           if(raw_data.substring(loop,loop+1) == ("<") && raw_data.substring(loop+1,loop+2) == ("/"))
//           {

//             for(var loop1 = loop; loop1 < raw_data.length; loop1++) {
//               if(raw_data.substring(loop1,loop1+1) == (">"))
//               {
//                 tag_count--;
//                 loop=loop1;
//                 break;
//               }
//               else
//                 if(raw_data.substring(loop1,loop1+1) == ("\n") || (loop1 == raw_data.length - 1))
//                 {
//                   alert("An Error Occurred on line" + raw_data.substring(loop,loop1+1));
//                   break lbl;
//                 }
//             }
//           }
//           else
//             if(raw_data.substring(loop,loop+1) == ("<") && (!(raw_data.substring(loop+1,loop+2) == ("/"))))
//               {
//                 for(var loop1 = loop; loop1 < raw_data.length; loop1++) {

//                   if(raw_data.substring(loop1,loop1+1) == (">") && (!(raw_data.substring(loop1-1,loop1) == ("/"))))
//                     {
//                     tag_count++;
                   
//                     loop=loop1;
//                     break;
//                     }
//                     else
//                     if(raw_data.substring(loop1,loop1+1) == (">") && raw_data.substring(loop1-1,loop1) == ("/"))
//                       {

//                         loop=loop1;
//                           break;
//                       }
//                     else
//                       if(raw_data.substring(loop1,loop1+1) == ("\n") || (loop1 == raw_data.length - 1))
//                         {
//                           alert("An Error Occurred on line" + raw_data.substring(loop,loop1+1));
//                           break lbl;
//                         }
//                 }
//               }
//           }

      
//        if(tag_count == 0) {
//         saveTextAsFile();
//         document.getElementById("title_field").value = title;
//       }
//       else
//         if(tag_count > 0)
//           alert(tag_count + " tags not closed");
//         else
//           if(tag_count < 0)
//             alert(Math.abs(tag_count) + " tags extra closed");
          
//      }

//     }


// function saveTextAsFile()
// {
//     var textToSave = command;
//     var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
//     var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
//     var fileNameToSaveAs = "webam.sh"
 
//     var downloadLink = document.createElement("a");
//     downloadLink.download = fileNameToSaveAs;
//     downloadLink.innerHTML = "Download File";
//     downloadLink.href = textToSaveAsURL;
//     downloadLink.onclick = destroyClickedElement;
//     downloadLink.style.display = "none";
//     document.body.appendChild(downloadLink);
 
//     downloadLink.click();
// }
 
// function destroyClickedElement(event)
// {
//     document.body.removeChild(event.target);
// }
 

