/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/

const prompt = require('prompt-sync')();
const age = Number(prompt('Enter age: '));

if (isNaN(age) || age < 0){
    console.log('Please enter a valid positive number. ')
}else {

    if (age <= 12 ){
    console.log('You are a child')
    }  else if (age <= 17){
    console.log('You are a teenager')
    }  else if (age <= 59){
    console.log('You are an adult')
    }  else{
    console.log('You are a senior')
    }
}

