let telefone="meu telefone é 99942-0071"
//{n} -> n elementos 
// \- ou \. ->traço ou ponto
console.log(telefone.match(/(\9)\d{4}\-\d{4}/ig))
console.log(telefone.match(/\9[0-9]{4}\-[0-9]{4}/ig))

let cpf="081.094.176-25"
// ^ -> começa com
// $ -> termina com
console.log(cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ig))