class carro{
    constructor(marca){
        this.marca=marca;
    }
}

//extends: a classe modelo herda os atributos e funções da classe carro
class modelo extends carro{
    constructor(marca,cor,ano){
        //super para chamar o construtor marca
        super(marca);
        this.modelo=cor;
        this.ano=ano;
    }
}

var audi=new modelo("Audi","w3","Branco");
console.log(audi)
