import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface {

    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        console.log('logica de insert')
        return true
    }

    atualizar(object: Moto): boolean {
        console.log('logica de update')
        return true
    }

    remover(id: number): Moto {
        console.log('logica de update delete')
        return new Moto()
    }

    selecionar(id: number): Moto {
        console.log('logica de update select')
        return new Moto()
    }

    selecionarTodos(): [Moto] {
        console.log('logica findAll')
        return [new Moto()]
    }
}
