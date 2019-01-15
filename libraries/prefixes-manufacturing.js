// HEIGHT 

var leftheight = [0.00033, 0.0033, 0.033, 0.33, 3.3, 33, 330];//meters, Welding
var rightheight = [0.015, 0.15, 1.5, 15, 150, 1500, 15000]; //meters, factory
$('section#height .choices .left-choice').html('Welding mask');
$('section#height .image .left-image').attr("src","resources/prefixes/welding.png");

$('section#height .choices .right-choice').html('Factory');
$('section#height .image .right-image').attr("src","resources/prefixes/factory.png");

// WEIGHT

var leftweight = [0.068, 0.68, 6.8, 68, 680, 6800, 68000]; //kg, goggles
var rightweight = [4.08, 40.8, 408, 4080, 40800, 408000, 4080000]; //kg, forklift
$('section#weight .choices .left-choice').html('Safety goggles');
$('section#weight .image .left-image').attr("src","resources/prefixes/goggles.png");

$('section#weight .choices .right-choice').html('Forklift');
$('section#weight .image .right-image').attr("src","resources/prefixes/forklift.jpg");

// VOLUME

var leftvolume = [0.00095, 0.0095, 0.095, 0.95, 9.5, 95, 950]; //liters, quart of oil
var rightvolume = [0.208, 2.08, 20.8, 208, 2080, 20800, 208000]; //liters shipping drum
$('section#volume .choices .left-choice').html('Oil');
$('section#volume .image .left-image').attr("src","resources/prefixes/oilcan.JPG");

$('section#volume .choices .right-choice').html('Drum');
$('section#volume .image .right-image').attr("src","resources/prefixes/oil_drum.jpg");




// Manufacturing
// Height

// Welding mask – 13 inches (33.02 cm)
// Factor/industrial building

// Weight

// Safety goggles – 0.15 lb (or 0.068 kg)
// Forklift – 9000 lbs. (4082.33 kg)

// Volume

// Machine oil – 16 oz. (0.45 kg)
// Drum of industrial paint – 416 L (109.89 gallons)