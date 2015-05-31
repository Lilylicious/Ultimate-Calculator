
var levelCostFormula {
	QUADRATIC: 0,
	LINEAR: 1,
	ONE: 2,
	LINEARDIV: 3,
	LINEARTEN: 4,
	CUBIC: 5
};
var increment {
	FULL: 0,
	X1: 1,
	X25: 2,
	X100: 3
}

// Ancient ID's start at 3, so adding the None's make it so that we reference this array by,
// using ID-1 (arrays start at 0) rather than ID-3.
//
// Example: When reading Solomon from the save, we're inside of the object of Solomon. ID there is listed as 3.
// We store his level by doing ancients[this.id-1].level = this.level; where this.id is 3, this.id-1 is 2 which
// references the third object in the array, Solomon.
var ancients = [
{name:"None",level:0,maxLevel:"None",costFormula:,fullName:,effectDescription:,flavorText:},

{name:"None",level:0,maxLevel:"None",costFormula:,fullName:,effectDescription:,flavorText:}},

{name:"Solomon",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:"Solomon, Ancient of Wisdom",effectDescription:"+1 Primal Hero Soul per level",flavorText:"The ancients have a lingering, noticeable effect on everyone who approaches them. As you approach Solomon, you can't help but reflect on your recent decisions. What has this world done to you that so many of its creatures deserve to die? Even the monsters in other universes are not safe from your wrath. You realize that you desire to kill them all, and to take all their gold, but you're not entirely sure why... You feel the urge to contemplate many things."}},

{name:"Libertas",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Libertas, Ancient of Freedom",effectDescription:"+%1% Gold gained from monsters when idle (no clicks for 60 seconds)",flavorText:"The air suddenly feels cleaner, and the sun shines more brightly. Being near this ancient gives you the sense that you may soon be able to do whatever you wish, and that your responsibilities and obligations to this world are not as relevant as they once were. Leon looks on at you with sorrow… wondering if some day you might leave and never return."}},

{name:"Siyalatas",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Siyalatas, Ancient of Abandon",effectDescription:"+%1% DPS when idle (no clicks for 60 seconds)",flavorText:"Getting tired of killing monsters? Need a break? Want to get away, but feel obligated to stay? Now you can have your cake and eat it too!"}},

{name:"Khrysos",level:0,maxLevel:10,costFormula:levelCostFormula.QUADRATIC,fullName:"Khrysos, Ancient of Inheritance",effectDescription:"+%1 starting Gold when Ascending",flavorText:"What happens to your money when you die? Pass as much as you can on to your offspring. There's a lot of gratification in knowing it won't just go to some random jerk who certainly doesn't deserve it."}},

{name:"Thusia",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:"Thusia, Ancient of Vaults",effectDescription:"+%1% Treasure Chest life while Golden Clicks is activated",flavorText:"Midas walks with you to greet this ancient, and shows you his purse. As you get closer, the cloth material that the purse is made of gets harder. Suddenly, you could swear it turned into leather. \"Upgrading this ancient will probably make it more difficult to kill treasure chests. I would leave this one alone,\" Midas says. \"It sounds worthless to me.\""}},

{name:"Mammon",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Mammon, Ancient of Greed",effectDescription:"+%1% Gold Dropped",flavorText:"A tingling feeling rises in your spine as you approach Mammon, when visions of gold materialize in your mind. A strange desire for wealth overcomes you as you get closer. From the distance, Midas eyes the ancient with a look bordering on the indecent. Suddenly you feel... what? Is that an extra gold coin in your pocket?"}},

{name:"Mimzee",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Mimzee, Ancient of Riches",effectDescription:"+%1% Gold From Treasure Chests",flavorText:"Line your pockets with the spoils of war, for Mimzee grants booty far greater than before. You smile as she whispers into your ears, \"Earn real money!\""}},

{name:"Pluto",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Pluto, Ancient of Wealth",effectDescription:"+%1% Gold from Golden Clicks",flavorText:"You feel appreciated as you approach this monument. Your hard work and dedication start to payoff."}},

{name:"Dogcog",level:0,maxLevel:25,costFormula:levelCostFormula.LINEAR,fullName:"Dogcog, Ancient of Thrift",effectDescription:"-%1% Hero Hiring and Level-Up cost",flavorText:"Your heroes unanimously voice a great amount of displeasure at the notion that you might use this ancient."}},

{name:"Fortuna",level:0,maxLevel:40,costFormula:levelCostFormula.LINEAR,fullName:"Fortuna, Ancient of Chance",effectDescription:"+%1% Chance of 10x Gold",flavorText:"Cid walks with you to visit the monument. \"Check this out,\" she says, and flips a coin. Heads. She flips it a few more times. Heads. Heads. Heads. \"Every time,\" she says. A game of cards sounds incredibly tempting at the moment."}},

{name:"Atman",level:0,maxLevel:25,costFormula:levelCostFormula.QUADRATIC,fullName:"Atman, Ancient of Souls",effectDescription:"+%1% Chance of Primal Bosses",flavorText:"As you approach the monument your skin reacts to a chilly breeze. Hair stands at the back of your neck and you sense a mystical presence in the air."}},

