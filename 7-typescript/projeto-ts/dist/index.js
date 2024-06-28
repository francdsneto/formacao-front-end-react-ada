"use strict";
// function somar(num1: number, num2: number) {
//   return num1 + num2;
// }
// somar(10, 20);
/**
 * * INFERENCIA DE TIPO
 *
 * * Atribui à variável o tipo de acordo com o valor que é atribuido inicialmente
 */
let numero = 20;
/**
 * * ATRIBUIÇÃO DE TIPO
 *
 * * O tipo é definido de explicitamente a variável
 */
let numero2;
/**
 * * TIPO EM VARIÁVEL CONSTANTE
 *
 * * Nesse caso o TypeScript entende que o tipo da variável é o próprio valor, já que const é imutável.
 */
const pi = 3.1415;
let nome = "Francisco Neto"; //string
let correta = true; //boolean
let resultado = numero * pi; // number
// const nomeUsuario = prompt("Qual o seu nome?");
// console.log(nomeUsuario?.toLocaleLowerCase(), typeof nomeUsuario);
// a ? significa que o valor pode ser também null, e em caso de null, não chamar o método seguinte
const numeros = [1, 2, 3, 4, 5]; // number[]
const numeros2 = [1, 2, 3, 4, 5]; // Array<number>
const nomes = ["a", "b", "c"]; // string[]
const misto = [1, "a", true]; // (number,string,boolean)[] Union Types - Não Recomendado
const misto2 = [1, "a", true]; // Não indicado - TypeScript é para se usar tipos
const idades = [];
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter((idade) => idade < 18);
console.log(menoresDeIdade);
// for (const iterator of idades) {
//   console.log(iterator);
// }
/**
 * * Tuplas
 */
const pessoaTupla = ["Neto", 36];
const pessoa = {
    nome: "Neto",
    idade: 36,
    profissao: "Desenvolvedor",
    altura: 1.8,
};
const pessoa2 = {
    nome: "Fulano",
    idade: 20,
    altura: 1.7,
};
console.log(pessoa2);
pessoa2.profissao = "Desenvolvedor";
console.log(pessoa2);
const pessoa3 = {
    nome: "Neto",
    idade: 36,
    profissao: "Desenvolvedor",
    altura: 1.8,
};
/**
 * * UNION TYPES
 */
function chooseNumber(num1, num2, criteria // com ? se diz que o parâmetro é opcional - criteria?: "greater" | "lower" - Deve ficar no fim
) {
    switch (criteria) {
        case "greater":
            return num1 > num2 ? num1 : num2;
        case "lower":
            return num1 > num2 ? num2 : num1;
        default: {
            const numeroAleatorio = Math.random();
            return numeroAleatorio < 0.5 ? num1 : num2;
        }
    }
}
const numeroEscolhido = chooseNumber(1, 2);
console.log("numero escolhido", numeroEscolhido);
function somar(num1, num2) {
    return num1 + num2;
}
const outraPessoa = {};
const requiredPessoa = {
    nome: "neto",
    idade: 36,
    altura: 1.8,
    profissao: "Dev",
};
const pickedPerson = {
    idade: 36,
    nome: "Neto",
};
const omittedPessoa = {
    nome: "neto",
    idade: 36,
    altura: 1.8,
};
const excludedCriterio = "lower"; // agora só aceita lower
const pessoas = {
    "123.456.789-10": {
        nome: "fulano",
        idade: 20,
        altura: 1.9,
    },
    "123.456.789-11": {
        nome: "fulano2",
        idade: 20,
        altura: 1.9,
    },
};
console.log(pessoas["123.456.789-10"]);
