const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

// A comprehensive regex for the emojis we want to remove.
// Specifically targeting startup generic emojis.
// 🚀 🔥 💸 💡 🎯 💎 ⚡ 🌙 ✨ 💼 🎓 🧠 🏆 ✅ 📈 📊 🤖 💼 🚀
// Using a broad emoji regex but mostly focusing on the ones used as bullets.
// Since JS regex for emojis can be tricky, we'll explicitly list the requested ones.
const emojiRegex = /[🚀🔥💸💡🎯💎⚡🌙✨💼🎓🧠🏆✅📈📊🎉🎊]/g;

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

let modifiedFiles = 0;

walkDir(directoryPath, (filePath) => {
    if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Check if file contains emojis
        if (emojiRegex.test(content)) {
            const newContent = content.replace(emojiRegex, '');
            fs.writeFileSync(filePath, newContent, 'utf8');
            modifiedFiles++;
            console.log(`Scrubbed emojis from: ${filePath}`);
        }
    }
});

console.log(`\nOperation complete. Modified ${modifiedFiles} files.`);
