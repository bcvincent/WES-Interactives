$("#multibox").hide();
$("#showyourwork").hide();

var numOfTotalCols = $("#left-frac-denom").val();
var numOfTotalRows = $("#right-frac-denom").val();
var numOfCols = $("#left-frac-numer").val();
var numOfRows = $("#right-frac-numer").val();
var newNum = numOfCols* numOfRows;
var newDen = numOfTotalCols * numOfTotalRows;

// Changing Numerators
function changeLeftNum() {
  var leftfracnumval = $("#left-frac-numer").val();
  $(".col").removeClass("col-selected").slice( 0,leftfracnumval  ).addClass( "col-selected" );
  theBigOne();
}
$( "#left-frac-numer" ).change(changeLeftNum);

function changeRightNum() {
  var rightfracnumval = $("#right-frac-numer").val();
  $(".row").removeClass("row-selected").slice( 0,rightfracnumval  ).addClass( "row-selected" );
  theBigOne();
}
$( "#right-frac-numer" ).change(changeRightNum);


// Changing Denominators
$( "#left-frac-denom" ).change(function() {
  var leftfracnumval = $("#left-frac-numer").val();
  $( "#leftbox" ).html('');  //clear out everything from left/top box
  $( "#left-frac-numer" ).html('');
  if(this.value>leftfracnumval){
    changeCols(this.value,leftfracnumval);
  }
  else{
    changeCols(this.value,1);
  }
});

$( "#right-frac-denom" ).change(function() {
  var rightfracnumval = $("#right-frac-numer").val();
  $( "#rightbox" ).html(''); //clear out everything from right/bottom box
  $( "#right-frac-numer" ).html('');
  if(this.value>rightfracnumval){
    changeRows(this.value,rightfracnumval);
  }
  else{
    changeRows(this.value,1);
  }
});

function changeCols(numberOfCols,numNum){
  for(var i = 1; i<=numberOfCols; i++){
    var newdiv1 = $( " <div class='col' id='col"+i+"'></div>" );
    var newoption1 = $(" <option value='"+i+"'>"+i+"</option>");
    $( "#left-frac-numer").append(newoption1);
    $( "#leftbox" ).append(newdiv1);
  }
  $("#left-frac-numer").val(numNum); 
  changeLeftNum();
  createMultiBox();
}

function changeRows(numberOfRows, numNum){
  for(var i = 1; i<=numberOfRows; i++){
    var newdiv1 = $( " <div class='row' id='row"+i+"'></div>" );
    var newoption1 = $(" <option value='"+i+"'>"+i+"</option>");
    $( "#rightbox" ).append(newdiv1);
    $( "#right-frac-numer").append(newoption1);
  }
  $("#right-frac-numer").val(numNum); 
  changeRightNum();
  createMultiBox();
}

$("#resetbtn").click(resetAll);
function resetAll() {
  $("#multibox").fadeOut(1000);
  $(".bit").fadeOut(1000);
  setTimeout(function() {
    $("#rightbox").delay(5000).removeClass("faded box-multiplied");
    $("#rightbox").delay(1000).addClass("rightbox-home");
    $("#leftbox").delay(1000).removeClass("faded box-multiplied");
    $("#leftbox").delay(1000).addClass("leftbox-home");
    $("#showyourwork").html("<p></p>");
  }, 1200);
  
}

function theBigOne() {
  var numOfBits = $("#left-frac-denom").val() * $("#right-frac-denom").val();

  // for(var j = 1; j<=numOfBits; j++){
  //   var newbit = $( " <div class='bit' id='bit"+j+"'>5</div>" );
  //   $( "#multibox" ).append(newbit);
  // }

  createMultiBox();

   numOfTotalCols = $("#left-frac-denom").val();
   numOfTotalRows = $("#right-frac-denom").val();
   numOfCols = $("#left-frac-numer").val();
   numOfRows = $("#right-frac-numer").val();
   newNum = numOfCols* numOfRows;
   newDen = numOfTotalCols * numOfTotalRows;
  if($("#leftbox").hasClass("leftbox-home")){
    $("#showyourwork").hide();
  }
  $("#showyourwork").html("<div class='answer'><span class='fraction'><span class='top'>"+numOfCols+"</span><span class='symbols'></span><span class='bottom'>"+numOfTotalCols+"</span></span><span class='fraction'>X</span><span class='fraction'><span class='top'>"+numOfRows+"</span><span class='symbols'></span><span class='bottom'>"+numOfTotalRows+"</span></span><span class='fraction'>=</span><span class='fraction'><span class='top top-answer'>"+newNum+"</span><span class='symbols'></span><span class='bottom bottom-answer'>"+newDen+"</span></span></div>");
 
}

$( "#multiplybtn" ).click(function(){
  
  theBigOne();
  $("#leftbox").removeClass("leftbox-home").addClass("box-multiplied faded");
  $("#rightbox").removeClass("rightbox-home").addClass("box-multiplied faded");
  $("#multibox").hide().delay(2500).fadeIn(1000);
  $(".bit").hide().delay(2000).fadeIn(1000);
  

  $("#showyourwork").hide().html("<div class='answer'><span class='fraction'><span class='top'>"+numOfCols+"</span><span class='symbols'></span><span class='bottom'>"+numOfTotalCols+"</span></span><span class='fraction'>X</span><span class='fraction'><span class='top'>"+numOfRows+"</span><span class='symbols'></span><span class='bottom'>"+numOfTotalRows+"</span></span><span class='fraction'>=</span><span class='fraction'><span class='top top-answer'>"+newNum+"</span><span class='symbols'></span><span class='bottom bottom-answer'>"+newDen+"</span></span></div>").delay(1500).fadeIn(1000);
});


function createMultiBox(){
  $( "#multibox" ).empty();

   numOfTotalCols = $("#left-frac-denom").val();
   numOfTotalRows = $("#right-frac-denom").val();
   numOfBits = numOfTotalRows * numOfTotalCols;
   numOfCols = $("#left-frac-numer").val();
   numOfRows = $("#right-frac-numer").val();
   finalNumer = $( "#left-frac-numer" ).val() * $( "#right-frac-numer" ).val();
  
  for(var j = 1; j<=numOfBits; j++){
      var newbit = $( " <div class='bit col"+numOfTotalCols+"' id='bit"+j+"'></div>" );
  
    $( "#multibox" ).append(newbit);
  }

  for(var k = 1; k<=numOfTotalRows; k++){
    if(k<=numOfRows){
      for(var m = 1; m<=numOfTotalCols; m++){
        if(m<=numOfCols){
          var bitNum = (m+(k-1)*numOfTotalCols);
          $("#bit"+bitNum).addClass("highlighted");
        }
      }
    }
  }
  if($("#leftbox").hasClass("leftbox-home")){ //only do this if boxes are in original position
    $(".bit").hide();
  }
}


createMultiBox();
