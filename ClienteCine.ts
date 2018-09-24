export class ClienteCine{ //informaçoes do cliente 
    private id:string; 
    private telefone:string;
    private lugar:number;
    
    public constructor(id:string,telefone:string,lugar:number){
        this.id = id;
        this.telefone = telefone;
        this.lugar = lugar;
    }

    public getId():string{ //pegar o numero do id que a pessoa vai digitar
        return this.id;
    }
    public setId(id:string):void{
            this.id = id;
        
    }

    public getTelefone():string{
        return this.telefone;
    }
    public setTelefone(tell:string):void{
        if(tell.length > 8){
            this.telefone = tell;
        }
    }

    public getLugar():number{
        return this.lugar; //guarda lugar que a pessoa escolheu
    }
    public setLugar(lugar:number):void{
        if(lugar>=0){
            this.lugar = lugar;
        }
    }

    public toString():string{
        return  "Id: " + this.id + "\n" +
                "Telefone: " + this.telefone + "\n"+
                " Seu Lugar: " + this.lugar + "/n"; //mostrar
    }
}