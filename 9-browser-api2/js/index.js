const btnAumentar = document.querySelector("#btn_aumentar");
const btnDiminuir = document.querySelector("#btn_diminuir");
const contador = document.querySelector("#contador");

let valorAtualContador = Number(contador.textContent);

const input = document.querySelector("#input");

console.log(valorAtualContador);

btnAumentar.addEventListener("click", (event) => {
  valorAtualContador++;
  contador.textContent = valorAtualContador;
  btnAumentar.classList.add("btn");
  btnDiminuir.classList.remove("btn");
});

btnDiminuir.addEventListener("click", (event) => {
  valorAtualContador--;
  contador.textContent = valorAtualContador;
  btnAumentar.classList.remove("btn");
  btnDiminuir.classList.add("btn");
});

input.addEventListener("input", (event) => {
  console.log(event);
});

/**
 * * Adicionando estilo inline no elemento do contador
 */

contador.style.color = "red";
contador.style.padding = "0 2rem";
contador.style["background-color"] = "#AAA"; //contador.style.backgroundColor também funciona
contador.style.border = "1px solid #333";
contador.style.width = "16px";

/**
 * * Manipulando classes js
 */

// console.log(btnDiminuir.classList);
// btnAumentar.classList.add("btn");
// btnDiminuir.classList.remove("btn");

const btnTheme = document.querySelector("#theme");

let darkTheme;

// Definindo uma função que será executada ao carregar o conteúdo da pagina
window.onload = () => {
  const isDarkThemeStorage = localStorage.getItem("isDarkTheme");

  darkTheme = isDarkThemeStorage === "true";

  changeTheme(darkTheme);
};

btnTheme.addEventListener("click", (event) => {
  darkTheme = !darkTheme;

  localStorage.setItem("isDarkTheme", darkTheme);

  changeTheme(darkTheme);
});

function changeTheme(isDarkTheme) {
  const body = document.querySelector("body");
  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
}

/**
 * * LocalStorage e SessionStorage
 *
 * * 1. LocalStorage - mantém os dados vinculados a raiz da URL e não perde as informações mesmo que o navegador seja fechado.
 * * 2. SessioStorage - mantém os dados vinculados a raiz da URL e mantem a sessão/dados apenas enquanto o navegador/aba está aberto/a.
 */

// localStorage.setItem("nome", "Francisco Neto");
// localStorage.setItem("idade", 36);
// const nome = localStorage.getItem("nome");
// console.log(nome);
// localStorage.removeItem("nome");
// localStorage.clear();

// SessionStorage é igual, porém a sessão está vincualda ao navegador/aba aberto/a. Se fechar, perde as informações.
