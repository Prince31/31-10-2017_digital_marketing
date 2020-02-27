
$(function(){

		var raw_data="";
		var raw_data1="";
		var process_data1="";
		var process_data="";
		$(".clic").bind("click",rawData);
		$(".clear1").bind("click",clear);
		var x=0;
		var z=0;
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
	
		 


	function clear()
	{	
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
		document.getElementById("text_input").readOnly = false;
		document.getElementById("text_output").readOnly = false;
		raw_data="";
		raw_data1="";
		process_data="";
		process_data1="";
		x=0;
		z=0;
	}	
	// function clear2()
	// {	
	// 	raw_data="";
	// 	raw_data1="";
	// 	process_data="";
	// 	process_data1="";
	// 	x=0;
	// 	z=0;
	// }	

	// function CompareCall()
	// {
	// 	// alert(a_raw_data);
	// 	  if(x==raw_data.length && z==process_data.length)
	// 	  	{
	// 	  		clearInterval(timer_id1);
	// 	  		Compare();
	// 	  	}
	// }

	function rawData()
	{
		document.getElementById("text_input").readOnly = true;
		document.getElementById("text_output").readOnly = true;
		raw_data=String(document.getElementById("text_input").value);
		  process_data=String(document.getElementById("text_output").value);

		 for( x=0;x<raw_data.length;x++)
		  {
		  	if(raw_data.substring(x,x+1)=="<")
		  		{
		  			for(var x1=x;x1>-2;x1++)
		  			{	
		  				if(raw_data.substring(x1,x1+1)==">"){
		  					x++;
		  					break;
		  				}
		  				x++;
		  			}
		  		}
		  	var temp_raw_data = raw_data.substring(x,x+1).charCodeAt();
		  	if(temp_raw_data>=48&&temp_raw_data<=57||
		  		temp_raw_data>=65&&temp_raw_data<=90||
		  		temp_raw_data>=97&&temp_raw_data<=122)
		  		raw_data1+=raw_data.substring(x,x+1);
		  	else
		  		;

		  	// if(raw_data.substring(x,x+1)=="\n")
		  	// 	raw_data1+="";
		  	// else
		  	// 	if(raw_data.substring(x,x+1)==" ")
		  	// 	raw_data1+="";
		  	// else
		  	// 	if(raw_data.substring(x,x+1)=="\t")
		  	// 	raw_data1+="";
		  	// else
		  	// 	if(raw_data.substring(x,x+1)==":")
		  	// 	raw_data1+="";
		  	// else
		  	// 	if(raw_data.substring(x,x+1)=="-")
		  	// 	raw_data1+="";
		  	// else
		  	// 	if(raw_data.substring(x,x+1)=="—")
		  	// 	raw_data1+="";
		  	// else
		  	// 	if(raw_data.substring(x,x+1)=="<")
		  	// 	{
		  	// 		for(var x1=x;x1>-2;x1++)
		  	// 		{
		  	// 			if(raw_data.substring(x1,x1+1)==">")
		  	// 				break;
		  	// 			x++;
		  	// 		}
		  	// 	}
		  	// 	else
		  	// 	if(raw_data.substring(x,x+1)=="•")
		  	// 		raw_data1+="";
		  	// else
		  	// 	raw_data1+=raw_data.substring(x,x+1);
		  	// // if(raw_data.substring(x,x+2)==" \n")
		  	// // 	raw_data1+="";
		  	// // else
		  	// // 	if(raw_data.substring(x,x+2)=="\n ")
		  	// // 	raw_data1+="";
		  	// // else
		  	// // 	if(raw_data.substring(x,x+2)=="\n\n")
		  	// // 		raw_data1+="";
		  	// // else
		  	// // 	if(raw_data.substring(x,x+2)=="  ")
		  	// // 		raw_data1+="";
		  	// // else
		  	// // 	if(raw_data.substring(x,x+1)=="\n")
		  	// // 		raw_data1+=" ";	
		  	// // else
		  	// // 	raw_data1+=raw_data.substring(x,x+1);
		  }

		for( z=0;z<process_data.length;z++)
          {
          	if(process_data.substring(z,z+1)=="<")
		  		{
		  			for(var z1=z;z1>-2;z1++)
		  			{	
		  				if(process_data.substring(z1,z1+1)==">"){
		  					z++;
		  					break;
		  				}
		  				z++;
		  			}
		  		}
		  	var temp_process_data = process_data.substring(z,z+1).charCodeAt();
		  	if(temp_process_data>=48&&temp_process_data<=57||
		  		temp_process_data>=65&&temp_process_data<=90||
		  		temp_process_data>=97&&temp_process_data<=122)
		  		process_data1+=process_data.substring(z,z+1);
		  	else
		  		;


     //        if(process_data.substring(z,z+1)=="\n")
     //            process_data1+="";
     //        else
     //            if(process_data.substring(z,z+1)==" ")
     //            process_data1+="";
     //        else
     //            if(process_data.substring(z,z+1)=="\t")
     //            process_data1+="";
     //        else
		  	// 	if(process_data.substring(z,z+1)==":")
		  	// 	process_data1+="";
		  	// else
		  	// 	if(process_data.substring(z,z+1)=="-")
		  	// 	process_data1+="";
		  	// else
		  	// 	if(process_data.substring(z,z+1)=="—")
		  	// 	process_data1+="";
		  	// else
		  	// 	if(process_data.substring(z,z+1)=="<")
		  	// 	{
		  	// 		for(var x1=z;x1>-2;x1++)
		  	// 		{
		  	// 			if(process_data.substring(x1,x1+1)==">")
		  	// 				break;
		  	// 			z++;
		  	// 		}
		  	// 	}
		  	// 	else
		  	// 	if(process_data.substring(z,z+1)=="•")
		  	// 		process_data1+="";
     //        else
     //            process_data1+=process_data.substring(z,z+1);
     //        // if(process_data.substring(z,z+3)==" \n ")
     //        //     process_data1+="";
     //        // else
     //        //     if(process_data.substring(z,z+2)=="\n ")
     //        //     process_data1+="";
     //        // else
     //        //     if(process_data.substring(z,z+2)=="\n\n")
     //        //         process_data1+="";
     //        // else
     //        //     if(process_data.substring(z,z+2)=="  ")
     //        //         process_data1+="";
     //        // else
     //        //     if(process_data.substring(z,z+1)=="\n")
     //        //         process_data1+=" "; 
     //        // else
     //        //     process_data1+=process_data.substring(z,z+1);
          }
          Compare();
	}

	function Compare()
	{
		
		
		// var array={"Light","Broiler", "Storage","Drawer", "Hot" };
		// console.log($("#myTextarea").html());
		
		 var length1= raw_data1.length<process_data1.length ? raw_data1.length : process_data1.length;
		 
		
		  

			
			for( var y=0; y<length1; y++)
			{	


 				if(raw_data1.substring(y,y+1).toUpperCase()===process_data1.substring(y,y+1).toUpperCase())
 					;
 				else
 				{
 					alert("mis match");
 					document.getElementById("text_input").value = raw_data1.substring(y);
 					document.getElementById("text_output").value = process_data1.substring(y);
 					break;
 				}

			}
			if(y==length1)
				alert("match");
			if(raw_data1.length==y && y==length1)
				;
			else
				alert("Extra text of area1:"+raw_data1.substring(y));

			if(process_data1.length==y && y==length1)
				;
			else
				alert("Extra text of area2:"+process_data1.substring(y));

		// document.getElementById("text_output").value = raw_data;
		// clear2();
		// var timer_id1=setInterval(CompareCall,1000);
	}

});

