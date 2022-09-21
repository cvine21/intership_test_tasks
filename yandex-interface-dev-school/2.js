/* 
Ограничение времени	2 секунды
Ограничение памяти	64Mb
Ввод	input.txt
Вывод	output.txt

Даны два числа A и B. Вам нужно вычислить их сумму A+B. В этой задаче вам нужно читать из файла и выводить ответ в файл

Формат ввода:
	Первая строка входного файла содержит числа A и B (-2 ⋅ 10^9 ≤ A, B ≤ 2 ⋅ 10^9) разделенные пробелом

Формат вывода:
	В единственной строке выходного файла выведите сумму чисел A+B
*/

let fs = require('fs'),
	filename = 'input.txt',
	outfile = 'output.txt';

fs.readFile(filename, 'utf-8', (err, data) => {
	let lines = data.split(' ');
	const [A, B] = lines;
	let result = Number(A) + Number(B);
	fs.writeFileSync(outfile, result.toString());
})