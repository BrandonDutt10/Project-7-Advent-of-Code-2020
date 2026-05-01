// Day 5 - Binary Boarding (Part 2)
// Problem: Find your missing seat ID (not at very front or back)

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file (each line is a boarding pass)
const passes = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

// Convert boarding pass to seat ID
// MDN parseInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function getSeatID(pass) {
    const binary = pass
        .replace(/F/g, '0')
        .replace(/B/g, '1')
        .replace(/L/g, '0')
        .replace(/R/g, '1');

    const row = parseInt(binary.slice(0, 7), 2);
    const col = parseInt(binary.slice(7), 2);

    return row * 8 + col;
}

// Convert all passes into seat IDs
const seatIDs = passes.map(getSeatID);

// Sort seat IDs in ascending order
seatIDs.sort((a, b) => a - b);

// Find missing seat
let mySeat = null;

for (let i = 0; i < seatIDs.length - 1; i++) {
    if (seatIDs[i + 1] !== seatIDs[i] + 1) {
        mySeat = seatIDs[i] + 1;
        break;
    }
}

console.log("Answer:", mySeat);
