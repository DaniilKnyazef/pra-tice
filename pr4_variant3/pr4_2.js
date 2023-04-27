const A = [];

for (let i = 0; i < 10; i++) {
  A.push(Math.floor(Math.random() * 11) + 10);
}

const result = [];
for (let i = 0; i < A.length; i++) {
  if (i % 5 == 0) {
    result.push(A[i]);
  }
}

const arrayText = `Массив A: ${A}`;
const resultText = `Элементы с кратными индексами 5: ${result}`;
alert(arrayText + "\n" + resultText);