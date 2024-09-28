//querySelector('tipo valor')
let numero=document.querySelector('input#idnum')
let lista=document.querySelector('select#idlista')
let res=document.querySelector('div#resultado')
//armazenaremos os valores em um vetor
let valores=[]

//verificar se o elemento é um número
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true;
    }else{
        return false;
    }
}

//verificar se o elemento está ou não na lista
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}

function adicionar(){
    if(isNumero(numero.value)  && !inLista(numero.value,valores)){
        valores.push(Number(numero.value))
        //mostrar valor no select
        let item=document.createElement('option')
        item.text=`Valor ${numero.value} adicionado`
        //adicionar valor no select
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        alert('valor inválido ou já adicionado')
    }
    numero.value=''
    numero.focus()
}

function finalizar(){
    if(valores.length==0){
        alert('adicione valores antes de finalizar')
    }else{
        let total=valores.length
        let maior=valores[0]
        let menor=valores[0]
        let soma=0
        for(let pos in valores){
            soma+=valores[pos]
            if(valores[pos]>maior){
                maior=valores[pos]
            }
            if(valores[pos]<menor){
                menor=valores[pos]
            }
        }
        res.innerHTML+=`Ao todo temos ${total} números cadastrados`
        res.innerHTML+=`<br>O maior valor adicionado foi ${maior}`
        res.innerHTML+=`<br>O menor valor adicionado foi ${menor}`
        res.innerHTML+=`<br>Somando todos os valores temos ${soma}`
        res.innerHTML+=`<br>A média é ${soma/total}`
    }
}