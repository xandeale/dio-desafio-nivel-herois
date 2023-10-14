// Instruções para entrega
//  # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

main()
function main(){
const prompt = require ("prompt-sync")();
let vitorias = parseInt(prompt("Digite o número de vitórias do herói:"))
let derrotas = parseInt(prompt("Digite o número de derrotas do herói:"))
let resultado = calculo_rank(vitorias,derrotas)
let classificacao = rank(resultado)
console.log ("O herói tem saldo de vitórias de " + resultado + " e está no nível de " + classificacao)
}

function calculo_rank(vitorias, derrotas){
    if (vitorias >=0 && derrotas >=0) {
        saldovitorias = vitorias - derrotas
        return saldovitorias
    }
    else {
        console.log("insira um valor numérico inteiro cujo saldo resulte valor positivo ou igual a zero")
        main()
    }
}

function rank(resultado){
nivel = ["Ferro","Bronze","Prata","Ouro","Diamante","Lendário","Imortal"]
    if (resultado <=10){
    return nivel[0]
    }
    else if (resultado >10 && resultado <=20 ){
    return nivel[1]
    }
    else if (resultado >20 && resultado <=50 ){
    return nivel[2]
    }
    else if (resultado >50 && resultado <=80 ){
    return nivel[3]
    }    
    else if (resultado >80 && resultado <=90 ){
    return nivel[4]
    }
    else if (resultado >90 && resultado <=100 ){
    return nivel[5]
    }
    else if (resultado >100){
    return nivel[6]
    }
}