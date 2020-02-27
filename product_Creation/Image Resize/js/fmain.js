$(function(){

       
        var maxWidth =[];
        var  maxHeight = [];
        var  width=0;
        var  height=0;
        var ratio=0;
        var image_no=0;
        var plu_id="";
        var no_ext=[];
        var no_ext_count=0;
        var col_type=0; //denotes the col type i.e. one col or two col or three col.
        $(".clic").bind("click",analyseData);
        $(".clear1").bind("click",clear);
       
      
    function clear()
    {  
        for(var loop=1;loop<=image_no;loop++)
        $('#myCanvas'+loop).remove();
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input_sheet").value="";
         maxWidth =[];
          maxHeight = [];
          width=0;
          height=0;
         ratio=0;
         image_no=0;
         plu_id="";  // variable to save plu id of images
         no_ext=[];
         no_ext_count=0;
         col_type=0;   
      
    }  

// I have to make this as a code for div class one col, two col, three col
   
    function analyseData()
    {
        var loop=0;
       var data= String(document.getElementById("text_input").value);       //variable to read data from text_input field
        for(var n1_loop=0; n1_loop<data.length;n1_loop++)      //loop to find image tag
        {
               
                if(data.substring(n1_loop,n1_loop+6)=="onecol")
                {
                    alert("onecol");
                   col_type=1;
                  for(var n2_loop=n1_loop+6;n2_loop<data.length;n2_loop++)
                  {
                    if(data.substring(n2_loop,n2_loop+1)==">")
                        {
                            n1_loop=n2_loop;
                            break;
                        }       
                  }
                }
                else
                    if(data.substring(n1_loop,n1_loop+13)=="twocol even h") //check this once
                        {col_type=21;
                            alert("twocol h")
                            for(var n2_loop=n1_loop+6;n2_loop<data.length;n2_loop++)
                              {
                                if(data.substring(n2_loop,n2_loop+1)==">")
                                    {
                                        n1_loop=n2_loop;
                                        break;
                                    }
                              }
                        }   
                    else
                        if(data.substring(n1_loop,n1_loop+13)=="twocol even v") //check this once
                           { col_type=22;
                            alert("twocol v")
                              for(var n2_loop=n1_loop+6;n2_loop<data.length;n2_loop++)
                                  {
                                    if(data.substring(n2_loop,n2_loop+1)==">")
                                        {
                                            n1_loop=n2_loop;
                                            break;
                                        }
                                  }
                        }
                        else
                            if(data.substring(n1_loop,n1_loop+8)=="threecol")
                                {   col_type=3;
                                    alert("threecol");
                                   for(var n2_loop=n1_loop+8;n2_loop<data.length;n2_loop++)
                                      {
                                        if(data.substring(n2_loop,n2_loop+1)==">")
                                            {
                                                n1_loop=n2_loop;
                                                break;
                                            }
                                      } 
                        }
                        else               
                if(data.substring(n1_loop,n1_loop+7)=="images/"&&plu_id=="")
                {
                    for(var n2_loop=n1_loop+7; n2_loop<data.length;n2_loop++)   //loop to save plu id
                        {   
                             if(data.substring(n2_loop,n2_loop+1)=="_")
                                {
                                    n1_loop=n1_loop+7;
                                    break;
                                }
                                plu_id+=data.substring(n2_loop,n2_loop+1);
                        }  
                }
              
                if(plu_id!=""&& data.substring(n1_loop,n1_loop+plu_id.length)==plu_id)
                {
                    no_ext_count++;
                    no_ext[no_ext_count]="";
                    for(var n2_loop=n1_loop+plu_id.length;n2_loop<data.length;n2_loop++)    //loop to find image number and extension ex. _01.jpg
                    {
                         if(data.substring(n2_loop,n2_loop+1)=='"')
                                {
                                    n1_loop=n2_loop+1;
                                    break;
                                }

                        no_ext[no_ext_count]+=data.substring(n2_loop,n2_loop+1);
                    }
                    alert(no_ext[no_ext_count]);
                    for(var n2_loop=n1_loop;n2_loop<data.length;n2_loop++)    //loop to find style, maxwidth and maxheight
                    {
                         if(data.substring(n2_loop,n2_loop+1)=='>')
                                {
                                    // write the below code of maxwidth and height here only
                                    if(col_type==1)
                                    {
                                        maxWidth[no_ext_count]=500;
                                        maxHeight[no_ext_count]=500;
                                    }
                                    else
                                        if(col_type==21)
                                    {
                                        maxWidth[no_ext_count]=200;
                                        maxHeight[no_ext_count]=200;
                                    }
                                    else
                                        if(col_type==22)
                                    {
                                        maxWidth[no_ext_count]=400;
                                        maxHeight[no_ext_count]=400;
                                    }
                                    else
                                        if(col_type==3)
                                    {
                                        maxWidth[no_ext_count]=275;
                                        maxHeight[no_ext_count]=275;
                                    }

                                    n1_loop=n2_loop;
                                    break;
                                }
                                if(data.substring(n2_loop,n2_loop+5)=='style')
                                    {
                                        maxWidth[no_ext_count]=1000;
                                        maxHeight[no_ext_count]=1000;
                                        n1_loop=n2_loop;
                                        break;
                                    }   
                    }
                }

        }  
           
      
        // if(loop==data.length)
        resizeImage();

    }  

    function resizeImage()
    {

        var fail="";
       
      

       for(var loop=1;loop<=no_ext_count;loop++)
       {
       var canv = document.createElement('canvas');
        canv.id = 'myCanvas'+loop;

        document.body.appendChild(canv);
       
         var img = new Image;
        
            img.src = "../"+plu_id+"/images/"+plu_id+""+no_ext[loop];

            if(loop==1)
             alert("Scale Image");
         width = img.width;
         height = img.height;

        if(height==0||width==0)
            fail+=plu_id+""+no_ext[loop]+" failed to load\n";
            document.getElementById("text_output").value=fail;
        if(!((maxWidth[loop]!=1000)&& (width<=maxWidth[loop]&&height<=maxWidth[loop])))
       scaleImage(loop);

            var canvas = document.getElementById("myCanvas"+loop);
            canvas.width  = width;
            canvas.height = height;
           
            var context = canvas.getContext("2d");
            context.drawImage(img, 0,0,width,height);
          
       
   
       }   
      
    }

    function scaleImage(i_count)
    {
         
         // var  ratio = Math.min( maxWidth / width, maxHeight/ height );
         if(maxWidth[i_count]!=1000)
         {
         if(height>width)
           ratio = maxHeight[i_count]/ height;
       else
            if(height<=width)
                ratio = maxWidth[i_count]/ width;
    }
    else
        ratio = 0.0 + maxWidth[i_count]/ width;

        width =0.0 + ratio * width;
        height =0.0 + ratio * height;
    }

});