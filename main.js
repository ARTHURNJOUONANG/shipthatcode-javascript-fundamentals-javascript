const nums = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\s+/)
  .map(Number);

nums.sort((a, b) => a - b);

const mid = Math.floor(nums.length / 2);
const median = nums.length % 2 === 1 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;

console.log(nums.join(' '));
console.log(median);
