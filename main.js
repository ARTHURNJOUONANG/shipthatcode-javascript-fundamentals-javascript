const kept = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\s+/)
  .filter((token) => Number(token) > 0);

console.log(kept.length === 0 ? 'none' : kept.join(' '));
