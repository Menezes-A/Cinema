export class ClienteCine{ //informaçoes do cliente 
    private id:number; 
    private telefone:string;
    private lugar:number;
    
    public constructor(id:number,telefone:string,lugar:number){
        this.id = id;
        this.telefone = telefone;
        this.lugar = lugar;
    }

    public getId():number{ //pegar o numero do id que a pessoa vai digitar
        return this.id;
    }
    public setId(id:number):void{
        if(id>0){  // id não tem q ser maior q 0
            this.id = id;
        }
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