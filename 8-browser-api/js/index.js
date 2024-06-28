// console.log(document.title);
// console.log(document.URL);

/**
 * * Selecionando elementos HTML da nossa página utilizando o document
 */

/**
 * * 1. Selecionando pelo nome da tag
 */
// const h1s = document.getElementsByTagName("h1");
// console.log(h1s[0]);
const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos);

/**
 * * 2. Selecionando pelo nome da classe
 */

const paragrafos2 = document.getElementsByClassName("paragrafo");

console.log(paragrafos2);

/**
 * * 3. Seleiconando pelo nome da tag
 */

const inputByName = document.getElementsByName("email");

console.log(inputByName);

/**
 * * 4. Seleiconando pelo id da tag
 */

const imgJsLogo = document.getElementById("js-logo");

console.log(imgJsLogo);

/**
 * * 5. Query Selector
 */

const imagem = document.querySelector("body > img#js-logo");

console.log(imagem);

const paragrafos3 = document.querySelectorAll("body > p");

console.log(paragrafos3);

console.clear();

/**
 * * Acessando / alterando o conteúdo HTML das tags
 */

const primeiroParagrafo = document.querySelector("body > p.paragrafo");

console.log(primeiroParagrafo);

// * Usando .textContent ou .innerHTML
console.log("conteudo por textContent:", primeiroParagrafo.textContent); // Pega o conteúdo em texto e ignora tags internas.
console.log("conteudo por innerHTML:", primeiroParagrafo.innerHTML); // Pega o coonteúdo que está dentro da tag incluindo tags html internas.

primeiroParagrafo.textContent = "<strong>Outra coisa</strong>"; // altera tudo o que tem dentro da tag retornada, mas renderiza como texto

primeiroParagrafo.innerHTML = "<strong>Outra coisa</strong>"; // altera tudo o que tem dentro da tag retornada, mas renderiza como htmk

console.clear();

// * Usando .value

inputByName[0].value = "neto@email.com";

console.log(inputByName[0].value);

/**
 * * 3. Criando elementos na página HTML
 */

// * APPEND CHILD

const novaTagLi = document.createElement("li"); // criando tag li vazia

novaTagLi.textContent = "Terceiro Item"; // adicionando texto na tag

console.log(novaTagLi);

const lista = document.querySelector("body > ul#lista");

lista.appendChild(novaTagLi); // Adiciona no fim

// * INSERT BEFORE

const listaLis = document.querySelectorAll("ul#lista > li");

const novaTagLi2 = document.createElement("li"); // criando tag li vazia

novaTagLi2.textContent = "Segundo Item"; // adicionando texto na tag

lista.insertBefore(novaTagLi2, listaLis[listaLis.length - 1]);

/**
 * * 4. Removendo elemento na página HTML
 */

lista.removeChild(novaTagLi2);
