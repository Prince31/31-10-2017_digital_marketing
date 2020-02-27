
$(function(){

	var date1="";
	var page1="";
	var a="";
	var b="";
	var flag=0;
		$(".clic").bind("click",link);
		$(".clear1").bind("click",clear);
		document.getElementById("text_output").readOnly = true;
		
	function clear()
	{	
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
		document.getElementById("text_input_sheet").value="";
		 a="";
		 b="";
		 flag=0;
		 date1="";
		 page1="";
		document.getElementById("text_input").readOnly = false;
		document.getElementById("text_input_sheet").readOnly = false;
	}	

	

	function link()
	{
		document.getElementById("text_input").readOnly = true;
		document.getElementById("text_input_sheet").readOnly = true;

		b="";

		// console.log($("#myTextarea").html());
		 a=String(document.getElementById("text_input").value);
		 var sheet_name= String(document.getElementById("text_input_sheet").value);
		 
		
		if(sheet_name!="" && a!="")
		{
		 for(var x=0; x<a.length;x++)
		 {
		 	
		 	var c=a.substring(x,x+1).charCodeAt();
		 var d=	a.substring(x-1,x).charCodeAt();
		 	if(x==0)
		 	{
		 		for(var xy=0; xy<sheet_name.length;xy++)
					 {
					 	var cd=sheet_name.substring(xy,xy+1).charCodeAt();
					 	if(xy<(sheet_name.length/2) && (cd>=48&&cd<=57))
					 	 page1=page1+sheet_name.substring(xy,xy+1);
					 		if(xy>=(sheet_name.length/2) && (cd>=48&&cd<=57))
					 	 date1=date1+sheet_name.substring(xy,xy+1);
					 	
					 }
		 		var y=x;
		 		var count=0;
		 	do{
		 		count++;
		 		y++;
		 		if(a.substring(y,y+1)=="+")
		 		{
		 			// console.log("prince");
		 			flag=1;
		 			break;
		 		}
		 		else
		 			flag=0;
		 		
		 		// console.log("+ not working");
		 		if(count==40)
		 			break;
		 	} while(a.substring(y,y+1)!="\n");
		 	}
		 	
		 	
		 	
		

		 if(a.substring(x,x+1)==" ")
		 	continue;


		 	if(flag==0)
		 	{
		 		if(((c>=48&&c<=57) && (a.substring(x-1,x)=="\n")) || (x==0  && (c>=48&&c<=57)) )
		 		{
		 			
		 			b=b+"https://www.frys.com/product/"+a.substring(x,x+1);
		 			
		 		}
		 		else
		 			if(a.substring(x,x+1)=="\n"&& (d>=48&&d<=57))
		 				b=b+"?site=sa:adpages%20page:P"+page1+"%20date:"+date1+a.substring(x,x+1);
		 			else
		 			b=b+a.substring(x,x+1);
		 			
		 				if(x==(a.length-1)&& ((a.substring(x,x+1).charCodeAt()>=48&& a.substring(x,x+1).charCodeAt()<=57)) )					//&& (a.substring(x-1,x)>=48&& a.substring(x-1,x)<=57)
		 				{	b=b+"?site=sa:adpages%20page:P"+page1+"%20date:"+date1;
		 					// console.log(a.substring(x-1,x));
		 				}
		 					

		 	}
		 	else
		 	{
		 		if(((c>=48&&c<=57) && (a.substring(x-1,x)=="\n")) || (x==0  && (c>=48&&c<=57)) )
		 		{
		 			
		 			b=b+"https://www.frys.com/search?cat=&query_string="+a.substring(x,x+1);
		 			
		 		}
		 		else
		 			if(a.substring(x,x+1)=="\n"&& (d>=48&&d<=57))
		 				b=b+"&nearbyStoreName=false&site=sa:adpages%20page:P"+page1+"%20date:"+date1+a.substring(x,x+1);
		 			else
		 			b=b+a.substring(x,x+1);
		 			
		 				if(x==(a.length-1)&& ((a.substring(x,x+1).charCodeAt()>=48&& (a.substring(x,x+1).charCodeAt()<=57)) ) )             //&& (a.substring(x-1,x)>=48&& a.substring(x-1,x)<=57)
		 					{
		 						b=b+"&nearbyStoreName=false&site=sa:adpages%20page:P"+page1+"%20date:"+date1;
		 				// console.log(a.substring(x-1,x));
		 			}


		 	}

		 	if((a.substring(x,x+1)=="\n")&& x!=0 )
		 	{
		 		



		 		// console.log("program");
		 		var y=x;
		 		var count=0;
		 	do{
		 		count++;
		 		y++;
		 		if(a.substring(y,y+1)=="+")
		 		{
		 			// console.log("prince");
		 			flag=1;
		 			break;
		 		}
		 		else
		 			flag=0;
		 		
		 		// console.log("+ not working");
		 		if(count==40)
		 			break;
		 	} while(a.substring(y,y+1)!="\n");
		 }
		 	
		 }

		
		
				document.getElementById("text_output").value = b;
		
	}
	else 
		alert("Kindly fill Sheet Name and Enter Plu Id's");
}
});

