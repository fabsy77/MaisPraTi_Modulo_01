/*Seção 2: Funções e Recursão
4. Fatorial Recursivo
Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
um Error, e n === 0 retornando 1.*/


function fatorial(n) {
  if (n < 0) {// Se n for menor que 0, lançar um erro
    throw new Error("n deve ser um número não negativo");

  } else if (n === 0) { // 
    return 1;
  } else {// Se n for maior que 0, calcular o fatorial recursivamente
    return n * fatorial(n - 1);
  }
}

console.log( fatorial(5) ); // 120
console.log( fatorial(0) ); // 1
console.log( fatorial(-1) ); // Error: n deve ser um número não negativo at fatorial
