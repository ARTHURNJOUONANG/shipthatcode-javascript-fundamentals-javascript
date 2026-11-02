const kept = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\s+/)
  .filter((token) => {
    const value = Number(token);
    return Number.isFinite(value) && value > 0;
  });

console.log(kept.length === 0 ? 'none' : kept.join(' '));
