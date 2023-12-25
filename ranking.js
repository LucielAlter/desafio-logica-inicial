ranking(200, 80)
function ranking(wins,defeats){
    let SaldoVitorias = wins - defeats
    let nivel = ""
    if ( SaldoVitorias <=10 ){
    nivel = "Ferro"
    }else if((SaldoVitorias >=11)&&(SaldoVitorias <=20)){
    nivel = "Bronze"
    }else if((SaldoVitorias >=21)&&(SaldoVitorias <=50)){
    nivel = "Prata"
    }
    else if((SaldoVitorias >=51)&&(SaldoVitorias <=80)){
    nivel = "Ouro"
    }else if((SaldoVitorias >=81)&&(SaldoVitorias <=90)){
    nivel = "Diamante"
    }else if((SaldoVitorias >=91)&&(SaldoVitorias <=100)){
    nivel = "Lendário"
    }else {
    nivel = "Imortal"
    }
   console.log("O Herói tem de saldo de " + SaldoVitorias + " está no nível de " + nivel )
}