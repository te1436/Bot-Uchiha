// src/utils/helpers.js

// Função para formatar data
function formatarData(data) {
    return data.toISOString().split('T')[0];
}

// Função para validar ID do WhatsApp
function validarIdWhatsApp(id) {
    const regex = /^\+\d{1,3}\d{1,14}$/; // Exemplo de regex para validação
    return regex.test(id);
}

// Função para extrair número de uma string
function extrairNumero(string) {
    return string.match(/\d+/g).map(Number);
}

// Função para criar um delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para sanitizar uma string
function sanitizar(string) {
    return string.replace(/[^a-zA-Z0-9 ]/g, '');
}

// Função para truncar uma string
function truncar(string, limite) {
    return string.length > limite ? string.substring(0, limite) + '...' : string;
}

// Função para gerar um ID único
function gerarIdUnico() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

// Função para verificar se usuário é admin
function ehAdmin(user) {
    return user.role === 'admin'; // Exemplo simples
}

// Função para formatar moeda
function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}

// Função para capitalizar a primeira letra
function capitalizarPrimeira(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Função para capitalizar todas as palavras
function capitalizarPalavras(string) {
    return string.split(' ').map(capitalizarPrimeira).join(' ');
}

// Função para remover emojis de uma string
function removerEmojis(string) {
    return string.replace(/([\u203C-\u3299]|[\u1F600-\u1F64F]|[\u1F300-\u1F5FF]|[\u1F680-\u1F6FF]|[\u1F700-\u1F77F]|[\u1F780-\u1F7FF]|[\u1F800-\u1F8FF]|[\u1F900-\u1F9FF]|[\u1FA00-\u1FA6F]|[\u1FA70-\u1FAFF]|[\u2600-\u26FF]|[\u2700-\u27BF]+)/g, '');
}

// Função para processar um comando
function processarComando(comando) {
    const comandos = {
        'comando1': () => { /* Lógica para comando 1 */ },
        // Adicione mais comandos conforme necessário
    };
    return comandos[comando] ? comandos[comando]() : 'Comando desconhecido';
}

export {
    formatarData,
    validarIdWhatsApp,
    extrairNumero,
    delay,
    sanitizar,
    truncar,
    gerarIdUnico,
    ehAdmin,
    formatarMoeda,
    capitalizarPrimeira,
    capitalizarPalavras,
    removerEmojis,
    processarComando,
};
