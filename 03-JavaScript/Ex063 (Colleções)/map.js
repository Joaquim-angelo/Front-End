const frutas= new Map();
//frutas e quantidade
frutas.set("maça",50)
frutas.set("Banana",75)
frutas.set("uva",75)
console.log(frutas)
//get: obter dados do elemento
console.log(frutas.get("uva"))
//metodos map
frutas.delete("maça")
console.log("Frutas possui kiwi? "+frutas.has("kiwi"))
console.log(frutas)