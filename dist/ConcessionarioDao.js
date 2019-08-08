"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionarioDao = /** @class */ (function () {
    function ConcessionarioDao() {
        this.nomeTabela = 'tb_concessionaria';
    }
    ConcessionarioDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    ConcessionarioDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    ConcessionarioDao.prototype.remover = function (id) {
        console.log('logica de update delete');
        return null;
    };
    ConcessionarioDao.prototype.selecionar = function (id) {
        console.log('logica de update select');
        return null;
    };
    ConcessionarioDao.prototype.selecionarTodos = function () {
        console.log('logica findAll');
        return [new Array];
    };
    return ConcessionarioDao;
}());
