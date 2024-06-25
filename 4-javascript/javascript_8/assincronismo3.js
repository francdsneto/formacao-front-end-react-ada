const fs = require("fs");

/**
 * * Função assíncrona
 *
 * * 2 -  PROMISES
 *
 * ? Estados da Promise
 *
 * ? 1 - Pending
 * ? 2 - Fullfiled
 * ? 3 - Rejected
 *
 */

// console.log("Antes da criação da promisse!");

// const promessa = new Promise((resolve, reject) => {
//   fs.readFile("./4-javascript/javascript_8/arquivo.json", (err, data) => {
//     if (err) {
//       reject("Ocorreu um erro ao tentar ler o arquivo");
//     } else {
//       resolve(String(data));
//     }
//   });
// });

// promessa
//   .then((retornoDoResolveDaPromessa) => {
//     console.log("Deu certo:", String(retornoDoResolveDaPromessa));
//   })
//   .catch((retornoDoRejectDaPromessa) => {
//     console.log("Deu ruim:", String(retornoDoRejectDaPromessa));
//   })
//   .finally(() => {
//     console.log(
//       "Isso vai ser executado independente do sucesso ou fracasso da promessa, ao finalizar a execução!"
//     );
//   });

/**
 * Função que retorna uma Promise
 * @returns Promise
 */

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("./4-javascript/javascript_8/arquivo.json", (err, data) => {
      if (err) {
        reject("Ocorreu um erro ao tentar ler o arquivo");
      } else {
        resolve(String(data));
      }
    });
  });
}

lerArquivoPromise()
  .then((retornoDoResolveDaPromessa) => {
    console.log("Deu certo:", String(retornoDoResolveDaPromessa));
  })
  .catch((retornoDoRejectDaPromessa) => {
    console.log("Deu ruim:", String(retornoDoRejectDaPromessa));
  })
  .finally(() => {
    console.log(
      "Isso vai ser executado independente do sucesso ou fracasso da promessa, ao finalizar a execução!"
    );
  });
