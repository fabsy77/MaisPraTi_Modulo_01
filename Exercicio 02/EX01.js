/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/


// Importa a biblioteca prompt-sync para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário a quantidade de cigarros fumados por dia e converte para número
const cigarDia = Number(prompt('Quantos cigarros por dia? '))

// Solicita ao usuário a quantidade de anos que ele já fumou e converte para número
const cigarAnos = Number(prompt('Há quantos anos fuma? '))

// Calcula o total de dias de vida perdidos:
const result =  (cigarAnos * 365 * cigarDia * 10 / 60)/24

//printa o resultado
console.log(`Você perdeu ${result.toFixed} dias de vida`)



