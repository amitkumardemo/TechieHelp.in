const fs = require('fs');
const path = require('path');

const filesToFix = [
  path.join(__dirname, 'src', 'components', 'solutions', 'VoiceAISystem.jsx'),
  path.join(__dirname, 'src', 'components', 'Login.jsx'),
  path.join(__dirname, 'src', 'components', 'Services.jsx')
];

for (const filePath of filesToFix) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');

  // Replacements to fix white theme
  content = content.replace(/bg-\[#050510\]/g, 'bg-gray-50 dark:bg-[#050510]');
  content = content.replace(/bg-black\/30/g, 'bg-gray-100 dark:bg-black/30');

  // Also redo some of the others just in case they were missed or we find more variants
  content = content.replace(/text-gray-300/g, 'text-gray-700 dark:text-gray-300');
  content = content.replace(/text-gray-200/g, 'text-gray-800 dark:text-gray-200');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed theme in ${path.basename(filePath)}`);
}
