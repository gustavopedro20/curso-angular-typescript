import { DaoInterface } from "./DaoInterface";
import Concessionaria from './Concessionaria'

export class ConcessionariaDao implements DaoInterface {

    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: Concessionaria): boolean {
        console.log('logica de update')
        return true
    }

    remover(id: number): Concessionaria {
        console.log('logica de update delete')
        return new Concessionaria('', [])
    }

    selecionar(id: number): Concessionaria {
        console.log('logica de update select')
        return new Concessionaria('', [])
    }
    selecionarTodos(): [Concessionaria] {
        console.log('logica findAll')
        return [new Concessionaria('', [])]
    }

}