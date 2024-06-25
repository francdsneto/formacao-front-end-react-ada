const fs = require("fs");

/**
 * Para instalar o ESLINT: npm install eslint
 *
 * Para informar que o eslint será usado apenas durante o desenvolvimento, mas não no produto final, podemos usar o --save-dev ou -D ao final do comando acima:
 *
 * npm install eslint -D || npm install eslint --save-dev
 *
 */

const aula = "JSON";

//Exemplo de unused var alertado pelo eslint
let bola = "quadrada";

console.log(aula);

console.clear();

// Transformando JSON em Objeto JS

// function executarPromise() {
//   return new Promise((resolve, reject) => {
//     fs.readFile(".prettierrc.json", (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(JSON.parse(data));
//       }
//     });
//   });
// }

// (async () => {
//   try {
//     const response = await executarPromise();
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// Convertendo String em Objeto JS

const jsonString = '{"nome":"Neto"}';

const objFromJsonString = JSON.parse(jsonString);

console.log(objFromJsonString.nome);

// Convertendo Objeto para String JSON

const pessoa = {
  nome: "Tony Stark",
  heroi: "Homem de Ferro",
};

const pessoaJsonString = JSON.stringify(pessoa);

console.log(pessoaJsonString, typeof pessoaJsonString);
