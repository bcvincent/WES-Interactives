// // var leftheight = 2.5; //meters, shipping container
// var leftheight = [0.0025, 0.025, 0.25, 2.5, 25.0, 250, 2500];
// var rightheight = [0.03, 0.3, 3, 30, 300, 3000, 30000]; //meters, crane

// var leftweight = [0.018, 0.18, 1.8, 18.0, 180, 1800, 18000]; //kg, pallet
// var rightweight = [4.08, 40.8, 408, 4080, 40800, 408000, 4080000]; //kg, forklift

// var leftvolume = [0.00095, 0.0095, 0.095, 0.95, 9.5, 95, 950]; //liters, quart of oil
// var rightvolume = [0.208, 2.08, 20.8, 208, 2080, 20800, 208000]; //liters shipping drum
//initially, all lefts

var height; 
var weight;
var volume; 

(typeof leftheight !== 'undefined') ?  height = leftheight :  height = null; 
(typeof leftweight !== 'undefined') ?  weight = leftweight :  weight = null; 
(typeof leftvolume !== 'undefined') ?  volume = leftvolume :  volume = null; 

var sectionID;
var activeElement;
var inactiveElement;

function initialize(){
  ;
  if(height) updateReadout("height");
  if(weight) updateReadout("weight"); 
  if(volume) updateReadout("volume");
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

  updateReadout(sectionID);

});

$(".options select").change(function(){
  sectionID = $(this).parent().parent().attr('id'); //update what section we're in based on select click
  updateReadout(sectionID);
});

function updateReadout(sectionID){
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
