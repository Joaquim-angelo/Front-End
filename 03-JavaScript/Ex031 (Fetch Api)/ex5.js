//Deletando produto apenas no nosso sistema
fetch('https://dummyjson.com/products/1', {
    method: 'DELETE',
  })
.then(res => res.json())
.then(console.log);