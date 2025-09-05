 // Referências aos elementos HTML
const storyTextElement = document.getElementById('story-text');
const optionsContainerElement = document.getElementById('options-container');

// A estrutura do jogo, com as "páginas" e suas opções
const game = {
    start: {
        text: 'Você está no início de uma trilha. A floresta se estende à sua frente. Que caminho você escolhe?',
        options: [
            { text: 'Ir pela trilha principal.', next: 'trilha_principal' },
            { text: 'Explorar um caminho secundário.', next: 'caminho_secundario' }
        ]
    },
    trilha_principal: {
        text: 'Você segue a trilha principal e encontra um rio. Parece calmo. Você decide atravessar ou procurar outro caminho?',
        options: [
            { text: 'Atravessar o rio.', next: 'atravessar_rio' },
            { text: 'Procurar outro caminho.', next: 'procurar_caminho' }
        ]
    },
    atravessar_rio: {
        text: 'Você atravessa o rio e encontra uma clareira com um tesouro. Parabéns, você venceu o jogo!',
        options: [
            { text: 'Recomeçar', next: 'start' }
        ]
    },
    procurar_caminho: {
        text: 'Você tenta contornar o rio, mas se perde na floresta. Fim de jogo.',
        options: [
            { text: 'Recomeçar', next: 'start' }
        ]
    },
    caminho_secundario: {
        text: 'Você entra no caminho secundário e encontra uma caverna escura. Você decide entrar?',
        options: [
            { text: 'Entrar na caverna.', next: 'entrar_caverna' },
            { text: 'Voltar para a trilha principal.', next: 'trilha_principal' }
        ]
    },
    entrar_caverna: {
        text: 'Ao entrar na caverna, você escorrega e cai em um buraco profundo. Fim de jogo.',
        options: [
            { text: 'Recomeçar', next: 'start' }
        ]
    }
};

// Função para iniciar ou atualizar o jogo
function showPage(page) {
    const pageData = game[page];
    if (!pageData) {
        // Isso é uma proteção caso a página não exista
        console.error('Página do jogo não encontrada:', page);
        return;
    }

    // Atualiza o texto da história
    storyTextElement.innerText = pageData.text;

    // Limpa os botões anteriores
    while (optionsContainerElement.firstChild) {
        optionsContainerElement.removeChild(optionsContainerElement.firstChild);
    }

    // Cria os novos botões com as opções
    pageData.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.addEventListener('click', () => {
            showPage(option.next);
        });
        optionsContainerElement.appendChild(button);
    });
}

// Inicia o jogo
showPage('start');