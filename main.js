const [month, year] = require('fs')
  .readFileSync(0, 'utf-8')
  .trim()
  .split(/\r?\n/)
  .map(Number);

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInMonth(month, year) {
  const days = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[month - 1];
}

console.log(daysInMonth(month, year));
