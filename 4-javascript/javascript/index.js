// Exibir informações no console

console.log("Hello World");

// Para criar variáveis existem algumas palavras reservadas como Var e Let e Const

var nome = "Francisco Neto"; //string
let idade = 37; //number
const VALOR = 19.2; //number
var cursando = true; //bolean

// Padrão de nomeclatura de variável é camelCase

let variavelCamelCase;

// obter o tipo de uma variável

console.log(nome, typeof nome);
console.log(variavelCamelCase);

// Atribuir mais de uma variável por vez

var curso = "Curso de Lógica de Programação com Javascript",
  escola = "ADA - Santanders Coders";

console.log(curso, escola);

/**
 * Conseito de Hoisting - Por que usar let em vez de var?
 *
 * A variável 'var' é uma variável global, ou seja, ela pode ser acessada de qualquer parte do código JS, e ela possui o conceito de Hoisting, que significa
 * que ela já existe antes mesmo de ser declarada.
 *
 * Por exemplo, eu posso colocar um console.log(variavel1); e declarar a variável após a chamada do console.log(), como var nome = "Francisco Neto";
 *
 * O código será executado sem erro, porém será impresso como undefined;
 *
 * Já o let não permite esse tipo de interação com a variável, ela só fica acessível após a sua inicialização, caso contrário dará um erro.
 *
 * A varável let também é escopada, ela existe dentro de um escopo específico.
 */

console.log(varGlobal);
var varGlobal = "Teste";

// console.log(varLet);
let varLet = "Teste";
console.log(varLet);
