const lines = require('fs').readFileSync(0, 'utf-8').trim().split(/\r?\n/);
const count = Number(lines[0]);
const dictionary = {};

for (let i = 1; i <= count; i++) {
  const [from, to] = lines[i].split(' ');
  dictionary[from] = to;
}

const sentence = lines[count + 1];
const translated = sentence.split(' ').map((word) =>
  Object.prototype.hasOwnProperty.call(dictionary, word) ? dictionary[word] : word
);

console.log(translated.join(' '));
