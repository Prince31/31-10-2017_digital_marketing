$(function(){
    "use strict";
    $(".clic").bind("click",pluCollect);
    $(".clear1").bind("click",clear);
    var box_flag = false;
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
    
     
     document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        
         
        document.getElementById("text_input").readOnly = false;
        document.getElementById("lbl_name_1").innerHTML = "Html";
        document.getElementById("lbl_name_2").innerHTML = "Csv Plu";
    function clear()
    {   
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        
         
        document.getElementById("text_input").readOnly = false;
        document.getElementById("lbl_name_1").innerHTML = "Html";
        document.getElementById("lbl_name_2").innerHTML = "Csv Plu";
        data = "";
        error_data = "";
        box_flag = false;
        error_count = 0;
        link_check_count = 0;
        plu_data = [];
        semicolon_count =0;
        csv_data = "";
        csv_data_index = 0;
        process_data = "";
        plu_data_index = 0;
    }

    function link() {
        data = "";
        box_flag = false;
        process_data = "";
        document.getElementById("text_input").readOnly = true;
        data = String(document.getElementById("text_input").value);
        var x=0;
        var plu_data_index_temp = "";
        for( ; x<data.length;x++) {
            var i = data.substring(x+4,x+5).charCodeAt();
            var i1 = data.substring(x+5,x+6).charCodeAt();
            
            if(data.substring(x,x+4)=="box_" && (i>=48&& i<=57) && ((i1>=48&& i1<=57))) {
                box_flag = !(box_flag);
                plu_data_index_temp = "";
               var i2 = data.substring(x+6,x+7).charCodeAt();
            var i3 = data.substring(x+7,x+8).charCodeAt();
            var i4 = data.substring(x+8,x+9).charCodeAt();
            var i5 = data.substring(x+9,x+10).charCodeAt();
            for(var x1 =0; x1<1;x1++) {

               
                if(i>48&& i<=57)
                    plu_data_index_temp+=String.fromCharCode(i);
                else
                    if(i==48)
                        ;
                    else
                        break;
                if(i1>=48&& i1<=57)
                    plu_data_index_temp+=String.fromCharCode(i1);
                    else
                        break;
                if(i2>=48&& i2<=57)
                    plu_data_index_temp+=String.fromCharCode(i2);
                    else
                        break;
                if(i3>=48&& i3<=57)
                    plu_data_index_temp+=String.fromCharCode(i3);
                    else
                        break;
                if(i4>=48&& i4<=57)
                    plu_data_index_temp+=String.fromCharCode(i4);
                    else
                        break;
                if(i5>=48&& i5<=57)
                    plu_data_index_temp+=String.fromCharCode(i5);
                    else
                        break;                            
            }
            plu_data_index = parseInt(plu_data_index_temp);
           
            
            }
            if(box_flag) {
                

                if(data.substring(x,x+9)=='<a href="') {
                    var x1=0;
                    
                    
                    process_data+='<a href="';
                    for( ; x1<data.length;x1++) {
                      if(plu_data[plu_data_index]==undefined)
                       {
                    plu_data[plu_data_index]="";
                    alert("error in plu_data_index 1" +"plu data index" + plu_data_index);
                }

                        if(plu_data[plu_data_index].substring(x1, x1+1)=="+")
                            break;
                        else
                            ;
                    }  


                    if(x1<data.length) {
                        if(plu_data[plu_data_index]==undefined)
                        {
                    plu_data[plu_data_index]="";
                    alert("error in plu_data_index 2" +"plu data index" + plu_data_index);

                }
                    process_data+= 'https://www.frys.com/search?query_string='+
                    plu_data[plu_data_index]+'&nearbyStoreName=false&site="';

                    }
                    else {
                        if(plu_data[plu_data_index]==undefined)
                        {
                    plu_data[plu_data_index]="";
                    alert("error in plu_data_index 3" +"plu data index" + plu_data_index);
                }
                        process_data+= 'https://www.frys.com/product/'+
                        plu_data[plu_data_index]+'?nearbyStoreName=false&site="';
                }
                for(var x2 = x; x2<data.length; x2++) {
                    if(data.substring(x2, x2+1)==">") {
                        x=x2-1;
                    
                    
                    break;
                    }
                }
                }
                else {
                    if(data.substring(x,x+1).charCodeAt()==9)
                        process_data += "\t";
                    else
                process_data += data.substring(x,x+1);
                }
            }
            else {
                if(data.substring(x,x+1).charCodeAt()==9)
                        process_data += "\t";
                    else
                process_data += data.substring(x,x+1);
            }

   }   
   document.getElementById("text_output").value="";
   document.getElementById("text_input").value="";  
    document.getElementById("text_output").value=process_data;
    document.getElementById("lbl_name_2").innerHTML = "Output";
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