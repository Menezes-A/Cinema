import {ClienteCine} from "./ClienteCine"


export class SalaCine{
    private lotacao: any[]; //numero maximo de cadeira, sua qtd
    private clientes: ClienteCine[] = new Array(); //array para salvar todos os cliente de CLIENTESCINE
    
    public constructor (qtd:number){
        this.lotacao = new Array(qtd);
        
        for(let i in this.lotacao){
            this.lotacao[i] = "- ";
        } 
        
        // forma reduzida do codigo abaixo -v
      
        /*for(let i = 0; i < this.lotacao.length;i++){ // length é pra pegar o tam do array 
            this.lotacao[i] = "- ";
        }   */

    }


    public setCliente(cliente: ClienteCine[]):void{
        this.clientes = cliente;
    }
    public getCliente():any{
        return this.clientes;
    }
    
    public setLotacao(lotacao:number):void{
        this.lotacao = new Array(lotacao);
    }
    public getLotacao():any{
        return this.lotacao;
    }

    public verStatus(): string{
        let res: string = "[ ";
        for (let i in this.lotacao){ // o "of" pega valor e não a posição, para posição é "in"
            if(i != "- "){ 
                res += i.getId() + ":" + i.getTelefone() + " "; // vai mostrar o ID e o Telefone do cliente i 
            }else{
                res += i; //res string que guarda o status do Sala de cinema 
            }
        }
    res += "] \n";
    
    return res;
    }

    public cadCliente(cliente: ClienteCine, lugar:number): void{
        if(this.lotacao[lugar] != "- "){ //esse valor entre "" deve ver o mesmo do colocado no construtor
            console.log("OCUPADO");
        } else {
            this.lotacao[lugar] = cliente;
            this.clientes.push(cliente); //estava "cliente" e esse nome era igual ao que vinha como paramento por isso a incopatibilidade 
        }
    }


}

