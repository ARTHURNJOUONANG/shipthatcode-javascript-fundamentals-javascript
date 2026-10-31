const triple = (n) => n * 3;
const subtract = (by) => (n) => n - by;
const compose = (f, g) => (n) => f(g(n));

const n = Number(require('fs').readFileSync(0, 'utf-8').trim());
const lower = compose(subtract(3), triple);
const upper = compose(subtract(1), triple);

console.log(lower(n));
console.log(upper(n));
