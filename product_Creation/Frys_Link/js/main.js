
$(function(){

	var a="";
	var b="";
		$(".input_btn").bind("click",input1);
		$(".clear_btn").bind("click",clear);
		
		document.getElementById("text_output").readOnly = true;


	function clear()
	{	
		 a="";
		 b="";
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
		document.getElementById("text_input").readOnly = false;
	}	

	function input1()
	{

				document.getElementById("text_input").readOnly = true;

		b="";

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
		 			
		 			b=b+"https://www.frys.com/product/"+a.substring(x,x+1)
		 			
		 		}
		 		else
		 			if(a.substring(x,x+1)=="\n"&& (d>=48&&d<=57))
		 				b=b+a.substring(x,x+1);
		 			else
		 			 b=b+a.substring(x,x+1);
		 			
		 				if(x==(a.length-1))
		 					;


		 	
		 	
		 }

		
		
				document.getElementById("text_output").value = b;
		
	}



});

