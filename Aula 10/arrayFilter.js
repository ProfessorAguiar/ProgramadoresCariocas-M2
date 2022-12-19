const pessoa=[
      {nome:'Vinicius',idade:32},
      {nome:'João',idade:12},
      {nome:'José',idade:17},
      {nome:'Maria',idade:24},
      {nome:'Marcos',idade:42},
    ]
const podemBeber=pessoa.filter(pes => pes.idade>18 ? true : false)
console.log(podemBeber)