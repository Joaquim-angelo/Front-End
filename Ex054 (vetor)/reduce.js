const numeros= [45, 21, 13, 7, 25];
function calcular(total, valor) {
  return total + valor;
}
//reduce: reduz os elementos do array, a apenas um elemento
let soma = numeros.reduce(calcular);
console.log(soma)