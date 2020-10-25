import { ConcessionariaInterface } from './ConcessionariaInterface';
import  Carro from "./Carro";

export default class Concessionaria implements ConcessionariaInterface {

    private endereco: string;
    private listaDeCarros: Array<Carro>;

    constructor(endereco: string, listaDeCarros: Array<Carro>) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco(): string {
        return this.endereco;
    }

    public mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros;
    }

    public fornecerHorariosFuncionamento(): string {
        return "De segunda a sexta, das 8 as 18 e sábado das 8 as 12";
    }

}