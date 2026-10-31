const scores = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\s+/)
  .map((token) => Number(token.split(':')[1]))
  .filter((score) => score >= 50);

if (scores.length === 0) {
  console.log('none');
} else {
  const total = scores.reduce((sum, score) => sum + score, 0);
  console.log(Math.floor(total / scores.length));
}
