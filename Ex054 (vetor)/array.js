let vetor=[4,1,3,5,2]
//remover último elemento do array
vetor.pop()
//adicionar elemento
vetor.push(8)
//ordenar elementos
vetor.sort()
//buscar posição de um elemento
var posicao=vetor.indexOf(2)
console.log('o valor está na posição: '+posicao)
console.log('o vetor tem '+vetor.length+' posições')
//exibir elementos do vetor
for(var i=0;i<vetor.length;i++){
    console.log(`posição ${i}: ${vetor[i]}`)
}