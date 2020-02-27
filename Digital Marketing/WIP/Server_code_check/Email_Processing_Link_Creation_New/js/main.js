$(function(){
    "use strict";
    $(".clic").bind("click", function(){
          if(document.getElementById("text_input").value == ""||
            document.getElementById("text_output").value == "")
            alert("Please Enter Text in Input Fields / Press Clear button");
          else
          pluCollect();

        });
    $(".clear1").bind("click",clear);
    var li_flag = false;
    var data = "";
    var csv_data = "";
    var csv_data_index = 0;
    var plu_data = [];
    var error_data = "";
    var error_count = 0;
    var link_check_count = 0;
    var semicolon_count =0;
    var process_data = "";
    var plu_data_index = 0;
    var ahref_index=-1;
    var a_close_index=-1;
    var box_index=-1;
    var process_data="";
     document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
       
        
        document.getElementById("text_input").readOnly = false;
        document.getElementById("lbl_name_1").innerHTML = "Html";
        document.getElementById("lbl_name_2").innerHTML = "Csv Plu";
    function clear()
    {  
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
       
         document.getElementById("text_output").readOnly = false;
        document.getElementById("text_input").readOnly = false;
        document.getElementById("lbl_name_1").innerHTML = "Html";
        document.getElementById("lbl_name_2").innerHTML = "Csv Plu";
        data = "";
        error_data = "";
        li_flag = false;
        error_count = 0;
        link_check_count = 0;
        plu_data = [];
        semicolon_count =0;
        csv_data = "";
        csv_data_index = 0;
        process_data = "";
        plu_data_index = 0;
        ahref_index=-1;
        a_close_index=-1;
        process_data="";
        box_index=-1;
    }

     function link() {
         document.getElementById("text_input").readOnly = true;
        document.getElementById("text_output").readOnly = true;
        data = String(document.getElementById("text_input").value);

        for(var i0=0; i0<data.length;) {
            plu_data_index="";   
        ahref_index = data.indexOf('<a href="');
        if(ahref_index==-1) {
            process_data+=data;
            break;
        }

        process_data+=data.substring(0,ahref_index);
        data=data.substring(ahref_index,data.length);
        // alert(process_data);
        a_close_index= data.indexOf('</a>');
        if(a_close_index==-1){
            process_data+=data;
            break;
        }
        box_index=data.indexOf("box_")
        if(box_index==-1){
            process_data+=data;
            break;
        }
        if(box_index<a_close_index) {

            for(var i=box_index+4; i<box_index+8;i++) {
                // alert(data.charAt(i).charCodeAt());
            if(data.charAt(i).charCodeAt()>48&&
                data.charAt(i).charCodeAt()<=57)
                plu_data_index+=data.charAt(i);
            else if(data.charAt(i).charCodeAt()==48) {
                if(i==box_index+4)
                    ;
                else
                    plu_data_index+=data.charAt(i);
                // alert(0);   
            }
            else
                break;
            }
            if(plu_data_index=="")
                alert('Error in plu_Data_index==""');
            if(plu_data[plu_data_index]==undefined) {
                alert("Error at plu_data[plu_data_index]==undefined"+plu_data_index);
                plu_data[plu_data_index]="";
            }
            var plus_index=plu_data[plu_data_index].indexOf("+");
            if(plus_index==-1)
            process_data+='<a href="https://www.frys.com/product/'+plu_data[plu_data_index]+'?nearbyStoreName=false&site=">\n';
            else {
                process_data+='<a href="https://www.frys.com/search?query_string='+
                        plu_data[plu_data_index]+'&nearbyStoreName=false&site=">\n';
                      }
            var img_index=data.indexOf('            <img');
            if(img_index==-1){
            process_data+=data;
            break;
        }
            process_data+=data.substring(img_index,a_close_index)+'</a>';

            data=data.substring(a_close_index+4,data.length);

        }
        else {
            process_data+=data.substring(0,a_close_index)+'</a>';
            data=data.substring(a_close_index+4,data.length);
        }

     }
     process_data=process_data.replace(/http/gi, "https");
     process_data=process_data.replace(/httpss/gi, "https");
//ascii left to do here 04-November02018
	var ascii_process_data="";
	for(var i=0; i<process_data.length;i++) {
     ascii_process_data+=ascii(process_data.substring(i,i+1));
	}
	document.getElementById("text_output").value="";
   document.getElementById("text_input").value=""; 
    document.getElementById("text_output").value=ascii_process_data;
    document.getElementById("lbl_name_2").innerHTML = "Output";
}
//     function link() {
//         data = "";
//         li_flag = false;
//         process_data = "";
//         document.getElementById("text_input").readOnly = true;
//         document.getElementById("text_output").readOnly = true;
//         data = String(document.getElementById("text_input").value);
//         var x=0;
//         var plu_data_index_temp = "";
//         for( ; x<data.length;x++) {
           
//             if(data.substring(x,x+4)=="<li>"&& li_flag==false)
//                  li_flag = !(li_flag);
//              if(data.substring(x,x+5)=="</li>"&& li_flag==true)
//                  li_flag = !(li_flag);


           

           
//             if(li_flag) {
               
               
//                     li_label:{
//                 if(data.substring(x,x+9)=='<a href="') {

//                     for(var x1=x;x1<data.length;x1++) {
//                         // if(data.substring(x1,x1+1)==box_)
//                         var i = data.substring(x1+4,x1+5).charCodeAt();
//                         var i1 = data.substring(x1+5,x1+6).charCodeAt();
//                         var i2 = data.substring(x1+6,x1+7).charCodeAt();
//                         var i3 = data.substring(x1+7,x1+8).charCodeAt();
//                         var i4 = data.substring(x1+8,x1+9).charCodeAt();
//                         var i5 = data.substring(x1+9,x1+10).charCodeAt();
//                         if(data.substring(x1,x1+4)=="box_" &&
//                             (i>=48&& i<=57) && ((i1>=48&& i1<=57))) {

//                 // li_flag = !(li_flag);
//                 plu_data_index_temp = "";
              
       

              
//                 if(i>48&& i<=57)
//                     plu_data_index_temp+=String.fromCharCode(i);
//                 else
//                     if(i==48)
//                         ;
//                     else
//                         ;
//                 if(i1>=48&& i1<=57)
//                     plu_data_index_temp+=String.fromCharCode(i1);
//                     else
//                         ;
//                 if(i2>=48&& i2<=57)
//                     plu_data_index_temp+=String.fromCharCode(i2);
//                     else
//                         ;
//                 if(i3>=48&& i3<=57)
//                     plu_data_index_temp+=String.fromCharCode(i3);
//                     else
//                        ;
//                 if(i4>=48&& i4<=57)
//                     plu_data_index_temp+=String.fromCharCode(i4);
//                     else
//                         ;
//                 if(i5>=48&& i5<=57)
//                     plu_data_index_temp+=String.fromCharCode(i5);
//                     else
//                         ;                           
       
//                     alert(plu_data_index_temp);
//             plu_data_index = parseInt(plu_data_index_temp);
//             alert(plu_data_index);
//            if(data.substring(x1-1,x1)=="_")
//             plu_data_index += 188;
//         alert(plu_data[plu_data_index]);
//         break;
           
//             }
//             else {
//                  if(data.substring(x1,x1+4)=="</a>") {
//                     break li_label;
//                     process_data+=data.substring(x,x+1);
//                  }
//             }
//                     }

//                     // alert("NO");

//                     var x1=0;                  
//                     process_data+='<a href="';
                   
//                     if(plu_data[plu_data_index]==undefined)
//                        {
//                     plu_data[plu_data_index]="";
//                     alert("error in plu_data_index 1" +"plu data index" + plu_data_index);
//                 }
//                     for( ; x1<plu_data[plu_data_index].length;x1++) {
                     

//                         if(plu_data[plu_data_index].substring(x1, x1+1)=="+")
//                             break;
                       
//                     } 
//                     // alert("NO1");
//                     if(plu_data[plu_data_index]==undefined)
//                         {
//                     plu_data[plu_data_index]="";
//                     alert("error in plu_data_index 2" +"plu data index" + plu_data_index);

//                 }

//                     if(x1<plu_data[plu_data_index].length) {
                     
//                     process_data+= 'https://www.frys.com/search?query_string='+
//                     plu_data[plu_data_index]+'&nearbyStoreName=false&site="';
                   
//                     }
//                     else {
//                         if(plu_data[plu_data_index]==undefined)
//                         {
//                     plu_data[plu_data_index]="";
//                     alert("error in plu_data_index 3" +"plu data index" + plu_data_index);
//                     // alert("NO2");
//                 }
//                         process_data+= 'https://www.frys.com/product/'+
//                         plu_data[plu_data_index]+'?nearbyStoreName=false&site="';
                      
//                 }
//                 for(var x2 = x; x2<data.length; x2++) {
//                     if(data.substring(x2, x2+1)==">") {
//                         x=x2-1;
                   
                   
//                     break;
//                     }
//                 }
//                 // alert("NO3");
               
//                 }
//                 else {
//                     if(data.substring(x,x+1).charCodeAt()==9)
//                         process_data += "\t";
//                     else {
//                         if(data.substring(x,x+5)=="http:") {
//                         process_data += "https:";
                       
//                         x=x+4;
//                     }
//                     else if(data.substring(x,x+5)=="http-") {
//                         process_data += "https-";
//                         x=x+4;
//                     }
//                     else{
//                 process_data += ascii(data.substring(x,x+1));
               
//             }
//             // alert("NO4");
//             }
//                 }
//             }
//             }
//             else {
//                 if(data.substring(x,x+1).charCodeAt()==9)
//                         process_data += "\t";
//                     else {
//                         if(data.substring(x,x+5)=="http:") {
//                         process_data += "https:";
//                         x=x+4;
//                     }
//                     else if(data.substring(x,x+5)=="http-") {
//                         process_data += "https-";
//                         x=x+4;
//                     }
//                     else {
//                         process_data += ascii(data.substring(x,x+1));
                       
//                     }
//                 }
//             }

//    }  
//    document.getElementById("text_output").value="";
//    document.getElementById("text_input").value=""; 
//     document.getElementById("text_output").value=process_data;
//     document.getElementById("lbl_name_2").innerHTML = "Output";
// }  

    function ascii(ascii_error_data) {
          if((ascii_error_data.charCodeAt() >= 65 &&
                   ascii_error_data.charCodeAt() <= 90) ||
                   (ascii_error_data.charCodeAt() >= 97 &&
                   ascii_error_data.charCodeAt() <= 122)||
                   (ascii_error_data.charCodeAt() >= 48 &&
                   ascii_error_data.charCodeAt() <= 57) ||
                   (ascii_error_data === "\n" ||
                   ascii_error_data === "\t")) {
                   ;
               }
                 
               else {
                   switch(ascii_error_data.charCodeAt()) {
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
                       ;
                       break;
                       default: {
                        ascii_error_data = "&#" +
                       ascii_error_data.charCodeAt() + ";";
                      
                     }
                   }

               }
               return ascii_error_data;
    }

    function pluCollect() {
      
        plu_data = [];
        csv_data = "";
        csv_data_index = 0;
        semicolon_count =0;
        csv_data = String(document.getElementById("text_output").value);
        var csv_data_index_temp ="";
        for(var i = 0; i<csv_data.length; i++) {
       
          
            if(csv_data.substring(i,i+1)==",") {
                semicolon_count++;
               
                continue;
            }

            if(semicolon_count == 2) {
                if(csv_data.substring(i,i+1).charCodeAt()>=48&&
                    csv_data.substring(i,i+1).charCodeAt()<=57)
                csv_data_index_temp += csv_data.substring(i,i+1);
              
               else {
               
                semicolon_count = 0;
                csv_data_index = -1;
                for(var i1 = i; i1<csv_data.length; i1++) {
                    if(csv_data.substring(i1,i1+1)=="\n"){
                        i=i1;
                        break;
                    }
                }
                continue;
            }
        }
           

            if(semicolon_count == 3) {
                csv_data_index = parseInt(csv_data_index_temp);
                if(plu_data[csv_data_index]==undefined)
                {
                    plu_data[csv_data_index] = "";
                    // alert("error in csv_data_index 1")
                }

                csv_data_index_temp = "";
                if(plu_data[csv_data_index]!="")
                    plu_data[csv_data_index] += "+";
            }
           

            if(semicolon_count == 7) {
                if(plu_data[csv_data_index]==undefined)
                    {
                    plu_data[csv_data_index] = "";
                    alert("error in csv_data_index 1" +"csv data index" + csv_data_index);
                }
                plu_data[csv_data_index] += csv_data.substring(i,i+1);
            }
           

            if(semicolon_count == 8) {
                // alert(plu_data[csv_data_index]+" "+csv_data_index);
                semicolon_count = 0;
                csv_data_index = -1;
                for(var i1 = i; i1<csv_data.length; i1++) {
                    if(csv_data.substring(i1,i1+1)=="\n"){
                        i=i1;
                        break;
                    }
                }
                continue;
            }
         
        }
       
        // for(var i = 0; i< plu_data.length; i++) {
        //     console.log(plu_data[i]);
        // }
        link();
    }  
});