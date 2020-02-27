
$(function(){
			"use strict";
		var raw_data="";
		var process_data="";
		document.getElementById("text_output").readOnly = true;
		$(".clic").bind("click",function(){
          if(document.getElementById("text_input").value == "")
            alert("Please Enter Text in Input Field / Press Clear button");
          else
          input1();

        }); 
		$(".clear1").bind("click",clear);
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
		
		
	function clear()
	{	
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
		raw_data="";
		process_data="";
		document.getElementById("text_input").readOnly = false;
	}	

	

	function input1()
	{
		document.getElementById("text_input").readOnly = true;
		
		
		// console.log($("#myTextarea").html());
		 raw_data=String(document.getElementById("text_input").value);
		 
		
			for(var x=0; x<raw_data.length; x++)
			{	
				if(raw_data.substring(x,x+8) =="Frys #: ")
					{
						for(var y=x+8; y<raw_data.length;y++)
						{	
							var charvalue=raw_data.substring(y,y+1).charCodeAt();

							if(!(charvalue>=48&&charvalue<=57)||(charvalue>=97&&charvalue<=122))
								break;
							process_data+=raw_data.substring(y,y+1);
						}
						process_data+="\n";
					}
			}
			document.getElementById("text_input").value = "";
			document.getElementById("text_output").value = process_data;
		
	}

});

