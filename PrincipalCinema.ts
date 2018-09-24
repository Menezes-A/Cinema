declare function require (msg:string): any; //padrão
var readline= require('readline-sync');

import {Controlador} from "./Controlador"
let menu: boolean = true;
while(menu){
    console.log("\n Menu: \n Reservar cadeira");
    let comandos: string = (readline.question("Digite o comando: \n ")); 
    switch(comandos){
         
        case "reservar":
            let novoId: string = readline.question("digite o ID:");
            let novoFone: string = readline.question("digite o Fone:");
            let lugar: number = parseInt(readline.question("digite o assento desejado:"));
            
            if( this.controlador.reservar(novoId,novoFone,lugar) == true){ //deu certo
                console.log("ok");
            }else{
                console.log("erro");
            }
            break;

            break;
        default:
            console.log("opcao inexistente");
            break;
    }
}
