/*9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

const prompt = require('prompt-sync')()


let totalSalarioHomens = 0
let totalSalarioMulheres = 0
let continuar
let sexoFuncionario

do {

    let salarioFuncionario = Number(prompt('Qual é o seu salário? '))

    while (isNaN(salarioFuncionario) || salarioFuncionario <= 0){
        salarioFuncionario = Number(prompt('Salário inválido. Qual é o seu salário? '))
    }
      sexoFuncionario = prompt("Digite o sexo do funcionário (M/F) ").toUpperCase().trim()


    if (sexoFuncionario === "F") {
        totalSalarioMulheres += salarioFuncionario
    } else {
        totalSalarioHomens += salarioFuncionario
    }
    continuar = prompt("Quer continuar? (S/N) ").toUpperCase().trim()
} while (continuar === "S");


console.log("Total pago para mulheres:", totalSalarioMulheres);
console.log("Total pago para homens:", totalSalarioHomens);
