const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

let fileCount = 0;
walkDir('src/components', function(filePath) {
  if (!filePath.endsWith('.jsx')) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;

  // Replace primary buttons matching old patterns (bg-blue-600, bg-blue-900, bg-cyan-600, gradients, etc.)
  content = content.replace(/className=\"[^\"]*(?:bg-blue-[6789]00|bg-cyan-[67]00|bg-purple-[456]00|from-blue-|from-cyan-|from-purple-|bg-gradient-to-r)[^\"]*text-white[^\"]*\"/g, 'className=\"btn-primary\"');

  // Also replace cases where className is dynamically built, e.g. className={`...`}
  // We'll leave those for manual if they're too complex, but some are just strings.
  
  // Replace secondary buttons
  content = content.replace(/className=\"[^\"]*(?:bg-slate-800|border-blue-[67]00|border-cyan-[67]00)[^\"]*\"/g, (match) => {
    if (match.includes('btn-primary')) return match;
    if (match.includes('<button') || match.includes('hover:')) return 'className=\"btn-secondary\"';
    return match;
  });

  // Replace old text gradients (e.g., text-transparent bg-clip-text bg-gradient-to-r from-...)
  content = content.replace(/className=\"[^\"]*text-transparent bg-clip-text bg-gradient-to-r from-[^\"]*\"/g, 'className=\"text-cyan-gradient font-bold\"');
  
  // Replace card backgrounds (bg-white/[0.01], bg-white/[0.02], bg-slate-800/something)
  content = content.replace(/className=\"[^\"]*(?:bg-white\/\[0\.0[123]\]|bg-slate-800\/50|bg-\[\#0b0b14\])[^\"]*border[^\"]*\"/g, (match) => {
    if (match.includes('btn-') || match.includes('input') || match.includes('text-')) return match;
    // Replace with card-glass
    return 'className=\"card-glass flex flex-col\"';
  });

  // Specifically target Dashboards and replace panel backgrounds
  if (filePath.includes('Dashboard')) {
    content = content.replace(/bg-white\/\[0\.01\]/g, 'card-glass-static');
    content = content.replace(/bg-white\/\[0\.02\]/g, 'card-glass-static');
    content = content.replace(/bg-slate-800/g, 'card-glass-static');
  }

  // Icons: replace text-yellow-500, text-purple-500, text-indigo-400 with text-[#33bbcf]
  content = content.replace(/text-yellow-500/g, 'text-[#33bbcf]');
  content = content.replace(/text-purple-[456]00/g, 'text-[#33bbcf]');
  content = content.replace(/text-indigo-[456]00/g, 'text-[#33bbcf]');
  content = content.replace(/text-blue-500/g, 'text-[#33bbcf]');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    fileCount++;
  }
});
console.log('Modified ' + fileCount + ' files for design system unification');
