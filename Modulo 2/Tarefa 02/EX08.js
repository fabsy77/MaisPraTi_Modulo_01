/*8. Agrupamento por Propriedade
Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
cada chave é um cliente e o valor é a soma de todos os seus total.*/


const vendas = [
    { cliente: 'Jessica', total: 150.00 },
    { cliente: 'Paulo', total: 100.00 },
    { cliente: 'Maria', total: 300.00 },
    { cliente: 'Paulo', total: 200.00 },
    { cliente: 'Mariana', total: 400.00 },
    { cliente: 'Maria', total: 100.00 },
    { cliente: 'Jessica', total: 100.00 },
]

// recuce() é uma função que recebe uma função callback e um valor inicial
vendas.reduce(function(acumulador, atual) {// a variável atual é um objeto como { cliente: "João", total: 100 } e acumulador é um objeto como { "João": 100 }
  // aqui você vai atualizar acumulador
   if( acumulador[atual.cliente] ){// se o cliente já está no acumulador
    // adiciona o total ao cliente(atual.total, está acessando a propriedade total desse objeto, que é o valor da venda feita por aquele cliente.)
    acumulador[atual.cliente] += atual.total 

   }else{
    acumulador[atual.cliente] = atual.total // se não adiciona o cliente ao acumulador
   }
   return acumulador
  


}, {}); //aqui passa o objeto vazio como valor inicial


//funcao callback
//variavel criada para guardar o resultado do reduce
//reduce() -é usado para transformar um array em uma única coisa
// ele vai transformar o array vendas em um objeto com os totais por cliente.
let totaisPorCliente = vendas.reduce(function(totaisPorCliente, venda) {
    // totaisPorCliente[venda.cliente] - Está acessando a chave do cliente no objeto totaisPorCliente.
    // (totaisPorCliente[venda.cliente] || 0) - Se a chave não existe, ele vai adicionar 0, senão vai adicionar o valor que já existe.
    // + venda.total - Vai somar o valor da venda ao valor que já existe no objeto.
    totaisPorCliente[venda.cliente] = (totaisPorCliente[venda.cliente] || 0) + venda.total;

    return totaisPorCliente;
}, {});


console.table( totaisPorCliente )