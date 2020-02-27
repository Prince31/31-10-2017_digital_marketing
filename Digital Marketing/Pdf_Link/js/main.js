
$(function(){
	"use strict";
	var text_input_plu = document.getElementById("text_input_plu");
	var text_output_plu = document.getElementById("text_output_plu");
	var text_input_sheet=document.getElementById("text_input_sheet");
	var pdf_plu=[];
	var pdf_plu_count=0;
	pdf_plu[pdf_plu_count]="";
	var link_error="";
	var sheet_title_length =0;
	var pdf_link=[];
	var quote_flag=false;
	// var pdf_link_count=0;
	$(".clic").bind("click",function() {
		if(text_input_plu.value!=""&&text_input_sheet.value!="")
		pluSort();
		else
			alert("Please fill Input and Sheet Name column and try again");
	});
	$(".clear1").bind("click",clear);
	document.getElementById("text_output_plu").readOnly = true;
	document.getElementById("text_input_plu").value = "";
	document.getElementById("text_output_plu").value = "";
	document.getElementById("text_input_sheet").value="";

	function clear() {
		pdf_plu=[];
		pdf_plu_count=0;
		pdf_plu[pdf_plu_count]="";
		link_error="";
		sheet_title_length =0;
		document.getElementById("text_input_plu").value = "";
		document.getElementById("text_output_plu").value = "";
		document.getElementById("text_input_sheet").value="";
		document.getElementById("text_input_plu").readOnly = false;
		document.getElementById("text_input_sheet").readOnly = false;
		quote_flag=false;
	}

	function pluSort() {
		quote_flag=false;
		document.getElementById("text_input_plu").readOnly = true;
		document.getElementById("text_input_sheet").readOnly = true;
		var pdf_plu_s = text_input_plu.value;
		for(var i=0; i<pdf_plu_s.length;i++) {

			if(pdf_plu_s.substring(i,i+1)!='"') 
			pdf_plu[pdf_plu_count]+=pdf_plu_s.substring(i,i+1);
			else
				quote_flag=!(quote_flag);

			if(pdf_plu_s.substring(i,i+1)=="\n"||i==pdf_plu_s.length-1) {
				pdf_plu[pdf_plu_count]=pdf_plu[pdf_plu_count].trim();
				if(!quote_flag) {
				
				
				pdf_plu_count++;
				pdf_plu[pdf_plu_count]="";
				}
			}
				
		}
		
		linkCreate();
	}

	function linkCreate() {
		var sheet_title = text_input_sheet.value.split('_');
		sheet_title_length= sheet_title[0].length+8+sheet_title[2].length;

		for(var i=0;i<pdf_plu_count;i++) {
			if(pdf_plu[i]!="") {
				
				var plus_check = String(pdf_plu[i]);
				var plus_check_index = plus_check.indexOf("+");
				if(plus_check_index=="-1") {
					pdf_link[i]="https://www.frys.com/product/"+
					pdf_plu[i]+"?site=sa:adpages%20page:"+
					sheet_title[0]+"%20date:"+sheet_title[2];
					singlePluLinkTest(pdf_link[i], pdf_plu[i], sheet_title[0], sheet_title[2]);
				}
				else {
					pdf_link[i]="https://www.frys.com/search?cat=&query_string="+
					pdf_plu[i]+"&nearbyStoreName=false&site=sa:adpages%20page:"+
					sheet_title[0]+"%20date:"+sheet_title[2];
					multiplePluLinkTest(pdf_link[i], pdf_plu[i], sheet_title[0], sheet_title[2]);
				}
			}
			else
				pdf_link[i]="";
		}
		document.getElementById("text_input_sheet").value="";

		var pdf_link_output ="";
		for(var i=0;i<pdf_plu_count;i++) {
			pdf_link_output+=pdf_link[i]+"\n";
		}

		if(link_error=="")
		text_output_plu.value=pdf_link_output;
		else {
			text_output_plu.value="Error in below Plu\n"+link_error;
			document.getElementById("text_input_sheet").value="Error";
		}
		document.getElementById("text_input_plu").value = "";
		
		
	}

	function singlePluLinkTest(link_test, plu_test, page, date) {
		if(link_test.substring(0,29)=="https://www.frys.com/product/") {
			if(link_test.substring(link_test.length-
				sheet_title_length,link_test.length)==
				""+page+"%20date:"+date) {
				if(link_test.substring(link_test.length-
				sheet_title_length-24,link_test.length-
				sheet_title_length)=="?site=sa:adpages%20page:") {
					
					for(var i=29;i<(link_test.length-sheet_title_length-24);i++) {
						
						if(link_test.substring(i,i+1).charCodeAt()>=48&&
							link_test.substring(i,i+1).charCodeAt()<=57)
							;
						else {
							link_error+=plu_test+"\n";
							break;
						}
					}
				}
				else
					link_error+=plu_test+"\n";
			}
			else
				link_error+=plu_test+"\n";
		}
		else
			link_error+=plu_test+"\n";
	}

	function multiplePluLinkTest(link_test, plu_test, page, date) {

		if(link_test.substring(0,46)=="https://www.frys.com/search?cat=&query_string=") {
			if(link_test.substring(link_test.length-
				sheet_title_length,link_test.length)==
				""+page+"%20date:"+date) {
				if(link_test.substring(link_test.length-
				sheet_title_length-46,link_test.length-
				sheet_title_length)==
					"&nearbyStoreName=false&site=sa:adpages%20page:") {
					for(var i=46;i<(link_test.length-sheet_title_length-46);i++) {
						if((link_test.substring(i,i+1).charCodeAt()>=48&&
							link_test.substring(i,i+1).charCodeAt()<=57)||
							link_test.substring(i,i+1)=="+")
							;
						else {
							link_error+=plu_test+"\n";
							break;
						}
					}
				}
				else
					link_error+=plu_test+"\n";
			}
			else
				link_error+=plu_test+"\n";
		}
		else
			link_error+=plu_test+"\n";
	}

});