{name:"Dora",level:0,maxLevel:50,costFormula:levelCostFormula.LINEAR,fullName:"Dora, Ancient of Discovery",effectDescription:"+%1% more Treasure Chests",flavorText:"Your eyes become sharper. You're able to notice many things. "}},

{name:"Bhaal",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Bhaal, Ancient of Murder",effectDescription:"+%1% damage to Critical Clicks",flavorText:"You might have felt some guilt about it some time ago, but being near this ancient rids you of any sense of remorse you had for the monsters you've slain. You begin to visualize new ways to strike your foes and kill them more efficiently."}},

{name:"Morgulis",level:0,maxLevel:"None",costFormula:levelCostFormula.ONE,fullName:"Morgulis, Ancient of Death",effectDescription:"+%1% to Hero Soul DPS (additive)",flavorText:"Approaching the monument, you begin to feel as if killing monsters is a natural thing in life. It is as necessary as breathing, and eating. A voice startles you from behind. \"Death is good\" he says. You turn around - it was Abaddon. He was following you. \"Their death brings you happiness, and gold. It feels good, does it not?\""}},

{name:"Chronos",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:"Chronos, Ancient of Time",effectDescription:"+%1 seconds to Boss Fight timers",flavorText:"You could spend hours visiting this monument, and when you leave, only minutes will have passed. Your immortal heroes refuse to approach it - but they do not explain why."}},

{name:"Bubos",level:0,maxLevel:25,costFormula:levelCostFormula.LINEAR,fullName:"Bubos, Ancient of Diseases",effectDescription:"-%1% Boss Life",flavorText:"There is a putrid stench of death and despair wafting in the air. Your stomach turns sour and you cannot stay long."}},

{name:"Fragsworth",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Fragsworth, Ancient of Wrath",effectDescription:"+%1% Click Damage",flavorText:"You are brimming with anger for no apparent reason. Betty asks \"Are you okay?\" You blow over and shoot a barrage of insults about Betty's cooking until she breaks down and cries. You feel no regret for what you've done until long after you leave the ancient..."}},

{name:"Vaagur",level:0,maxLevel:15,costFormula:levelCostFormula.LINEARDIV,fullName:"Vaagur, Ancient of Impatience",effectDescription:"-%1% skill cooldowns",flavorText:"It dawns on you that if you could just do everything all at once, all of your problems can be solved."}},

{name:"Kumawakamaru",level:0,maxLevel:5,costFormula:levelCostFormula.LINEARTEN,fullName:"Kumawakamaru, Ancient of Shadows",effectDescription:"-%1 monsters required to advance to the next level",flavorText:"A darkness radiates from the monument, causing many things to become difficult to see. You catch a brief glimpse of movement nearby... was that Abaddon? Upgrading this ancient will allow you to sneak past monsters when exploring."}},

{name:"Chawedo",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:"Chawedo, Ancient of Agitation",effectDescription:"+%1 seconds to duration of Clickstorm",flavorText:"The Great Forest Seer walks with you. \"This ancient emanates some kind of telekinetic force, causing things nearby to violently shake back-and-forth,\" he explains. He stops at a certain distance. \"You're on your own here.\" As you get closer, your head begins to oscillate unpleasantly, and with each passing moment, the notion of leaving this place grows more appropriate."}},

{name:"Hecatoncheir",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:"Hecatoncheir, Ancient of Wallops",effectDescription:"+%1 seconds to duration of Super Clicks",flavorText:"You share a drink with Ivan before visiting the monument. You both put up your dukes and start to brawl, trading blow after blow. The energy surrounding the ancient urges both of you to keep fighting, though you're both beaten and battered. "}},

{name:"Berserker",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:"Berserker, Ancient of Rage",effectDescription:"+%1 seconds to duration of Powersurge",flavorText:"Your blood begins to boil and all you see is white light. "}},

{name:"Sniperino",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:"Sniperino, Ancient of Accuracy",effectDescription:"+%1 seconds to duration of Lucky Strikes",flavorText:"Alexa accompanies you on your visit to the monument. \"The ancient's aura has enhanced my sight. I can more easily detect weaknesses of my foes,\" she claims. "}},

{name:"Kleptos",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:"Kleptos, Ancient of Thieves",effectDescription:"+%1 seconds to duration of Golden Clicks",flavorText:"Both you and the fisherman arrive at the monument. You feel compelled to steal a fish from his basket, so you quickly swipe one without him noticing. You look at the prize inside your bag only to notice that you have some gold missing. You quickly give a dirty look to the fisherman only to see him doing the same."}},

{name:"Energon",level:0,maxLevel:30,costFormula:levelCostFormula.LINEAR,fullName:"Energon, Ancient of Battery Life",effectDescription:"+%1 seconds to duration of Metal Detector",flavorText:"Ma Zhu accompanies you. Unlike most of the other ancients, you notice nothing odd about the aura of this one. \"A world I visited once, far away from our own, could have made much better use of the magic of this ancient,\" he tells you. What wonders must exist in that world..."}},

