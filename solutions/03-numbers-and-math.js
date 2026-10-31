const total = Number(require('fs').readFileSync(0, 'utf-8').trim());

const hours = Math.floor(total / 3600);
const minutes = Math.floor((total % 3600) / 60);
const seconds = total % 60;

console.log(`${hours}h ${minutes}m ${seconds}s`);
