// HEIGHT 

var leftheight = [0.0025, 0.025, 0.25, 2.5, 25.0, 250, 2500];//meters, shipping container
var rightheight = [0.03, 0.3, 3, 30, 300, 3000, 30000]; //meters, crane
$('section#height .choices .left-choice').html('Container');
$('section#height .image .left-image').attr("src","resources/prefixes/container.jpg");

$('section#height .choices .right-choice').html('Crane');
$('section#height .image .right-image').attr("src","resources/prefixes/cranelift.jpg");

// WEIGHT

var leftweight = [0.018, 0.18, 1.8, 18.0, 180, 1800, 18000]; //kg, pallet
var rightweight = [4.08, 40.8, 408, 4080, 40800, 408000, 4080000]; //kg, forklift
$('section#weight .choices .left-choice').html('Pallet');
$('section#weight .image .left-image').attr("src","resources/prefixes/pallet.jpg");

$('section#weight .choices .right-choice').html('Forklift');
$('section#weight .image .right-image').attr("src","resources/prefixes/forklift.jpg");

// VOLUME

var leftvolume = [0.00095, 0.0095, 0.095, 0.95, 9.5, 95, 950]; //liters, quart of oil
var rightvolume = [0.208, 2.08, 20.8, 208, 2080, 20800, 208000]; //liters shipping drum
$('section#volume .choices .left-choice').html('Oil can');
$('section#volume .image .left-image').attr("src","resources/prefixes/oilcan.JPG");

$('section#volume .choices .right-choice').html('Drum');
$('section#volume .image .right-image').attr("src","resources/prefixes/oil_drum.jpg");



