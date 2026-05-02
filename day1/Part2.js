// Day 1 - Report Repair (Part 2)
// Problem: Find three numbers that sum to 2020 and multiply them.

// Node.js filesystem module for reading files
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file as a string
const raw = fs.readFileSync('./input.txt', 'utf-8');

// Convert input into an array of numbers
// String.split() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// Array.map() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const numbers = raw
    .trim()
    .split(/\r?\n/)
    .map(Number);

// Approach:
// We try every pair of numbers (i, j), then compute the third number needed
// If the third number exists in the array, we found the correct triplet

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {

        const target = 2020 - (numbers[i] + numbers[j]);

        // Array.includes() MDN:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        if (numbers.includes(target)) {

            // Output final product of the three numbers
            console.log("Answer:", numbers[i] * numbers[j] * target);

            return; // stop once solution is found
        }
    }
}
