$(function(){

    $(".clic").bind("click", function(){
        if(document.getElementById("text_input").value!="")
        link()
    });
    $(".clear1").bind("click",clear);
    var box_flag = false;
    var data = "";
    var error_data = "";
    var error_count = 0;
    var link_check_count = 0;
    document.getElementById("error_field").readOnly = true;
     document.getElementById("link_no_field").readOnly = true;
     document.getElementById("text_output").readOnly = true;
     document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("error_field").value = "";
         document.getElementById("link_no_field").value = "";
        document.getElementById("text_input").readOnly = false;
    function clear()
    {   
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("error_field").value = "";
         document.getElementById("link_no_field").value = "";
        document.getElementById("text_input").readOnly = false;
        data = "";
        error_data = "";
        box_flag = false;
        error_count = 0;
        link_check_count = 0;
    }

    
    function link() {
        error_count = 0;
        data = "";
        error_data = "";
        box_flag = false;
        document.getElementById("text_input").readOnly = true;
        data = String(document.getElementById("text_input").value);
        var temp_data=data;
        lbl: {
            for(var x=0;x<data.length;x++){
                if((data.substring(x,x+4)=="http"&&data.substring(x+4,x+5)!="s")||
                (data.substring(x,x+4)=="http"&&data.substring(x+4,x+6)=="ss")) {
                error_data += data.substring(x,x+76)+"\n------------------------------\n";
                error_count++;
            }
         
        }
            
        for( var x=0; x<data.length;x++) {
           

            // var i = data.substring(x+4,x+5).charCodeAt();
            // var i1 = data.substring(x+5,x+6).charCodeAt();

            var li_index=data.indexOf('<li>');
            var a_index=data.indexOf('<a');
            var img_index=data.indexOf('<img');
            var box_index=data.indexOf('box_');
            var a_close_index=data.indexOf('</a>');
            var li_close_index=data.indexOf('</li>');

            if(li_index<a_index && a_index<img_index && img_index<box_index && box_index<a_close_index &&
                box_index<li_close_index &&(a_close_index>li_close_index||a_close_index==-1)
                &&box_flag==false){
                error_data += data.substring(li_index,li_index+206)+"\n--------------------------\n";
                                error_count++;
                                box_flag = false;
                                data=data.substring(li_index+1,data.length);
                                x=0;
                                continue;
            }

            if(a_index==-1||box_index==-1||li_index==-1||img_index==-1||a_close_index==-1||li_close_index==-1)
                break;



            if(li_index<a_index && a_index<img_index && img_index<box_index && box_index<a_close_index &&
                a_close_index<li_close_index&&box_flag==false){
               var href_index=data.indexOf('<a href="')
                if(a_index!=href_index){
                    error_data += data.substring(li_index,li_index+86)+"\n-----------------------------------\n";
                                error_count++;
                                box_flag = false;
                                data=data.substring(a_index+1,data.length);
                                x=0;
                                continue;
                }
                
                box_flag = true;
                x=li_index;
                continue;
        }
            else if(box_flag==false){
                // alert("bye");
                var min_temp=Math.min(li_index, a_index, img_index, box_index, a_close_index, li_close_index);
                // alert(li_index+" "+ a_index+" "+ img_index+" "+ box_index+" "+ a_close_index+" "+ li_close_index)
                // alert(min_temp+" "+data.length);
                var temp_data=data.length;
                data=data.substring(min_temp+1, temp_data);
                // alert(data);
                x=0;
            }
            // if(data.substring(x,x+4)=="box_" && (i>=48&& i<=57) && ((i1>=48&& i1<=57))) {
            //     box_flag = !(box_flag);
               
            // }
            if(box_flag) {
                if(data.substring(x,x+9)=='<a href="') {

                    link_check_count++;
                    if(data.substring(x+9,x+38)=='https://www.frys.com/product/'){
                        var temp_num="";
                        for(var x1=x+38; x1<data.length;x1++) {
                            var num_check = data.substring(x1,x1+1).charCodeAt();
                            if(num_check>=48&&num_check<=57){
                                temp_num+=num_check;
                                continue;
                            }
                            else if(data.substring(x1,x1+1)=="?"&& temp_num!="") {
                                if(data.substring(x1,x1+30)=='?nearbyStoreName=false&site=">') {
                                   
                                   box_flag = false;
                                    data=data.substring(x+1,data.length);
                                    x=0;
                                   
                                    break;
                                }
                                else{
                                    error_data += data.substring(x,x+76)+"\n-----------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+66));
                                // break lbl;
                                box_flag = false;
                                data=data.substring(x+1,data.length);
                                x=0;
                                break;
                                }
                            }
                            else {
                                error_data += data.substring(x,x+76)+"\n---------------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+66));
                                // break lbl;
                                box_flag = false;
                                data=data.substring(x+1,data.length);
                                x=0;
                                break;
                            }
                        }   
                    }
                    else if(data.substring(x+9,x+50)=='https://www.frys.com/search?query_string='){
                        var plus_flag = false;
                        var temp_num="";
                        for(var x1=x+50; x1<data.length;x1++) {
                            var num_check = data.substring(x1,x1+1).charCodeAt();
                            if(num_check>=48&&num_check<=57){
                                temp_num+=num_check;
                                continue;
                            }
                            else if(data.substring(x1,x1+1)=="+") {
                                plus_flag = true;
                            }
                            else if(data.substring(x1,x1+1)=="&" && (plus_flag) && temp_num!="") {
                                if(data.substring(x1,x1+30)=='&nearbyStoreName=false&site=">') {
                                   
                                   box_flag = false;
                                data=data.substring(x+1,data.length);
                                x=0;
                                   
                                    break;
                                }
                                else {
                                error_data += data.substring(x,x+88)+"\n--------------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                                box_flag = false;
                                data=data.substring(x+1,data.length);
                                x=0;
                                break;
                               
                            }
                            }
                            else {
                                error_data += data.substring(x,x+88)+"\n-----------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                                box_flag = false;
                                data=data.substring(x+1,data.length);
                                x=0;
                                break;
                               
                            }
                        }   
                    }
                    else if(data.substring(x+9,x+63)=='https://images.frys.com/art/deals/nomodel/nomodel.html')
                            ;
                    else
                    {
                        error_data += data.substring(x,x+88)+"\n----------------------------------------\n";
                        error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                               
                      
                    }
                    box_flag = false;
                    data=data.substring(x+1,data.length);
                    x=0;
                }
            }
        }

         // for(var i=0;i<data.length;i++){
         //    var http_index=data.indexOf('http');
         //    var https_index=data.indexOf('https')
         //    if(https_index==-1&&http_index==-1)
         //        break;
         //    if(https_index!=http_index){
         //        error_data += data.substring(x,x+76)+"\n\n";
         //        error_count++;
         //        data=data.substring(i+1,data.length);
         //        i=0;
         //    }
         //    else{
         //        data=data.substring(i+1,data.length);
         //         i=0;
         //    }
         // }

         if(link_check_count==0){
            clear();
            for( var x=0; x<temp_data.length;x++) {
           

            // var i = data.substring(x+4,x+5).charCodeAt();
            // var i1 = data.substring(x+5,x+6).charCodeAt();

            var li_index=temp_data.indexOf('<td>');  //li index is td index
            var a_index=temp_data.indexOf('<a');
            var img_index=temp_data.indexOf('<img');
            var box_index=temp_data.indexOf('box_');
            var a_close_index=temp_data.indexOf('</a>');
            var li_close_index=temp_data.indexOf('</td>');   //li_close index is td close index

            if(li_index<a_index && a_index<img_index && img_index<box_index && box_index<a_close_index &&
                box_index<li_close_index &&(a_close_index>li_close_index||a_close_index==-1)
                &&box_flag==false){
                error_data += temp_data.substring(li_index,li_index+206)+"\n--------------------------------\n";

                                error_count++;
                                link_check_count++;
                                box_flag = false;
                                temp_data=temp_data.substring(a_index+1,temp_data.length);
                                x=0;
                                continue;
            }

            if(a_index==-1||box_index==-1||li_index==-1||img_index==-1||a_close_index==-1||li_close_index==-1)
                break;



            if(li_index<a_index && a_index<img_index && img_index<box_index && box_index<a_close_index &&
                a_close_index<li_close_index&&box_flag==false){
               var href_index=temp_data.indexOf('<a href="')
                if(a_index!=href_index){
                    error_data += temp_data.substring(li_index,li_index+86)+"\n-------------------------------\n";
                                error_count++;
                                box_flag = false;
                                temp_data=temp_data.substring(a_index+1,temp_data.length);
                                x=0;
                                continue;
                }
                
                box_flag = true;
                x=li_index;
                continue;
        }
            else if(box_flag==false){
                // alert("bye");
                var min_temp=Math.min(li_index, a_index, img_index, box_index, a_close_index, li_close_index);
                // alert(li_index+" "+ a_index+" "+ img_index+" "+ box_index+" "+ a_close_index+" "+ li_close_index)
                // alert(min_temp+" "+data.length);
                var temp1_data=temp_data.length;
                temp_data=temp_data.substring(min_temp+1, temp1_data);
                // alert(data);
                x=0;
            }
            // if(data.substring(x,x+4)=="box_" && (i>=48&& i<=57) && ((i1>=48&& i1<=57))) {
            //     box_flag = !(box_flag);
               
            // }
            if(box_flag) {
                if(temp_data.substring(x,x+9)=='<a href="') {

                    link_check_count++;
                    if(temp_data.substring(x+9,x+38)=='https://www.frys.com/product/'){
                        var temp_num="";
                        for(var x1=x+38; x1<temp_data.length;x1++) {
                            var num_check = temp_data.substring(x1,x1+1).charCodeAt();
                            if(num_check>=48&&num_check<=57){
                                temp_num+=num_check;
                                continue;
                            }
                            else if(temp_data.substring(x1,x1+1)=="?"&& temp_num!="") {
                                if(temp_data.substring(x1,x1+30)=='?nearbyStoreName=false&site=">') {
                                   
                                   box_flag = false;
                                    temp_data=temp_data.substring(x+1,temp_data.length);
                                    x=0;
                                   
                                    break;
                                }
                                else{
                                    error_data += temp_data.substring(x,x+76)+"\n--------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+66));
                                // break lbl;
                                box_flag = false;
                                temp_data=temp_data.substring(x+1,temp_data.length);
                                x=0;
                                break;
                                }
                            }
                            else {
                                error_data += temp_data.substring(x,x+76)+"\n-------------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+66));
                                // break lbl;
                                box_flag = false;
                                temp_data=temp_data.substring(x+1,temp_data.length);
                                x=0;
                                break;
                            }
                        }   
                    }
                    else if(temp_data.substring(x+9,x+50)=='https://www.frys.com/search?query_string='){
                        var plus_flag = false;
                        var temp_num="";
                        for(var x1=x+50; x1<temp_data.length;x1++) {
                            var num_check = temp_data.substring(x1,x1+1).charCodeAt();
                            if(num_check>=48&&num_check<=57){
                                temp_num+=num_check;
                                continue;
                            }
                            else if(temp_data.substring(x1,x1+1)=="+") {
                                plus_flag = true;
                            }
                            else if(temp_data.substring(x1,x1+1)=="&" && (plus_flag) && temp_num!="") {
                                if(temp_data.substring(x1,x1+30)=='&nearbyStoreName=false&site=">') {
                                   
                                   box_flag = false;
                                temp_data=temp_data.substring(x+1,temp_data.length);
                                x=0;
                                   
                                    break;
                                }
                                else {
                                error_data += temp_data.substring(x,x+88)+"\n---------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                                box_flag = false;
                                temp_data=temp_data.substring(x+1,temp_data.length);
                                x=0;
                                break;
                               
                            }
                            }
                            else {
                                error_data += temp_data.substring(x,x+88)+"\n-------------------------------------\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                                box_flag = false;
                                temp_data=temp_data.substring(x+1,temp_data.length);
                                x=0;
                                break;
                               
                            }
                        }   
                    }
                    else if(temp_data.substring(x+9,x+63)=='https://images.frys.com/art/deals/nomodel/nomodel.html')
                            ;
                    else
                    {
                        error_data += temp_data.substring(x,x+88)+"\n-------------------------------------\n";
                        error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                               
                      
                    }
                    box_flag = false;
                    temp_data=temp_data.substring(x+1,temp_data.length);
                    x=0;
                }
            }
        }
         }

            if(error_data == "")
                document.getElementById("text_output").value = "Links are correct";
            else
                document.getElementById("text_output").value = error_data;
            document.getElementById("error_field").value = error_count;
            document.getElementById("link_no_field").value = link_check_count;
            document.getElementById("text_input").value = "";
        }
    }   
});