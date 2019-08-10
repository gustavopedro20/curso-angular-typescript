"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_carro';
    }
    MotoDao.prototype.inserir = function (object) {
        console.log('logica de insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        console.log('logica de update');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        console.log('logica de update delete');
        return new Carro_1.default('', 0);
    };
    MotoDao.prototype.selecionar = function (id) {
        console.log('logica de update select');
        return new Carro_1.default('', 0);
    };
    MotoDao.prototype.selecionarTodos = function () {
        console.log('logica findAll');
        return [new Carro_1.default('', 0)];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
