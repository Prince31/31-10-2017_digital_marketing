$(function(){
        "use strict";
        var year=document.getElementById('text_input_html');
        var plu1=document.getElementById('text_input_upper');
        var plu2=document.getElementById('text_input_gallery');
        var make_model= document.getElementById('sheet_output_field');
        var brand=  document.getElementById('sheet_make_field'); 
        var output= document.getElementById("text_input_plu");
        var year_arr=[], plu1_arr=[], plu2_arr=[], make_model_arr=[], brand_arr=[];
        var year_arr_count=0, plu1_arr_count=0, plu2_arr_count=0, make_model_arr_count=0, brand_arr_count=0;
        year_arr[year_arr_count]="";
        plu1_arr[plu1_arr_count]="";
        plu2_arr[plu2_arr_count]="";
        make_model_arr[make_model_arr_count]="";
        brand_arr[brand_arr_count]="";
        var temp_save_index=[];
        var permanent_save_index=[];
        var json_data="";
        var brand_flag=false;
        var model_name=[];
        var brand_name=[];
        year.value="";
        plu1.value="";
        plu2.value="";
        make_model.value="";
        brand.value="";
        output.value="";

        output.readOnly = true;

function clear(){
        
        year_arr=[], plu1_arr=[], plu2_arr=[], make_model_arr=[], brand_arr=[];
        year_arr_count=0, plu1_arr_count=0, plu2_arr_count=0, make_model_arr_count=0, brand_arr_count=0;
        year_arr[year_arr_count]="";
        plu1_arr[plu1_arr_count]="";
        plu2_arr[plu2_arr_count]="";
        make_model_arr[make_model_arr_count]="";
        brand_arr[brand_arr_count]="";
        temp_save_index=[];
        permanent_save_index=[];
        json_data="";
        brand_flag=false;
        model_name=[];
        brand_name=[];
        year.value="";
        plu1.value="";
        plu2.value="";
        make_model.value="";
        brand.value="";
        output.value="";
        year.readOnly = false;
        plu1.readOnly = false;
        plu2.readOnly=false;
        make_model.readOnly=false;
        brand.readOnly=false;

}


 $(".clic").bind("click", function(){
        
          var temp_year = year.value;
          var temp_plu1 = plu1.value;
          var temp_plu2 = plu2.value;
          var temp_make_model = make_model.value;
          var temp_brand = brand.value;
         if(temp_year !="" && temp_plu1 !="" && temp_plu2!="" && temp_make_model!="" && temp_brand!="")
          {
             year.readOnly = true;
            plu1.readOnly = true;
            plu2.readOnly=true;
            make_model.readOnly=true;
            brand.readOnly=true;
           dataCollect();
         
          year.value="";
          plu1.value="";
          plu2.value="";
          make_model.value="";
          brand.value="";
        
        }
        else
          alert("Please fill Year, Plu1, Plu2, Make, Model and try again");
        });
     
        $(".clear1").bind("click",clear);
       
        

function dataCollect(){
  //year data
  for(var i=0; i<year.value.length;i++){
    if(year.value.substring(i,i+1)=="\n"){
      // alert("check:"+ year_arr[year_arr_count]+" "+ year_arr[year_arr_count-1]);
      year_arr_count++;
      year_arr[year_arr_count]="";
    }
    else
      year_arr[year_arr_count]+=year.value.substring(i,i+1);
  }

  //plu1 data
  for(var i=0; i<plu1.value.length;i++){
    if(plu1.value.substring(i,i+1)=="\n"){
      plu1_arr_count++;
      plu1_arr[plu1_arr_count]="";
    }
    else
      plu1_arr[plu1_arr_count]+=plu1.value.substring(i,i+1);
  }

  //plu2 data
  for(var i=0; i<plu2.value.length;i++){
    if(plu2.value.substring(i,i+1)=="\n"){
      plu2_arr_count++;
      plu2_arr[plu2_arr_count]="";
    }
    else
      plu2_arr[plu2_arr_count]+=plu2.value.substring(i,i+1);
  }

  //make_model data
    for(var i=0; i<make_model.value.length;i++){
    if(make_model.value.substring(i,i+1)=="\n"){
      // if(year_arr[make_model_arr_count]==""){
      //   brand_arr[brand_arr_count]=make_model_arr[make_model_arr_count];
      //   brand_arr_count++;
      // }
      // else{
      //   brand_arr[brand_arr_count]=brand_arr[brand_arr_count-1];
      //   brand_arr_count++;
      // }

      make_model_arr_count++;
      make_model_arr[make_model_arr_count]="";
    }
    else{
      make_model_arr[make_model_arr_count]+=make_model.value.substring(i,i+1);
      model_name[make_model_arr_count]=make_model_arr[make_model_arr_count];
    }
  }

  //brand data
for(var i=0; i<brand.value.length;i++){
    if(brand.value.substring(i,i+1)=="\n"){
      brand_arr_count++;
      brand_arr[brand_arr_count]="";
    }
    else{
      brand_arr[brand_arr_count]+=brand.value.substring(i,i+1);
      brand_name[brand_arr_count]=brand_arr[brand_arr_count];
    }
  }



  // alert(year_arr);
  // alert(plu1_arr);
  // alert(plu2_arr);
  // alert(make_model_arr);
  // alert(brand_arr);
  makeUnderscore()
  modelUnderscore();
  dataEvaluate();
}      

function makeUnderscore(){
  var brand_updated="";
  for(var i=0; i<=brand_arr_count;i++){

    var temp_brand1=brand_arr[i];
    var temp_brand1_first_char=0;
    for(var i1=0;i1<temp_brand1.length;i1++){
      var temp_brand1_char=temp_brand1.substring(i1,i1+1).charCodeAt();

      
      if(i1==0&&(temp_brand1_char>=48&&temp_brand1_char<=57)){
         brand_updated+='"';
         temp_brand1_first_char=temp_brand1_char;
       }
      if(temp_brand1_char>=65&&temp_brand1_char<=90||temp_brand1_char>=97&&temp_brand1_char<=122||temp_brand1_char>=48&&temp_brand1_char<=57){
        
        brand_updated+=temp_brand1.substring(i1,i1+1);
      }
      else{
        var temp_brand_updated_length=brand_updated.length;
        if(brand_updated.substring(temp_brand_updated_length-1,temp_brand_updated_length)!="_")
        brand_updated+="_";
      }
   
      if(i1==temp_brand1.length-1){
        if(temp_brand1_first_char!=0){
        brand_updated+='"';
        
      }
      }
    }
    brand_arr[i]= brand_updated;
    brand_updated="";
   
  }
} 


function modelUnderscore(){
  var make_model_updated="";
  for(var i=0; i<=make_model_arr_count;i++){

    var temp_model=make_model_arr[i];
    var temp_model_first_char=0;
    for(var i1=0;i1<temp_model.length;i1++){
      var temp_model_char=temp_model.substring(i1,i1+1).charCodeAt();

      
      if(i1==0&&(temp_model_char>=48&&temp_model_char<=57)){
         make_model_updated+='"';
         temp_model_first_char=temp_model_char;
       }
      if(temp_model_char>=65&&temp_model_char<=90||temp_model_char>=97&&temp_model_char<=122||temp_model_char>=48&&temp_model_char<=57){
        
        make_model_updated+=temp_model.substring(i1,i1+1);
      }
      else{
        var temp_make_model_updated_length=make_model_updated.length;
        if(make_model_updated.substring(temp_make_model_updated_length-1,temp_make_model_updated_length)!="_")
        make_model_updated+="_";
      }
   
      if(i1==temp_model.length-1){
        if(temp_model_first_char!=0){
        make_model_updated+='"';
        
      }
      }
    }
    make_model_arr[i]= make_model_updated;
    make_model_updated="";
   
  }
}      

function dataEvaluate(){
  for(var i=0;i<=year_arr_count;i++){
    temp_save_index.push(i);
    //To check if any number repeat
     var i2=0;
      for(;i2<permanent_save_index.length;i2++){
        if(permanent_save_index[i2]==i)
          break;
      }
      if(i2==permanent_save_index.length){
        permanent_save_index.push(i);
        // alert(permanent_save_index)
      }
      else{
        temp_save_index=[];
        continue;
        
      }
      

    for(var i1=i+1; i1<=year_arr_count;i1++){
      
     
      //to temp and permanent save repeated year values
      if(year_arr[i]==year_arr[i1]){
        temp_save_index.push(i1);
        permanent_save_index.push(i1)
      }
    }

    //to evaluate repeated year values and make json
    // if(i==0){
    //   temp_save_index=[];
    //   continue;}
    for(var i3=0;i3<temp_save_index.length;i3++){
      var temp_index1=0;
      var temp_index=temp_save_index[i3];
      if(i3>0){
      temp_index1=temp_save_index[i3-1];
      
      if(brand_arr[temp_index]==brand_arr[temp_index1]){
        brand_flag=true;
        var temp_json_length=json_data.length-3;
      json_data=json_data.substring(0,temp_json_length)+",";
      }
       else
      brand_flag=false;
    }
    else
      brand_flag=false;
   




      if(i3==0){
        json_data+='"'+year_arr[temp_index]+'":['
      }
      if(plu1_arr[temp_index]!=""&&plu2_arr[temp_index]!=""&&(!(plu1_arr[temp_index]===undefined))&&(!(plu2_arr[temp_index]===undefined))){
      if(!(brand_flag))
      json_data+=`
    {make:"`+brand_name[temp_index]+'",'+brand_arr[temp_index]+':[';
    else
      json_data+=`
                       `;

    json_data+='{model:"'+
     model_name[temp_index]+'",'+make_model_arr[temp_index]+':['+plu1_arr[temp_index]+','+
    plu2_arr[temp_index]+']';
  }
  else if(plu1_arr[temp_index]!=""&&(!(plu1_arr[temp_index]===undefined))){
    if(!(brand_flag))
      json_data+=`
    {make:"`+brand_name[temp_index]+'",'+brand_arr[temp_index]+':[';
    else
      json_data+=`
                       `;


    json_data+='{model:"'+
     model_name[temp_index]+'",'+make_model_arr[temp_index]+':['+plu1_arr[temp_index]+',0000000]';
  }
  else if(plu2_arr[temp_index]!=""&&(!(plu2_arr[temp_index]===undefined))){
     if(!(brand_flag))
      json_data+=`
    {make:"`+brand_name[temp_index]+'",'+brand_arr[temp_index]+':[';
    else
      json_data+=`
                       `;



    json_data+='{model:"'+
    model_name[temp_index]+'",'+make_model_arr[temp_index]+':[0000000,'+plu2_arr[temp_index]+']';
  }
  else{
     if(!(brand_flag))
      json_data+=`
    {make:"`+brand_name[temp_index]+'",'+brand_arr[temp_index]+':[';
    else
      json_data+=`
                       `;

    json_data+='{model:"'+
    model_name[temp_index]+'",'+make_model_arr[temp_index]+':[]';
  }

      if(i3==temp_save_index.length-1){
        json_data+=`}]}
  ],

  `;
      }
      else{
        json_data+=`}]},`;
      }
    }

    temp_save_index=[];
  }
  document.getElementById("text_input_plu").value=json_data;
}

});