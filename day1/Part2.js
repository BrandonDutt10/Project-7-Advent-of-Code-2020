// Day 1 - Report Repair (Part 2)
// Problem: Find three numbers that sum to 2020 and multiply them.

const fs = require('fs');

// Read input file and convert to array of numbers
const numbers = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/)
    .map(Number);

// Approach:
// Try every pair, then check if the third number exists.

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        const target = 2020 - (numbers[i] + numbers[j]);

        if (numbers.includes(target)) {
            console.log("Answer:", numbers[i] * numbers[j] * target);
            return;
        }
    }
}
