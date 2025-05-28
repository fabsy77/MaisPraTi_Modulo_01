/*1. Validação de Datas
Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
formarem uma data real (meses de 28–31 dias, ano bissexto para
fevereiro) e false caso contrário.*/

// Função para verificar se uma data é válida
function ehDataValida(dia, mes, ano) {
    // Verifica se o mes esta entre 1 e 12
    if (mes >= 1 && mes <= 12) {

        // define o número de dias para cada mes em um ano normal sem ser bissexto
        let diaMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        // Verifica se o ano é bissexto
        /* ano % 4 === 0: o ano tem que ser divisível por 4. para ser bissexto
        ano % 100 !== 0: exceto se for múltiplo de 100 (por exemplo, 1900 não é bissexto).
        ano % 400 === 0: mas se for divisível por 400 (como 2000), então é bissexto sim.*/
        if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {

            // se o dia tiver 29 dias acessa o mes de fevereiro que esta na posicao 1
            diaMes[1] = 29;
          
            // Verifica se o dia está entre 1 e o número máximo de dias do mês ( o -1 é pra acessar o array correto)
            if (dia >= 1 && dia <= diaMes[mes - 1]) {
                return true;
            }
            else { // se o dia não estiver entre 1 e o número máximo de dias do mês 
                return false;
            }

        } else {
            // se o ano nao  for bissexto
            diaMes[1] = 28;
            // se o dia for maior que 1 e menor ou igual a 29 e o mes
            if (dia >= 1 && dia <= diaMes[mes - 1]) {
                return true;
            }
            else { /// Dia inválido no mês normal
                return false;
            }

        }

    }
    else { //// Mês inválido (não está entre 1 e 12)
        return false;
    }
}


// Teste da função
console.log(ehDataValida(29, 2, 2020)); // true
console.log(ehDataValida(30, 2, 2020)); // false
console.log(ehDataValida(29, 2, 2019)); // false

// Teste de ano bissexto
console.log(ehDataValida(29, 2, 2020)); // true




