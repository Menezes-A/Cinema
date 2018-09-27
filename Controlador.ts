declare function require (msg:string): any; //padrão
var readline= require('readline-sync');

import {SalaCine} from "./SalaCine";
import { ClienteCine } from "./ClienteCine";


//vai controlar a entrada das cadeiras e saber quais estam livres
export class Controlador{
    private sala: SalaCine; // o atributo sala, vai receber SalaCine q é a minha class. 

    constructor(qtd:number){ // qtd= quantidade, da principal
        this.sala= new SalaCine(qtd); // a variavel sala, cria uma nova Sala com a qtd passada pelo usuario la na principal. 
    }
   
    public criarSala(qtd:number): void{ // void ( criar, add, setar) normalmente n retornam nada por isso é void 
        this.sala = new SalaCine(qtd);
    }
    public verStatus(): string{
        return this.sala.verStatus();   // ver o status, quantas cadeiras eu tenho livres
    }

    public cadCliente(id:string, telefone:string, cadeira:number): void{ 
        //pegando os valores dados na principal que são atributos da class ClienteCine e criando um obj cliente.
        //não retorna nada = void
        this.sala.cadCliente(new ClienteCine(id, telefone, cadeira),cadeira); //2 cadeira vai dizer o local que ele vai está no array lotação[]
    }

    public cancelar(id:string): void {
        this.sala.cancelar(id);

    }

    
}
