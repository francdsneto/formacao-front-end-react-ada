const prompt = require("readline-sync");

// * Exemplo 01

// let saldo = Number(prompt.question("Qual o seu saldo? "));

// while (saldo < 0) {
//   saldo = Number(
//     prompt.question("Saldo inválido, Por favor informe novamente. ")
//   );
// }

// console.log(saldo, typeof saldo);

// * Exemplo 02

// let notaDoAluno = Number(prompt.question("Informa a nota do aluno: "));

// let somaDasNotas = 0;
// let contadorNotasDigitadas = 0;

// while (notaDoAluno > 0) {
//   somaDasNotas += notaDoAluno;
//   contadorNotasDigitadas++;
//   notaDoAluno = Number(prompt.question("Informa a próxima nota do aluno: "));
// }

// console.log("A média das notas é", somaDasNotas / contadorNotasDigitadas);

// * EXEMPLO 03

// const numeroAleatorio = Math.floor(Math.random() * 101);

// let palpites = 0;

// let numeroInformado = Number(
//   prompt.question("Qual número você acha que foi sorteado? ")
// );

// while (numeroAleatorio != numeroInformado) {
//   palpites++;

//   if (numeroAleatorio > numeroInformado) {
//     console.log("O número sorteado é maior que seu palpite!");
//   } else {
//     console.log("O número informado é menor que seu palpite!");
//   }

//   numeroInformado = Number(
//     prompt.question("Qual número você acha que foi sorteado? ")
//   );
// }

// console.log(
//   "Parabéns, você acertou o número sorteado!",
//   numeroAleatorio,
//   "! Você usou",
//   palpites,
//   "palpites"
// );

/**
 * * Continue e Break nos LOOPS de repetição
 * * O continue força o código a retornar par o inicio da execução, ou seja, o código que estiver abaixo do continue não executa e o código reinicia o loop
 * * O break quebra o fluxo de repetição, ou seja, sao do loop de repetição
 */

do {
  console.log("Executa tudo pelo menos 1x em comparação ao while");
} while (1 > 1);

while (1 > 1) {
  console.log("Não executa");
}
