const fs = require('fs');

// Read map input
const map = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

const width = map[0].length;

let x = 0;
let treeCount = 0;

// Start from row 1 because row 0 is starting position
for (let y = 1; y < map.length; y++) {
    x = (x + 3) % width; // move right 3, wrap around

    if (map[y][x] === '#') {
        treeCount++;
    }
}

console.log("Answer:", treeCount);
