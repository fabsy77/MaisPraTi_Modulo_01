/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

// Importa a função para ler entrada do usuário no terminal
const prompt = require('prompt-sync')()  

// Gera um número inteiro aleatório entre 1 e 5
// Math.random() gera decimal entre 0 e quase 1
// Multiplicamos por 5 para ampliar o intervalo para 0 a quase 5
// Math.floor arredonda para baixo, gerando inteiro de 0 a 4
// Somando 1, o intervalo vira de 1 a 5
let numeroSorteado = Math.floor(Math.random() * 5) + 1

// Pede para o usuário digitar um número entre 1 e 5 e converte para número
let tentativa = Number(prompt("Digite um número entre 1 e 5: "))

// Compara se o número digitado é igual ao sorteado
if (tentativa === numeroSorteado){
    console.log("Você acertou!")
} else {
    console.log("Você errou, tente novamente!")
}


    