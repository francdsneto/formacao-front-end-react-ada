"use strict";
/**
 * * Aula sobre POO no TypeScript
 *
 * * Classe
 * * Abstração de uma entidade do mundo real
 */
class Pessoa {
    /**
     * *Método Construtor: é obrigatório
     */
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    /**
     * * Métodos: Ações - funções
     */
    dormir() {
        console.log("Dormindo ... zzz 💤😴");
    }
    get cpf() {
        return this._cpf;
    }
    set cpf(cpf) {
        if (cpf.length !== 14) {
            throw new Error("CPF lenght is incorrect!");
        }
        this._cpf = cpf;
    }
}
class Professor extends Pessoa {
    constructor(nome, idade, altura, cpf, codigo) {
        super(nome, idade, altura, cpf);
        this.codigo = codigo;
    }
    ensinar() {
        console.log("Ensinando 🧑‍🏫");
    }
}
class Aluno {
}
/**
 * * Criando uma pessoa (individuo) a partir da definição da classe Pessoa
 */
const pessoa1 = new Pessoa("Francisco Neto", 36, 1.8, "123.456.789-10");
pessoa1.dormir();
console.log(pessoa1);
/**
 * Usando métodos Acessors
 */
console.log(pessoa1.cpf);
// pessoa1.cpf = "10"; // passa valor como atributo, e não como método pessoa1.cpf('10');
// console.log(pessoa1.cpf);
//Objeto professor
const professor = new Professor("Professor", 30, 1.7, "123.123.123-12", "12345");
console.log(professor);
professor.dormir();
professor.ensinar();
/**
 * * Polimorfismo
 *
 * * Básicamente é uma definição de que classes herdeiras podem ser consideradas como do tipo da classe mãe.
 */
console.log("pessoa1 é do tipo pessoa?", pessoa1 instanceof Pessoa);
console.log("professor é do tipo pessoa?", professor instanceof Pessoa);
console.log("pessoa1 é do tipo professor?", pessoa1 instanceof Professor);
console.log("professor é do tipo professor?", professor instanceof Professor);
