import { NegociacaoController } from './controllers/negociacoesController.js';
const controller = new NegociacaoController;
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    controller.adicionar();
});
