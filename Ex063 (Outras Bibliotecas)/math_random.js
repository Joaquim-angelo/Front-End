//gerar número aleatório entre 0 e 1
console.log(Math.random())

//gerar um número inteiro entre 0 e 10
let numero=Math.floor(Math.random()*11)
console.log(numero)

//gerar um número do intervalo
function gerar(min,max){
    return Math.floor(Math.random()*(max-min))+min
}

console.log(gerar(4,10))