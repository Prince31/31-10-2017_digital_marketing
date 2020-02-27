
$(function(){
	"use strict";
	var a="";
	var b="";
	var big="";
	var small="";
	var box="";
	var gallery_value="";
		$(".input_btn").bind("click", function(){
          if(document.getElementById("text_input").value == "")
            alert("Please Enter Text in Input Field / Press Clear button");
          else
          input1();

        }); 
		$(".clear_btn").bind("click",clear);
				
				document.getElementById("text_big").readOnly = true;
				document.getElementById("text_small").readOnly = true;
				document.getElementById("text_box").readOnly = true;
				document.getElementById("text_input").value = "";
				document.getElementById("text_output").value = "";
				document.getElementById("text_big").value = "";
				document.getElementById("text_small").value = "";
				document.getElementById("text_box").value = "";

	function clear()
	{		gallery_value="";
		 a="";
		 b="";
		 big="";
		 small="";
		box="";
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
		document.getElementById("text_big").value = "";
		document.getElementById("text_small").value = "";
		document.getElementById("text_box").value = "";
		document.getElementById("text_input").readOnly = false;
	}	

	function input1()
	{

				document.getElementById("text_input").readOnly = true;

		b="";
		big="";
		small="";
		 box="";
		// console.log($("#myTextarea").html());
		 a=String(document.getElementById("text_input").value);
		 a=a.trim();
		 gallery_value=String(document.getElementById("text_output").value);
		 document.getElementById("text_output").value="";
		 var gallery_no=[];
		 var gallery_no_count=0;
		 gallery_no[gallery_no_count]="";
		 gallery_value=gallery_value.trim();
		 for(var i=0;i<gallery_value.length;i++) {
		 	gallery_no[gallery_no_count]+=gallery_value.substring(i,i+1);
		 	if(gallery_value.substring(i,i+1)=="\n"){
		 		gallery_no_count++;
		 		gallery_no[gallery_no_count]="";
		 	}
		 }
		 
		 var max = gallery_no.reduce(function(a, b) {
    		return Math.max(a, b);
			});
		if(max==undefined||max=="")
			max=1;

		 for(var x0=1; x0<=max;x0++){
		var new_line_count=0;
		 for(var x=0; x<a.length;x++)
		 {
		 	


		 	if(gallery_no[new_line_count]>=x0) {
		 		
		var c=a.substring(x,x+1).charCodeAt();
		 var d=	a.substring(x-1,x).charCodeAt();

		 if(a.substring(x,x+1)==" ")
		 	continue;


		 		if((c>=48&&c<=57) && (a.substring(x-1,x)=="\n") || (x==0  && (c>=48&&c<=57)) )
		 		{
		 			
		 			
		 			if(x0==1){
		 			b=b+"https://www.frys.com/product/"+a.substring(x,x+1).trim();
		 			box=box+"https://images.frys.com/art/product/box_shots/"+a.substring(x,x+1).trim();
		 		}
		 			big=big+"https://images.frys.com/art/product/big/"+a.substring(x,x+1).trim();
		 			small=small+"https://images.frys.com/art/product/300x300/"+a.substring(x,x+1).trim();
		 			
		 		}
		 		else
		 			if(a.substring(x,x+1)=="\n"&& (d>=48&&d<=57)) {
		 				if(x0==1){
		 				b=b+a.substring(x,x+1);
		 				box=box+".box.GIF"+a.substring(x,x+1);
		 			}
		 				if(x0<=9){
		 				big=big+".0"+x0+".big.jpg"+a.substring(x,x+1);
		 				small=small+".0"+x0+".prod.jpg"+a.substring(x,x+1);
		 				}
		 				else{
		 					big=big+"."+x0+".big.jpg"+a.substring(x,x+1);
		 				small=small+"."+x0+".prod.jpg"+a.substring(x,x+1);
		 				}
		 			
		 			}
		 			else {
		 				if(x0==1){
		 			 b=b+a.substring(x,x+1);
		 			 box=box+a.substring(x,x+1);
		 			}
		 			 big=big+a.substring(x,x+1);
		 			 small=small+a.substring(x,x+1);
		 			 
		 			}
		 				if(x==(a.length-1)) {
		 					if(x0<=9){
		 					big=big+".0"+x0+".big.jpg";
		 					small=small+".0"+x0+".prod.jpg";
		 				}
		 				else{
		 					big=big+"."+x0+".big.jpg";
		 					small=small+"."+x0+".prod.jpg";
		 				}
		 					if(x0==1){
		 					box=box+".box.GIF";
		 				}

		 				}


		 	
		 	}
		 	if(a.substring(x,x+1)=="\n")
		 	new_line_count++;	
		 	// big+="\n\n";
		 }
		 	big+="\n\n";
		}
		
				document.getElementById("text_input").value = "";
				document.getElementById("text_output").value = b;
				document.getElementById("text_big").value = big;
				document.getElementById("text_small").value = small;
				document.getElementById("text_box").value = box;
	}



});

