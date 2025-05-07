//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
const prompt = require('prompt-sync')();
const note = Number(prompt('Enter your note: '));

if (note >= 7.0){
    console.log('you were approved')
}else if (note >= 4.0){
    console.log('You are in remediation')
}else if (note < 4){
    console.log('you are repproved')
}