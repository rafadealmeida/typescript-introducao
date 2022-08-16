export class Negociacao{

    constructor(private _data: Date, public readonly _quantidade: number, public readonly _valor: number){}

    get data(): Date{
        const data = new Date(this._data.getDate())
        return data;
    }
  
    get volume(){
        return this._valor*this._quantidade
    }
}