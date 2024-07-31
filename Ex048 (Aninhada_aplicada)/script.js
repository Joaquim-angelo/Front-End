function verificar(){
    //obtendo data atual
    var data=new Date()
    //obtendo ano anual
    var ano_atual=data.getFullYear()
    //ano digitado pelo usuário
    var ano=document.getElementById('idano')
    var imagem=document.querySelector('div#imagem')

    if(ano.value.length==0|| ano.value>ano_atual){
        alert('Digite uma ano válido')
    }else{
        var sexo=document.getElementsByName('sexo')
        var idade=ano_atual-Number(ano.value)
        var genero=''
        //criando imagem com JavaScript
        var img=document.createElement('img')
        //adicionando atributos a var img
        img.setAttribute('id','foto')

        //verificando o sexo do usuário
        if(sexo[0].checked){
            genero='homem'
            if(idade>=0 && idade<12){
                img.setAttribute('src','menino.png')
            }else if(idade>=12 && idade<21){
                img.setAttribute('src','rapaz.png')
            }else if(idade>=21 && idade<60){
                img.setAttribute('src','adulto.png')
            }else{
                img.setAttribute('src','idoso')
            }
        }
        else{
            genero='mulher'
            if(idade>=0 && idade<12){
                img.setAttribute('src','imagens/menina.png')
            }else if(idade>=12 && idade<21){
                img.setAttribute('src','moça.png')
            }else if(idade>=21 && idade<60){
                img.setAttribute('src','adulta.png')
            }else{
                img.setAttribute('src','idosa')
            }
        }
        imagem.style.textAlign='center'
        imagem.innerHTML=`Detectamos ${genero} com ${idade} anos`
        //adicionando a imagem na div
        imagem.appendChild(img)
    }
}