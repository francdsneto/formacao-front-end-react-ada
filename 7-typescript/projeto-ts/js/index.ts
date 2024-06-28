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

let numero2: number;

/**
 * * TIPO EM VARIÁVEL CONSTANTE
 *
 * * Nesse caso o TypeScript entende que o tipo da variável é o próprio valor, já que const é imutável.
 */

const pi = 3.1415;

let nome: string = "Francisco Neto"; //string
let correta: boolean = true; //boolean

let resultado = numero * pi; // number

// const nomeUsuario = prompt("Qual o seu nome?");

// console.log(nomeUsuario?.toLocaleLowerCase(), typeof nomeUsuario);
// a ? significa que o valor pode ser também null, e em caso de null, não chamar o método seguinte

const numeros = [1, 2, 3, 4, 5]; // number[]
const numeros2: Array<number> = [1, 2, 3, 4, 5]; // Array<number>
const nomes = ["a", "b", "c"]; // string[]
const misto = [1, "a", true]; // (number,string,boolean)[] Union Types - Não Recomendado
const misto2: any[] = [1, "a", true]; // Não indicado - TypeScript é para se usar tipos

const idades: number[] = [];

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
const pessoaTupla: [string, number] = ["Neto", 36];

/**
 * * Object Types
 */

/**
 *  * Interface
 *
 *  * Tipo customizado
 */

interface Person {
  nome: string;
  idade: number;
  profissao?: string; // ? indica que a profissão é opcional
  altura: number;
}

const pessoa: Person = {
  nome: "Neto",
  idade: 36,
  profissao: "Desenvolvedor",
  altura: 1.8,
};

const pessoa2: Person = {
  nome: "Fulano",
  idade: 20,
  altura: 1.7,
};

console.log(pessoa2);

pessoa2.profissao = "Desenvolvedor";

console.log(pessoa2);

/**
 * * Type
 *
 * * Pode ser qualquer tipo, inclusive os tipos primitivos. Ex: type MyString: string;
 */

type Person2 = {
  nome: string;
  idade: number;
  profissao?: string; // ? indica que a profissão é opcional
  altura: number;
};

const pessoa3: Person2 = {
  nome: "Neto",
  idade: 36,
  profissao: "Desenvolvedor",
  altura: 1.8,
};

/**
 * * UNION TYPES
 */

function chooseNumber(
  num1: number,
  num2: number,
  criteria?: Criterio // com ? se diz que o parâmetro é opcional - criteria?: "greater" | "lower" - Deve ficar no fim
): number {
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

// Type aliases
type Criterio = "greater" | "lower";

function somar(num1: number, num2: number): number {
  return num1 + num2;
}

/**
 * * Utility Types
 *
 * ! VER EXEMPLOS NA DOCUMENTAÇÃO OFICIAL AO ACABAR O CURSO
 */

/**
 * * 1. Partial
 *
 * * Ao envolver algum tipo dentro do Partial, todos os atributos desse tipo serão opcionais.
 */

type PersonPartial = Partial<Person>;

const outraPessoa: PersonPartial = {};

/**
 * * 2. Required
 *
 * * Ao envolver algum tipo com o Required, todos os atributos desse tipo serão obrigatórios.
 */

type PersonRequired = Required<Person>;

const requiredPessoa: PersonRequired = {
  nome: "neto",
  idade: 36,
  altura: 1.8,
  profissao: "Dev",
};

/**
 * * 3. Pick
 *
 * * Ao envolver algum tipo com Pick, os atributos que forem informados, separados por pipe '|', serão os atributos obrigatórios.
 */

type PersonPicked = Pick<Person, "nome" | "idade">;

const pickedPerson: PersonPicked = {
  idade: 36,
  nome: "Neto",
};

/**
 * * 4. Omit
 *
 * * Ao envolver algum tipo com Omit, os atributos passados por parametro serão omitidos do novo tipo gerado.
 */

type PersonOmit = Omit<Person, "profissao">;

const omittedPessoa: PersonOmit = {
  nome: "neto",
  idade: 36,
  altura: 1.8,
};

/**
 * * 5. Exclude
 *
 * * Ao envolver algum Union Type com Exclude, ele exclui do tipo algum dos atributos passados por parametro
 */

type CriterioExclude = Exclude<Criterio, "greater">;

const excludedCriterio: CriterioExclude = "lower"; // agora só aceita lower

/**
 * * 6. Record
 *
 * * Cria uma estrutura de chave valor associando 2 tipos, como um HashMap, por exemplo, [string] : [pessoa]
 */

type Pessoas = Record<string, Person>;

const pessoas: Pessoas = {
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
