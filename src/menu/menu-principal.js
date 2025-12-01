// src/menu/menu-principal.js

const menuPrincipal = (prefix, sender, pushname) => {

    const user = sender?.split("@")[0] || "Usuário";

return `
──────────────────────────────────
🔥👁️  U C H I H A  B O T  👁️🔥
──────────────────────────────────

👋 Olá, *${pushname || user}*!
Bem-vindo(a) ao Menu Principal do *Uchiha Bot* 🔥

⚡ *INFORMAÇÕES DO USUÁRIO* ⚡
┏━━━━━━━━━━━━━━━━━━━━
┃👤 Nick: @${user}
┃⭕ Prefixo: ${prefix}
┃🛡️ Dono: Uchiha
┗━━━━━━━━━━━━━━━━━━━━

🔥 *STATUS DO SISTEMA* 🔥
┏━━━━━━━━━━━━━━━━━━━━
┃📅 Data: ${new Date().toLocaleDateString()}
┃⏰ Hora: ${new Date().toLocaleTimeString()}
┃⚙️ Versão: 10.0.0
┃🤖 Bot: Uchiha Bot
┗━━━━━━━━━━━━━━━━━━━━

🔥👁️ *MENUS DISPONÍVEIS* 👁️🔥
┏━━━━━━━━━━━━━━━━━━━━
┃ ✦ ${prefix}menu-bot
┃ ✦ ${prefix}menu-adm
┃ ✦ ${prefix}menu-vip
┃ ✦ ${prefix}menu-dono
┃ ✦ ${prefix}menu-help
┃ ✦ ${prefix}menu-logos
┃ ✦ ${prefix}menu-jogos
┃ ✦ ${prefix}menu-premium
┃ ✦ ${prefix}menu-stickers
┃ ✦ ${prefix}menu-pesquisas
┃ ✦ ${prefix}menu-downloads
┃ ✦ ${prefix}menu-aleatorios
┃ ✦ ${prefix}menu-efeitos-img
┃ ✦ ${prefix}menu-alteradores
┃ ✦ ${prefix}menu-informativo
┃ ✦ ${prefix}menu-brincadeiras
┗━━━━━━━━━━━━━━━━━━━━

⚡👁️ *FORÇA ABSOLUTA – UCHIHA BOT* 👁️⚡
"Quanto mais escura a noite, mais forte brilha o Sharingan."
`;
};

export { menuPrincipal };