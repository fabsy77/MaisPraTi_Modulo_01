/*6. Memoization
Implemente function memoize(fn) que armazene em cache chamadas
anteriores de fn (por argumentos), retornando resultados instantâneos em
repetidas invocações. ( Memoization é uma técnica usada para deixar programas mais rápidos.) */

function memoize(fn) {
  let resultados = {}; // objeto vazio que armazena o cache

  return function (...args) {
    let chave = args.join(","); // transforma os argumentos em uma string única para usar como chave


    // se a chave já existe no cache, retorna o resultado
    if (chave in resultados) {
      return resultados[chave]; // retorna o valor em cache se existir
    } else {
      let resultado = fn(...args); // chama a função original e guarda o resultado
      resultados[chave] = resultado; // salva o resultado no cache
      return resultado; // retorna o resultado calculado
    }
  };
}
// Exemplo de uso 
function exemploDeFuncao(a, b) {
    return a + b;
    }


const memoizedExemploDeFuncao = memoize(exemploDeFuncao);
console.log(memoizedExemploDeFuncao(2, 3)); // imprime
console.log(memoizedExemploDeFuncao(2, 3)); // imprime

