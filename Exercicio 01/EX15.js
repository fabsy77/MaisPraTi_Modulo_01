//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let num1 = 0;
let num2 = 1;


// Imprime o primeiro número da sequência
 console.log (num1);

for(let i = 0; i < 10; i++ ){

    let result = num1 + num2;     
    console.log(result); // Imprime o próximo número da sequência

    num1 = num2; // Atualiza num1 para o valor de num2
    num2 = result; // Atualiza num2 para o valor de result

}