/*7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/


const prompt = require('prompt-sync')();

let appleQuantity = Number(prompt("How many apples do you want to buy? "));
let total = 0;

if (appleQuantity < 12){

    total = appleQuantity * 0.30;

}else{

    total = appleQuantity * 0.25;
}

console.log(`you bought ${appleQuantity} apple(s).`);
console.log(`the total price is $ ${total.toFixed(2)} purchase amount`);


