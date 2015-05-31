
enum levelCostFormula {QUADRATIC,LINEAR,ONE,LINEARDIV,LINEARTEN,CUBIC};
enum increment {FULL, X1, X25, X100}

// Ancient ID's start at 3, so adding the None's make it so that we reference this array by,
// using ID-1 (arrays start at 0) rather than ID-3.
//
// Example: When reading Solomon from the save, we're inside of the object of Solomon. ID there is listed as 3.
// We store his level by doing ancients[this.id-1].level = this.level; where this.id is 3, this.id-1 is 2 which
// references the third object in the array, Solomon.
var ancients = [
{name:"None",level:0,maxLevel:"None",costFormula:,fullName:,effectDescription:,flavorText:},

{name:"None",level:0,maxLevel:"None",costFormula:,fullName:,effectDescription:,flavorText:}},

{name:"Solomon",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:,effectDescription:,flavorText:}},

{name:"Libertas",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Siyalatas",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Khrysos",level:0,maxLevel:10,costFormula:levelCostFormula.QUADRATIC,fullName:,effectDescription:,flavorText:}},

{name:"Thusia",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:,effectDescription:,flavorText:}},

{name:"Mammon",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Mimzee",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Pluto",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Dogcog",level:0,maxLevel:25,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Fortuna",level:0,maxLevel:40,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Atman",level:0,maxLevel:25,costFormula:levelCostFormula.QUADRATIC,fullName:,effectDescription:,flavorText:}},

{name:"Dora",level:0,maxLevel:50,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Bhaal",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Morgulis",level:0,maxLevel:"None",costFormula:levelCostFormula.ONE,fullName:,effectDescription:,flavorText:}},

{name:"Chronos",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:,effectDescription:,flavorText:}},

{name:"Bubos",level:0,maxLevel:25,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Fragsworth",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Vaagur",level:0,maxLevel:15,costFormula:levelCostFormula.LINEARDIV,fullName:,effectDescription:,flavorText:}},

{name:"Kumawakamaru",level:0,maxLevel:5,costFormula:levelCostFormula.LINEARTEN,fullName:,effectDescription:,flavorText:}},

{name:"Chawedo",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Hecatoncheir",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Berserker",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Sniperino",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Kleptos",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Energon",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Argaiv",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:,effectDescription:,flavorText:}},

{name:"Juggernaut",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:,effectDescription:,flavorText:}},

{name:"Iris",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:,effectDescription:,flavorText:}},

{name:"Revolc",level:0,maxLevel:15,costFormula:levelCostFormula.CUBIC,fullName:,effectDescription:,flavorText:}}

];


function upgradeCost(ancient,incrementType){


	if(ancient.costFormula == levelCostFormula.CUBIC){
		if(incrementType == increment.X1)return Math.pow((ancient.level+1*(ancient.level+2))/2,2) - Math.pow((ancient.level*(ancient.level+1))/2,2);
		if(incrementType == increment.X25)return Math.pow((ancient.level+25*(ancient.level+26))/2,2) - Math.pow((ancient.level*(ancient.level+1))/2,2);
		if(incrementType == increment.X100)return Math.pow((ancient.level+100*(ancient.level+101))/2,2) - Math.pow((ancient.level*(ancient.level+1))/2,2);
		if(incrementType == increment.FULL)return Math.pow((ancient.level*(ancient.level+1))/2,2)
	}
	
	else if(ancient.costFormula == levelCostFormula.QUADRATIC){
		var level = ancient.level;
		var cost = 0;
		
		if(incrementType == increment.X1) return Math.pow(level+1,1.5)
		if(incrementType == increment.X25){
			for(level, level<=level+25, level++){
				cost += Math.pow(level+1,1.5);
			}
			return cost;
		}
		
		
		//WIP POINT
		if(incrementType == increment.X100)
		if(incrementType == increment.FULL)}
	
	}
	
	if(ancient.name == "Solomon") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Libertas") return targetLevel;
	if(ancient.name == "Siyalatas") return targetLevel;
	if(ancient.name == "Khrysos") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Thusia") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Mammon") return targetLevel;
	if(ancient.name == "Mimzee") return targetLevel;
	if(ancient.name == "Pluto") return targetLevel;
	if(ancient.name == "Dogcog") return targetLevel;
	if(ancient.name == "Fortuna") return targetLevel;
	if(ancient.name == "Atman") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Dora") return targetLevel;
	if(ancient.name == "Bhaal") return targetLevel;
	if(ancient.name == "Morgulis") return 1;
	if(ancient.name == "Chronos") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Bubos") return targetLevel;
	if(ancient.name == "Fragsworth") return targetLevel;
	if(ancient.name == "Vaagur") return (targetLevel/3);
	if(ancient.name == "Kumawakamaru") return (10*targetLevel);
	if(ancient.name == "Chawedo") return targetLevel;
	if(ancient.name == "Hecatoncheir") return targetLevel;
	if(ancient.name == "Berserker") return targetLevel;
	if(ancient.name == "Sniperino") return targetLevel;
	if(ancient.name == "Kleptos") return targetLevel;
	if(ancient.name == "Energon") return targetLevel;
	if(ancient.name == "Argaiv") return targetLevel;
	if(ancient.name == "Juggernaut") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Iris") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Revolc") return Math.pow(targetLevel,3);
	
}

function ancientCostTo(ancient, var target){

	
	
	if(ancient.name == "Solomon") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Libertas") return targetLevel;
	if(ancient.name == "Siyalatas") return targetLevel;
	if(ancient.name == "Khrysos") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Thusia") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Mammon") return targetLevel;
	if(ancient.name == "Mimzee") return targetLevel;
	if(ancient.name == "Pluto") return targetLevel;
	if(ancient.name == "Dogcog") return targetLevel;
	if(ancient.name == "Fortuna") return targetLevel;
	if(ancient.name == "Atman") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Dora") return targetLevel;
	if(ancient.name == "Bhaal") return targetLevel;
	if(ancient.name == "Morgulis") return 1;
	if(ancient.name == "Chronos") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Bubos") return targetLevel;
	if(ancient.name == "Fragsworth") return targetLevel;
	if(ancient.name == "Vaagur") return (targetLevel/3);
	if(ancient.name == "Kumawakamaru") return (10*targetLevel);
	if(ancient.name == "Chawedo") return targetLevel;
	if(ancient.name == "Hecatoncheir") return targetLevel;
	if(ancient.name == "Berserker") return targetLevel;
	if(ancient.name == "Sniperino") return targetLevel;
	if(ancient.name == "Kleptos") return targetLevel;
	if(ancient.name == "Energon") return targetLevel;
	if(ancient.name == "Argaiv") return targetLevel;
	if(ancient.name == "Juggernaut") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Iris") return Math.pow(targetLevel,1.5);
	if(ancient.name == "Revolc") return Math.pow(targetLevel,3);

}






