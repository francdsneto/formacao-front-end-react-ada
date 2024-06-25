const prompt = require("readline-sync");

/**
 * for i
 *
 * Expressão 1: Inicialização da variável de controle
 * Expressão 2: condição que define quando irá ocorrer a parada do for
 * Expressão 3: o incremento da variável de controle
 *
 * é possível omitir as expressões nos parametros do for e utilizar algo parecido com for(;;) {} que gera um loop infinito.
 */

// for (let index = 0; index < 5; index++) {
//   console.log(index);
// }

// console.clear();

// * Exemplo 01

// let maiorNumero = 0;

// for (let i = 0; i < 5; i++) {
//   let numero = prompt.questionInt("Digite um número ");

//   if (numero > maiorNumero) maiorNumero = numero;
// }

// console.log("O maior número informado é", maiorNumero);

// * Exemplo 02 - Percorrer String com for

// const nome = "Francisco Neto";

// for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// console.clear();

/**
 * * ARRAYS
 */

// const array = [10, 8, 5];
// const pessoa = ["Francisco Neto", 36, 1.8, true];

// console.log(pessoa);

// pessoa[3] = false;

// console.log(pessoa);

// console.clear();

/**
 * * fatiando array
 */

// const pedacoPessoa = pessoa.slice(0, 1);

// console.log(pedacoPessoa);

// console.clear();

/**
 * * Adicionando elementos no array
 */

// const numeros = [1, 2, 3];

// numeros.push(4); // adiciona no final

// console.log(numeros);

// numeros.unshift(0);

// console.log(numeros); // adiciona no começo

// console.clear();

/**
 * * Removendo elementos do array
 */

// numeros.pop(); // remove no final

// console.log(numeros);

// numeros.shift(); // remove no inicio

// console.log(numeros);

// console.clear();

/**
 * Pesquisa dentro do array
 *
 * Includes
 * IndexOf
 * LastIndexOf
 */

// console.log(numeros.includes(3));
// console.log(numeros.includes(10));

// console.clear();

// const indicedo2 = numeros.indexOf(2); // procura o primeiro indice do valor informado

// console.log(indicedo2);

// const indexDo40 = numeros.lastIndexOf(40); // procura o último indice do valor informado

// console.log(indexDo40); // retorna -1 quando não encontra

// console.clear();

/**
 * * Percorrendo arrays com for
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// console.clear();

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index]);
// }

// arr.forEach((element) => {
//   console.log(element);
// });

// console.clear();

// }

// * O for-in imprime o indice

for (const index in arr) {
  console.log(index);
}

// * O for-of imprime o elemento

for (const iterator of arr) {
  console.log(iterator);
}
