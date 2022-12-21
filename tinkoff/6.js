/*
Сегодняшняя задача Ксюши — провести мастер- класс по программированию для стажеров Тинькофф Старта. Для этого она решила устроить небольшую игру: Ксюша будет поддерживать множество, а стажеры будут говорить числа, которые в него добавить. После каждого добавления Ксюша будет называть максимальное значения побитового исключающего ИЛИ среди всех пар чисел этого множества.
Формально, если множество после очередной операции добавления равно S, то Ксюша хочет найти в нем такие два числа a, b ∈ S, что значение a ⊕ b максимально. Если число уже присутствовало в множестве до добавления, само множество никак не меняется. Выводить ответ при этом нужно после каждого добавления, даже если множество осталось прежним.
Ксюша знает, что кто-то из стажеров наверняка знает, как она будет считать ответы для этой игры, поэтому просит вас написать программу, которая будет обрабатывать запросы на добавление чисел.

Формат входных данных
	В первой строке вводится целое число q (1 ≤ q ≤ 3 ⋅ 105 ) — количество запросов.
	Следующие q строк описывают запросы. i-ая строка содержит целое число ki (0 ≤ ki ≤ 232 − 1), которое стажеры просят добавить во множество.

Формат выходных данных
	Выведите q строк, чтобы i-ая строка содержала единственное целое число xi — максимальное значение исключающего ИЛИ по всем парам чисел из множества после первых i операций.

Примеры данных
	Ввод:
		4
		3
		2
		5
		2
	Вывод:
		0
		1
		7
		7
*/

// const readline = require("readline");

// const rl = readline.createInterface({
// 	input: process.stdin,
// });

// let lines = [];

// rl.on("line", (line) => {
// 	lines.push(line);
// }).on("close", () => {
// 	const [q, ...k] = lines;
// 	const res = [];
// 	const set = [];
// 	const maxXor = {};

// 	const findMaxXor = (set, n) => {
// 		if (!set.length) return 0;

// 		let max = set[0] ^ n;

// 		set.forEach((item) => {
// 			if ((item ^ n) > max) max = item ^ n;
// 			maxXor[item] = max;
// 		});

// 		return max;
// 	};

// 	for (let i = 0; i < +q; i++) {
// 		if (!maxXor[k[i]]) {
// 			maxXor[k[i]] = findMaxXor(set, +k[i]);
// 		}

// 		res.push(maxXor[k[i]]);
// 		set.push(+k[i]);
// 	}

// 	process.stdout.write(res.join("\n"));
// });

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
});

const lines = [];

rl.on("line", (line) => lines.push(line)).on("close", () => {
	const [q, ...k] = lines;
	const res = [];
	const set = [];
	const maxXor = {};

	const findMaxXor = (set, n) => {
		if (!set.length) return 0;

		let max = set[0] ^ n;

		set.forEach((item) => {
			if ((item ^ n) > max) max = item ^ n;
			maxXor[item] = max;
		});

		return max;
	};

	for (let i = 0; i < +q; i++) {
		if (!maxXor[k[i]]) {
			maxXor[k[i]] = findMaxXor(set, +k[i]);
		}

		res.push(maxXor[k[i]]);
		set.push(+k[i]);
	}

	process.stdout.write(res.join("\n"));
});
