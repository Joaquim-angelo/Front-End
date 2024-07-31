var pessoas=[]
var mensagem=document.getElementById('msg')

function enviar(){
    var nome=document.getElementById('idnome')
    if(nome.value == ''){
        alert('Digite algo')
    }else{
        pessoas.push(nome.value)
        nome.value=''
        alert('Pessoa Registrada')
    }
}

function exibir(){
    mensagem.innerHTML='Pessoas Registradas: <br> '
    for(var i=0;i<pessoas.length;i++){
        mensagem.innerHTML+=`
        ${pessoas[i]} <br>`
    }
}