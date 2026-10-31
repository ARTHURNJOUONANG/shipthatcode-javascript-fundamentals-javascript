const [start, added, spent, fee] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map(Number);

let balance = start;
balance = balance + added;
console.log(balance);
balance = balance - spent;
console.log(balance);
balance = balance - fee;
console.log(balance);
