
$(function(){
	"use strict";
	var text_plu=document.getElementById("text_plu");
	var text_screen_size= document.getElementById("text_screen_size")
	var text_diagonal_screen= document.getElementById("text_diagonal_screen")
	var checkbox_specsheet=document.getElementById("checkbox_specsheet");
	var checkbox_energyguide=document.getElementById("checkbox_energyguide");
	
	var current_plu="";
	var current_screen_size="";
	var current_diagonal_screen="";
	var create_code_call=0;
	var code=[];
	var code_sample=[];
	var brand="brand";
	var code_brand_spec_energy=[];
	var code_brand_spec_energy_count=0;
	var plu_record=[];
	var plu_record_count=0;

	text_plu.value="";
	text_screen_size.value="";
	text_diagonal_screen.value="";
	checkbox_specsheet.checked=false;
	checkbox_energyguide.checked=false;


	function clear()
	{	
		text_plu.value="";
		text_screen_size.value="";
		text_diagonal_screen.value="";
		text_plu.readOnly=false;
		text_screen_size.readOnly=false;
		text_diagonal_screen.readOnly=false;
		checkbox_specsheet.checked=false;
		checkbox_energyguide.checked=false;
		$("#brand_drop").text('Brand');

		current_plu="";
		current_screen_size="";
		current_diagonal_screen="";
		create_code_call=0;
	    code=[];
	    code_sample=[];
	    brand="brand";
	    code_brand_spec_energy=[];
	    code_brand_spec_energy_count=0;
	    plu_record=[];
		plu_record_count=0;


	}




	$(".clic").bind("click", function(){
          var temp_text_plu = text_plu.value;
          var temp_text_screen_size = text_screen_size.value;
          var temp_text_diagonal_screen = text_diagonal_screen.value;
         
    
          if(temp_text_plu !=""&& temp_text_screen_size!=""&&temp_text_diagonal_screen!=""&&brand!="brand")
          {
            
            text_plu.readOnly=true;
        	text_screen_size.readOnly=true;
        	text_diagonal_screen.readOnly=true;
            extractData();
            
        }
        else
          alert("Please fill 'Plu', ' Available Screen Size', ' Actual Diagonal Screen' field, select brand and try again / Press Clear Button");
        });

	$(".clear1").bind("click",clear);


	$("#drop_1").bind("click", function() {
		$("#brand_drop").text('Samsung');
		brand="Samsung";
	});	

	$("#drop_2").bind("click", function() {
		$("#brand_drop").text('LG');
		brand="LG";
	});

	$("#drop_3").bind("click", function() {
		$("#brand_drop").text('Sony');
		brand="Sony";
	});

	function extractData(){
		while(true){
		var text_plu_newline_index=text_plu.value.indexOf("\n");
		if(text_plu_newline_index!=-1){
			current_plu=text_plu.value.substring(0,text_plu_newline_index);
			current_plu=current_plu.trim();
			text_plu.value=text_plu.value.substring(text_plu_newline_index+1);
			text_plu.value=text_plu.value.trim();

		}
		else{
			current_plu=text_plu.value;
			current_plu=current_plu.trim();
			text_plu.value="";
		}


		var text_screen_size_newline_index=text_screen_size.value.indexOf("\n");
		if(text_screen_size_newline_index!=-1){
			current_screen_size=text_screen_size.value.substring(0,text_screen_size_newline_index);
			current_screen_size=current_screen_size.trim();
			text_screen_size.value=text_screen_size.value.substring(text_screen_size_newline_index+1);
			text_screen_size.value=text_screen_size.value.trim();
			
		}
		else{
			current_screen_size=text_screen_size.value;
			current_screen_size=current_screen_size.trim();
			text_screen_size.value="";
		}


		var text_diagonal_screen_newline_index=text_diagonal_screen.value.indexOf("\n");
		if(text_diagonal_screen_newline_index!=-1){
			current_diagonal_screen=text_diagonal_screen.value.substring(0,text_diagonal_screen_newline_index);
			current_diagonal_screen=current_diagonal_screen.trim();
			text_diagonal_screen.value=text_diagonal_screen.value.substring(text_diagonal_screen_newline_index+1);
			text_diagonal_screen.value=text_diagonal_screen.value.trim();
			if(text_diagonal_screen.value=="")
				break;
			
		}
		else{
			current_diagonal_screen=text_diagonal_screen.value;
			current_diagonal_screen=current_diagonal_screen.trim();
			text_diagonal_screen.value="";
			break;
		}
		createCode()
		plu_record[plu_record_count++]=current_plu;
		
	}

		
		createCode()
		plu_record[plu_record_count++]=current_plu;
		text_diagonal_screen.value="";

		for(var i=0;i<plu_record_count;i++){

			if(checkbox_energyguide.checked&&checkbox_specsheet.checked)
            	brandSpecEnergy(plu_record[i]);
            else if(checkbox_specsheet.checked)
            	brandSpec(plu_record[i]);
            else if(checkbox_energyguide.checked)
            	brandEnergy(plu_record[i]);
            else
            	brandFun();
		
			code[i]=code[i]+code_brand_spec_energy[i];

			saveTextAsFile(code[i], plu_record[i]);
		
		}

		// document.getElementById("text_box").value=code;
	}

	function createCode(){
		
		var while_count=0;
		while(while_count<=create_code_call){
			if(while_count==create_code_call)
			code[while_count]='<link rel="stylesheet" href="https://images.frys.com/art/css/altoptions.css" /><b>Available Screen Size Class:</b><BR><BR>'
			for(var i=0;i<=while_count;i++){
				if(i==create_code_call){
					code[while_count]+='<em class="tvonboxed24" style="margin-right:10px;">'+ current_screen_size+'"</em>';
					code_sample[while_count]='<em class="tvboxed24" style="margin-right:10px;"><a href="https://www.frys.com/product/'+current_plu+'" title="Actual Diagonal Screen Size : '+ current_diagonal_screen +'&#34;">'+current_screen_size+'"</a></em>';
				}
				else if(while_count==create_code_call){
					code[while_count]+=code_sample[i];
					
				}
				else
				{
					code[while_count]+='<em class="tvboxed24" style="margin-right:10px;"><a href="https://www.frys.com/product/'+current_plu+'" title="Actual Diagonal Screen Size : '+ current_diagonal_screen +'&#34;">'+current_screen_size+'"</a></em>';
					break;
				}
			}

			while_count++;
		}
		create_code_call++;

		
	}

	function brandSpec(temp_current_plu){

		if(brand=="Samsung"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/samsung_logo.jpg" style="border-style:none;padding-right:5px;width:125px; vertical-align:bottom;" alt="Authorized Samsung Dealer" id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_specsheet.pdf"><img src="https://images.frys.com/art/product/alt_shots/Download_Spec_Sheet.png" style="border-style:none;padding-right:8px;width:196px; vertical-align:bottom;" alt="Download Spec Sheet" id="GNREGImage"></a></div>';
		}
		else if(brand=="LG"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/LG_logo.jpg" style="border-style: none;padding-right:5px; width:  116px; vertical-align:bottom;" alt="Authorized LG Dealer." id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_specsheet.pdf"><img src="https://images.frys.com/art/product/alt_shots/Download_Spec_Sheet.png" style="border-style:none;padding-right:8px;width:196px; vertical-align:bottom;" alt="Download Spec Sheet" id="GNREGImage"></a></div>';
		}
		else if(brand="Sony"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/sonyauthorizeddealerlogo.png" style="border-style:none;padding-right:5px;width:90px; vertical-align:bottom; " alt="Authorized Sony Dealer" id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_specsheet.pdf"><img src="https://images.frys.com/art/product/alt_shots/Comparison_chart.jpg" style="border-style:none;padding-right:8px;width:196px; vertical-align:bottom;" alt="Download Spec Sheet" id="GNREGImage"></a></div>'
		}
		else
			alert("Invalid Brand");

		code_brand_spec_energy_count++;
	}

	function brandSpecEnergy(temp_current_plu){
		if(brand=="Samsung"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/samsung_logo.jpg" style="border-style:none;padding-right:5px;width:125px; vertical-align:bottom;" alt="Authorized Samsung Dealer" id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_specsheet.pdf"><img src="https://images.frys.com/art/product/alt_shots/Download_Spec_Sheet.png" style="border-style:none;padding-right:8px;width:196px; vertical-align:bottom;" alt="Download Spec Sheet" id="GNREGImage"></a><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_energyguide.pdf"><img src="https://images.frys.com/art/product/alt_shots/energy_guide_icon.jpg" style="border-style: none;" alt="Click here to view this product\'s energy guide." title="Click here to view this product\'s energy information." id="GNREGImage"></a></div>'
		}
		else if(brand=="LG"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/LG_logo.jpg" style="border-style: none;padding-right:5px; width:  116px; vertical-align:bottom;" alt="Authorized LG Dealer." id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_specsheet.pdf"><img src="https://images.frys.com/art/product/alt_shots/Download_Spec_Sheet.png" style="border-style:none;padding-right:8px;width:196px; vertical-align:bottom;" alt="Download Spec Sheet" id="GNREGImage"></a><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_energyguide.pdf"><img src="https://images.frys.com/art/product/alt_shots/energy_guide_icon.jpg" style="border-style: none;" alt="Click here to view this product\'s energy guide." title="Click here to view this product\'s energy information." id="GNREGImage"></a></div>';
		}
		else if(brand="Sony"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/sonyauthorizeddealerlogo.png" style="border-style:none;padding-right:5px;width:90px; vertical-align:bottom; " alt="Authorized Sony Dealer" id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_specsheet.pdf"><img src="https://images.frys.com/art/product/alt_shots/Comparison_chart.jpg" style="border-style:none;padding-right:8px;width:196px; vertical-align:bottom;" alt="Download Spec Sheet" id="GNREGImage"></a><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_energyguide.pdf"><img src="https://images.frys.com/art/product/alt_shots/energy_guide_icon.jpg" style="border-style: none;" alt="Click here to view this product\'s energy guide." title="Click here to view this product\'s energy information." id="GNREGImage"></a></div>'
		}
		else
			alert("Invalid Brand");

		code_brand_spec_energy_count++;
	}

	function brandEnergy(temp_current_plu){
		if(brand=="Samsung"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/samsung_logo.jpg" style="border-style:none;padding-right:5px;width:125px; vertical-align:bottom; " alt="Authorized Samsung Dealer" id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_energyguide.pdf"><img src="https://images.frys.com/art/product/alt_shots/energy_guide_icon.jpg" style="border-style: none;" alt="Click here to view this product\'s energy guide." title="Click here to view this product\'s energy information." id="GNREGImage"></a></div>'
		}
		else if(brand=="LG"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/LG_logo.jpg" style="border-style:none;padding-right:5px;width:115px; vertical-align:bottom; " alt="Authorized LG Dealer" id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_energyguide.pdf"><img src="https://images.frys.com/art/product/alt_shots/energy_guide_icon.jpg" style="border-style:none;" alt="Click here to view this product\'s energy guide." title="Click here to view this product\'s energy information." id="GNREGImage"></a></div>';
		}
		else if(brand="Sony"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/sonyauthorizeddealerlogo.png" style="border-style:none;padding-right:5px;width:90px; vertical-align:bottom; " alt="Authorized Sony Dealer" id="GNREGImage"><a href="https://images.frys.com/art/rebates_pdf/'+ temp_current_plu +'_energyguide.pdf"><img src="https://images.frys.com/art/product/alt_shots/energy_guide_icon.jpg" style="border-style:none;" alt="Click here to view this product\'s energy guide." title="Click here to view this product\'s energy information." id="GNREGImage"></a></div>'
		}
		else
			alert("Invalid Brand");

		code_brand_spec_energy_count++;
	}

	function brandFun(){
		if(brand=="Samsung"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/samsung_logo.jpg" style="border-style:none;padding-right:5px;width:125px;vertical-align:bottom; " alt="Authorized Samsung Dealer" id="GNREGImage"></div>'
		}
		else if(brand=="LG"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/LG_logo.jpg" style="border-style: none;padding-right:5px; width: 116px;" alt="Authorized LG Dealer." id="GNREGImage"></div>';
		}
		else if(brand="Sony"){
			code_brand_spec_energy[code_brand_spec_energy_count]='<link rel="stylesheet" type="text/css" href="https://images.frys.com/art/css/EnergyGuideS.css"><div id="GNREGContainer"><img src="https://images.frys.com/art/product/alt_shots/sonyauthorizeddealerlogo.png" style="border-style: none;padding-right:5px; width:90px;" alt="Authorized Sony Dealer." id="GNREGImage"></div>'
		}
		else
			alert("Invalid Brand");

		code_brand_spec_energy_count++;
	}

	function saveTextAsFile(command, temp_plu)
{
    var textToSave = command;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = temp_plu+"_upper.html";
 
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

});

