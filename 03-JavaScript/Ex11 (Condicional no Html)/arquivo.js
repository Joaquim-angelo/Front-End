function calcular(){
    let veloscidade=document.getElementById('idvel')
    let resp=document.getElementById('resposta')
    let vel=Number(veloscidade.value)
    if(vel>0){
        if(vel>80){
            resp.innerHTML='<Strong>Multado!! </Strong> Veículo excedo o limite de veloscidade'
        }else{
            resp.innerHTML='valor dentro do límite de veloscidade! prossiga'
        }
    }else{
        alert('Adicione um valor válido')
    }
}