import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
    
    nomeTabela: string = '';

    inserir(object: T): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: T): boolean {
        console.log('logica de update')
        return true
    }

    remover(id: number): T {
        console.log('logica de update delete')
        return Object()
    }

    selecionar(id: number): T {
        console.log('logica de update select')
        return Object()
    }

    selecionarTodos(): [T] {
        console.log('logica findAll')
        return [Object()]
    }


}