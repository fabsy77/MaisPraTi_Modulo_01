/*3. Palavras Únicas
Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
todas as palavras únicas e exibi-las em um array.*/

let frase = "olá olá mundo mundo";
let palavras = frase.split(" "); // separa a frase em palavras usando o metodo split()
let contagem = {};// cria um objeto para armazenar as palavras e suas contagens
let palavrasUnicas = []; // cria um array para armazenar as palavras únicas



// loop que vai percorrer o array palavras do começo até o fim. i começa em 0 e vai até o tamanho do array menos 1.
for (let i = 0; i < palavras.length; i++) {

  // erifica se a palavra atual (palavras[i]) já está registrada como uma chave no objeto contagem 
  if (contagem[palavras[i]]) {

    contagem[palavras[i]] += 1; // incrementa a contagem da palavra

  } else { // se a palavra não estiver no objeto, adiciona a palavra e a contagem
    contagem[palavras[i]] = 1;
  }
}

// loop para percorrer todas as chaves (palavras) no objeto contagem
for (const key in contagem) {
    //Verifica se a palavra apareceu exatamente 1 vez na frase.
  if (contagem[key] == 1) {
    //adiciona a palavra ao array palavrasUnicas
    palavrasUnicas.push(key);
  }
}

console.log(palavrasUnicas); 