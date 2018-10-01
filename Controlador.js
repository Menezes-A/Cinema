"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var SalaCine_1 = require("./SalaCine");
var ClienteCine_1 = require("./ClienteCine");
//vai controlar a entrada das cadeiras e saber quais estam livres
var Controlador = /** @class */ (function () {
    function Controlador(qtd) {
        this.sala = new SalaCine_1.SalaCine(qtd); // a variavel sala, cria uma nova Sala com a qtd passada pelo usuario la na principal. 
    }
    Controlador.prototype.criarSala = function (qtd) {
        this.sala = new SalaCine_1.SalaCine(qtd);
    };
    Controlador.prototype.verStatus = function () {
        return this.sala.verStatus(); // ver o status, quantas cadeiras eu tenho livres
    };
    Controlador.prototype.cadCliente = function (id, telefone, cadeira) {
        //pegando os valores dados na principal que são atributos da class ClienteCine e criando um obj cliente.
        //não retorna nada = void
        this.sala.cadCliente(new ClienteCine_1.ClienteCine(id, telefone, cadeira), cadeira); //2 cadeira vai dizer o local que ele vai está no array lotação[]
    };
    Controlador.prototype.cancelar = function (id) {
        this.sala.cancelar(id);
    };
    return Controlador;
}());
exports.Controlador = Controlador;
