$(function(){

    $(".clic").bind("click",link);
    $(".clear1").bind("click",clear);
    var box_flag = false;
    var data = "";
    var error_data = "";
    var error_count = 0;
    var link_check_count = 0;
    document.getElementById("error_field").readOnly = true;
     document.getElementById("link_no_field").readOnly = true;
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
        lbl: {
            var x=0;
        for( ; x<data.length;x++) {
            var i = data.substring(x+4,x+5).charCodeAt();
            var i1 = data.substring(x+5,x+6).charCodeAt();

            if(data.substring(x,x+4)=="box_" && (i>=48&& i<=57) && ((i1>=48&& i1<=57))) {
                box_flag = !(box_flag);
               
            }
            if(box_flag) {
                if(data.substring(x,x+9)=='<a href="') {

                    link_check_count++;
                    if(data.substring(x+9,x+38)=='https://www.frys.com/product/'){
                        for(var x1=x+38; x1<data.length;x1++) {
                            var num_check = data.substring(x1,x1+1).charCodeAt();
                            if(num_check>=48&&num_check<=57)
                                continue;
                            else if(data.substring(x1,x1+1)=="?") {
                                if(data.substring(x1,x1+28)=="?nearbyStoreName=false&site=") {
                                   
                                   
                                   
                                    break;
                                }
                            }
                            else {
                                error_data += data.substring(x,x+76)+"\n\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+66));
                                // break lbl;
                                break;
                            }
                        }   
                    }
                    else if(data.substring(x+9,x+50)=='https://www.frys.com/search?query_string='){
                        var plus_flag = false;
                        for(var x1=x+50; x1<data.length;x1++) {
                            var num_check = data.substring(x1,x1+1).charCodeAt();
                            if(num_check>=48&&num_check<=57)
                                continue;
                            else if(data.substring(x1,x1+1)=="+") {
                                plus_flag = true;
                            }
                            else if(data.substring(x1,x1+1)=="&" && (plus_flag)) {
                                if(data.substring(x1,x1+28)=="&nearbyStoreName=false&site=") {
                                   
                                   
                                   
                                    break;
                                }
                            }
                            else {
                                error_data += data.substring(x,x+88)+"\n\n";
                                error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                                break;
                               
                            }
                        }   
                    }
                    else if(data.substring(x+9,x+63)=='https://images.frys.com/art/deals/nomodel/nomodel.html')
                            ;
                    else
                    {
                        error_data += data.substring(x,x+88)+"\n\n";
                        error_count++;
                                // alert("error at link:" + data.substring(x,x+78));
                                // break lbl;
                               
                      
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
        }
    }   
});