{name:"Argaiv",level:0,maxLevel:"None",costFormula:levelCostFormula.LINEAR,fullName:"Argaiv, Ancient of Enhancement",effectDescription:"+%1% to Gilded damage bonus (per Gild)",flavorText:"You have heard much of this ancient from the tales of bards even though you never believed them to be truth. Your doubts quickly fade as you feel a surge of immense power while you step closer to  the pulsating crystal."}},

{name:"Juggernaut",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:"Juggernaut, Ancient of Momentum",effectDescription:"+%1% DPS per click combo  ( active clicking )",flavorText:"It has been days since you last slept, yet you do not feel at all tired. The ancient has been driving you all along. You wonder how much longer you can go on; there is no end in sight."}},

{name:"Iris",level:0,maxLevel:"None",costFormula:levelCostFormula.QUADRATIC,fullName:"Iris, Ancient of Vision",effectDescription:"+%1 to starting zone after Ascension",flavorText:"This ancient grants you supreme vision beyond what your eyes can see. The longer you are awake, the greater your powers become. Sleep has now become a hindrance to your path to what you desire. Sacrifices must be made."}},

{name:"Revolc",level:0,maxLevel:15,costFormula:levelCostFormula.CUBIC,fullName:"Revolc, Ancient of Luck",effectDescription:"+%1% Chance of double rubies from clickable treasures, when you get a ruby.",flavorText:"Forged from a million lucky coins, this monument is the strongest lucky charm in existence. Place your bets, go toe to toe with death, fight with your mother-in-law and live to tell the tale! Nothing can possibly go wrong when you're in the vicinity of Revolc. Your heroes recommend you haul it with you for when you find clickables."}}

];


function upgradeCost(ancient,incrementType){

	// Usage: upgradeCost(ancients[id-1],increment.X25); Can take any ancient and any increment value listed at the top of this file.
	
	var level = ancient.level;
	var cost = 0;

	switch(ancient.costFormula){
	
		case levelCostFormula.QUADRATIC
			switch(incrementType){
					case increment.X1
						return Math.pow(level+1,1.5)
					break;
					case increment.X25)
						for(level, level<=level+25, level++){
							cost += Math.pow(level+1,1.5);
						}
						return cost;
					break;
					case increment.X100
						for(level, level<=level+100, level++){
							cost += Math.pow(level+1,1.5);
						}
						return cost;
					break;
					case increment.FULL
						for(var i = 0, i<=level, i++){
							cost += Math.pow(i+1,1.5);
						}
						return cost;
					break;
				}
		break;	
		case levelCostFormula.LINEAR
			switch(incrementType){
				case increment.X1
					return (ancient.level+1);
				break;
				case increment.X25
					return (((ancient.level+25)*(ancient.level+26))/2) - ((ancient.level)*(ancient.level+1))/2;
				break;
				case increment.X100
					return (((ancient.level+100)*(ancient.level+101))/2) - ((ancient.level)*(ancient.level+1))/2;
				break;
				case increment.FULL
					return (((ancient.level)*(ancient.level+1))/2);
				break;			
			}
		break;
		case levelCostFormula.ONE
			return 1;
		break;
		case levelCostFormula.LINEARDIV
			switch(incrementType){
					case increment.X1
						return (ancient.level+1)/3;
					break;
					case increment.X25
						return ((((ancient.level+25)*(ancient.level+26))/2) - ((ancient.level)*(ancient.level+1))/2)/3;
					break;
					case increment.X100
						return ((((ancient.level+100)*(ancient.level+101))/2) - ((ancient.level)*(ancient.level+1))/2)/3;
					break;
					case increment.FULL
						return (((ancient.level)*(ancient.level+1))/2)/3;
					break;			
				}
		break;
		case levelCostFormula.LINEARTEN
			switch(incrementType){
					case increment.X1
						return (ancient.level+1)*10;
					break;
					case increment.X25
						return ((((ancient.level+25)*(ancient.level+26))/2) - ((ancient.level)*(ancient.level+1))/2)*10;
					break;
					case increment.X100
						return ((((ancient.level+100)*(ancient.level+101))/2) - ((ancient.level)*(ancient.level+1))/2)*10;
					break;
					case increment.FULL
						return (((ancient.level)*(ancient.level+1))/2)*10;
					break;			
				}
		break;
		case levelCostFormula.CUBIC:
			switch(incrementType){
				case increment.X1
					return Math.pow((ancient.level+1*(ancient.level+2))/2,2) - Math.pow((ancient.level*(ancient.level+1))/2,2);
				break;
				case increment.X25
					return Math.pow((ancient.level+25*(ancient.level+26))/2,2) - Math.pow((ancient.level*(ancient.level+1))/2,2);
				break;
				case increment.X100
					return Math.pow((ancient.level+100*(ancient.level+101))/2,2) - Math.pow((ancient.level*(ancient.level+1))/2,2);
				break;
				case increment.FULL
					return Math.pow((ancient.level*(ancient.level+1))/2,2)
				break;
			}
		break;
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






