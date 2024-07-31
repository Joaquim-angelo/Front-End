function somar(){
    var tn1=document.getElementById('idn1')
    var tn2=document.getElementById('idn2')
    var res=document.getElementById('resultado')
    //transformando String em Number]
    var n1=Number(tn1.value)
    var n2=Number(tn2.value)
    var soma=n1+n2
    
    res.innerHTML= `O Resultado da soma é ${soma}`
}