import {ClienteCine} from "./ClienteCine"


export class SalaCine{
    private lotacao: number;
    private cadeira: string []; //array para criar as cadeiras (-) 
    
    public constructor (lotacao:number){
        this.lotacao = lotacao;
        this.cadeira = [];
    }
    

    public status(): string{
        let res: string="[ ";

        for (let i: number = 0; i < this.lotacao; i++){
            if(this.cadeira[i]== undefined){
                res += "-  ";
            }
            else{
                res += this.cadeira[i].toString();
            }
        }
    res += "] \n";
    return res;
    }

    public reservar(id: string, telefone: string, cadeira: number): boolean{ 
        if(this.cadeira[cadeira] != undefined){
            return false;
        }

       // for(let i: number = 0; i < this.lotacao; i++){
       //     if (this.cadeira[i] != undefined){
       //         if(this.cadeira[i].getId() == id){
       //             return false;
       //         }
       //     }    
       // }

    }
}
