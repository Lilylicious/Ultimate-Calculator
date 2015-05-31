/*
	==================================================
	This file contains variables that multiple tools
	may want to access. Not all of them are in use,
	at some point there'll be some cleanup done.
	==================================================
*/

var nonMaxAncients = [
{name:"Solomon",level:0},
{name:"Libertas",level:0},
{name:"Siyalatas",level:0},
{name:"Thusia",level:0},
{name:"Mammon",level:0},
{name:"Mimzee",level:0},
{name:"Pluto",level:0},
{name:"Bhaal",level:0},
{name:"Morgulis",level:0},
{name:"Chronos",level:0},
{name:"Fragsworth",level:0},
{name:"Argaiv",level:0},
{name:"Juggernaut",level:0},
{name:"Iris",level:0}
];

// Simulation Things
var souls = {};
var globalUpgrades = 1;
var achievementDPS = 1;
var siyMult = 1;
var iterations = 10000;
var ancientCount = 0;


//Time
var currentTime;
var creationTime;
var prevLoginTime;
var startTime;
var timeSinceCreation;

//Elements
var input = document.getElementById('input');
var output = document.getElementById('output');
var abbreviatedMode = document.getElementById('abbreviatedMode');
var calcButton = document.getElementById('calcButton');

// Holders
var ancientHolder;
var heroHolder;
var miscHolder;
var timeHolder;
var sortHolder;

//Seeds
var primals = {};
var gilds = {};

// Arrays
var ancientArray;
var heroArray;
var miscArray;
var timeArray;

//Misc
var scientific = true;
if (abbreviatedMode !== null) var abbreviated = abbreviatedMode.checked;
var sortButtons = document.getElementsByName('sortMode');
var sortMethod = $('input[name="sortMode"]:checked').val();























