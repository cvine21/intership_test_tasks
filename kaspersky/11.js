/*
Допиши код TestReduce таким образом, чтобы он складывал только четные элементы массива:
*/

var readline = require("readline");
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});
rl.on("line", function (input) {
	class Reducers {
		constructor(arr) {
			this.arr = arr;
		}
		TestReduce() {
			let arr = this.arr;
			let result = arr.reduce((accumulator, value) => {
				return Math.abs(value) % 2 === 0
					? accumulator + Math.abs(value)
					: accumulator;
			}, 0);
			return result;
		}
	}
	const array = input.split(" ").map(Number);
	let map = new Reducers(array);
	console.log(map.TestReduce());
});
