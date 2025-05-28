onst prompt = require('prompt-sync')()
let horas = Number(prompt('Quantas horas de atividade voce teve esse mês? '))

let pontos
let dinheiro


if (horas <= 10) {
    pontos = horas * 2
} else if (horas > 10 && horas <= 20) {
    pontos = horas * 5
} else {
    pontos = horas * 10
}

dinheiro = pontos * 0.05

console.log(`voce fez ${pontos} pontos e ganhou R$ ${dinheiro.toFixed(2)}`)