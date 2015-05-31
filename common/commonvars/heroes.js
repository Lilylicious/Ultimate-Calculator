var tempMult = [1];
var index = 0;

var levelDmgMult = [1,4,16,64,256,1024,4096,16384,65536,262144,1048576,4194304,16777216,67108864,268435456,1073741824,4294967296,17179869184,68719476736,274877906944,1099511627776,4398046511104,17592186044416,70368744177664,281474976710656,1125899906842624,4503599627370496,18014398509481984,72057594037927940,288230376151711740,1152921504606847000,4611686018427388000,18446744073709552000,184467440737095500000,737869762948382000000,2.951479051793528e+21,1.1805916207174113e+22,4.722366482869645e+22,1.888946593147858e+23,7.555786372591432e+23,3.022314549036573e+24,1.2089258196146292e+25,4.835703278458517e+25,1.9342813113834067e+26,7.737125245533627e+26,3.0948500982134507e+27,1.2379400392853803e+28,4.951760157141521e+28,1.9807040628566084e+29,7.922816251426434e+29,3.1691265005705735e+30,1.2676506002282294e+31,5.070602400912918e+31,2.028240960365167e+32,8.112963841460668e+32,3.245185536584267e+33,1.298074214633707e+34,5.192296858534828e+34,2.076918743413931e+35,8.307674973655724e+35,3.3230699894622897e+36,1.3292279957849159e+37,5.3169119831396635e+37,2.1267647932558654e+38,8.507059173023462e+38,3.4028236692093846e+39,1.3611294676837539e+40,5.444517870735015e+40,2.177807148294006e+41,8.711228593176025e+41,3.48449143727041e+42,1.393796574908164e+43,5.575186299632656e+43,5.575186299632656e+44,2.2300745198530623e+45,8.920298079412249e+45,3.5681192317648997e+46,1.4272476927059599e+47,5.7089907708238395e+47,2.2835963083295358e+48,9.134385233318143e+48,3.6537540933272573e+49,1.461501637330903e+50,5.846006549323612e+50,2.3384026197294447e+51,9.353610478917779e+51,3.7414441915671115e+52,1.4965776766268446e+53,5.986310706507378e+53,2.3945242826029513e+54,9.578097130411805e+54,3.831238852164722e+55,1.5324955408658889e+56,6.129982163463555e+56,2.451992865385422e+57,9.807971461541689e+57,3.9231885846166755e+58,1.5692754338466702e+59,6.277101735386681e+59,2.5108406941546723e+60,1.0043362776618689e+61,4.0173451106474757e+61,1.6069380442589903e+62,6.427752177035961e+62,2.5711008708143844e+63,1.0284403483257538e+64,4.113761393303015e+64,1.645504557321206e+65,6.582018229284824e+65,2.6328072917139297e+66,1.0531229166855719e+67,4.2124916667422875e+67,1.684996666696915e+68,1.684996666696915e+69,6.73998666678766e+69,2.695994666715064e+70,1.0783978666860256e+71,4.3135914667441024e+71,1.725436586697641e+72,6.901746346790564e+72,2.7606985387162255e+73,1.1042794154864902e+74,4.417117661945961e+74,1.7668470647783843e+75,7.067388259113537e+75,2.826955303645415e+76,1.130782121458166e+77,4.523128485832664e+77,1.8092513943330656e+78,7.237005577332262e+78,2.894802230932905e+79,1.157920892373162e+80,4.631683569492648e+80,1.8526734277970591e+81,7.4106937111882365e+81,2.9642774844752946e+82,1.1857109937901178e+83,4.7428439751604714e+83,1.8971375900641885e+84,7.588550360256754e+84,3.0354201441027017e+85,1.2141680576410807e+86,4.8566722305643227e+86,1.942668892225729e+87,7.770675568902916e+87,3.1082702275611665e+88,1.2433080910244666e+89,4.9732323640978664e+89,1.9892929456391466e+90,7.957171782556586e+90,3.1828687130226345e+91,1.2731474852090538e+92,5.092589940836215e+92,2.037035976334486e+93,8.148143905337944e+93,3.2592575621351777e+94,1.3037030248540711e+95,5.2148120994162844e+95];
var rangerDmgMult = [1,4,16,64,256,1024,4096,16384,65536,262144,1048576,4194304,16777216,67108864,335544320,1677721600,8388608000,41943040000,209715200000,1048576000000,5242880000000,26214400000000,131072000000000,524288000000000,2097152000000000,8388608000000000,33554432000000000,134217728000000000,536870912000000000,2147483648000000000,8589934592000000000,34359738368000000000,137438953472000000000,1.37438953472e+21,5.49755813888e+21,2.199023255552e+22,8.796093022208e+22,3.5184372088832e+23,1.40737488355328e+24,5.62949953421312e+24,2.251799813685248e+25,9.007199254740992e+25,3.602879701896397e+26,1.4411518807585587e+27,5.764607523034235e+27,2.305843009213694e+28,9.223372036854776e+28,3.68934881474191e+29,1.475739525896764e+30,5.902958103587057e+30,2.3611832414348226e+31,9.44473296573929e+31,3.777893186295716e+32,1.5111572745182865e+33,6.044629098073146e+33,2.4178516392292583e+34,9.671406556917033e+34,3.868562622766813e+35,1.5474250491067253e+36,6.189700196426901e+36,2.4758800785707605e+37,9.903520314283042e+37,3.961408125713217e+38,1.5845632502852868e+39,6.338253001141147e+39,2.535301200456459e+40,1.0141204801825835e+41,4.056481920730334e+41,1.6225927682921336e+42,6.490371073168535e+42,2.596148429267414e+43,1.0384593717069655e+44,4.153837486827862e+44,4.153837486827862e+45,1.6615349947311448e+46,6.646139978924579e+46,2.6584559915698317e+47,1.0633823966279327e+48,4.253529586511731e+48,1.7014118346046923e+49,6.805647338418769e+49,2.7222589353675077e+50,1.0889035741470031e+51,4.3556142965880123e+51,1.742245718635205e+52,6.96898287454082e+52,2.787593149816328e+53,1.1150372599265312e+54,4.4601490397061246e+54,1.7840596158824499e+55,7.136238463529799e+55,2.8544953854119198e+56,1.1417981541647679e+57,4.5671926166590716e+57,1.8268770466636286e+58,7.307508186654515e+58,2.923003274661806e+59,1.1692013098647223e+60,4.676805239458889e+60,1.8707220957835557e+61,7.482888383134223e+61,2.993155353253689e+62,1.1972621413014757e+63,4.789048565205903e+63,1.915619426082361e+64,7.662477704329444e+64,3.0649910817317777e+65,1.225996432692711e+66,4.903985730770844e+66,1.9615942923083377e+67,7.846377169233351e+67,3.1385508676933404e+68,1.2554203470773362e+69,1.2554203470773362e+70,5.0216813883093446e+70,2.0086725553237378e+71,8.034690221294951e+71,3.2138760885179806e+72,1.2855504354071922e+73,5.142201741628769e+73,2.0568806966515076e+74,8.22752278660603e+74,3.291009114642412e+75,1.3164036458569648e+76,5.2656145834278593e+76,2.1062458333711437e+77,8.424983333484575e+77,3.36999333339383e+78,1.347997333357532e+79,5.391989333430128e+79,2.1567957333720512e+80,8.627182933488205e+80,3.450873173395282e+81,1.3803492693581128e+82,5.521397077432451e+82,2.2085588309729804e+83,8.834235323891922e+83,3.5336941295567687e+84,1.4134776518227075e+85,5.65391060729083e+85,2.261564242916332e+86,9.046256971665328e+86,3.618502788666131e+87,1.4474011154664524e+88,5.78960446186581e+88,2.315841784746324e+89,9.263367138985296e+89,3.7053468555941183e+90,1.4821387422376473e+91,5.928554968950589e+91,2.3714219875802357e+92,9.485687950320943e+92,3.794275180128377e+93,1.5177100720513508e+94,6.070840288205403e+94,2.4283361152821613e+95,9.713344461128645e+95,3.885337784451458e+96};

