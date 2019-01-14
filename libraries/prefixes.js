// var leftheight = 2.5; //meters, shipping container
var leftheight = [0.0025, 0.025, 0.25, 2.5, 25.0, 250, 2500];
var rightheight = [0.03, 0.3, 3, 30, 300, 3000, 30000]; //meters, crane

var leftweight = [0.018, 0.18, 1.8, 18.0, 180, 1800, 18000]; //kg, pallet
var rightweight = [4.08, 40.8, 408, 4080, 40800, 408000, 4080000]; //kg, forklift

var leftvolume = [0.00095, 0.0095, 0.095, 0.95, 9.5, 95, 950]; //liters, quart of oil
var rightvolume = [0.208, 2.08, 20.8, 208, 2080, 20800, 208000]; //liters shipping drum

var height = leftheight; //initially, all lefts
var weight = leftweight;
var volume = leftvolume;

var sectionID;
var activeElement;
var inactiveElement;

function initialize(){
  $('section#height .readout').html("<p>"+height[3]+" meters</p>");
  $('section#weight .readout').html("<p>"+weight[3]+" grams</p>");
  $('section#volume .readout').html("<p>"+volume[3]+" liters</p>");

  $("#volume").hide();
  $("#weight").hide();
}
initialize();




$( ".choices a" ).click(function(){
    event.preventDefault();
  if($(this).hasClass("left-choice")){
     activeElement = "left";   
     inactiveElement = "right"; 
  }
  else{
     activeElement = "right";  
     inactiveElement = "left"; 
  }
  sectionID = $(this).parent().parent().attr('id'); //this is the section (height, weight, or volume)
  window[sectionID] = window[activeElement+sectionID]//this is setting the variable of height, weight or volume, to appropriate one.  basically "height = leftheight";

  // links
  $(this).addClass("active"); 
  $(this).siblings().removeClass("active");

  // images
  $(this).parent().siblings('.image').children('.'+activeElement+'-image').removeClass("hidden");
  $(this).parent().siblings('.image').children('.'+inactiveElement+'-image').addClass("hidden");
  
  updateReadout();
  
});

$(".options select").change(function(){
  sectionID = $(this).parent().parent().attr('id'); //update what section we're in based on select click
  updateReadout();
});

function updateReadout(){
  var readoutVal = window[sectionID][$('section#'+sectionID+' .options select').val()];
  //pulling predetermined values from array, not calculating, to make sure we use the exact decimals we want 

  $('section#'+sectionID+' .readout').html(
    "<p>"+
    readoutVal+
    " "+
    $('section#'+sectionID+' .options select option:selected').text()+
    $('section#'+sectionID+' .options select').attr('name')+
    "</p>");
}


$(".nav").click(function(){
  $("#main").children().hide();

  var sectionName = $(this).data('id');
  console.log(sectionName);
  $("#"+sectionName).show();
  
});

// $(".next").click(function(){

//   event.preventDefault();
//   var $ancestor = $(this).parent().parent();
//   var $next = $ancestor.next();
//   $ancestor.hide();
//   if($next.length == 0){
//     $next = $ancestor.siblings().first();
//   }
//     $next.show();  
// });

// $(".prev").click(function(){
//   event.preventDefault();
//   var $ancestor = $(this).parent().parent();
//   var $prev = $ancestor.prev();
//   $ancestor.hide();
//   if($prev.length == 0){
//     $prev = $ancestor.siblings().last();
//   }
//     $prev.show();  
// });