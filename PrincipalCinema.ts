declare function require (msg:string): any; //padrão
var readline= require('readline-sync');

import {Controlador} from "./Controlador";



let quantidade: number = readline.question("Quantidade de Poltronas disponivel:")
let control : Controlador = new Controlador (Number(quantidade));


function executa(): string{
    return "MENU: \n 1 - Cadastra Cliente \n 2 - Criar nova sala \n 3 - Parar";
}
    let menu: boolean = true;
    while(menu){
        console.log(control.verStatus());//imprimir o status
        console.log(executa()); // vai executar o comando que foi pedido la em cima
        let comandos: string = (readline.question("Digite o comando: \n ")); 
        switch(comandos){
            
            case "1":
                let id: string = readline.question("digite o ID:");
                let telefone: string = readline.question("digite o Fone:");
                let lugar: number = parseInt(readline.question("digite o assento desejado:")); //parseint transformar string em numero inteiro
                control.cadCliente(id,telefone,lugar);
                break;
            
            case "2":
              let quantidade:number = readline.question("Quantas poltronas:")
              control = new Controlador(Number(quantidade));
              break;

            case "3":
                menu= false;
                break;


            default:
                console.log("opção inexistente");
            break;
        }
}
