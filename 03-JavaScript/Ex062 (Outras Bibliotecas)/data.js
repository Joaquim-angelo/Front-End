//criando variável da data atual
const data = new Date();
//obter apenas o ano
let ano= data.getFullYear()
//número do mês
let mes= data.getMonth()
//minutos
let hora=data.getMinutes()

console.log(data)
console.log(ano)
console.log(mes)
console.log(hora)

//dia da semana
const dia=["Segunda","Terça","Quarta","Quinta","Sexta","Sabado","Domingo"];
console.log(dia[data.getDay()-1])