
$(function(){
	"use strict";
	var a="";
	var b="";
	var big="";
	var small="";
	var box="";
		$(".input_btn").bind("click", function(){
          if(document.getElementById("text_input").value == "")
            alert("Please Enter Text in Input Field / Press Clear button");
          else
          input1();

        }); 
		$(".clear_btn").bind("click",clear);
				document.getElementById("text_output").readOnly = true;
				document.getElementById("text_big").readOnly = true;
				document.getElementById("text_small").readOnly = true;
				document.getElementById("text_box").readOnly = true;
				document.getElementById("text_input").value = "";
				document.getElementById("text_output").value = "";
				document.getElementById("text_big").value = "";
				document.getElementById("text_small").value = "";
				document.getElementById("text_box").value = "";

	function clear()
	{	
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
		 

		
		 for(var x=0; x<a.length;x++)
		 {
		 	
		 	
		var c=a.substring(x,x+1).charCodeAt();
		 var d=	a.substring(x-1,x).charCodeAt();

		 if(a.substring(x,x+1)==" ")
		 	continue;


		 		if((c>=48&&c<=57) && (a.substring(x-1,x)=="\n") || (x==0  && (c>=48&&c<=57)) )
		 		{
		 			
		 			b=b+"https://www.frys.com/product/"+a.substring(x,x+1).trim();
		 			big=big+"https://images.frys.com/art/product/big/"+a.substring(x,x+1).trim();
		 			small=small+"https://images.frys.com/art/product/300x300/"+a.substring(x,x+1).trim();
		 			box=box+"https://images.frys.com/art/product/box_shots/"+a.substring(x,x+1).trim();
		 		}
		 		else
		 			if(a.substring(x,x+1)=="\n"&& (d>=48&&d<=57)) {
		 				b=b+a.substring(x,x+1);
		 				big=big+".01.big.jpg"+a.substring(x,x+1);
		 				small=small+".01.prod.jpg"+a.substring(x,x+1);
		 				box=box+".box.GIF"+a.substring(x,x+1);
		 			
		 			}
		 			else {
		 			 b=b+a.substring(x,x+1);
		 			 big=big+a.substring(x,x+1);
		 			 small=small+a.substring(x,x+1);
		 			 box=box+a.substring(x,x+1);
		 			}
		 				if(x==(a.length-1)) {
		 					big=big+".01.big.jpg";
		 					small=small+".01.prod.jpg";
		 					box=box+".box.GIF";

		 				}


		 	
		 	
		 }

		
				document.getElementById("text_input").value = "";
				document.getElementById("text_output").value = b;
				document.getElementById("text_big").value = big;
				document.getElementById("text_small").value = small;
				document.getElementById("text_box").value = box;
	}



});

