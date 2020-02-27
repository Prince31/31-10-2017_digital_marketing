$(function(){

       "use strict";
        var maxWidth =[];
        var  maxHeight = [];
        var  width=0;
        var  height=0;
        var ratio=0;
        // var image_no=0;
        var plu_id="";
        var no_ext=[];
        var no_ext_count=0;
        var col_type=0; //denotes the col type i.e. one col or two col or three col.
        var img_no=-1;
        var scale_flag=1;
        var gimp_command="";
        document.getElementById("text_input").value = "";
        document.getElementById("text_output").value = "";
        document.getElementById("text_input_sheet").value="";
        document.getElementById("width_resize").value=width_resize;
        var img_modal = document.getElementById("img_modal")
        var img=[];
        var max_width=1000;
        var max_height=600, virtual_width=0, virtual_height=0, ratio=0.0;
        var div_color=-1;
        $(".clic").bind("click",analyseData);
        $(".clear1").bind("click",clear);
         $(".download-file").bind("click",downloadFile);
         $("#scale_img").bind("click",scaleButton);
         $("#reset_image").bind("click",reset_image);
         var canvas_flag=[];
         var gimp_empty_command="";

    function scaleButton() {
      if(document.getElementById("scale_img").innerHTML=="Scale") {
      document.getElementById("scale_img").innerHTML="No Scale";
      document.getElementById("scale_img").style.backgroundColor = "#4a594a";
      scale_flag=0;
      }
      else {
        document.getElementById("scale_img").innerHTML="Scale";
      document.getElementById("scale_img").style.backgroundColor = "#5cb85c";
      scale_flag=1;
      }
    }     
        
    function clear()
    {  
        // for(var loop=1;loop<=image_no;loop++)
        // $('#myCanvas'+loop).remove();
        location.reload(true);
      //   document.getElementById("text_input").value = "";
      //   document.getElementById("text_output").value = "";
      //   document.getElementById("text_input_sheet").value="";
      //    maxWidth =[];
      //     maxHeight = [];
      //     width=0;
      //     height=0;
      //    ratio=0;
      //    // image_no=0;
      //    plu_id="";  // variable to save plu id of images
      //    no_ext=[];
      //    no_ext_count=0;
      //    col_type=0;   
      //    gimp_command="";
      //    img_no=-1;
      //    document.getElementById("canvas_div").innerHTML="";
      //   max_width=1000;
      //   max_height=600;
      //    virtual_width=0;
      //     virtual_height=0;
      //     canvas_flag=[];
      //      ratio=0.0;
      //      div_color=-1;
      //      gimp_empty_command="";
      //      document.getElementById("scale_img").innerHTML="Scale";
      // document.getElementById("scale_img").style.backgroundColor = "#5cb85c";
    }  

    function click_clear() {
      
          document.getElementById("text_input").readOnly = true;
         maxWidth =[];
          maxHeight = [];
          width=0;
          height=0;
         ratio=0;
         // image_no=0;
         plu_id="";  // variable to save plu id of images
         no_ext=[];
         no_ext_count=0;
         col_type=0;   
         gimp_command="";
         img_no=-1;
         document.getElementById("canvas_div").innerHTML="";
        max_width=1000;
        max_height=600;
         virtual_width=0;
          virtual_height=0;
          canvas_flag=[];
           ratio=0.0;
           div_color=-1;
           gimp_empty_command="";
           document.getElementById("scale_img").innerHTML="Scale";
      document.getElementById("scale_img").style.backgroundColor = "#5cb85c";
    }

    $("#image_no_submit").bind("click", function(){
      scale_flag=1;
      document.getElementById("scale_img").innerHTML="Scale";
      document.getElementById("scale_img").style.backgroundColor = "#5cb85c";
          if(div_color>-1)
          document.getElementById("div"+img_no).style.backgroundColor = "#fff";
          img_no=text_image_no.value;
          document.getElementById("div"+img_no).style.backgroundColor = "#5cb85c";
          div_color=img_no;
          if(img_no>no_ext_count)
            alert("Image no. should be less than or equal to:"+ no_ext_count);
          else {
            // var img_no_dot=img_no.indexOf(".");
            // if(img_no_dot!=-1) {
            // var img_no_1=img_no.substring(0,img_no_dot);
            // var img_no_2=img_no.substring(img_no_dot+1,img_no.length);
            height_resize.value=
            document.getElementById("myCanvas"+img_no).height;

            width_resize.value=
            document.getElementById("myCanvas"+img_no).width;
            document.getElementById("div"+img_no).scrollIntoView();

          }
       });

    $("#width_resize").bind("click", function(){
        // img_no=text_image_no.value;
          if(img_no>no_ext_count||img_no<1)
            alert("Image no. should be less than or equal to:"+ no_ext_count +" && greater than 0");
          else {
          
           
            // var dataURL =document.getElementById(img_no_1+"."+img_no_2+"image").toDataURL();
            //  alert(dataURL);
            //  crop_img[img_no_1][img_no_2].src=dataURL;
            max_width=width_resize.value;
          virtual_width = document.getElementById("myCanvas"+img_no).width;
        virtual_height = document.getElementById("myCanvas"+img_no).height;
      // alert(virtual_width);
     
     scalImage();
        // alert(virtual_width);
     document.getElementById("myCanvas"+img_no).width = virtual_width;
   
     document.getElementById("myCanvas"+img_no).height = virtual_height;   
     var context = document.getElementById("myCanvas"+img_no).getContext("2d");
     // var temp_crop=-top_crop.value;
     context.drawImage(img[img_no], 0,0,virtual_width,virtual_height);
     canvas_flag[img_no]=false;
     // crop_img[img_no_1][img_no_2].width=virtual_width;
     // crop_img[img_no_1][img_no_2].height=virtual_height;

     height_resize.value=virtual_height;
    document.getElementById("div"+img_no).innerHTML=img_no+"- Pixels - "+virtual_width+"x"+virtual_height;
     // crop_img[img_no_1][img_no_1].src=
     // document.getElementById(img_no_1+"."+img_no_2+"image").toDataURL();
            

          }
        
       });

    $("#height_resize").bind("click", function(){
        // img_no=text_image_no.value;
          if(img_no>no_ext_count||img_no<1)
            alert("Image no. should be less than or equal to:"+ no_ext_count +" && greater than 0");
          else {
            // var dataURL =document.getElementById(img_no_1+"."+img_no_2+"image").toDataURL();
            //  alert(dataURL);
            //  crop_img[img_no_1][img_no_2].src=dataURL;
            max_height=height_resize.value;
          virtual_width = document.getElementById("myCanvas"+img_no).width;
        virtual_height = document.getElementById("myCanvas"+img_no).height;
   
 
     scaleImage1();

     document.getElementById("myCanvas"+img_no).width = virtual_width;
   
     document.getElementById("myCanvas"+img_no).height = virtual_height;   
     var context = document.getElementById("myCanvas"+img_no).getContext("2d");
     // var temp_crop=-top_crop.value;
     context.drawImage(img[img_no], 0,0,virtual_width,virtual_height);
     canvas_flag[img_no]=false;
     // crop_img[img_no_1][img_no_2].width=virtual_width;
     // crop_img[img_no_1][img_no_2].height=virtual_height;

     width_resize.value=virtual_width;
    document.getElementById("div"+img_no).innerHTML=img_no+"- Pixels - "+virtual_width+"x"+virtual_height;
           
     

          }
        
       });

    function scalImage() {
      // if(virtual_height>=virtual_width)
      //      ratio = max_height/ virtual_height;
      //  else
      //       if(virtual_height<virtual_width)
      if(scale_flag) {
                ratio = max_width/ virtual_width;

        virtual_width =Math.round(0.0 + ratio * virtual_width);
        virtual_height =Math.round(0.0 + ratio * virtual_height);   
      }
      else {
          virtual_width =max_width;
        }
       
    }

    function scaleImage1() {
          if(scale_flag) {
                ratio = max_height/ virtual_height;

        virtual_width =Math.round(0.0 + ratio * virtual_width);
        virtual_height =Math.round(0.0 + ratio * virtual_height);
        }
        else {
          virtual_height =max_height;
        }
    }


// I have to make this as a code for div class one col, two col, three col
   
    function analyseData()
    {
      click_clear();
      img_modal.style.display='inline-block';
        var loop=0;
       var data= String(document.getElementById("text_input").value);       //variable to read data from text_input field
        for(var n1_loop=0; n1_loop<data.length;n1_loop++)      //loop to find image tag
        {
               
                if(data.substring(n1_loop,n1_loop+6)=="onecol")
                {
                    // alert("onecol");
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
                            // alert("twocol h")
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
                            // alert("twocol v")
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
                                    // alert("threecol");
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
                    // alert(no_ext[no_ext_count]);
                    for(var n2_loop=n1_loop;n2_loop<data.length;n2_loop++)    //loop to find style, maxwidth and maxheight
                    {
                         if(data.substring(n2_loop,n2_loop+1)=='>')
                                {
                                    // write the below code of maxwidth and height here only
                                    if(col_type==1)
                                    {
                                        maxWidth[no_ext_count]=350;
                                        maxHeight[no_ext_count]=350;
                                    }
                                    else
                                        if(col_type==21)
                                    {
                                      alert("Error invalid col type 2-1");
                                        maxWidth[no_ext_count]=200;
                                        maxHeight[no_ext_count]=200;
                                    }
                                    else
                                        if(col_type==22)
                                    {
                                      alert("Error invalid col type 2-2");
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
           
      resizeImage();
        // if(loop==data.length)
      //  for(var image_loop=1; image_loop<=no_ext_count; image_loop++)
      //  { 
      //   resizeImage(no_ext[image_loop], maxWidth[image_loop]);
      // }
    }  

    // function resizeImage()
    // {
    //   gimp_command+="";
    // }

    function resizeImage()
    {

        var fail="";
       
      

       for(var loop=1;loop<=no_ext_count;loop++)
       {
        var div = document.createElement('div');
        div.id='div'+loop;
        div.innerHTML=loop;
        document.getElementById("canvas_div").appendChild(div);
       var canv = document.createElement('canvas');
        canv.id = 'myCanvas'+loop;
        document.getElementById("canvas_div").appendChild(canv);
       
         img[loop] = new Image;
        var image_load_count=0;
        while(image_load_count<10){
            img[loop].src = "/home/princesethi/Desktop/webami/"+plu_id+"/images/"+plu_id+""+no_ext[loop];

            // if(loop==1)
            //  alert("Scale Image");
         width = img[loop].width;
         height = img[loop].height;

        if(height==0||width==0){
          if(image_load_count==9)
            fail+=plu_id+""+no_ext[loop]+" failed to load\n";
            image_load_count++;
           
          }
          else 
            break;
        }
            document.getElementById("text_output").value=fail;
        // if(!((maxWidth[loop]!=1000)&& (width<=maxWidth[loop]&&height<=maxWidth[loop])))
          scaleImage(loop);

            var canvas = document.getElementById("myCanvas"+loop);
            canvas.width  = width;
            canvas.height = height;
            
            var context = canvas.getContext("2d");
            // context.drawImage(img[loop], 0,0,width,height);
         if(maxWidth[loop]==1000&&canvas.width<1000) {
            var start_index_temp=(1000-canvas.width)/2;
            canvas.width=1000;
            context.drawImage(img[loop], start_index_temp,0,width,height);
            canvas_flag[loop]=true;
          }
          else {
            context.drawImage(img[loop], 0,0,width,height);
            canvas_flag[loop]=false;
          }
            document.getElementById("div"+loop).innerHTML=loop+"- Pixels - "+canvas.width+"x"+canvas.height;
       
            

         

         
       
   
       } 
       // if(fail=="")
       // document.getElementById("text_input").value=gimp_command;  
      
    }

    function reset_image() {
      var temp_image_no=img_no;
      width = img[temp_image_no].width;
         height = img[temp_image_no].height;
         scaleImage(temp_image_no);

            var canvas = document.getElementById("myCanvas"+temp_image_no);
            canvas.width  = width;
            canvas.height = height;
            
            var context = canvas.getContext("2d");
            // context.drawImage(img[temp_image_no], 0,0,width,height);
         if(maxWidth[temp_image_no]==1000&&canvas.width<1000) {
            var start_index_temp=(1000-canvas.width)/2;
            canvas.width=1000;
            context.drawImage(img[temp_image_no], start_index_temp,0,width,height);
            canvas_flag[temp_image_no]=true;
          }
          else{
            context.drawImage(img[temp_image_no], 0,0,width,height);
            canvas_flag[temp_image_no]=false;
          }
            document.getElementById("div"+temp_image_no).innerHTML=temp_image_no+"- Pixels - "+canvas.width+"x"+canvas.height;
            width_resize.value=canvas.width;
            height_resize.value=canvas.height;
    }

    function downloadFile() {
      gimp_command='#! /usr/bin/env python\n\nfrom gimpfu import *'+
            '\n\nfrom glob import glob\n\nfrom PIL import Image\n\nimport os\n\ndef image_resize():';
            var function_count=0;
      for(var loop=1; loop<=no_ext_count; loop++)     {
        width=document.getElementById("myCanvas"+loop).width;
        height=document.getElementById("myCanvas"+loop).height;
        if(img[loop].width==width&&img[loop].height==height) {
          ;
        }
        else {
          if(function_count==0)
            gimp_command+='';
          function_count=1;
          if(!(canvas_flag[loop])) {
        gimp_command+='\n\tfname = os.path.join(os.path.expanduser(\\"~\\")'+
            ', \\"Desktop\\", \\"'+plu_id+'_images\\", \\"'+plu_id+''+no_ext[loop] +'\\")\n\timg = pdb.gimp_file_load(fname, fname)'+
            '\n\tpdb.gimp_image_scale(img, '+width+', '+height+')\n\tdrawable = pdb.gimp_image_active_drawable(img)'+
            '\n\tif img.name.find(\\"png\\") == -1:\n\t\t'+
            'pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, \\"\\", 0, 0, 0, 0)'+
            '\n\telse:\n\t\tpdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)'+
            '\n\tpdb.gimp_image_delete(img)';
            }
            else{
            //   gimp_command+='\n\tfname = os.path.join(os.path.expanduser(\\"~\\")'+
            // ', \\"Desktop\\", \\"'+plu_id+'_images\\", \\"'+plu_id+''+no_ext[loop] +'\\")\n\timg = pdb.gimp_file_load(fname, fname)'+
            // '\n\tpdb.gimp_image_crop(img, '+width+', '+width+', 0, '+height+')\n\tdrawable = pdb.gimp_image_active_drawable(img)'+
            // '\n\tif img.name.find(\\"png\\") == -1:\n\t\t'+
            // 'pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, \\"\\", 0, 0, 0, 0)'+
            // '\n\telse:\n\t\tpdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)'+
            // '\n\tpdb.gimp_image_delete(img)';
            }
            
          }
              if(loop==no_ext_count) { 
                if(function_count==0) {
            gimp_command+='\n\tfname = os.path.join(os.path.expanduser(\\"~\\")'+
            ', \\"Desktop\\", \\"'+plu_id+'_images\\", \\"'+plu_id+''+no_ext[loop]  +'\\")';
          }
              gimp_command+='\nregister(\n\t\t\\"image_resize\\",\n\t\t'+
         '\\"Prints a message from Willy invert_current_layer\\",\n\t\t'+
         '\\"Prints a message from Willy invert_current_layer\\",\n\t\t'+
         '\\"User3870315\\",\n\t\t\\"User3870315\\",\n\t\t\\"2015\\",\n\t\t'+
         '\\"<Toolbox>/Tools/image_resize\\",\n\t\t\\"\\",\n\t\t[],\n\t\t[],\n\t\timage_resize)\n\n'+
          'main()';

          
           }
             gimp_empty_command="#! /usr/bin/env python\n\nfrom gimpfu import *"+
            "\n\nfrom glob import glob\n\nfrom PIL import Image\n\nimport os\n\ndef image_resize():\n\tfname = os.path.join(os.path.expanduser(\'~\')"+
            ", \'Desktop\', \'"+plu_id+"_images\', \'"+plu_id+""+no_ext[loop] +"\')\nregister(\n\t\t\'image_resize\',\n\t\t"+
         "\'Prints a message from Willy invert_current_layer\',\n\t\t"+
         "\'Prints a message from Willy invert_current_layer\',\n\t\t"+
         "\'User3870315\',\n\t\t\'User3870315\',\n\t\t\'2015\',\n\t\t"+
         "\'<Toolbox>/Tools/image_resize\',\n\t\t\'\',\n\t\t[],\n\t\t[],\n\t\timage_resize)\n\n"+
          "main()";
      }  
      // document.getElementById("text_input").value=gimp_command;  

      saveTextAsFile();
    }

    function saveTextAsFile()
{
    var command='cd\nmv Desktop/webami/'+plu_id+'/images Desktop/'+plu_id+'_images\ncd\ncd .gimp-2.8/plug-ins\necho "'+gimp_command+'"> pytest.py\ngimp\ncd\ncd Downloads\necho "rm -f webam.sh\ncd\nmv Desktop/'+plu_id+'_images Desktop/webami/'+plu_id+'/images\ncd\ncd .gimp-2.8/plug-ins\necho \\"'+gimp_empty_command+'\\"> pytest.py"> webam.sh';
    var textToSave = command; 
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "webam.sh"
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}

    function scaleImage(i_count)
    {
         
         // var  ratio = Math.min( maxWidth / width, maxHeight/ height );
    //      if(maxWidth[i_count]!=1000)
    //      {
    //      if(height>width)
    //        ratio = maxHeight[i_count]/ height;
    //    else
    //         if(height<=width)
    //             ratio = maxWidth[i_count]/ width;
    // }
    // else
        ratio = 0.0 + maxWidth[i_count]/ width;
        if(ratio<=1) {
        width =Math.round(0.0 + ratio * width);
        height =Math.round(0.0 + ratio * height);
      }
    }

});