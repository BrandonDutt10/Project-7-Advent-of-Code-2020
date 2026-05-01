// Day 3 - Toboggan Trajectory (Part 2)
// Problem: Multiply the number of trees encountered for multiple slopes.

// Reads input file using Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Load map input (each line is a row of the grid)
const map = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

// Width of pattern (used for horizontal wrapping)
const width = map[0].length;

// Function to count trees for a given slope
// MDN function reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
function countTrees(right, down) {
    let x = 0;
    let trees = 0;

    for (let y = down; y < map.length; y += down) {
        x = (x + right) % width; // wrap horizontally

        // '#' represents a tree
        if (map[y][x] === '#') {
            trees++;
        }
    }

    return trees;
}

// Slopes to test
const slopes = [
    [1, 1],
    [3, 1], // same slope as part 1
    [5, 1],
    [7, 1],
    [1, 2]
];

// Multiply results together
let product = 1;

for (let [right, down] of slopes) {
    product *= countTrees(right, down);
}

console.log("Answer:", product);
