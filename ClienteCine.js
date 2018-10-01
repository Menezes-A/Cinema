"use strict";
exports.__esModule = true;
var ClienteCine = /** @class */ (function () {
    function ClienteCine(id, telefone, cadeira) {
        this.id = id;
        this.telefone = telefone;
        this.cadeira = cadeira;
    }
    ClienteCine.prototype.getId = function () {
        return this.id;
    };
    ClienteCine.prototype.setId = function (id) {
        this.id = id;
    };
    ClienteCine.prototype.getTelefone = function () {
        return this.telefone;
    };
    ClienteCine.prototype.setTelefone = function (telefone) {
        if (telefone.length > 8) {
            this.telefone = telefone;
        }
    };
    ClienteCine.prototype.getCadeira = function () {
        return this.cadeira;
    };
    ClienteCine.prototype.setCadeira = function (cadeira) {
        if (cadeira >= 0) {
            this.cadeira = cadeira;
        }
    };
    return ClienteCine;
}());
exports.ClienteCine = ClienteCine;
