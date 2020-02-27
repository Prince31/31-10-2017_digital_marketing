$(document).ready(function(){


   $('#show').click(function() {
      $('.out').show();
    });

// VARIABLE DECELARATION

var makeArray;
var findMatchMake;
var modelArray;
var findMatchModelArray;
var productArray;


displayYear();
function displayYear(){
 
  // THIS CODE 
  $("#year").empty();
  var option1 = '<option value="YEAR">-- Select Year --</option>';
  $("#year").append(option1);
  for(var i=0; i<yearObj.length; i++){
       var option = '<option value="'+yearObj[i]+'">'+yearObj[i]+'</option>';
       $("#year").append(option);
  }

  addYearEventListener(); // THIS FUNCTION USED TO ADD EVENT LISTENER IN THIS LANDING PAGE.
}


function addYearEventListener(){  
     $("#year").on("change",selectYear);
}

function addMakeEventListener(){  
     $("#make").on("change",selectMake);
}

function addModelEventListener(){
     $("#model").on("change",selectModel);
}

function selectYear(){
    var selectedYear = $(this).children("option:selected").val();
    makeArray = makeObj[selectedYear];
    $("#make").empty();
      var option1 = '<option value="MAKE">-- Select Make --</option>';
    $("#make").append(option1);
    for(var j=0; j<makeArray.length;j++){
      var option = '<option value="'+makeArray[j].make+'">'+makeArray[j].make+'</option>';
      $("#make").append(option);
      
    }
    $("#make").off();
    addMakeEventListener();
}


function selectMake(){
  var selectedMake = $(this).children("option:selected").val();
  for(var j=0; j<makeArray.length;j++){
    if(makeArray[j].make == selectedMake ){
      findMatchMakeArray = makeArray[j]; 
    }
  }
  modelArray = findMatchMakeArray[selectedMake];

    $("#model").empty();
     var option1 = '<option value="MODEL">-- Select Model --</option>';
    $("#model").append(option1);
    for(var j=0; j<modelArray.length;j++){
      var option = '<option value="'+modelArray[j].model+'">'+modelArray[j].model+'</option>';
      $("#model").append(option);      
    }

    $("#model").off();
    addModelEventListener();
}


function selectModel(){
  var selectedModel = $(this).children("option:selected").val();
  var key = selectedModel.replace(" ","_");
  selectedModel = key;  

   for(var j=0; j<modelArray.length;j++){
     var matchString = modelArray[j].model;
     matchString = matchString.replace(" ","_");
    if(matchString == selectedModel){
      findMatchModelArray = modelArray[j];       
    }
  }

  productArray = findMatchModelArray[selectedModel];

  $("#product").empty();
  /*for(var i=0; i<productArray.length; i++){
   var img = '<img src="https://images.frys.com/art/product/300x300/'+productArray[i]+'.01.prod.jpg">';  
    $("#product").append(img);
    $("#product").append("<br />");*/

    var img1 = '<img alt="Sorry, No Image Found" src="https://images.frys.com/art/product/300x300/'+productArray[0]+'.01.prod.jpg">';
    $("#prod_img1").append(img1);

    var img2 = '<img alt="Sorry, No Image Found" src="https://images.frys.com/art/product/300x300/'+productArray[1]+'.01.prod.jpg">';
    $("#prod_img2").append(img2);

      var plu_id1 = productArray[0];
      $("#plu1").append(plu_id1);

      var plu_id2 = productArray[1];
      $("#plu2").append(plu_id2);


}



});

