//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

let soma = 0


for (let i = 0; i < 5; i++) {

    let numero = Number(prompt('Enter a number: '));

    soma += numero;
    
}
console.log('the total sum is:', soma);