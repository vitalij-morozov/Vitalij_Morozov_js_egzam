/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = (num1, num2) => num1 + num2;
  this.subtraction = (num1, num2) => num1 - num2;
  this.multiplication = (num1, num2) => num1 * num2;
  this.division = (num1, num2) => num1 / num2;
}

const calculate = new Calculator();

console.log("calculate.sum ===", calculate.sum(2, 2));
console.log("calculate.subtraction ===", calculate.subtraction(10, 7));
console.log("calculate.multiplication ===", calculate.multiplication(7, 2));
console.log("calculate.division ===", calculate.division(25, 5));
