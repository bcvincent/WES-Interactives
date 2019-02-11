function createMultiBox(){
  $( "#multibox" ).empty();
  for(var j = 1; j<=100; j++){
    var newbit = $( " <div class='bit' id='bit"+j+"'></div>" );
    $( "#multibox" ).append(newbit);
  } 
}
createMultiBox();

function createRowBox(){
  $( "#rowbox" ).empty();
  for(var j = 1; j<=100; j++){
    var newrow = $( " <div class='row' id='row"+j+"'></div>" );
    $( "#rowbox" ).append(newrow);
  } 
}
createRowBox();



$slider = $("#myRange");
$output = $("#demo");
$("#percent").html("<h3>"+$slider.val()+"%</h3>");
$("#decimal").html("<h3>"+($slider.val()/100).toFixed(2)+"</h3>");
$("#fraction").html("<h3>"+$slider.val()+"/100</h3>");



$slider.on("input change", function() {   
  var currentPercent = $slider.val();
  for(var j = 1; j<=100; j++){
    if(j<=currentPercent){
      $( "#bit"+j ).addClass("active");
      $( "#row"+j ).addClass("active");

    }
    else{
      $( "#bit"+j ).removeClass("active");
      $( "#row"+j ).removeClass("active");

    }
  } 
  $("#percent").html("<h3>"+$slider.val()+"%</h3>");
  $("#decimal").html("<h3>"+($slider.val()/100).toFixed(2)+"</h3>");
  $("#fraction").html("<h3>"+$slider.val()+"/100</h3>");
});


