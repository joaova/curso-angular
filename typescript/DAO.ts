import { DAOInterface } from './DAOInterface';

export class DAO<T> implements DAOInterface<T> {
    nomeTabela: string = "tb_pessoa";

    inserir(object: T): boolean {
        console.log("Lógica insert")
        return true;
    }

    atualizar(object: T): boolean {
        console.log("Lógica update")
        return true;
    }

    remover(id: number): T {
        console.log("Lógica delete")
        return Object();
    }

    selecionar(id: number): T {
        console.log("Lógica select")
        return Object();
    }

    selecionarTodos(): T[] {
        console.log("Lógica selectall")
        return [];
    }
}