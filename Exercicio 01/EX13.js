// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.


const prompt = require('prompt-sync')()

let soma = 0 // comeca com zero pois nao tem nenum numero somado
let numero = 1 //começa com 1, só para garantir que o while(numero != 0) entre no loop na primeira vez.
let contador = 0 //começa com 0, porque ninguém digitou nada ainda.
let media = 0 //será calculada no final. No começo, ainda é 0.

 

while(numero != 0){ //Enquanto o numero digitado for diferente de 0 continue
    //usuario vai digitar um numero decimal e parsetFloat converte em numeros decimais ou float
    numero = parseFloat(prompt('Digite um número decimal (0 para sair): '))
     
    if(numero != 0){     //Garante que o número 0 não será contado nem somado
    soma = soma + numero //Acumulam os valores para depois calcular a média
    contador++             //contador
    
    }

}
media = soma / contador
console.log("A média é: " + media)