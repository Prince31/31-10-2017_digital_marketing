
$(function(){

	$(".clic").bind("click",link);
	$(".clear1").bind("click",clear);
	var box_flag = false;
	var data = "";
	function clear()
	{	
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
		document.getElementById("text_input").readOnly = false;
		data = "";
		box_flag = false;
		
	}

	function link() {
		document.getElementById("text_input").readOnly = true;
		data = String(document.getElementById("text_input").value);
		lbl: {
			var x=0;
		for( ; x<data.length;x++) {
			if(data.substring(x,x+4)=="box_") {
				box_flag = !(box_flag);
				
			}
			if(box_flag) {
				if(data.substring(x,x+9)=='<a href="') {
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
								alert("error at link:" + data.substring(x,x+66));
								break lbl;
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
								alert("error at link:" + data.substring(x,x+78));
								break lbl;
							}
						}	
					}
					else if(data.substring(x+9,x+63)=='https://images.frys.com/art/deals/nomodel/nomodel.html')
							;
					else
					{
						alert("error at link:" + data.substring(x,x+78));
						break lbl;
					}
				}
			}
		}
			if(x == data.length)
				alert("Links are correct");
		}
	}	
});

