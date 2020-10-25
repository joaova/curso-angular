"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDAO = void 0;
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var ConcessionariaDAO = /** @class */ (function () {
    function ConcessionariaDAO() {
        this.nomeTabela = "tb_concenssionaria";
    }
    ConcessionariaDAO.prototype.inserir = function (object) {
        console.log("Lógica insert");
        return true;
    };
    ConcessionariaDAO.prototype.atualizar = function (object) {
        console.log("Lógica update");
        return true;
    };
    ConcessionariaDAO.prototype.remover = function (id) {
        console.log("Lógica delete");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDAO.prototype.selecionar = function (id) {
        console.log("Lógica select");
        return new Concessionaria_1.default("", []);
    };
    ConcessionariaDAO.prototype.selecionarTodos = function () {
        console.log("Lógica selectall");
        return [];
    };
    return ConcessionariaDAO;
}());
exports.ConcessionariaDAO = ConcessionariaDAO;
