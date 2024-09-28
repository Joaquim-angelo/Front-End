//função construtora anônima
const x=new Function("x1","x2","x3","return x1+x2+x3")

console.log(x(7,2,5))
