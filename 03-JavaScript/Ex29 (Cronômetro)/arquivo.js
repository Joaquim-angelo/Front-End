//Evento para quando abrir o html
document.addEventListener('DOMContentLoaded',function(){
    let intervalo;
    let segundos=0;
    let executando = false;

    const tempo= document.getElementById('tempo')
    const iniciar=document.getElementById('iniciar')
    const resetar=document.getElementById('resetar')

    //atualizar exibição do cronômetro
    function atualizar(){
        const hora= Math.floor(segundos/3600);
        const minutos=Math.floor((segundos%3600)/60);
        const segundos_restantes=segundos%60;

        // Atualiza o texto do elemento de exibição com o tempo formatado
        //padStar(2, '0') = dois zeros exibidos antes de iniciar 
        tempo.textContent = `${String(hora).
            padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos_restantes).padStart(2, '0')}`;
    }

    //iniciar cronômetro
    function inicio(){
        //atualizar a cada segundo
        intervalo=setInterval(function(){
            segundos++;
            atualizar();
        },1000)
        //atualizar estado do botão
        executando=true;
        iniciar.textContent='Pausar'
    }

    //pausar crônometro
    function pausar(){
        clearInterval(intervalo)
        // Atualiza o estado do botão
        executando = false;
        iniciar.textContent = 'Continuar';
    }

    function limpar(){
        clearInterval(intervalo);
        segundos= 0;
        // Atualiza o estado do botão
        executando = false;
        atualizar();
        iniciar.textContent = 'Iniciar';
    }

    //adicionar eventos
    iniciar.addEventListener('click',function(){
        if(executando){
            pausar()
        }else{
            inicio()
        }
    })

    resetar.addEventListener('click',function(){
        limpar();
    })

    atualizar()
})