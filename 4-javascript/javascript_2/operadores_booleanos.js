/**
 * Operadores Booleanos são baseados em comparações
 */

const numero1 = 10,
  numero2 = 12;

console.log(numero1 == numero2);
console.log(numero1 === numero2);

/**
 * Diferença de == e === | != e !==
 *
 * Boa prática usar os 3 iguais === ou !==
 */

console.log(numero1 == "10"); // verdadeiro
console.log(numero1 === "10"); // falso - leva em consideração o tipo das variáveis

console.log(numero1 != "10"); // falso
console.log(numero1 !== "10"); // diferente - leva em consideração o tipo das variáveis

/**
 * outras comparações:
 * > >= < <=
 */

/**
 * Operadores
 * && = E
 * || = OU
 */

const idadePessoa1 = 18;
const idadePessoa2 = 16;

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18); // false
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18); // true

/**
 * Operador de inversão de valor booleano - !
 */

console.log(true);
console.log(!true); // falso, pois o ! inverteu o valor verdadeiro