function selectUpgrade(heroLevel){
	if (heroLevel<200) return 0;
	return (Math.floor(heroLevel-200) / 25) + 1;
}

// Used to find the upgrade multipliers listed in levelDmgMult, nothing else.
function findUpgrades() {

	for (var i = 200; i<=4100; i+=25){

		if(Math.floor(i/1000)-Math.floor((i-25)/1000) >= 1 && i < 4000){ 
			tempMult.push(tempMult[index] * 10);
			index++;
		}
		else{ 
			tempMult.push(tempMult[index] * 4);
			index++;
		}
	}
}

// Used to find the upgrade multipliers listed in rangerDmgMult, nothing else.
function findRangerUpgrades() {

	for (var i = 200; i<=4100; i+=25){

		if(Math.floor(i/1000)-Math.floor((i-25)/1000) >= 1 && i < 4000){ 
			tempMult.push(tempMult[index] * 10);
		}		
			else if(Math.floor(i/25)-Math.floor((i-25)/25) >= 1 && i >= 200 && i <=500){ tempMult.push(tempMult[index] * 4);
			}
			else if(Math.floor(i/25)-Math.floor((i-25)/25) >= 1 && i >= 525 && i <=725){ tempMult.push(tempMult[index] * 5);
			}
			else if(Math.floor(i/25)-Math.floor((i-25)/25) >= 1 && i >= 750 && i <=4100){ tempMult.push(tempMult[index] * 4);
	}
		index++;
	}
}

