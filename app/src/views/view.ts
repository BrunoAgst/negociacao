import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
    
    protected elemento: HTMLElement;

    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}