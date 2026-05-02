// Day 3 - Toboggan Trajectory (Part 1)
// Problem: Count how many trees (#) are encountered moving right 3, down 1

// Node.js filesystem module for reading input files
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read map input and split into rows
// String.split() MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const map = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

// Width of map (used for horizontal wrapping)
const width = map[0].length;

let x = 0;
let treeCount = 0;

// Traverse map starting from row 1 (row 0 is starting position)
for (let y = 1; y < map.length; y++) {

    // Move right 3 and wrap around using modulo
    // MDN modulo operator reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
    x = (x + 3) % width;

    // Check if current position is a tree
    if (map[y][x] === '#') {
        treeCount++;
    }
}

// Output final result
console.log("Answer:", treeCount);
