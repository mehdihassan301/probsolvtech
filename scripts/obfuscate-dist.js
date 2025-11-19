// scripts/obfuscate-dist.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const distAssets = path.join(__dirname, '..', 'dist', 'assets');
if (!fs.existsSync(distAssets)) {
  console.error('dist/assets not found. Run build first.');
  process.exit(1);
}

// obfuscate all .js files in dist/assets
const files = fs.readdirSync(distAssets).filter(f => f.endsWith('.js'));
if (!files.length) {
  console.log('No JS files to obfuscate in dist/assets/');
  process.exit(0);
}
console.log('Obfuscating files:', files);
for (const file of files) {
  const input = path.join(distAssets, file);
  const output = input; // overwrite
  const cmd = `npx javascript-obfuscator "${input}" --config "${path.join(__dirname, '..', 'obfuscator.config.json')}" --output "${output}"`;
  console.log('running:', cmd);
  execSync(cmd, { stdio: 'inherit' });
}
console.log('Obfuscation complete.');
