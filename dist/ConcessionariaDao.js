"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log('logica de update delete');
        return null;
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log('logica de update select');
        return null;
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log('logica findAll');
        return [new Array];
    };
    return ConcessionariaDao;
}());
