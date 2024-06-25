const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual a sua idade? "));

const ehMaiorDeIdade = idade >= 18;

// Estruturas condicionais

if (ehMaiorDeIdade) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

/**
 * Multiplas comparações
 */

const mediaAluno = 10;

if (mediaAluno >= 7) {
  console.log("Aprovado");
} else if (mediaAluno >= 5) {
  console.log("Prova Final");
} else {
  console.log("Reprovado");
}

/**
 * Multiplos condicionais
 */

const maiorDeIdade = 18;
const temCNH = true;

if (maiorDeIdade && temCNH) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}

/**
 * SWITCH
 */

const permissoes = "professor"; // aluno || professor || admin

switch (permissoes) {
  case "aluno": {
    console.log("Permissõees de aluno");
    break;
  }
  case "professor": {
    console.log("Permissõees de professor");
    break;
  }
  case "admin": {
    console.log("Permissõees de admin");
    break;
  }
  default:
    console.log("Sem permissões!");
}

/**
 * Operador ternário
 */

const idadeTeste = 21;

const maiorDeIdadeTeste =
  idadeTeste >= 19 ? "Maior de idade" : "Menor de idade";

console.log(maiorDeIdadeTeste);
