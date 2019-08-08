import { DaoInterface } from "./DaoInterface";
import Concessionaria from './Concessionaria'

class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: any): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: any): boolean {
        console.log('logica de update')
        return true
    }

    remover(id: number): any{
        console.log('logica de update delete')
        return null
    }

    selecionar(id: number): any {
        console.log('logica de update select')
        return null
    }
    selecionarTodos(): [any] {
        console.log('logica findAll')
        return [new Array]
    }

}