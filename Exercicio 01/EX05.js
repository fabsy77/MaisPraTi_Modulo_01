/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.*/

const prompt = require('prompt-sync')()



const weight = Number((prompt("Enter your weight: ")));
const height = Number((prompt("Enter your height: ")));

//calculo do peso/(altura*altura)
let imc = weight / (height * height)

if (imc <= 22){
    console.log("IMC level underweight")
}else if (imc <=27){
    console.log("IMC level normal weight")
}else if (imc <=30){
    console.log("IMC level overweight")
}else{
    console.log("IMC level obesity")
}
