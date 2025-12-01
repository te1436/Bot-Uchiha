// Exportação apenas do que realmente existe
export * from "./menu-principal.js";
export * from "./uchiha-theme.js";
// comando !menu com GIF no topo
if (cmd === "menu") {

    const gifUrl = "https://i.imgur.com/8B8O3K0.gif"; // seu GIF

    // 1️⃣ Envia o GIF animado
    await conn.sendMessage(from, {
        video: { url: gifUrl },
        caption: "🔥 Sharingan Ativado 🔥",
        gifPlayback: true
    });

    // 2️⃣ Importa o menu
    const { menuPrincipal } = await import("./src/menu/menu-principal.js");

    const menuText = menuPrincipal(prefix, sender, pushname);

    // 3️⃣ Envia o menu em texto
    await conn.sendMessage(from, { text: menuText });

}