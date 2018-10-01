import {ClienteCine} from "./ClienteCine"; //sala de cinema precisa das informações q Cliente tem


export class SalaCine{
    private lotacao: any[]; //numero maximo de cadeira que eu tenho na sala, sua qtd, recebe 1 os - e depois recebe o obj cliente e subistui por - 
    private clientes: ClienteCine[] = new Array(); //array para salvar todos os cliente de CLIENTESCINE
    
    public constructor (qtd:number){
        this.lotacao = new Array(qtd); // quantidade expecifica 
        
        // for(let i in this.lotacao){
        //     this.lotacao[i] = "- ";
        // } 
        
        // forma reduzida do codigo abaixo -v
      
        for(let i = 0; i < this.lotacao.length;i++){ // length é pra pegar o tam do array 
            this.lotacao[i] = "- ";
        }  

    }


    public setCliente(cliente: ClienteCine[]):void{
        this.clientes = cliente; // vazio vai receber cliente que tem as informações dada pelo usuario
    }
    public getCliente():any{
        return this.clientes;
    }
    
    public setLotacao(lotacao:number):void{
        this.lotacao = new Array(lotacao);
    }
    public getLotacao():any{ //any recebe qualquer valor, ja que a lotação é um array que pode receber tanto os - quanto as informaçoes de cliente
        return this.lotacao;
    }

    public verStatus(): string{
        let res: string = "[ ";
        for (let i of this.lotacao){ // o "of" pega valor e não a posição, para posição é "in"
            if(i != "- "){ 
                res += i.getId() + ":" + i.getTelefone() + " "; // vai mostrar o ID e o Telefone do cliente i 
                // objs tem metodos, pra ver atributo eu preciso chamar o metodo
                // i.getalgumacoisa() eu estou fazendo o i pegar os informações dadas e mostrala 
            }else{
                res += i; //vai mostrar só o - 
            }
        }
        res += "] \n";
        return res;
    }

    public cadCliente(cliente: ClienteCine, cadeira:number): void{
        if(this.lotacao[cadeira] != "- "){ //esse valor entre "" deve ver o mesmo do colocado no construtor
            console.log("OCUPADO");
        } else { 
            this.lotacao[cadeira] = cliente;
            this.clientes.push(cliente); //estava "cliente" e esse nome era igual ao que vinha como paramento por isso a incopatibilidade 
        }
    }

    public cancelar(id:string): any{
         for(let i in this.lotacao){
            if (this.lotacao[i] != "- "){
                if (this.lotacao[i].getId() == id){
                    this.lotacao[i] = "- ";
                }
            }
        }

    }
}

