// Day 5 - Binary Boarding (Part 1)
// Problem: Find the highest seat ID from boarding pass codes

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file (each line is a boarding pass)
const passes = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

// Function to decode a boarding pass into seat ID
// MDN string methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
function getSeatID(pass) {
    // Replace characters with binary values:
    // F/L = 0, B/R = 1
    const binary = pass
        .replace(/F/g, '0')
        .replace(/B/g, '1')
        .replace(/L/g, '0')
        .replace(/R/g, '1');

    // First 7 bits = row, last 3 bits = column
    const row = parseInt(binary.slice(0, 7), 2);
    const col = parseInt(binary.slice(7), 2);

    return row * 8 + col;
}

let maxSeatID = 0;

// Loop through all boarding passes
for (let pass of passes) {
    const id = getSeatID(pass);
    if (id > maxSeatID) maxSeatID = id;
}

console.log("Answer:", maxSeatID);
