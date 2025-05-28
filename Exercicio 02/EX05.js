/*5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

//// Importa a biblioteca prompt-sync para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

function jokenpo() {
    // Perguntar ao jogador
    const escolhaJogador = prompt('Escolha Pedra, Papel ou Tesoura: ').toLowerCase();

    // Validar a entrada
    if (escolhaJogador !== 'pedra' && 
        escolhaJogador !== 'papel' && 
        escolhaJogador !== 'tesoura') {
        console.log('Opção inválida! Escolha entre Pedra, Papel ou Tesoura.');
        return; // Encerra a função se for inválido
    }

    // Se passou da validacao pergunta novamente
    const escolhaComputador = ['pedra', 'papel', 'tesoura'][Math.floor(Math.random() * 3)];
    // logica de comparacao
    if (escolhaJogador === escolhaComputador) {
        console.log('Empate!');
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra')
    ) {
        console.log('Você venceu!');
    } else {
        console.log('O computador venceu!');
    }
}

// Chama a função para iniciar o jogo
jokenpo();
