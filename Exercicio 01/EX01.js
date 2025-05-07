//prompt = require('prompt-sync')();
//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.



const prompt = require('prompt-sync')();
const number = Number(prompt('Enter a number: '));

if( number % 2 === 0){

    console.log('This number is even')
}
if( number % 2 !== 0){

    console.log('this number is odd')
}

 