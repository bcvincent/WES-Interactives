// var leftheight = 2.44; //meters, shipping container
var leftheight = [0.00244, 0.0244, 0.244, 2.44, 24.4, 244, 2440];
var rightheight = [0.03, 0.3, 3, 30, 300, 3000, 30000]; //meters, crane

var leftweight = [0.0181, 0.181, 1.81, 18.1, 181, 1810, 18100]; //kg, pallet
var rightweight = [4.08233, 40.8233, 408.233, 4082.33, 40823.3, 408233, 4082330]; //kg, forklift

var leftvolume = [0.00095, 0.0095, 0.095, 0.95, 9.5, 95, 950]; //liters, quart of oil
var rightvolume = [0.2082, 2.082, 20.82, 208.2, 2082, 20820, 208200]; //liters shipping drum

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
}
initialize();

$( ".choices a" ).click(function(){
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