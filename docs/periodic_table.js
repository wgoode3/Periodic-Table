
var table = [["Group","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18"],
			["1",  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  2],
			["2",  3,  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  5,  6,  7,  8,  9, 10],
			["3", 11, 12,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 13, 14, 15, 16, 17, 18],
			["4", 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
			["5", 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
			["6", 55, 56, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
			["7", 87, 88,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118],
			[   "Period",  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
			["**Lanthanoids",  0,  0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70,  0,  0],
			[  "**Actinoids",  0,  0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100,101,102,  0,  0]];

var periodicTable = '';

for(var i=0; i<table.length; i++){
	for(var j=0; j<table[i].length; j++){
		if(typeof(table[i][j]) == "string"){
			periodicTable += `<div class="nothing"><p>${table[i][j]}<p></div>`
		}else if(table[i][j] !== 0){
			ele = ``;
			if(i > 8){
				ele += `<div class="element lanthanide-actinide">`;
			}else if(j < 3){
				ele += `<div class="element alkali">`;
			}else if(j > 12){
				ele += `<div class="element non-metal">`
			}else{
				ele += `<div class="element metal">`
			}
			ele += `<p class="number">${table[i][j]}</p>
					<p class="symbol">${elements[table[i][j]-1].symbol}</p>
					<p class="mass">${elements[table[i][j]-1].mass}</p></div>`
			periodicTable += ele;
		}else{
			periodicTable += `<div class="nothing"></div>`;
		}
	}
}

document.getElementById('table').innerHTML = periodicTable