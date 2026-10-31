const input = require('fs').readFileSync(0, 'utf-8').trim();
const [name, age, city = 'unknown', favourite = 'none', ...rest] = input.split(',');

console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`city: ${city}`);
console.log(`favourite: ${favourite}`);
console.log(`more: ${rest.length}`);
