// Day 1 - Report Repair (Part 1)
// Problem: Find two numbers that sum to 2020 and multiply them.

// Node.js File System module
// Docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file
let raw;

try {
    raw = fs.readFileSync('./input.txt', 'utf-8');
} catch (err) {
    console.error("ERROR: Cannot read input.txt. Make sure it is in the same folder as solution.js");
    process.exit(1);
}

// DEBUG: confirm file loaded
console.log("File loaded. First 100 chars:");
console.log(raw.slice(0, 100));

// FIX: robust number extraction (handles any formatting)
const numbers = raw.match(/-?\d+/g).map(Number);

// DEBUG: confirm parsing worked
console.log("First 10 numbers:", numbers.slice(0, 10));

if (numbers.length === 0) {
    console.error("ERROR: No valid numbers parsed. Check input file.");
    process.exit(1);
}

// Approach:
// Use a Set to store numbers we've seen so far.
// For each number, check if (2020 - number) already exists.
// This reduces time complexity from O(n^2) to O(n).

const seen = new Set();
let found = false;

for (let num of numbers) {
    const target = 2020 - num;

    if (seen.has(target)) {
        const result = num * target;

        console.log("Answer:", result);
        found = true;
        break;
    }

    seen.add(num);
}

if (!found) {
    console.log("No pair found. Input may be incorrect.");
}