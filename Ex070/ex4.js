fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: 'BMW Pencil',
    })
  })
.then(res => res.json())
.then(console.log);

//não temos permição para alterar o sistema, no exemplo criamos um novo produto apenas no nosso sistema