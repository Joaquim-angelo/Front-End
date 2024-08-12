let nome="Joaquim Angelo 2004"

//todos os elementos de "a" até "b" e de 0 a 9
console.log(nome.match(/[a-b|0-9]/ig))
//apenas números
console.log(nome.match(/\d/ig))
//Espaços
console.log(nome.match(/\s/ig))