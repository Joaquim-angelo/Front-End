//solicitação para o site dummyjson
fetch('https://dummyjson.com/products')
//buscando dados dos produtos dummy
.then(res => res.json())
//escrevendo esses dados
.then(console.log);