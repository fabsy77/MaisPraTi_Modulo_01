/* 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.*/


// Importa a biblioteca prompt-sync para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')()

// Solicita e armazena os três segmentos de reta, convertendo para números
let a = Number(prompt('Digite o tamanho do primeiro segmento: '))
let b = Number(prompt('Digite o tamanho do segundo segmento: '))
let c = Number(prompt('Digite o tamanho do terceiro segmento: '))

//funcao que verifica os lados do triangulo
function verificarTriangulo(a , b , c){
    // // Verifica as 3 condições necessárias simultaneamente:
    // Cada lado deve ser menor que a soma dos outros dois
    if(a < b + c && b < a + c && c < a + b){
        console.log("É um triângulo"); //pode formar um triangulo
        return true;
    }
    else{
        console.log("Não é um triângulo");// nao pode formar um triangulo
        return false;
    }
}

// Chama a função passando os valores lidos e exibe o resultado
console.log(verificarTriangulo(a, b, c ))
