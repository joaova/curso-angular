import { DAOInterface } from './DAOInterface';
import Concessionaria from './Concessionaria'

export class ConcessionariaDAO implements DAOInterface {

    nomeTabela: string = "tb_concenssionaria";

    inserir(object: any): boolean {
        console.log("Lógica insert")
        return true;
    }

    atualizar(object: any): boolean {
        console.log("Lógica update")
        return true;
    }

    remover(id: number): Concessionaria {
        console.log("Lógica delete")
        return new Concessionaria("", []);
    }

    selecionar(id: number): Concessionaria {
        console.log("Lógica select")
        return new Concessionaria("", []);
    }

    selecionarTodos(): Concessionaria[] {
        console.log("Lógica selectall")
        return [];
    }

}