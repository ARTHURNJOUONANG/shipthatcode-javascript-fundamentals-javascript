const age = Number(require('fs').readFileSync(0, 'utf-8').trim());

if (age < 0 || age > 120) {
  console.log('invalid');
} else if (age < 13) {
  console.log('child');
} else if (age < 20) {
  console.log('teen');
} else if (age < 65) {
  console.log('adult');
} else {
  console.log('senior');
}
