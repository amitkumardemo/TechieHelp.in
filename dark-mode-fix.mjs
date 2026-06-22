import fs from 'fs';
import path from 'path';

const directoryPath = path.join(process.cwd(), 'src/components/home');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to add dark: counterparts to hardcoded light theme colors.
  // We use regex to carefully replace standard tailwind classes, ensuring we don't duplicate existing dark: classes.
  
  const replacements = {
    'bg-white': 'bg-white dark:bg-[#0a0a0a]',
    'text-gray-900': 'text-gray-900 dark:text-gray-50',
    'text-gray-600': 'text-gray-600 dark:text-gray-300',
    'text-gray-500': 'text-gray-500 dark:text-gray-400',
    'text-gray-400': 'text-gray-400 dark:text-gray-500',
    'bg-gray-50': 'bg-gray-50 dark:bg-[#111]',
    'bg-gray-100': 'bg-gray-100 dark:bg-gray-800',
    'border-gray-200': 'border-gray-200 dark:border-gray-800',
    'border-gray-100': 'border-gray-100 dark:border-gray-800/50',
    'bg-black': 'bg-black dark:bg-white',
    'text-black': 'text-black dark:text-gray-900',
    'text-white': 'text-white dark:text-gray-900',
  };

  let modifiedContent = content;

  for (const [light, dark] of Object.entries(replacements)) {
    // Only replace if the word is fully matched and not already followed/preceded by dark:
    // e.g., match 'bg-white' but not 'dark:bg-white'
    const regex = new RegExp(`(?<!dark:)\\b${light.replace(/\//g, '\\/')}\\b(?!\\s+dark:)`, 'g');
    modifiedContent = modifiedContent.replace(regex, dark);
  }

  // A few manual touchups for specific edge cases
  modifiedContent = modifiedContent.replace(/bg-gray-50\/50/g, 'bg-gray-50/50 dark:bg-[#111]/50');
  modifiedContent = modifiedContent.replace(/bg-gray-50\/30/g, 'bg-gray-50/30 dark:bg-[#111]/30');
  modifiedContent = modifiedContent.replace(/bg-gray-50\/10/g, 'bg-gray-50/10 dark:bg-[#111]/10');
  modifiedContent = modifiedContent.replace(/bg-gray-200\/60/g, 'border-gray-200/60 dark:border-gray-800/60');
  modifiedContent = modifiedContent.replace(/bg-gray-200\/80/g, 'bg-gray-200/80 dark:bg-gray-800/80');

  // Fix button text-white overriding text-gray-900 when both applied by regex
  // Since 'text-white dark:text-gray-900' might get applied twice if not careful.
  
  if (content !== modifiedContent) {
    fs.writeFileSync(filePath, modifiedContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
}

function traverseDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

traverseDirectory(directoryPath);
console.log('Done mapping dark mode classes.');
