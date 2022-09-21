/*
На вход подаётся список чисел. Отсортируйте нечетные числа так, чтобы четные числа остались на своих местах.
*/

let readline = require("readline");
let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});
rl.on("line", function (input) {
	function sortOddNumbers(arr) {
		const oddNumbers = arr.filter((number) => number % 2);
		const sortOdds = oddNumbers.sort((a, b) => a - b);
		const result = arr.map((number) =>
			number % 2 ? sortOdds.shift() : number
		);
		return result.join(" ");
	}
	const array = input.split(" ").map(Number);
	let result = sortOddNumbers(array);
	console.log(result);
});
