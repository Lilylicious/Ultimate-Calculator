
/*
	==================================================
	This file will contain simulations of various kinds.
	==================================================
*/

// Start DPS
function baseDPS(index){
/*
Function not in use by other functions. Calculates the base DPS of any given hero (no upgrades, no gilds, no souls, just the DPS of level 1 of that hero)

(BaseCost/10)*(1-0.0188*min(N,14))^N, rounded up. N=index+1.
Heroes after FL (index 26-34) multiply previous with 5*10^(-2*N+50)
*/
if(index===0) return 0;

var DPS = 0;
var heroNum = index+1;

DPS = Math.ceil((heroes[index].cost/10)*Math.pow(1-(0.0188*Math.min(heroNum,14)),heroNum));

if(index>25) DPS *= (5*Math.pow(10,(-2*heroNum+50)));

return DPS;
}

function actualDPS (hero) {
var finalDPS = 0;

//Argaiv
gildMult = 1 + (0.5+(0.02*ancients[27].level)) * hero.epicLevel;

// Base DPS, level, global upgrades, souls multiplier, achievement DPS, gilds, local upgrades
finalDPS = hero.damage * hero.level * globalUpgrades * souls.mult * achievementDPS * gildMult * hero.dmgMult;

return finalDPS;
}

function totalDPS(){

	// Total of all heroes DPS from the actualDPS function.
	var finalDPS = 0;

	$.each(heroes, function(){
		
		finalDPS += actualDPS(this);

	});
	
	return finalDPS;

}

function idleDPS(dps){

	// Usage: var = idleDPS(totalDPS());

/*
    # Siyalatas gives 25% increased damage per level at level 1, scaling down to
    # 15% bonus at level 100, reduced by 1% per 10 levels.
    if siyalatas > 0:
        siyalatas_bonus = sum((0.25 - 0.01 * (x // 10) for x in range(1, min(100, siyalatas + 1)))) 
		+ (0.15 * max(0, siyalatas - 99))
        mult *= (1.0 + siyalatas_bonus)
		
		*/
	
		var siyBonus = 1;
		
		for(var i=1; i<Math.min(ancients[4].level+1,100);i++){
			siyBonus += 0.25 - 0.01 * Math.floor(i/10);
		}
		
		siyBonus += 0.15 * Math.max(0, ancients[4].level - 99);

		siyMult = siyBonus;
		

	return dps*siyMult;
}

// End DPS
// Start Gold

function levelHero(hero,levels){

	var start = hero.level;
	
	
	for(var i=start;i<start+levels;i++){
	
	initLevel = hero.level;
	
	hero.level += 1;
	
	if(Math.floor(hero.level/1000)-Math.floor(initLevel/1000) >= 1 && hero.level < 4000) hero.dmgMult *= 10;
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 200 && hero.level <=4100 && hero.has5x===false){ 
	console.log(hero.name + " 4xd");
	hero.dmgMult *= 4;
	}
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 200 && hero.level <=500 && hero.has5x===true) hero.dmgMult *= 4;
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 525 && hero.level <=725 && hero.has5x===true) hero.dmgMult *= 5;
	else if(Math.floor(hero.level/25)-Math.floor(initLevel/25) >= 1 && hero.level >= 750 && hero.level <=4100 && hero.has5x===true) hero.dmgMult *= 4;
	}

	return levelCost(start,hero.level,hero);
}

function simulateGold(data,secondCount){
/*

Monster gold: MonsterHP/15*min(3,1.025^max(0,Level-75)), rounded up. Treasure chests have a (10+MimzeeLevel*5) gold multiplier, applied before rounding. Bubos is taken into account here, Thusia is not.
Treasure chest chance: (1+DoraLevel*0.2)%

Take highest level completed current run. 

Take idleDPS(totalDPS()), take MonsterHP. MonsterHP/totalDPS = seconds to kill. If boss and seconds > 30 + 5*Chronos, set gps to 0.

*/

//ASSUMES: Idling. No abilities.

	console.log("Starts...");

	readHeroes(data);
		
	var boss = {};
	var normal = {};
	var chest = {};
	
	var libBonus = 1;
		
		for(var i=1; i<Math.min(ancients[3].level+1,100);i++){
			libBonus += 0.25 - 0.01 * Math.floor(i/10);
		}
		
		libBonus += 0.15 * Math.max(0, ancients[3].level - 99);
		
		
	
	normal.level = data.highestFinishedZone+(4-data.highestFinishedZone%5);
	boss.level = data.highestFinishedZone-(data.highestFinishedZone%5);
	normal.hp = monsterHP(normal.level);
	boss.hp = monsterHP(boss.level);
	
	var dps = idleDPS(totalDPS());

	normal.timeToKill = normal.hp / dps;
	boss.timeToKill = boss.hp / dps;
	
	normal.goldPerKill = normal.hp / 15*Math.min(3,Math.pow(1.025,Math.max(0,normal.level-75)));
	boss.goldPerKill = boss.hp / 15*Math.min(3,Math.pow(1.025,Math.max(0,boss.level-75)));

	normal.totalKills = (secondCount / (normal.timeToKill+0.5));
	boss.totalKills = (secondCount / (boss.timeToKill+0.5));
	
	if(boss.timeToKill < 30 + (ancients[16].level*5)) boss.goldTotal = boss.goldPerKill * boss.totalKills;
	else boss.goldTotal = 0;

	normal.goldTotal = normal.goldPerKill * normal.totalKills;

	//Treasure chests
	
	chest.count = normal.totalKills * (1+ancients[13].level*0.2)/100;
	normal.fortunaCount = (ancients[11].level*0.0025) * normal.totalKills;
	boss.fortunaCount = (ancients[11].level*0.0025) * boss.totalKills;

	
	normal.goldTotal -= chest.count * normal.goldPerKill;
	normal.goldTotal += chest.count * (normal.goldPerKill * (1+ancients[8].level*0.5));
	
	normal.goldTotal -= normal.fortunaCount * normal.goldPerKill;
	normal.goldTotal += normal.fortunaCount * normal.goldPerKill * 10;
	
	boss.goldTotal -= boss.fortunaCount * boss.goldPerKill;
	boss.goldTotal += boss.fortunaCount * boss.goldPerKill * 10;
	
	normal.goldTotal *= libBonus * (1 + ancients[7].level * 0.05);
	boss.goldTotal *= libBonus * (1 + ancients[7].level * 0.05);
	
	// output.value = "Gold per second: " + normal.level + ':' + (normal.goldTotal/secondCount).toPrecision(4) + ', ' + boss.level + ':' + (boss.goldTotal/secondCount).toPrecision(4);

}

// End Gold
// Start Misc Sim




























