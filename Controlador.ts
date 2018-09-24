import {SalaCine} from "./SalaCine";

//vai controlar a entrada das cadeiras e saber quais estam livres
class Controller{
    private controlador: SalaCine;

    constructor(){
        this.controlador= new SalaCine(5);
    }

}