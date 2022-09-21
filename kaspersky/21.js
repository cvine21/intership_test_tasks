/*
Напишите функцию, которая на вход принимает строку состояния электронных часов и проверяет, что в строке содержится одна и та же цифра (т.е. все цифры - одинаковые). Функция должна вернуть true в случае, если в строке находятся только одинаковые цифры, и false – в других случаях.

Формат времени - 24 часа.
Ведущий ноль в первой секции часов не показывается.

Sample Input:
2:10

Sample Output:
false
*/

var readline = require("readline");
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});
rl.on("line", function (input) {
	function checkNumbers(str) {
		console.log(str.split("").every((item) => item == str[0] || item === ":"));
	}
	checkNumbers(input);
});
