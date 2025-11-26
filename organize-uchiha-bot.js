const fs = require('fs');
const path = require('path');

// Define the folder structure
const categories = ['admin', 'ai', 'economy', 'events', 'fun', 'games', 'info', 'media', 'moderation', 'utility'];

// Create folder structure
function createFolders() {
    categories.forEach(category => {
        const dirPath = path.join(__dirname, 'commands', category);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
    });
}

// Convert and move files
function organizeCommands() {
    const rootFiles = fs.readdirSync(__dirname);
    const commandMap = {
        // Map command keywords to their category
        'admin': ['adminCommand1', 'adminCommand2'], // example commands
        'ai': ['aiCommand1', 'aiCommand2'],
        'economy': ['economyCommand1', 'economyCommand2'],
        // Add other command mappings
    };

    const duplicates = ['piadas2.js', 'truth2.js', 'fact2.js', 'avatar2.js', 'cara-coroa2.js', 'clima2.js', 'covid19.js', '8ball2.js', 'abracar2.js', 'antiflood (1).js', 'anticheat.js (2)', 'welcome (1).js', 'stickergif (1)', 'desafiar2.js', 'link-gp2.js', 'abracar-geral.js'];

    rootFiles.forEach(file => {
        const ext = path.extname(file);
        // Ignore non-JS files or duplicates
        if (ext !== '.js' && !duplicates.includes(file)) {
            // Convert to .js if not already a .js file
            const newFilename = file + '.js';
            fs.renameSync(path.join(__dirname, file), path.join(__dirname, newFilename));
        }
        if (ext === '.js' && !duplicates.includes(file)) {
            // Determine category and move file
            const category = Object.keys(commandMap).find(cat => commandMap[cat].some(cmd => file.includes(cmd)));
            const targetPath = category ? path.join(__dirname, 'commands', category, file) : path.join(__dirname, 'commands', 'uncategorized', file);
            fs.renameSync(path.join(__dirname, file), targetPath);
        }
    });

    // Remove duplicates
    duplicates.forEach(duplicate => {
        const duplicatePath = path.join(__dirname, duplicate);
        if (fs.existsSync(duplicatePath)) {
            fs.unlinkSync(duplicatePath);
        }
    });
}

createFolders();
organizeCommands();

console.log('Commands organized successfully!');