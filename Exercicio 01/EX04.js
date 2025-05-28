/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/

const prompt = require('prompt-sync')();

console.log("===MENU===");
console.log("1. Show a message")
console.log("2. Say your name")
console.log("3. Exit")

const option = Number((prompt("Enter a number between 1 and 3. ")));


switch(option){
    case 1:
        console.log("you choose the option 1");
        break;
    case 2:
        const name = prompt("What is your name? ");
        console.log("hi " + name + " !");
        break;
    case 3:
        console.log("Closing the program...");
        break;
    default:
        console.log("you choose a wrong option");
        break;
}