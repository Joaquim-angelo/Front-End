var pessoa={nome:'' ,telefone:'' , nascimento:''}
var msg=document.getElementById('msg')
var Nome=document.getElementById('idnome')

function enviar(){
    var Nome=document.getElementById('idnome')
    var tel=document.getElementById('idtel')
    var Data=document.getElementById('iddata')
    pessoa.nome=Nome.value
    pessoa.telefone=tel.value
    pessoa.nascimento=Data.value
    alert("pessoa cadastrada")
}

function exibir(){
    msg.innerHTML=`Nome: ${pessoa.nome} <br>  Telefone: ${pessoa.telefone}<br>
    Nascimento: ${pessoa.nascimento}`
}