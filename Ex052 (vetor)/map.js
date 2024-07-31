const numbers=[21,7,36,75]
function dobro(valor){
    return valor*2
}

console.log("valores: "+numbers)
//map
let numeros=numbers.map(dobro)
console.log("dobro: "+numeros)
//flatMap
let num=numbers.flatMap((x)=>x*3);
console.log("triplo: "+num)