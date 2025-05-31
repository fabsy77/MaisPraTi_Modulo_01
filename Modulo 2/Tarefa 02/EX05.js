/*5. Debounce
Crie function debounce(fn, delay) que receba uma função fn e um delay
em ms, retornando uma nova função que só executa fn se não for
chamada novamente dentro do intervalo.*/

/*O debounce serve para atrasar a execução de uma função até que o usuário pare de chamá-la repetidamente por um tempo.
Ele é muito usado, por exemplo, em campos de busca: você digita várias letras, mas a função só roda quando você para de digitar por um tempo.
*/

function debounce(fn, delay) {
  let timer; // variável que  vai guardar o temporizador que  pode ser cancelada depois

  //função que o debounce "entrega". Ela será chamada várias vezes, mas vai controlar quando realmente rodar fn

  return function (...args) {//retorna uma função que pode receber qualquer número de argumentos (guardados em args).(...args para aceitar qualquer argumento que fn possa precisar.)
    clearTimeout(timer); // clearTimeout funcao ja existente no JS,  o código vai primeiro chamar clearTimeout(timer) para cancelar qualquer temporizador pendente.
    timer = setTimeout(() => { // setTimeout é uma função que executa uma função após um determinado tempo.
      fn(...args);// chama a função fn com os argumentos que foram passados para a função que o debounce "
    }, delay);// delay é o tempo que o usuário precisa parar de chamar a função antes de ela ser executada.
  };
}

// Exemplo de uso:
function minhaFuncao() {
  console.log("Função executada!");
}

// Cria uma versão com debounce de 2 segundos (2000 ms)
const minhaFuncaoDebounce = debounce(minhaFuncao, 2000);

minhaFuncaoDebounce(); // chama agora
setTimeout(minhaFuncaoDebounce, 500);  // chama depois de 0.5s
setTimeout(minhaFuncaoDebounce, 1000); // chama depois de 1s
