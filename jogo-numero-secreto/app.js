// Exibe uma mensagem de boas-vindas ao jogador
alert('Boas vindas ao jogo do número secreto!');

// Configurações iniciais do jogo
const numeroMaximo = 5000;
const numeroSecreto = gerarNumeroSecreto(numeroMaximo);
let tentativas = 0;

// Função para gerar o número secreto aleatório
function gerarNumeroSecreto(maximo) {
    return Math.floor(Math.random() * maximo) + 1;
}

// Função principal do jogo
function jogar() {
    let acertou = false;

    while (!acertou) {
        // Solicita um número ao jogador
        const chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);

        // Valida a entrada do jogador
        if (isNaN(chute) || chute < 1 || chute > numeroMaximo) {
            alert(`Por favor, insira um número válido entre 1 e ${numeroMaximo}.`);
            continue;
        }

        tentativas++; // Incrementa o contador de tentativas

        // Verifica se o jogador acertou
        if (parseInt(chute) === numeroSecreto) {
            acertou = true;
        } else {
            // Fornece uma dica ao jogador
            const dica = chute > numeroSecreto ? 'menor' : 'maior';
            alert(`O número secreto é ${dica} que ${chute}.`);
        }
    }

    // Exibe mensagem final com o número de tentativas
    exibirMensagemFinal();
}

// Função para exibir a mensagem final
function exibirMensagemFinal() {
    const palavraTentativa = tentativas === 1 ? 'tentativa' : 'tentativas';
    alert(
        `Parabéns! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`
    );
}

// Inicia o jogo
jogar();
