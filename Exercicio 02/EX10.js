/*10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/


const prompt = require('prompt-sync')() // importa a função para ler dados do teclado

let valor        // vai guardar o número que o usuário digitar
let soma = 0     // começa em 0, vai somar todos os números digitados
let menor        // vai guardar o menor número digitado, ainda não tem valor
let cont = 0     // contador para saber quantos números foram digitados
let contPar = 0  // contador para saber quantos números pares foram digitados
let continuar    // vai guardar a resposta se o usuário quer continuar ou não

do { // inicia o laço que executa pelo menos uma vez e repete enquanto o usuário quiser

    valor = Number(prompt("Digite um número: ")) 
    // lê o número digitado e converte para número (não fica string)

    soma = valor + soma 
    // adiciona o número digitado na soma total

    if (cont === 0) {  
        // se for o primeiro número digitado (contador igual a zero)
        menor = valor  
        // guarda ele como o menor número
    } else if (valor < menor) {  
        // se não for o primeiro, verifica se o número atual é menor que o menor guardado
        menor = valor  
        // se for, atualiza o menor número
    }

    cont = cont + 1  
    // aumenta o contador de números digitados em 1

    if (valor % 2 === 0) {  
        // verifica se o número é par (divisível por 2, resto zero)
        contPar = contPar + 1  
        // se for par, aumenta o contador de pares
    }

    continuar = prompt("Quer continuar? (S/N) ").toUpperCase().trim()  
    // pergunta se o usuário quer continuar e deixa a resposta em maiúscula, tirando espaços

} while (continuar === "S")  
// enquanto o usuário responder "S" (sim), repete o laço

// Quando sair do laço, mostra os resultados:

console.log(`O somatório entre todos os valores é: ${soma}`)  
// mostra a soma total dos números digitados

console.log(`O menor valor digitado foi: ${menor}`)  
// mostra qual foi o menor número digitado

console.log(`A média dos valores digitados é: ${soma / cont}`)  
// calcula e mostra a média (soma dividida pela quantidade)

console.log(`Quantidade de números pares digitados: ${contPar}`)  
// mostra quantos números pares foram digitados


