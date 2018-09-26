declare function require (msg:string): any; //padrão
var readline= require('readline-sync');

import {SalaCine} from "./SalaCine";
import { ClienteCine } from "./ClienteCine";


//vai controlar a entrada das cadeiras e saber quais estam livres
export class Controlador{
    private sala: SalaCine;
    private cliente:ClienteCine;

    constructor(qtd:number){
        this.sala= new SalaCine(qtd);
    }
   
    public criarSala(qtd:number): void{
        this.sala = new SalaCine(qtd);
    }
    public verStatus():string{
        return this.sala.verStatus();   // ver o status, quantas cadeiras eu tenho livres
    }

    public cadCliente(id:string, telefone:string, lugar:number):void{
        //não retorna nada > void
        this.sala.cadCliente(new ClienteCine(id, telefone, lugar),lugar);
    }

    
}
