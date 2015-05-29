
/*
	==================================================
	Contains reader functions for use in multiple files.
	Allows for compact reading of save files in code files.
	==================================================
*/

function readDamageMult(data){
	// For each hero, 
	$.each(heroes, function(index){
		// Give root.heroCollection.heroes
		this.dmgMult = data.heroCollection.heroes[index+1].damageMultiplier;
	
	});
	
	globalUpgrades = 1;
	if(heroes[4].upgrades[3]==true) globalUpgrades *= 1.25;
	
	if(heroes[5].upgrades[0]==true) globalUpgrades *= 1.2;
	if(heroes[5].upgrades[1]==true) globalUpgrades *= 1.2;
	if(heroes[5].upgrades[2]==true) globalUpgrades *= 1.2;
	if(heroes[5].upgrades[3]==true) globalUpgrades *= 1.2;

	if(heroes[7].upgrades[3]==true) globalUpgrades *= 1.25;
	
	if(heroes[13].upgrades[0]==true) globalUpgrades *= 1.25;
	
	if(heroes[19].upgrades[1]==true) globalUpgrades *= 1.2;
	if(heroes[19].upgrades[2]==true) globalUpgrades *= 1.2;
	
	if(heroes[20].upgrades[3]==true) globalUpgrades *= 1.1;
	
	if(heroes[23].upgrades[1]==true) globalUpgrades *= 1.1;
	
	if(heroes[24].upgrades[0]==true) globalUpgrades *= 1.25;
	if(heroes[24].upgrades[2]==true) globalUpgrades *= 1.25;
	
	if(heroes[25].upgrades[2]==true) globalUpgrades *= 1.25;
	
	achievementDPS = data.allDpsMultiplier/globalUpgrades;
	
	souls.mult = ((souls.count*0.1) + (ancients[15].level*0.11)) + 1;
}



function readHeroes(data){

	// Takes in data in the form of a json string. NOTE: The save file (as of 0.17a) saves hero info
	// under root.heroCollection.heroes

	// Jquery, for each (object) in (data), do (function). The objects in .heroes are all the heroes, named after their ID. Unpurchased ARE listed, unlike ancients.
    $.each(heroes, function(index) {
		
		this.level = data.heroCollection.heroes[index+1].level;
		this.epicLevel = data.heroCollection.heroes[index+1].epicLevel;


    });
}

function readUpgrades(data){

	// For each hero
	$.each(heroes, function(index){
	
	this.upgrades = [];

	var currentIndex = index;
	if(this.upgradeIDs===undefined) return;
		// For each upgradeID of each hero
		$.each (this.upgradeIDs, function(index,value){
			// If it's true, then set to true. If undefined, set to false.
			if(data[value]===true) heroes[currentIndex].upgrades.push(true);
			if(data[value]===undefined) heroes[currentIndex].upgrades.push(false);
		});
	});

}

function readAncientLevels(data){

	ancientCount = 0;
	

	// For each ancient,
	$.each(ancients, function(index){

		if(data.ancients.ancients[index+1]!==undefined) {
		this.level = data.ancients.ancients[index+1].level;
		
		if(this.level!=0) ancientCount++;
	}
	});
	
	
	
}
	
	
	// NON FUNCTIONAL
function readSeeds(data){
	primals.seed = data.primalNumberGenerator.seed;
	primals.uses = data.primalNumberGenerator.numUses;
	gilds = data.epicRoller.seed;
	gilds = data.epicRoller.numUses;
}



function rollSeed(y){

    y *= 16807 % (2147483647);
    return y;
}

function isPrimal(data,level){

	var x = data.primalNumberGenerator.seed;
	var n = (level - 100)/5;
	var i = 0;

	while(i<n-1){
	x = rollSeed(x);
	i++
	}

	if(x % 100 < (25+ancients[12].level)) return true;
	else return false;

}


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

