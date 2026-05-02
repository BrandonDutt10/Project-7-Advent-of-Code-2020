// Day 7 - Handy Haversacks (Part 2)
// Problem: Count total number of bags inside "shiny gold"

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file
const input = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n');

// Forward graph: bag ? list of { color, count }
const graph = {};

// Parse rules
for (let line of input) {
    const [parent, rest] = line.split(' bags contain ');

    graph[parent] = [];

    if (rest.includes('no other bags')) continue;

    const contents = rest.split(', ');

    for (let item of contents) {
        const match = item.match(/(\d+) (.+?) bag/);
        graph[parent].push({
            color: match[2],
            count: Number(match[1])
        });
    }
}

// Recursive function to count bags inside
function countBags(color) {
    let total = 0;

    const contents = graph[color] || [];

    for (let bag of contents) {
        // count this bag + all bags inside it
        total += bag.count * (1 + countBags(bag.color));
    }

    return total;
}

console.log("Answer:", countBags("shiny gold"));
