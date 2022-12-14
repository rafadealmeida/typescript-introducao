import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesViews } from "./views/negociacoes-views.js";
import { MensagemView  } from "./views/mensagem-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes
    private negociacoesView = new NegociacoesViews("#negociacoesView")
    private mensagemView = new MensagemView("#mensagemView")

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    adicionar(): void{
       const negociacao = this.criaNegociacao()
       this.negociacoes.adiciona(negociacao)
       this.negociacoesView.update(this.negociacoes)
       console.log(this.inputData.value)
       this.mensagemView.update("Negociação bem sucedida ")
       this.limpaFormulario()
    }

    criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value)
        
        return new Negociacao(date, quantidade, valor)
    }

    limpaFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value='';
        this.inputValor.value = '';

        this.inputData.focus()
    }
}