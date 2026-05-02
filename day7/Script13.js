// Day 7 - Handy Haversacks (Part 1)
// Problem: Find how many bag colors can eventually contain a "shiny gold" bag

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

// Reverse graph: child bag ? list of possible parent bags
const graph = {};

// Build reverse mapping
for (let line of input) {
    const [parent, rest] = line.split(' bags contain ');

    if (rest.includes('no other bags')) continue;

    const contents = rest.split(', ');

    for (let item of contents) {
        const match = item.match(/(\d+) (.+?) bag/);
        const color = match[2];

        if (!graph[color]) graph[color] = [];
        graph[color].push(parent);
    }
}

// BFS / search upward
const target = 'shiny gold';
const visited = new Set();
const queue = [target];

while (queue.length > 0) {
    const current = queue.shift();

    const parents = graph[current] || [];

    for (let p of parents) {
        if (!visited.has(p)) {
            visited.add(p);
            queue.push(p);
        }
    }
}

console.log("Answer:", visited.size);
