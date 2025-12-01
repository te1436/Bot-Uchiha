export default {
  name: "info",

  async execute(sock, msg, args, sender, prefix, NomeDoBot, NickDono) {
    const txt = `
🔱 *Informações do Bot* 🔱

🤖 Nome: ${NomeDoBot}
👑 Dono: ${NickDono}
🌀 Prefixo: ${prefix}
⚙️ Versão: 10.0.0
📡 Status: Online

📅 Data: ${new Date().toLocaleDateString("pt-BR")}
⏰ Hora: ${new Date().toLocaleTimeString("pt-BR")}
`;

    await sock.sendMessage(msg.key.remoteJid, { text: txt });
  }
};