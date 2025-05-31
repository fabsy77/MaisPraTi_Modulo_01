/* 7. Mapeamento e Ordenação
Dado um array produtos = [{ nome, preco }, ...], crie uma função que
retorne um novo array apenas com os nomes, ordenados por preço
crescente, usando map, sort.*/

// array de objetos
let produtos = [
  { nome: "X-Bacon", preco: 3.29 },
  { nome: "Cachorro Quente", preco: 1.99 },
  { nome: "X-Salada", preco: 2.29 },
];

// sort() compara os elementos do array e dentro dele uma funcao que compara precos, a e b, que são dois itens do array (dois produtos).
produtos.sort(function compararPreco(a, b) {
  if (a.preco < b.preco) {
    // se a é menor que b  ( a vem antes de b)
    return -1;
  } else if (a.preco > b.preco) {
    // se a é maior que b ( b vem antes de a)
    return 1;
  } else {
    // se a é igual a b e mantem a ordem original
    return 0;
  }
});
// map() cria um novo array que irá percorrer cada item do array produtos e dentro dele tem uma funcao para pegar apenas o nome
nomesOrdenados = produtos.map(function pegarNome(produto) {
  return produto.nome; // acessa só o nome do objeto.
});

console.log(nomesOrdenados); // [ 'Cachorro Quente', 'X-Salada', 'X-Bacon' ]
