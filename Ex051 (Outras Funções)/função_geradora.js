//a cada chamada a função retorna um valor diferente
function* cores(){
    yield 'Vermelho'
    yield 'Branco'
    yield 'Preto'
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* contador(){
    let x=0
    while(true){
        yield x++
    }
}

const num=contador()
console.log(num.next().value)
console.log(num.next().value)