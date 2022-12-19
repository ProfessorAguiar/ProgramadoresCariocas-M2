const Usuario={
  _nome:'Vinicius Aguiar',
  setNome: function(novoNome){
    this._nome=novoNome
  },
  getNome: function(){
    return this._nome
  }
  
}
Usuario.setNome('Priscila')
console.log(Usuario.getNome())
