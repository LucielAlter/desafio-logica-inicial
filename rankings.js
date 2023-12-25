let SaldoVitorias = Saldo(200, 80)
let nivel = ranking()
console.log("O Herói tem de saldo de " + SaldoVitorias + " está no nível de " + nivel )
function Saldo(wins,defeats){
    let resultado = wins - defeats
return resultado    
}
function ranking(){
    let nivel1 = ""
    if ( SaldoVitorias <=10 ){
    nivel1 = "Ferro"
    }else if((SaldoVitorias >=11)&&(SaldoVitorias <=20)){
    nivel1 = "Bronze"
    }else if((SaldoVitorias >=21)&&(SaldoVitorias <=50)){
    nivel1 = "Prata"
    }
    else if((SaldoVitorias >=51)&&(SaldoVitorias <=80)){
    nivel1 = "Ouro"
    }else if((SaldoVitorias >=81)&&(SaldoVitorias <=90)){
    nivel1 = "Diamante"
    }else if((SaldoVitorias >=91)&&(SaldoVitorias <=100)){
    nivel1 = "Lendário"
    }else {
    nivel1 = "Imortal"
    }
    return nivel1
}