const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const replacements = [
  // Prevent double replacement by checking if it's already prefixed by dark: or text-
  { from: /(?<!dark:|\w-)\bbg-primary\b/g, to: 'bg-white dark:bg-primary' },
  { from: /(?<!dark:|\w-)\bbg-\[#02000d\]\b/g, to: 'bg-white dark:bg-[#02000d]' },
  { from: /(?<!dark:|\w-)\bbg-gray-900\b/g, to: 'bg-gray-50 dark:bg-gray-900' },
  { from: /(?<!dark:|\w-)\btext-white\b/g, to: 'text-gray-900 dark:text-white' },
  { from: /(?<!dark:|\w-)\btext-gray-400\b/g, to: 'text-gray-600 dark:text-gray-400' },
  { from: /(?<!dark:|\w-)\btext-dimWhite\b/g, to: 'text-gray-500 dark:text-dimWhite' },
  { from: /(?<!dark:|\w-)\bborder-white\/10\b/g, to: 'border-gray-200 dark:border-white/10' },
  { from: /(?<!dark:|\w-)\bborder-white\/20\b/g, to: 'border-gray-300 dark:border-white/20' },
  { from: /(?<!dark:|\w-)\bbg-white\/5\b/g, to: 'bg-gray-100 dark:bg-white/5' },
  { from: /(?<!dark:|\w-)\bbg-white\/10\b/g, to: 'bg-gray-100 dark:bg-white/10' },
  // Optional fixes for specific hardcoded dark gradients
  { from: /(?<!dark:|\w-)\bfrom-slate-800\b/g, to: 'from-gray-100 dark:from-slate-800' },
  { from: /(?<!dark:|\w-)\bto-slate-900\b/g, to: 'to-gray-200 dark:to-slate-900' }
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else {
      if (filePath.endsWith('.jsx') || filePath.endsWith('.tsx') || filePath.endsWith('.js')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

const files = walk(srcDir);
let changedFilesCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    changedFilesCount++;
  }
});

console.log(`Refactored ${changedFilesCount} files to support light/dark theme toggle.`);
