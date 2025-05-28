/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h-1 , exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/




// Importa a biblioteca prompt-sync para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();
// Pergunta a velocidade do carro
const velocidade = Number(prompt('Qual a velocidade do carro? '))

//define o valor da velocidade permitida
const velocidadeMaxima = 80
//define o valor da multa
const valorMulta = 5

//Define o valor da multa por cada Km/h acima da velocidade permitida.
const velocidadeAcima = velocidade - velocidadeMaxima
//calcula valor total da multa
const valorMultaTotal = velocidadeAcima * valorMulta

// Verifica se a velocidade ultrapassa o limite permitido
if (velocidade >  velocidadeMaxima) {
    console.log('Multado em R$ ' + valorMultaTotal + ' por exceder a velocidade máxima de 80 Km/h')
} else {
    console.log('Velocidade dentro do limite')
}

