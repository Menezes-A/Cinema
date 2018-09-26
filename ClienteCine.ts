export class ClienteCine{ //informaçoes do cliente a
    private id: string; 
    private telefone: string;
    private cadeira: number;
    
    
    public constructor(id: string, telefone: string, cadeira: number){
        this.id = id;
        this.telefone = telefone;
        this.cadeira = cadeira;
    }

    public getId(): string { //pegar o numero do id que a pessoa vai digitar
        return this.id;
    }
    public setId(id: string): void{
            this.id = id;
        
    }


    public getTelefone(): string{
        return this.telefone;
    }
    public setTelefone(telefone: string): void{
        if(telefone.length > 8){
            this.telefone = telefone;
        }
    }

    public getCadeira(): number{
        return this.cadeira;
    }
    public setCadeira(cadeira: number): void{
        if(cadeira >= 0){
            this.cadeira = cadeira;
        }
    }


    public toString(): string{
        return  "Seu Id: " + this.id + "\n" +
                "Seu Telefone: " + this.telefone + "\n"  +
                "Sua Poltrona: " + this.cadeira + "\n";
    }
}