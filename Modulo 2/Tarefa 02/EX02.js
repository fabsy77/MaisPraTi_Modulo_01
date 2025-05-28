/*
2. Jogo de Adivinhação
Escreva um script que gere um número aleatório de 1 a 100 e peça ao
usuário, para adivinhar. Use while para repetir até acertar, contando
tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.*/

// Importa a biblioteca prompt-sync, que permite você pedir dados do usuário no terminal
const prompt = require("prompt-sync")();

// Gera um número aleatório entre 1 e 100
let numeroAleatorio = Math.random();
let numeroAleatorioInteiro = Math.floor(numeroAleatorio * 100) + 1;

let tentativas = 1; // conta o primeiro palpite

let palpite = Number(prompt("Qual é o seu palpite? "));

// enquanto o palpite não for igual ao número aleatório
while (palpite !== numeroAleatorioInteiro) {
  if (palpite > numeroAleatorioInteiro) {
    console.log("Mais baixo!");
  } else if (palpite < numeroAleatorioInteiro) {
    console.log("Mais alto!");
  }

  palpite = Number(prompt("Tente novamente: "));
  tentativas++;
}
console.log(
  `Parabéns! Você acertou o número ${numeroAleatorioInteiro} em ${tentativas} tentativas.`
);
