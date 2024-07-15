class carro {
    constructor(marca) {
      this.marca = marca;
    }
    get nome() {
      return this.nome;
    }
    set nome(x) {
      this.nome = x;
    }
}
  
const gol = new carro("gol");
console.log(gol)