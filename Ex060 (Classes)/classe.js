class pessoa{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
}
const p1=new pessoa("Joaquim",20); 
console.log(`${p1.nome} tem ${p1.idade} anos`)