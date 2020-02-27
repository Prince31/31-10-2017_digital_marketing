
$(function(){
	"use strict";
	var a="";
	var b="";
	var raw_data1="";
	var raw_data="";
	var raw_data2="";
		$(".input_btn").bind("click",removeDataAndHighlight);
		$(".clear_btn").bind("click",clear);
		document.getElementById("text_output").readOnly = true;

	function clear()
	{	
		a="";
		b="";
		raw_data="";
		raw_data1="";
		raw_data2="";
		document.getElementById("text_input").value = "";
		document.getElementById("text_output").value = "";
        document.getElementById("text_input").readOnly = false;
	}	


// function removeDataAndHighlight() {
// 		a="";
// 		b="";
// 		raw_data="";
// 		raw_data1="";
// 		raw_data2="";
// 	document.getElementById("text_input").readOnly = true;
// 	raw_data=String(document.getElementById("text_input").value);
// 	var counter=1;

// 	for(var loop=0; loop<raw_data.length; loop++) {
// 		if(!(raw_data.substring(loop,loop+1)==" " ||
//          raw_data.substring(loop,loop+1)=="\n" ||
//           raw_data.substring(loop,loop+1)=="\t")) {
// 			raw_data1=raw_data.substring(loop,loop+1)

//           }	
//     }	

// }	


// function liCode() {
		
// 		a=raw_data1;

// }  
	function removeDataAndHighlight()
{
	document.getElementById("text_input").readOnly = true;

		a="";
		b="";
		raw_data="";
		raw_data1="";
		raw_data2="";
    raw_data=String(document.getElementById("text_input").value);
    

    for(var loop=0; loop<raw_data.length; loop++)
    {
    	var loop1;
        if(raw_data.substring(loop,loop+1)=="\n")
        {
        	raw_data2+=raw_data.substring(loop, loop+1);
            for( loop1=loop+1; loop1<raw_data.length; loop1++)
            {
                if(((raw_data.substring(loop1, loop1+1).charCodeAt()>= 48) &&
                 (raw_data.substring(loop1, loop1+1).charCodeAt()<= 57)) ||
                  (raw_data.substring(loop1, loop1+1)==" ")||
                  ((raw_data.substring(loop1, loop1+1).charCodeAt()== 46)))
                    {
                    	raw_data2+=raw_data.substring(loop1, loop1+1)+"^";
                     continue;
                     
                   }
                   else
                   	{
                   		raw_data2+="      ";
                   		raw_data1+=raw_data.substring(loop,loop+1);
                   		loop=loop1-1;
                   		break;
                   	}
            }
        }
       else
       {
       	raw_data2+=raw_data.substring(loop,loop+1);
            raw_data1+=raw_data.substring(loop,loop+1);
       }
            
    }
    document.getElementById("text_input").value = "";
    document.getElementById("text_input").value = raw_data2;
    input1();
}
  
	

	function input1()
	{
		b="";
		a=raw_data1;
		// console.log($("#myTextarea").html());
		 
		 

		
		 for(var x=0; x<a.length;x++)
		 {
		 	
				if(a.substring(x,x+1)=='\n'||x==a.length-1)
					{
					for(var y=x-1;y>-1;y--)
					{
						if(a.substring(y,y+1)=='\n')
							{
								
								break;
								
							}
						else
							if(a.substring(y,y+1)!=' '||a.substring(y,y+1)!='\t')
							{
								if(x==a.length-1)
									b+=a.substring(x,x+1);
								b+='</li>\n';
								break;
							}
					}

					


				}

					
				else
					if(a.substring(x-1,x)=='\n'||x==0)
					{
					for(var y=x;y<a.length;y++)
					{
						if(a.substring(y,y+1)=='\n')
							{b+='\n';
								break;
							}
						else
							if(a.substring(y,y+1)!=' '||a.substring(y,y+1)!='\t')
							{
								if(a.substring(x,x+1)==' ')
								b+='<li>';
							else
								b+='<li>'+a.substring(x,x+1);
								break;
							}
					}

					


				}
		 		else
		 			if(a.substring(x,x+1)==' '&& a.substring(x+1,x+2)==' ')
		 				;
		 			else
		 				if(b.substring(b.length-1,b.length)=='>'&& a.substring(x,x+1)==' ')
		 					;
		 				else
		 			b+=a.substring(x,x+1);
		 	
		 }

		
		
				document.getElementById("text_output").value = b;
		
	}



});

