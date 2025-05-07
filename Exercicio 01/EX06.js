/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require('prompt-sync')();

console.log("Enter the three sides of the triangle: ");
const sideA = Number(prompt("Side A: "));
const sideB = Number(prompt("Side B: "));
const sideC = Number(prompt("Side C: "));

if (sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB){

    console.log("this is a triangle");

    if (sideA === sideB || sideA === sideC || sideB === sideC){
        console.log("this is a Isosceles triangle");
    }else if (sideA === sideB && sideB === sideC){
        console.log("this is a Equilateral triangle");
    }else {
            console.log("this is a Scalene triangle"); 
    }
}else{
    console.log("this is not a triangle")
}

