export class Negociacao {
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    get data() {
        const data = new Date(this._data.getDate());
        return data;
    }
    get volume() {
        return this._valor * this._quantidade;
    }
}
