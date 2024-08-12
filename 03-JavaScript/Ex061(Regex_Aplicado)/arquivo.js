function enviar(){
    let cpf=document.getElementById("idcpf")
    let tel=document.getElementById("idtel")
    let ddd=document.getElementById("idddd")
    let msg1=document.getElementById("msg_1")
    let msg2=document.getElementById("msg_2")
    let msg3=document.getElementById("msg_3")
    
    //Expressões Regulares de validação
    let validador_cpf=cpf.value.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ig)
    let validador_ddd=ddd.value.match('^[0-9]{2}$')
    let validador_tel=tel.value.match(/\9[0-9]{4}\-[0-9]{4}/ig)

    if(validador_cpf==null){
        msg1.innerHTML="Cpf inválido" 
    }else{
        msg1.innerHTML="Cpf válido"
    }

    if(validador_ddd==null){
        msg2.innerHTML="ddd inválido" 
    }

    if(validador_tel==null){
        msg3.innerHTML="Telefone inválido" 
    }else{
        msg3.innerHTML="Telefone válido"
    }
}