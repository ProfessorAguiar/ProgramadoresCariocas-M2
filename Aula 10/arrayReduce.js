const gastos=[
  120,//luz
  55.22,//água
  699.99,//Aluguel
  130.35//passagem
]
const total=gastos.reduce((acc,atual)=> acc + atual)
const totalComInicial=gastos.reduce((acc,atual)=> acc + atual,100)//poupança
console.log(total.toFixed(2))
console.log(totalComInicial.toFixed(2))