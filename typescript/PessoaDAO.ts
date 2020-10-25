import { DAOInterface } from './DAOInterface';
import Pessoa from "./Pessoa";

export class PessoaDAO implements DAOInterface {

    nomeTabela: string = "tb_pessoa";

    inserir(object: any): boolean {
        console.log("Lógica insert")
        return true;
    }

    atualizar(object: any): boolean {
        console.log("Lógica update")
        return true;
    }

    remover(id: number): Pessoa {
        console.log("Lógica delete")
        return new Pessoa("", "");
    }

    selecionar(id: number): Pessoa {
        console.log("Lógica select")
        return new Pessoa("", "");
    }

    selecionarTodos(): Pessoa[] {
        console.log("Lógica selectall")
        return [];
    }

}