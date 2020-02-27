$(function(){
        "use strict";
        var raw_data="", process_data="", count=0, raw_data1="";
        $(".clic").bind("click",remove_data);
        $(".clear1").bind("click",clear);
        document.getElementById("text_output").readOnly = true;
       

      
    function clear()
    {  
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input").readOnly = false;
        raw_data="";
        raw_data1="";
        process_data="";
        count=0;
    }  

function remove_data()
{
    document.getElementById("text_input").readOnly = true;

    raw_data=String(document.getElementById("text_input").value);
    for(var loop=0; loop<raw_data.length; loop++)
    {
        if(raw_data.substring(loop, loop+4)== "UPC:" ||
         raw_data.substring(loop, loop+6)== "Label:" ||
        raw_data.substring(loop, loop+11)== "Product ID:" ||
        raw_data.substring(loop, loop+17)== "Last Return Date:" ||
        raw_data.substring(loop, loop+5)== "This " ||
        raw_data.substring(loop, loop+19)== "Distributor/Studio:" ||
        raw_data.substring(loop, loop+7)== "Region:" ||
         raw_data.substring(loop, loop+7)== "Artist:")
        {
        
            for(var loop1=loop; loop1<raw_data.length; loop1++)
            {
                if(raw_data.substring(loop1, loop1+1)== "\n")
                    {
                     loop=loop1;
                     break;
                   }
            }
        }
        else
            raw_data1+=raw_data.substring(loop,loop+1);
    }
    specification();
}
  
  
function specification(){
    
    for(var loop=0; loop<raw_data1.length;loop++)
    {
        loop1_exit:
        {
        if(!(raw_data1.substring(loop,loop+1)==" " ||
         raw_data1.substring(loop,loop+1)=="\n" ||
          raw_data1.substring(loop,loop+1)=="\t"))
        {
            process_data+="<tr>\n\t<td>";
               
                for(var loop1=loop; loop1<raw_data1.length;loop1++)
                {
                    process_data+=raw_data1.substring(loop1,loop1+1);
                    if(raw_data1.substring(loop1,loop1+1)==":")
                    {
                        process_data+="</td>\n\t<td>";
                         for(var loop2=loop1+1; loop2<raw_data1.length;loop2++)
                            {
                                if(!(raw_data1.substring(loop2,loop2+1)==" " ||
                                 raw_data1.substring(loop2,loop2+1)=="\n" ||
                                  raw_data1.substring(loop2,loop2+1)=="\t"))
                                {
                                   
                                    for(var loop3=loop2; ;loop3++)
                                        {
                                            if(loop3==raw_data1.length)
                                            {
                                                process_data+="</td>\n</tr>\n";
                                                loop=loop3;
                                                loop1=loop3;
                                                loop2=loop3;
                                                break loop1_exit;
                                            }    
                                            if(raw_data1.substring(loop3,loop3+1)=="\n")
                                                {
                                                    process_data+="</td>\n</tr>\n";
                                                    loop=loop3;
                                                     break loop1_exit;
                                                }
                                            process_data+=raw_data1.substring(loop3,loop3+1);
                                           
                                        }
                                }
                            }
                    }       
                }
  

        }
        
    }
    }
    document.getElementById("text_output").value = process_data;
}


});