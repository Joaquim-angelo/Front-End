var selecionado=document.getElementsByName('resp')
var resultado=document.getElementById('resultado')
var respondido=false;

function responder(){
    if(respondido==false){
        if(selecionado[0].checked){
            let opc=document.getElementById('opc_1')
            opc.style.backgroundColor='red'
            opc.style.color='white'
            let certo=document.getElementById('opc_2')
            certo.style.backgroundColor='lime';
            resultado.innerHTML='Errou'
            respondido=true;
        }else if(selecionado[1].checked){
            let certo=document.getElementById('opc_2')
            certo.style.backgroundColor='lime';
            resultado.innerHTML='Parabéns, certa resposta'
            respondido=true;
        }else if(selecionado[2].checked){
            let opc=document.getElementById('opc_3')
            opc.style.backgroundColor='red'
            opc.style.color='white'
            let certo=document.getElementById('opc_2')
            certo.style.backgroundColor='lime';
            resultado.innerHTML='Errou'
            respondido=true;
        }else if(selecionado[3].checked){
            let opc=document.getElementById('opc_4')
            opc.style.backgroundColor='red'
            opc.style.color='white'
            let certo=document.getElementById('opc_2')
            certo.style.backgroundColor='lime';
            resultado.innerHTML='Errou!!'
            respondido=true;
        }
    }else{
        alert('Questão já respondida')
    }
}