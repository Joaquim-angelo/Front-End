const variaveis= new Set();
variaveis.add("a");
variaveis.add("b");
variaveis.add("c");
console.log(variaveis)

//variaveis contem a variável b?
console.log(variaveis.has("b"))

const letters = new Set(["a","b","c"]);

//forEarch(): invoca uma função para cada elemento do set
let texto = "";
variaveis.forEach (function(valor) {
  texto += valor;
})
console.log(texto)