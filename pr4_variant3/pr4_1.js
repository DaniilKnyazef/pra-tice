const x = Number(prompt("Введите значение x:"));
const y = Number(prompt("Введите значение y:"));

const z = x*y/(x-y) + Math.sqrt(Math.abs(Math.pow(y, 3) - x));

alert(`Значение z = ${z}`);