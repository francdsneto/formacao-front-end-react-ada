const fs = require("fs");

/**
 * * Função assíncrona
 *
 * * 1 -  Callbacks
 */

console.log("ANTES da função de ler o arquivo...");

fs.readFile("./4-javascript/javascript_8/arquivo.json", (err, data) => {
  if (err) {
    console.log("Ocorreu um erro ao tentar ler o arquivo", err);
  } else {
    console.log(String(data));
  }
});

console.log("DEPOIS da função de ler o arquivo...");
