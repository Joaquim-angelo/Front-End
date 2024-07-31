const map=require('./arquivo.js')
//vetor=1,2,3 e função=x*2
const dobro=map([1,2,3], x=>x*2)
const quadrado=map([1,2,3], x=>x*x)
console.log({dobro});
console.log({quadrado});