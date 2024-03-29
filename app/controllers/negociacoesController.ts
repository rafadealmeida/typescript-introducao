import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesViews } from "./views/negociacoes-views.js";
import { MensagemView  } from "./views/mensagem-view.js";
import { DiasDaSemana } from '../enums/dias-da-semana';

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

    public adicionar(): void{
        const negociacao = this.criaNegociacao()
        if(!this.ehDiaUtil(negociacao.data)){
            this.mensagemView.update("Apenas negociações em dias úteis são permitidas!")
            return;
        }
       this.negociacoes.adiciona(negociacao)
       this.atualizaView()
       this.limpaFormulario()
    }

    private ehDiaUtil(data:Date):Boolean{
        return data.getDay()> DiasDaSemana.DOMINGO && data.getDay()< DiasDaSemana.SABADO
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value)
        
        return new Negociacao(date, quantidade, valor)
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