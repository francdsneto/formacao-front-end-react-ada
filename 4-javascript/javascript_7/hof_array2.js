/**
 * * EVERY
 *
 * Array.prototype.every(): Verifica se todos os elementos de uma array seguem uma determinada condição retornada pela função
 *
 */

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(numeros.every((el) => !isNaN(el)));

/**
 * * SOME
 *
 * Array.prototype.some(): Verifica se algum dos elementos do arrem atendem a condição determinada pelo retorno da função
 */

console.log(numeros.some((el) => el < 20));

console.clear();

/**
 * * MAP
 *
 * Array.prototype.map(): Para cada elemento do array, altera o conteúdo e retorna esse novo array com essa alteração
 */

const numerosAoQuadrado = numeros.map((el) => el ** 2);

console.log(numerosAoQuadrado);

console.clear();

/**
 * * SPREAD OPERATOR OU DESESTRUTURAÇÂO
 */

const pessoa = {
  nome: "Francisco Neto",
  idade: 36,
};

const pessoaComAltura = {
  ...pessoa,
  altura: 1.8,
};

console.log(pessoaComAltura);

console.clear();

const carrinho = [
  {
    produto: "Feijão",
    preco: 6.5,
    quantidade: 3,
  },
  {
    produto: "Arroz",
    preco: 6.8,
    quantidade: 5,
  },
  {
    produto: "Leite 1L",
    preco: 6.99,
    quantidade: 4,
  },
];

const carrinhoComTotal = carrinho.map((el) => {
  return {
    ...el,
    total: el.preco * el.quantidade,
  };
});

console.log(carrinhoComTotal);

console.clear();

/**
 * * FILTER
 *
 * Array.prototype.filter(): Para cada elemento do array, filtra o conteúdo e retorna um novo array com os elementos que atendem a condição definida no retorno * da função
 */

const numerosFiltrados = numeros.filter((el) => el % 2 === 0);

console.log(numerosFiltrados);

console.clear();

/**
 * * reduce
 *
 * Array.prototype.reduce(): Para cada elemento do array, filtra o conteúdo e retorna um novo array com os elementos que atendem a condição definida no retorno * da função
 */

const somaElementosArray = numeros.reduce(
  (acumulador, elemento, index, arrayCompleto) => {
    return acumulador + elemento;
  },
  0
);

console.log(somaElementosArray);

console.clear();

const precoTotal = carrinhoComTotal.reduce(
  (acumulador, elemento, index, arrayCompleto) => {
    acumulador += elemento.total;
    return acumulador;
  },
  0
);

console.log(precoTotal);
