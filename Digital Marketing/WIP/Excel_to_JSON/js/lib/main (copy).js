$(function(){
        "use strict";
        var year=document.getElementById('text_input_html');
        var plu1=document.getElementById('text_input_upper');
        var plu2=document.getElementById('text_input_gallery');
        var make_model= document.getElementById('sheet_output_field');
        var brand=  document.getElementById('sheet_make_field'); 

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




        dataCollect();
        

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
    else
      make_model_arr[make_model_arr_count]+=make_model.value.substring(i,i+1);
  }

  //brand data
for(var i=0; i<brand.value.length;i++){
    if(brand.value.substring(i,i+1)=="\n"){
      brand_arr_count++;
      brand_arr[brand_arr_count]="";
    }
    else
      brand_arr[brand_arr_count]+=brand.value.substring(i,i+1);
  }



  // alert(year_arr);
  // alert(plu1_arr);
  // alert(plu2_arr);
  // alert(make_model_arr);
  // alert(brand_arr);
  dataEvaluate()
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
      var temp_index=temp_save_index[i3];
      if(i3==0){
        json_data+='"'+year_arr[temp_index]+'":['
      }
      if(plu1_arr[temp_index]!=""&&plu2_arr[temp_index]!=""&&(!(plu1_arr[temp_index]===undefined))&&(!(plu2_arr[temp_index]===undefined))){
      json_data+=`
    {make:"`+brand_arr[temp_index]+'",'+brand_arr[temp_index]+':[{model:"'+
    make_model_arr[temp_index]+'",'+make_model_arr[temp_index]+':['+plu1_arr[temp_index]+','+
    plu2_arr[temp_index]+']';
  }
  else if(plu1_arr[temp_index]!=""&&(!(plu1_arr[temp_index]===undefined))){
    json_data+=`
    {make:"`+brand_arr[temp_index]+'",'+brand_arr[temp_index]+':[{model:"'+
    make_model_arr[temp_index]+'",'+make_model_arr[temp_index]+':['+plu1_arr[temp_index]+',0000000]';
  }
  else if(plu2_arr[temp_index]!=""&&(!(plu2_arr[temp_index]===undefined))){
    json_data+=`
    {make:"`+brand_arr[temp_index]+'",'+brand_arr[temp_index]+':[{model:"'+
    make_model_arr[temp_index]+'",'+make_model_arr[temp_index]+':[0000000,'+plu2_arr[temp_index]+']';
  }
  else{
    json_data+=`
    {make:"`+brand_arr[temp_index]+'",'+brand_arr[temp_index]+':[{model:"'+
    make_model_arr[temp_index]+'",'+make_model_arr[temp_index]+':[]';
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