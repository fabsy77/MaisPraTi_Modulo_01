/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

const prompt = require('prompt-sync')()

let tipoCarro = prompt('Digite o tipo de carro (popular ou luxo): ')
let diasAluguel = Number(prompt('Digite a quantidade de dias de aluguel: '))
let kmPercorridos = Number(prompt('Digite a quantidade de Km percorridos: '))
let precoDiaria // guarda o valor por dia (90 ou 150)


const popular = 90
const luxo = 150

 // Se o carro for popular e o km rodado for até 100
if (tipoCarro === 'popular' && kmPercorridos <= 100) {
  
  precoDiaria = popular * diasAluguel + kmPercorridos *  0.20
   // Se o carro for popular e o km rodado for mais que 100
} else if (tipoCarro === 'popular' && kmPercorridos > 100) {
 
   precoDiaria = popular * diasAluguel + kmPercorridos *  0.10
   // Se o carro for luxo e o km rodado for até 200
} else if (tipoCarro === 'luxo' && kmPercorridos <= 200) {
 
   precoDiaria = luxo * diasAluguel + kmPercorridos *  0.30
   // Se o carro for luxo e o km rodado for mais que 200
} else if (tipoCarro === 'luxo' && kmPercorridos > 200) {

   precoDiaria = luxo * diasAluguel + kmPercorridos *  0.25
}

console.log("Total a pagar: R$ " + precoDiaria.toFixed(2));