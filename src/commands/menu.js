import { menuPrincipal } from '../menu/menu-principal.js';

export default {
    name: "menu",
    description: "Exibe o menu principal do bot",
    
    async execute(sock, msg, args) {
        try {
            const sender = msg.key.participant || msg.key.remoteJid;
            const prefix = "!";
            const NomeDoBot = "Uchiha Bot";
            const NickDono = "Uchiha";

            const menuText = menuPrincipal(sender, prefix, NomeDoBot, NickDono);

            await sock.sendMessage(
                msg.key.remoteJid,
                { text: menuText },
                { quoted: msg }
            );

        } catch (e) {
            console.error("Erro no comando menu:", e);
        }
    }
};