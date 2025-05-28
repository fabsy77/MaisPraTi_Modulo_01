/* 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

// Importa a biblioteca prompt-sync para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Solicita ao usuário a distancia q ele quer percorrer
const distancia = Number(prompt('Qual a distancia q deseja percorrer em Km? '))

let preco // variavel que armazena o preco
const viagemCurta = 0.50 // preco da passagem para viagens curtas
const viagemLonga = 0.45 // preco da passagem para viagens longas


// Verifica se a distancia é maior ou igual a 200
if(distancia >= 200){
     preco = distancia * viagemLonga // Calcula o preço usando tarifa de viagem longa
}else{
     preco = distancia * viagemCurta // Calcula o preço usando tarifa de viagem curta
}
// Mostra o preco da passagem formatadao em 2 casas decimais
console.log(`O valor da passagem é R$ ${preco.toFixed(2)}`)