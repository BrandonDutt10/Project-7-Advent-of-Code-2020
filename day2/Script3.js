// Day 2 - Password Philosophy (Part 1)
// Problem: Count passwords that match the policy (min/max letter frequency)

// Node.js filesystem module for reading input files
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file as string
const lines = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

// Track number of valid passwords
let validCount = 0;

// Loop through each password rule line
for (let line of lines) {

    // Split into rule and password
    // String.split() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    const [rule, password] = line.split(': ');

    // Extract policy components (range and letter)
    const [range, letter] = rule.split(' ');

    // Convert "min-max" into numeric values
    // Array.map() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const [min, max] = range.split('-').map(Number);

    // Count occurrences of the letter in the password
    // Array.filter() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const count = password
        .split('')
        .filter(c => c === letter)
        .length;

    // Check if password is valid under policy rules
    if (count >= min && count <= max) {
        validCount++;
    }
}

// Output final result
console.log("Answer:", validCount);
