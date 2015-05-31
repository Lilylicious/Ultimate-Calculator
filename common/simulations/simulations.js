
/*
	==================================================
	This file will contain simulations of various kinds.
	==================================================
*/

// DPS
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


