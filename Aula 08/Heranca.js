class Pessoa {
  constructor(primeiro, sobreNome, idade, sexo, interesses) {
    this.nome = {
      primeiro,
      sobreNome
    }
    this.idade = idade
    this.sexo = sexo
    this.interesses = interesses
  }

  Saldacao() {
    console.log(`Olá meu nome é ${this.nome.primeiro}.`)
  }

  Despedida() {
    console.log(`${this.nome.primeiro} diz: Até mais.`)
  }
}

let vinicius = new Pessoa('Vinicius', 'Aguiar', 32, 'Masculino', ['Jogos'])
vinicius.Saldacao()

let han = new Pessoa('Han', 'Solo', 25, 'Masculino', ['Cinema'])
han.Despedida()

class Professor extends Pessoa {
  constructor(primeiro, sobreNome, idade, sexo, interesses, disciplina, instituicao) {
    super(primeiro, sobreNome, idade, sexo, interesses)

    this.disciplina = disciplina
    this.instituicao = instituicao
  }
}

let Vinicius = new Professor('Vinicius', 'Aguiar', 32, 'Masculino', ['JavaScript'], 'POO', 'SenacRJ')
Vinicius.Saldacao() 
Vinicius.Despedida()
console.log(Vinicius.idade)
console.log(Vinicius.disciplina)
