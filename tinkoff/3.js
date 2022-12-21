/*
Для новой маркетинговой акции Ксюша придумала провести математическую лотерею. Она загадала натуральное число n и напечатала на билетах пары положительных чисел a, b такие, что a + b = n. Победителем лотереи будет считаться участник, получивший билет с минимальным наименьшим общим кратным (НОК) чисел a и b.
Ксюша хочет заранее понять, какие подходящие числа a и b можно выбрать, чтобы их НОК было минимально возможным. Поможете ей?

Формат входных данных
	В единственной строке вводится натуральное число n (2 ≤ n ≤ 109 ) — загаданное Ксюшей число n.

Формат выходных данных
	Выведите через пробел два числа a и b — искомую пару с минимальным НОК.
	Если подходящих ответов несколько, выведите любой.

Примеры данных
Пример 1
	Ввод: 3
	Вывод: 1 2

Пример 2
	Ввод: 6
	Вывод: 3 3

Пример 3
	Ввод: 9
	Вывод: 3 6
*/

// const readline = require("readline");

// const rl = readline.createInterface({
// 	input: process.stdin,
// });

// const lines = [];

// rl.on("line", (line) => {
// 	lines.push(line);
// }).on("close", () => {
// 	const [n] = lines;
// 	let num = +n;
// 	let l = Math.floor(num / 2);
// 	let r = num - l;

// 	while (num % 2 && r % l) {
// 		r++;
// 		l--;
// 	}

// 	process.stdout.write(`${l} ${r}`);
// });

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
});

const lines = [];

rl.on("line", (line) => {
	lines.push(line);
}).on("close", () => {
	const [n] = lines;
	let num = +n;
	let l = Math.floor(num / 2);
	let r = num - l;

	while (num % 2 && r % l) {
		r++;
		l--;
	}

	process.stdout.write(`${l} ${r}`);
});
