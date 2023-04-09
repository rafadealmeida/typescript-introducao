export class Negociacao{

    constructor(private _data: Date, public readonly quantidade: number, public readonly valor: number){}

    get data(): Date{
        const data = new Date(this._data.getTime())
        return data;
    }
  
    get volume(){
        return this.valor*this.quantidade
    }

    public static criaNegociacao(dataString: string, quantidateString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidateString);
        const valor = parseFloat(valorString)
        
        return new Negociacao(date, quantidade, valor)
    }
}