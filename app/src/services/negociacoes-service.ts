import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {
    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacaoDoDia[]) => {
                return dados.map(dadoHoje => {
                    return new Negociacao(new Date(), dadoHoje.vezes, dadoHoje.montante);
                })
            })
    }
}