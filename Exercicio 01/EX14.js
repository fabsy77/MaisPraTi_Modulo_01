//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')()
let resultado = 1


let n = parseInt(prompt('Digite um numero para calcular o fatorial: '))

//let i = n comecar no numero que o usuario vai digitar
// i >= 1 enquanto i for maior ou igual a 1
//i --a cada repeticao diminui um numero
for(let i = n; i >= 1; i--) {

    resultado *= i//// Multiplica o resultado pelo número atual de i
}
console.log(`O fatorial de ${n} é:  ${resultado}`)