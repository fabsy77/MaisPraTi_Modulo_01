/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/

const prompt = require('prompt-sync')();

const value1 = Number(prompt("Enter a first number: "));
const value2 = Number(prompt("Enter a second  number: "));


if (value1 === value2){

    console.log("the values ​​are the same, please enter a different number");
// Se o primeiro valor for menor que o segundo
}else if (value1 < value2 ){
    // Mostra os valores em ordem crescente (valor1 vem antes)
    console.log(`In order ${value1},  ${value2}`);
// Caso contrário (o valor1 é maior que o valor2)
}else {
    // Mostra os valores em ordem crescente (valor2 vem antes)
    console.log(`In order ${value2},  ${value1}`);
}