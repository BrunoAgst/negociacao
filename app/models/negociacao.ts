export class Negociacao {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(){
        const data = new Date(this._data.getTime());
        return data;
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quatidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quatidade, valor);
    }
}