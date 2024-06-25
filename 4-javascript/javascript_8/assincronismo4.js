const fs = require("fs");

/**
 * * Função assíncrona
 *
 * * 2 -  PROMISES - Async e Await
 *
 * ? Estados da Promise
 *
 * ? 1 - Pending
 * ? 2 - Fullfiled
 * ? 3 - Rejected
 *
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

/**
 * * Exemplo 1
 */

// (async () => {
//   let response = await lerArquivoPromise();
//   console.log(response);
// })();

/**
 * * Exemplo 2
 */

async function leituraDeDados() {
  console.log("Isso é executado ANTES da promisse ser resolvida");

  try {
    const response = await lerArquivoPromise();
    console.log("Deu certo", response);
    console.log("Isso é executado DEPOIS da promisse ser resolvida");
  } catch (err) {
    console.log("Deu errado:", err);
  } finally {
    console.log("Isso é executado sempre ao final!");
  }
}

leituraDeDados();
