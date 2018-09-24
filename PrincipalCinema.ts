declare function require (msg:string): any;
var readline= require('readline-sync');

import { ClienteCine  } from "./ClienteCine";

let cliente: ClienteCine = new ClienteCine(); //novo objeto  
let menu: boolean = true;
while (menu){
    console.log("\n Menu: \n Cadastro do Cliente = 1 \n Cadastro da sala= 2 \n");
    let comandos: string = (readline.question("Digite o comando: \n ")); 
    switch (comandos){
        case "1":
            let id: string= (readline.question("Digite o id: "));
            let telefone: string = (readline.question("Digite o telefone: "));
           

        case "2":
        let cadeira: string = (readline.question("Digite o numero de cadeiras vagas: "));

        case "parar":
            menu=false;
            break;
    }