export default {
  name: "ping",

  async execute(sock, msg) {
    const start = Date.now();
    await sock.sendMessage(msg.key.remoteJid, { text: "🏓 *Testando latência...*" });
    const end = Date.now();

    await sock.sendMessage(msg.key.remoteJid, {
      text: `⚡ *Pong!*  
📡 Latência: *${end - start}ms*`
    });
  }
};