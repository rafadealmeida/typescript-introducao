import { NegociacaoController } from "./controllers/negociacoesController.js";
import { NegociacoesViews } from "./controllers/views/negociacoes-views.js";

const controller = new NegociacaoController

const form = document.querySelector(".class")

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    controller.adicionar()
})
 
