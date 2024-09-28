//analise se todos passam no teste
const numeros = [21, 13, 10, 16, 9];
function analise(valor){
    return valor > 18;
}  
let maior = numeros.every(analise);
console.log(maior)