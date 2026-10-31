let n = Number(require('fs').readFileSync(0, 'utf-8').trim());
let steps = 0;
let best = n;

while (n !== 1) {
  if (n % 2 === 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  steps = steps + 1;
  if (n > best) {
    best = n;
  }
}

console.log(steps);
console.log(best);
