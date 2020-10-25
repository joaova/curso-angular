"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAO = void 0;
var DAO = /** @class */ (function () {
    function DAO() {
        this.nomeTabela = "tb_pessoa";
    }
    DAO.prototype.inserir = function (object) {
        console.log("Lógica insert");
        return true;
    };
    DAO.prototype.atualizar = function (object) {
        console.log("Lógica update");
        return true;
    };
    DAO.prototype.remover = function (id) {
        console.log("Lógica delete");
        return Object();
    };
    DAO.prototype.selecionar = function (id) {
        console.log("Lógica select");
        return Object();
    };
    DAO.prototype.selecionarTodos = function () {
        console.log("Lógica selectall");
        return [];
    };
    return DAO;
}());
exports.DAO = DAO;
