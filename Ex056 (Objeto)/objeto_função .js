function pessoa(nome,idade,peso){
    this.nome=nome;
    this.idade=idade;
    this.peso=peso;
}

const eu= new pessoa('Joaquim',20,78)
console.log(eu)
console.log(`${eu.nome} tem ${eu.idade} anos`)