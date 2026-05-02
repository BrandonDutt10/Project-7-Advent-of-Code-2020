// Day 2 - Password Philosophy (Part 2)
// Problem: Validate passwords using POSITION rules (exactly one position must match)

// Node.js filesystem module for reading input files
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file as string and split into lines
const lines = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

// Track number of valid passwords
let validCount = 0;

// Loop through each password rule line
for (let line of lines) {

    // Example format: "1-3 a: abcde"

    // Split rule from password
    // String.split() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
    const [rule, password] = line.split(': ');

    // Extract positions and letter
    const [positions, letter] = rule.split(' ');

    // Convert "pos1-pos2" into numbers
    // Array.map() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    const [pos1, pos2] = positions.split('-').map(Number);

    // Check characters at given positions (convert to 0-based index)
    // String indexing MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    const firstMatch = password[pos1 - 1] === letter;
    const secondMatch = password[pos2 - 1] === letter;

    // XOR logic: exactly ONE position must match
    if (firstMatch !== secondMatch) {
        validCount++;
    }
}

// Output final result
console.log("Answer:", validCount);
