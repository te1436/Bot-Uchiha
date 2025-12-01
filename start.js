import makeWASocket, {
    useMultiFileAuthState,
    Browsers,
    fetchLatestBaileysVersion
} from "@whiskeysockets/baileys";

import fs from "fs";
import path from "path";

const COMMANDS_DIR = "./src/commands";
const prefix = "!";

// Objeto para guardar os comandos carregados
let commands = new Map();

async function loadCommands() {
    try {
        const files = fs.readdirSync(COMMANDS_DIR);

        for (const file of files) {
            if (file.endsWith(".js")) {
                const filePath = path.resolve(`${COMMANDS_DIR}/${file}`);
                const cmdModule = await import(`file://${filePath}`);

                const cmd = cmdModule.default;

                if (!cmd || !cmd.name) continue;

                commands.set(cmd.name, cmd);
                console.log(`🟢 Comando carregado: ${cmd.name}`);
            }
        }
    } catch (err) {
        console.error("Erro ao carregar comandos:", err);
    }
}

async function startBot() {
    await loadCommands();

    const { state, saveCreds } = await useMultiFileAuthState("./auth");
    const { version } = await fetchLatestBaileysVersion();

    const sock = makeWASocket({
        version,
        browser: Browsers.macOS("Safari"),
        printQRInTerminal: true,
        auth: state
    });

    sock.ev.on("creds.update", saveCreds);

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;

        const from = msg.key.remoteJid;
        const sender = msg.key.participant || msg.key.remoteJid;

        const body =
            msg.message.conversation ||
            msg.message.extendedTextMessage?.text ||
            "";

        if (!body.startsWith(prefix)) return;

        const args = body.slice(prefix.length).trim().split(/ +/);
        const cmdName = args.shift().toLowerCase();

        const command = commands.get(cmdName);
        if (!command) return;

        try {
            await command.execute(sock, msg, args);
        } catch (err) {
            console.error(`Erro no comando ${cmdName}:`, err);
        }
    });

    sock.ev.on("connection.update", ({ connection }) => {
        if (connection === "open") {
            console.log("🟢 BOT CONECTADO COM SUCESSO!");
        }
        if (connection === "close") {
            console.log("🔄 Reconectando...");
            startBot();
        }
    });
}

startBot();