let pessoa={nome:"Joaquim", idade:20,peso:78,
    //função no objeto
    engordar(p=0){
        console.log(`${this.nome} engordou ${p} kilos`)
        this.peso+=p
    }
}
console.log(pessoa)
pessoa.engordar(3)
console.log(pessoa)