import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export class MotoDao implements DaoInterface {

    nomeTabela: string = 'tb_carro'

    inserir(object: Carro): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: Carro): boolean {
        console.log('logica de update')
        return true
    }

    remover(id: number): Carro {
        console.log('logica de update delete')
        return new Carro('', 0)
    }

    selecionar(id: number): Carro {
        console.log('logica de update select')
        return new Carro('', 0)
    }

    selecionarTodos(): [Carro] {
        console.log('logica findAll')
        return [new Carro('', 0)]
    }
}
