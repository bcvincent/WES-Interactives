// HEIGHT 

var leftheight = [0.0106, 0.106, 1.06, 10.6, 106, 1060, 10600];//meters, hospital
var rightheight = [0.00091, 0.0091, 0.091, .91, 9.1, 91, 910]; //meters, wheelchair
$('section#height .choices .left-choice').html('Hospital');
$('section#height .image .left-image').attr("src","resources/prefixes/hospital1.png");

$('section#height .choices .right-choice').html('Wheelchair');
$('section#height .image .right-image').attr("src","resources/prefixes/wheelchair.png");

// WEIGHT

var leftweight = [0.155, 1.55, 15.5, 155, 1550, 15500, 155000]; //kg, Stethoscope
var rightweight = [181, 1810, 18100, 181000, 1810000, 18100000, 181000000]; //kg, Hospital bed
$('section#weight .choices .left-choice').html('Stethoscope');
$('section#weight .image .left-image').attr("src","resources/prefixes/steth.png");

$('section#weight .choices .right-choice').html('Hospital bed');
$('section#weight .image .right-image').attr("src","resources/prefixes/hospitalbed.png");

// VOLUME

var leftvolume = [0.0005, 0.005, 0.05, 0.5, 5, 50, 500]; //liters, Medicine
var rightvolume = [0.001, 0.01, 0.1, 1, 10, 100, 1000]; //liters Saline IV bag
$('section#volume .choices .left-choice').html('Medicine');
$('section#volume .image .left-image').attr("src","resources/prefixes/meds.png");

$('section#volume .choices .right-choice').html('Saline');
$('section#volume .image .right-image').attr("src","resources/prefixes/saline.png");




// Healthcare

// Weight

// Stethoscope – 155 grams (0.34 lbs.)
// Hospital Bed –  181.43 kg (400 lbs.)
// Height

// Hospital (i.e., 2-story building)
// Wheelchair – 91.44 centimeters (36 inches)
// Volume

// Medicine in cup – 500 ml 
// Saline IV bag – 1 liter 