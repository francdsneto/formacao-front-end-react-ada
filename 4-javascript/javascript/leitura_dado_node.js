/**
 * Importando biblioteca usando require
 */

const prompt = require("readline-sync");

const idade = prompt.question("Qual a sua idade? ");

console.log("A sua idade é", idade);
console.log(idade, typeof idade);

/**
 * Conversão de tipos das variáveis
 */

const idadeNumber = Number(idade);

console.log(idadeNumber, typeof idadeNumber);

console.log(String(10), typeof String(10));

console.log(Boolean(2)); // true - qualquer numero > 0

console.log(Boolean(0)); // false

/**
 * Javascript é tipagem fraca, então não retorna erro em uma conversão como a seguir, retornando apenas NaN
 */
console.log(Number("x"));

/**
 * Coerção implícita
 */

console.log(1 + "1"); // Concatena em casos de soma com String e transforma tudo em string
console.log(10 - "5"); // Subtrai em formado de numero
console.log("11" - 1); // Subtrai em formado de numero
console.log("11" - "3"); // Subtrai em formato de número
