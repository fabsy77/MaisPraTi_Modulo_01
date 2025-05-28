/*8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.*/



// Importa o módulo 'prompt-sync' para poder pedir dados do usuário no terminal
const prompt = require('prompt-sync')()

// Pede para o usuário digitar quantas horas de atividade ele teve no mês
let horas = Number(prompt('Quantas horas de atividade voce teve esse mês? '))

// variável 'pontos' para armazenar os pontos que a pessoa vai ganhar
let pontos

// variável 'dinheiro' para armazenar o valor em dinheiro que a pessoa vai receber
let dinheiro

// Verifica a quantidade de horas para calcular os pontos conforme as regras:
if (horas <= 10) {
    // Se as horas forem até 10, cada hora vale 2 pontos
    pontos = horas * 2
} else if (horas > 10 && horas <= 20) {
    // Se as horas forem entre 11 e 20, cada hora vale 5 pontos
    pontos = horas * 5
} else {
    // Se as horas forem mais que 20, cada hora vale 10 pontos
    pontos = horas * 10
}

// claculo de quanto a pessoa vai ganhar
dinheiro = pontos * 0.05

// Mostra para o usuário quantos pontos ele ganhou e quanto dinheiro recebeu
console.log(`voce fez ${pontos} pontos e ganhou R$ ${dinheiro.toFixed(2)}`)

