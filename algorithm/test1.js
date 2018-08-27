//////// Run by Node.js ///////////////////

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.on("line", main).on("close", function() {
	process.exit();
});

/////////////////////////////////////////
let count = 0;

function main(line){
  if (count == 0) {
		// first line
		count = parseInt(line);
	} else {
		let fields = line.split(' ');
		console.log(fields)
		// console.log("...");
		rl.close();
	}
}


/////////////////////////////
var input = require('fs').readFileSync('/dev/stdin').toString().split(' ')
console.log(parseInt(input[0]) + parseInt(input[1]))
/////////////