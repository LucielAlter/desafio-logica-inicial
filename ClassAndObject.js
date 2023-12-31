
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.ataque = this.ataque()
  }
  escrever(){
    console.log(`O heroi ${this.tipo} atacou usando ${this.ataque}`)
  }
  ataque(){
    let ataque1 = ""
    switch (this.tipo) {
      case "Mago":
        ataque1 = "Magia"
        break
      case "Guerreiro":
        ataque1 = "Espada"
        break
      case "Ninja":
        ataque1 = "Shuriken"
        break
      default:
        ataque1 = "Artes Marciais"
    }
    return ataque1
  }
}
let HeroiNinja = new Heroi("Lulu",18,"Ninja")
let HeroiMago = new Heroi("Zaraki",60,"Mago")
let HeroiGerreiro = new Heroi("Ryu",28,"Guerreiro")
let HeroiMonge = new Heroi("Ranatão",20,"Monge")
HeroiNinja.escrever()