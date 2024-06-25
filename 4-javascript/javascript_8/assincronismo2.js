/**
 * * Função assíncrona
 *
 * * 1 -  Callbacks
 */

console.log("Antes do timer");

setTimeout(() => {
  console.log("Executado no callback após 2 segundos");
}, 2000);

console.log("Depois do timer");
