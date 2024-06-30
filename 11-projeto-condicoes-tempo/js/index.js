var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saudacao } from "./exemplo.js";
saudacao();
const form = document.querySelector("#search-form > form");
const localizacaoInput = form === null || form === void 0 ? void 0 : form.querySelector("input#input-localizacao");
const tempoInfoSection = document.querySelector("#tempo-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!localizacaoInput || !tempoInfoSection)
        return;
    const localizacao = localizacaoInput.value;
    if (localizacao.length < 3) {
        alert("O local precisa ter, pelo menos, 3 letras");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=53f474d557b73cd3bebbdc6c93ab062c&lang=pt_BR&units=metric`);
        const dados = yield response.json();
        const infos = {
            temperatura: Math.round(dados.main.temp),
            local: dados.name,
            icon: `http://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`,
            descricao: dados.weather[0].description,
        };
        const tempoInfoHtml = `
        <div class="tempo-info-group">
          <h2>${infos.local}</h2>
          <span>${infos.temperatura}º</span>
          <p>${infos.descricao}</p>
        </div>
        <img src="${infos.icon}">
    `;
        tempoInfoSection.innerHTML = tempoInfoHtml;
    }
    catch (err) {
        console.log("Deu um erro na obtenção dos dados da API.", err);
    }
}));
