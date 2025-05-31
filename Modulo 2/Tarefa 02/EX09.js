/*9. Conversão Entre Formatos
Escreva duas funções: ○ paresParaObjeto(pares) recebe um array de pares [ [chave,valor], ... ] 
e retorna o objeto equivalente.○ objetoParaPares(obj) faz o inverso, retornando um array de pares.*/


// Função para converter array de pares em objeto
function paresParaObjeto(pares) {

  let objeto = {};  //objeto vazio para armazenar os pares
  //percorrer o array de pares
  for (let i = 0; i < pares.length; i++) {
   
    let par = pares[i]; //adicionar cada par ao objeto
    // pega o valor e a chave
    let chave = par[0];
    let valor = par[1];
    
    objeto[chave] = valor;//adiciona o par ao objeto
    
  }
  return objeto;
}

// Função para converter objeto em array de pares
function objetoParaPares(obj) {
  //array vazio para armazenar os pares
  let pares = [];
  //percorrer as chaves do objeto
  for (let chave in obj) {
    //adicionar cada par ao array
    pares.push([chave, obj[chave]]);
  }
  return pares;
}


// Testando paresParaObjeto
let dados = [["nome", "Maria"], ["idade", 30]];
console.table(paresParaObjeto(dados)); // Esperado: { nome: "Maria", idade: 30 }

// Testando objetoParaPares
let pessoa = { nome: "João", idade: 25 };
console.table(objetoParaPares(pessoa)); // Esperado: [["nome", "João"], ["idade", 25]]
