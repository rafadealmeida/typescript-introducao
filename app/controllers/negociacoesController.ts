import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesViews } from "../views/negociacoes-views.js";
import { MensagemView  } from "../views/mensagem-view.js";
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes
    private negociacoesView = new NegociacoesViews("#negociacoesView", true)
    private mensagemView = new MensagemView("#mensagemView")

    constructor(){
        this.inputData = document.querySelector("#data") as HTMLInputElement
        this.inputQuantidade = document.querySelector("#quantidade")  as HTMLInputElement
        this.inputValor = document.querySelector("#valor")  as HTMLInputElement
        this.negociacoesView.update(this.negociacoes)
    }

    public adicionar(): void{
        const negociacao = Negociacao.criaNegociacao(
            this.inputData.value, 
            this.inputQuantidade.value, 
            this.inputValor.value
        )
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas negociações em dias úteis são permitidas!")
            return;
        }
       this.negociacoes.adiciona(negociacao)
       this.limpaFormulario()
       this.atualizaView()
    }

    private ehDiaUtil(data:Date):Boolean{
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay()< DiasDaSemana.SABADO
    }

    private limpaFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value='';
        this.inputValor.value = '';
        this.inputData.focus()
    }

    private atualizaView():void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação bem sucedida ")
    }
}