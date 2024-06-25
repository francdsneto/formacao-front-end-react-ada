/**
 * Implementação da função
 */
function saudacaoAoAluno(nomeDoEstudante, curso = "Front-end em React") {
  // Template String || Template Literals

  return `Olá, ${nomeDoEstudante}! Seja bem vindo ao curso de ${curso}`;
}

/**
 * Chamada da função
 */
console.log(saudacaoAoAluno("Neto", "Backend em React"));

console.clear();

function somar(numero1, numero2) {
  return numero1 + numero2;
}

const resultado = somar(1, 2);

console.log(resultado);

console.clear();

/**
 * * FUNÇÕES ANÔNIMAS
 */

const calcularDobroNumero = function (numero) {
  return numero * 2;
};

const dobro = calcularDobroNumero(2);

console.log(dobro);

console.clear();

/**
 * Arrow Functions
 */

const subtrair = (numero1, numero2) => {
  return numero1 - numero2;
};

console.log(subtrair(5, 2));

const multiplicar = (n1, n2) => n1 * n2;

console.log(multiplicar(2, 3));

const triplo = (numero) => numero * 3;

console.log(triplo(2));

console.clear();

/**
 * Object Literal
 */

const pessoa = {
  nome: "Francisco Neto",
  idade: 36,
  altura: 1.8,
  ehProgramador: true,
  funcao: () => {
    console.log("Imprimir algo");
  },
};

console.log(pessoa.nome);
console.log(pessoa["idade"]);

// add propriedade

pessoa.hobbies = ["Estudar", "Jogar", "Assistir Series"];

console.log(pessoa);

// delete propriedade

delete pessoa.altura;

console.log(pessoa);

console.clear();

/**
 * Função dentro do objeto
 */

pessoa.funcao();

console.clear();

/**
 * Atribuir valor direto no objeto
 *
 * não é necessário passar o nome do parametro e o valor se ambos possuem o mesmo nome
 *
 * 'idade' : idade
 *
 */

const idade = 5;

const objeto = {
  idade,
};

console.log(objeto);

console.clear();

/**
 * Mais uma forma de obter valor de um objeto
 */

const { nome, hobbies } = pessoa;

console.log(nome);
console.log(hobbies);