var heroes = [
  {name: "Cid", cost: 5, damage: 0, level: 0, upgradeCosts: [100, 250, 1e3, 8e3, 80e3, 400e3, 4e6]/*,upgradeIDs:[,,,,]*/}, 
  
  {name: "Tree Beast", cost: 50, damage: 5, level: 0, upgradeCosts: [500, 1.25e3, 5e3, 40e3, 400e3],upgradeIDs:[17,18,19,20,103]},
  
  {name: "Ivan", cost: 250, damage: 22, level: 0, upgradeCosts: [2.5e3, 6.25e3, 25e3, 200e3, 2e6, 10e6], upgradeIDs:[21,22,23,108,100,24]},
  
  {name: "Brittany", cost: 1000, damage: 74, level: 0, upgradeCosts: [10e3, 25e3, 100e3, 800e3], upgradeIDs:[13,14,15,16]},
  
  {name: "Fisherman", cost: 4000, damage: 245, level: 0, upgradeCosts: [40e3, 100e3, 400e3, 3.2e6, 32e6], upgradeIDs:[9,10,11,12,101]},
  
  {name: "Betty", cost: 20000, damage: 976, level: 0, upgradeCosts: [200e3, 500e3, 2e6, 16e6, 160e6], upgradeIDs:[25,26,27,28,102]},
  
  {name: "Samurai", cost: 100e3, damage: 3725, level: 0, upgradeCosts: [1e6, 2.5e6, 10e6, 80e6], upgradeIDs:[29,30,31,32]},
  
  {name: "Leon", cost: 400e3, damage: 10859, level: 0, upgradeCosts: [4e6, 10e6, 40e6, 320e6], upgradeIDs:[33,34,35,36]},
  
  {name: "Seer", cost: 2500e3, damage: 47143, level: 0, upgradeCosts: [25e6, 62.5e6, 250e6, 2e9], upgradeIDs:[37,38,39,40]},
  
  {name: "Alexa", cost: 15000e3, damage: 186e3, level: 0, upgradeCosts: [150e6, 375e6, 1.5e9, 12e9, 120e9], upgradeIDs:[41,42,43,44,109]},
  
  {name: "Natalia", cost: 100e6, damage: 782e3, level: 0, upgradeCosts: [1e9, 2.5e9, 10e9, 80e9], upgradeIDs:[45,46,47,48]},
  
  {name: "Mercedes", cost: 800e6, damage: 3721e3, level: 0, upgradeCosts: [8e9, 20e9, 80e9, 640e9, 6.4e12], upgradeIDs:[49,50,51,52,104]},
  
  {name: "Bobby", cost: 6500e6, damage: 17010e3, level: 0, upgradeCosts: [65e9, 162e9, 650e9, 5.2e12, 52e12], upgradeIDs:[53,54,55,56,116]},
  
  {name: "Broyle", cost: 50e9, damage: 69480e3, level: 0, upgradeCosts: [500e9, 1.25e12, 5e12, 40e12, 400e12], upgradeIDs:[57,58,59,60,110]},
  
  {name: "Sir George", cost: 450e9, damage: 460e6, level: 0, upgradeCosts: [4.5e12, 11.25e12, 45e12, 360e12, 3.6e15], upgradeIDs:[61,62,63,64,105]},
  
  {name: "Midas", cost: 4e12, damage: 3017e6, level: 0, upgradeCosts: [40e12, 100e12, 400e12, 3.2e15, 32e15, 160e15], upgradeIDs:[65,66,67,68,111]},
  
  {name: "Referi", cost: 36e12, damage: 20009e6, level: 0, upgradeCosts: [360e12, 900e12, 3.6e15, 28.8e15, 288e15], upgradeIDs:[69,70,71,72,73]},
  
  {name: "Abaddon", cost: 320e12, damage: 131e9, level: 0, upgradeCosts: [3.2e15, 8e15, 32e15, 256e15], upgradeIDs:[74,75,76,112]},
  
  {name: "Ma Zhu", cost: 2.7e15, damage: 814e9, level: 0, upgradeCosts: [27e15, 67.5e15, 270e15, 2.16e18], upgradeIDs:[77,78,79,80]},
  
  {name: "Amenhotep", cost: 24e15, damage: 5335e9, level: 0, upgradeCosts: [240e15, 600e15, 2.4e18 /*, 19.2e18*/], upgradeIDs:[82,83,84]},
  
  {name: "Beastlord", cost: 300e15, damage: 49143e9, level: 0, upgradeCosts: [3e18, 7.5e18, 30e18, 240e18, 2.4e21], upgradeIDs:[84,85,86,87,113]},
  
  {name: "Athena", cost: 9e18, damage: 1086e12 , level: 0, upgradeCosts: [90e18, 225e18, 900e18, 0, 7.2e21], upgradeIDs:[88,89,90,91]},
  
  {name: "Aphrodite", cost: 350e18, damage: 31124e12, level: 0, upgradeCosts: [3.5e21, 8.75e21, 35e21, 0, 280e21, 2.8e24], upgradeIDs:[92,93,94,114,95]},
  
  {name: "Shinatobe", cost: 14e21, damage: 917e15, level: 0, upgradeCosts: [140e21, 350e21, 1.4e24, 11.2e24, 112e24], upgradeIDs:[96,97,98,99,115]},
  
  {name: "Grant", cost: 4199e21, damage: 202e18, level: 0, upgradeCosts: [41.999e24, 104e24, 419e24, 3.359e27], upgradeIDs:[120,121,122,123]},
  
  {name: "Frostleaf", cost: 2100e24, damage: 74698e18, level: 0, upgradeCosts: [21e27, 52.499e27, 209e27, 1.679e30], upgradeIDs:[124,125,126,127]},
  
  {name: "DreadKnight", cost: 1e40, damage: 1.46e32, level: 0, upgradeCosts: [1e41, 2.5e41, 1e42, 0, 8e42], upgradeIDs:[133,134,135,136]},
  
  {name: "Atlas", cost: 1e55, damage: 1.075e45, level: 0, upgradeCosts: [1e56, 2.5e56, 1e57, 0, 8e57], upgradeIDs:[138,139,140,141]},
  
  {name: "Terra", cost: 1e70, damage: 7.926e57, level: 0, upgradeCosts: [1e71, 2.5e71, 1e72, 0, 8e72], upgradeIDs:[143,144,145,146]},
  
  {name: "Phthalo", cost: 1e85, damage: 5.839e70, level: 0, upgradeCosts: [1e86, 2.5e86, 1e87, 0, 8e87], upgradeIDs:[148,149,150,151]},
  
  {name: "Orntchya", cost: 1e100, damage: 3.302e83, level: 0, upgradeCosts: [1e101, 2.5e101, 1e102, 0, 8e102], upgradeIDs:[153,154,155,156]},
  
  {name: "Lilin", cost: 1e115, damage: 3.17e96, level: 0, upgradeCosts: [1e116, 2.5e116, 1e117, 0, 8e117], upgradeIDs:[158,159,160,161]},
  
  {name: "Cadmia", cost: 1e130, damage: 2.335e109, level: 0, upgradeCosts: [1e131, 2.5e131, 1e132, 0, 8e132], upgradeIDs:[163,164,165,166]},
  
  {name: "Alabaster", cost: 1e145, damage: 1.721e122, level: 0, upgradeCosts: [1e146, 2.5e146, 1e147, 0, 8e147], upgradeIDs:[168,169,170,171]},
  
  {name: "Astraea", cost: 1e160, damage: 1.268e135, level: 0, upgradeCosts: [1e161, 2.5e161, 1e162, 0, 8e162], upgradeIDs:[173,174,175,176]}
  