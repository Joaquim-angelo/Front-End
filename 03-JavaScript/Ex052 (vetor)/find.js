const numeros=[5,7,13,21,26];
function analise(valor) {
    return valor > 18;
}
//find: procura um elemento correspondente a função
let primeiro=numeros.find(analise);
console.log(primeiro)