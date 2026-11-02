const text = require('fs').readFileSync(0, 'utf-8').trim();
const titled = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

console.log(titled);
console.log(text.length);
