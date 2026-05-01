const fs = require('fs');

const lines = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

let validCount = 0;

for (let line of lines) {
    const [rule, password] = line.split(': ');
    const [range, letter] = rule.split(' ');
    const [min, max] = range.split('-').map(Number);

    const count = password.split('').filter(c => c === letter).length;

    if (count >= min && count <= max) {
        validCount++;
    }
}

console.log("Answer:", validCount);