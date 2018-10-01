"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var Controlador_1 = require("./Controlador");
var quantidade = readline.question("Quantidade de Poltronas disponivel:");
var control = new Controlador_1.Controlador(Number(quantidade));
var menu = true;
while (menu) {
    console.log(control.verStatus()); //imprimir o status
    console.log("MENU: \n 1 - Cadastra Cliente \n 2 - Criar nova sala \n 3 - Cancelar \n 4 - Parar");
    var comandos = (readline.question("Digite o comando: \n "));
    switch (comandos) {
        case "1":
            var id = readline.question("digite o ID:");
            var telefone = readline.question("digite o Fone:");
            var lugar = Number(readline.question("digite o assento desejado:")); //parseint transformar string em numero inteiro, Number tbm transforma string em numero
            control.cadCliente(id, telefone, lugar);
            break;
        case "2":
            var quantidade_1 = readline.question("Quantas poltronas:");
            control = new Controlador_1.Controlador(Number(quantidade_1));
            break;
        case "3":
            var idCancela = readline.question("Digite seu id para cancelar:");
            control.cancelar(idCancela);
            break;
        case "4":
            menu = false;
            break;
        default:
            console.log("opção inexistente");
            break;
    }
}
