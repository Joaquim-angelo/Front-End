let cpf="188.423.503-15"
let validador=cpf.match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/ig)
if(validador==null){
    console.log("Cpf inválido")
}else{
    console.log("cpf válido")
}