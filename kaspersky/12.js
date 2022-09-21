/*
На вход поступает целое число. Известно, что если на вход поступает 4, в консоль выведется 32.

В коде допущена ошибка. Необходимо исправить данный код.

var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false
});

rl.on('line', function(input){
    class Parking {
    constructor (n) {
        this.cars = n;
    }

    summ (parking) {
        this.cars += parking.cars;
	}

	multiply (parking) {
	  this.cars *= parking.cars;
	return this;
	}
    }

    const parkingA = new Parking(Number(input));
    const parkingB = new Parking(2);
    const parkingC = new Parking(0);

    const result = parkingA
    .summ(parkingC)
    .multiply(parkingB)
    .summ(parkingA.multiply(parkingB));
    console.log(result.cars);
});
*/

var readline = require("readline");
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	terminal: false,
});
rl.on("line", function (input) {
	class Parking {
		constructor(n) {
			this.cars = n;
			return this;
		}
		summ(parking) {
			this.cars += parking.cars;
			return this;
		}
		multiply(parking) {
			this.cars *= parking.cars;
			return this;
		}
	}
	const parkingA = new Parking(Number(input));
	const parkingB = new Parking(2);
	const parkingC = new Parking(0);
	const result = parkingA
		.summ(parkingC)
		.multiply(parkingB)
		.summ(parkingA.multiply(parkingB));
	console.log(result.cars);
});
