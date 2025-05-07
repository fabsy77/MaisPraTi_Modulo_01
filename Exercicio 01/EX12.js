//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()
const message = Number(prompt('Digite um número para calcular a tabuada: '))
let numero = 0
let i = 0
let resultado = 0

for (i = 1; i <= 10; i++) {
    
    resultado = message * i
    console.log(` ${message} x ${i} = ${resultado}`) 
}

  
