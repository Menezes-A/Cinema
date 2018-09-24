import {SalaCine} from "./SalaCine";
import { ClienteCine } from "./ClienteCine";
declare function require (msg:string): any; //padrão
var readline= require('readline-sync');

//vai controlar a entrada das cadeiras e saber quais estam livres
export class Controlador{
    private controlador: SalaCine;

    constructor(){
        this.controlador= new SalaCine(5);
    }

    
}