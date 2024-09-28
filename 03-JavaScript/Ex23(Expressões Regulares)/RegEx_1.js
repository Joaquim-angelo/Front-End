let nome="Bom dia"
//posição em que se encontra
console.log(nome.search(/dia/i))
//match: posição em que se encontra pela 1° vez
console.log(nome.match("o"))
//todas vezes encontradas
console.log(nome.match(/o/g))
//replace=troca frase
console.log(nome.replace("dia","tarde"))
//trocando todos "o" por "x"
console.log(nome.replace(/o/ig,"x"))