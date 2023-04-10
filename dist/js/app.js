import { NegociacaoController } from './controllers/negociacoesController.js';
const controller = new NegociacaoController;
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.adicionar();
    });
}
else {
    throw new Error("Verifique se o form é diferente de nulo!");
}
