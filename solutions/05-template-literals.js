const [item, priceText, qtyText] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\r?\n/);
const price = Number(priceText);
const qty = Number(qtyText);

console.log(`Item: ${item}
Qty: ${qty} x $${price}
Total: $${price * qty}`);
