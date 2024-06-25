/**
 * * First Class Function - Conceito em que uma linguagem de programação trata uma função como uma variável
 *
 * * High Order Function - Função que recebe outra função como parametro OU uma função que retorna outra função
 *
 */

// * 1 - Função que retorna outra função como parametro (Cloujure)

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá ${studentName}, seja bem vindo ao curso de ${courseName}!`
    );
  };
}

const displayWelcomeToFrontendCourse = welcome("Front-end em React");
const displayWelcomeToBackendCourse = welcome("Back-end em React");

displayWelcomeToFrontendCourse("Neto");
displayWelcomeToBackendCourse("Neto");

console.clear();

// * 2 - Função que recebe outra função como parametro

const somar = (num1, num2) => num1 + num2;

const subtrair = (num1, num2) => num1 - num2;

const multiplicar = (num1, num2) => num1 * num2;

const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2);

console.log(calcular(1, 2, somar));

console.clear();

/**
 * * DESAFIO:
 * * O calculo que eu quero é (num1 * num2) +  (2 * num1 * num2)
 */

const num1 = 10;
const num2 = 5;

const resultadoCalculo = calcular(
  calcular(num1, num2, multiplicar),
  calcular(2, calcular(num1, num2, multiplicar), multiplicar),
  somar
);

console.log(resultadoCalculo);

const resultadoCalculo2 = calcular(
  num1,
  num2,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(resultadoCalculo2);
