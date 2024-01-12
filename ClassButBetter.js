
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
    ficha(){
      console.log(`O heroi ${this.nome} de idade ${this.idade} escolheu ser ${this.tipo}`)
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
  };
const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
    rl.question("qual o seu nome: ", (nome1)=>  {  
        rl.question('Digite sua idade: ', (age) => {
            rl.question('escolha uma classe entre Ninja, Mago, Guerreiro, Nonge: ', (classe) => {
                let HeroiF = new Heroi(nome1,age,classe)
             HeroiF.escrever()
                rl.close();
            });
        });
    })

