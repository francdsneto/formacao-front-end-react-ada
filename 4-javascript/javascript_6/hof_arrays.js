/**
 * * FUNÇÕES DE ALTA ORDENS DE ARRAYS
 */

const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// function callback(el, index, array) {
//   console.log(el);
//   console.log(index);
//   console.log(array);
// }

// 1- Array.prototype.forEach(callback);

// array.forEach((el, index, array) => {
//   console.log(el, index, array);
// });

// console.clear();

/**
 * 2- Array.prototype.find(): útil para encontrar um elemento dentro do array
 * Retorna o primeiro retorno que encontrar que satisfaça a condição de retorno
 */

// const retorno = array.find((value, index, number) => {
//   return value > 30;
// });

// console.log(retorno);

// console.clear();

/**
 * 3 - Array.prototype.findInex(): parecido com o find() mas retorna o index do elemento encontrado
 */

const retornoIndex = array.findIndex((value, index, number) => {
  return value > 30;
});

console.log(retornoIndex);
