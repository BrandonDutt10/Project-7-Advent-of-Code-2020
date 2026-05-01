// Day 6 - Custom Customs (Part 1)
// Problem: Count questions where ANYONE in a group answered "yes"

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file
const input = fs.readFileSync('./input.txt', 'utf-8');

// Groups are separated by blank lines
const groups = input.trim().split(/\r?\n\r?\n/);

let total = 0;

for (let group of groups) {

    // Remove line breaks and combine all answers in group
    const allAnswers = group.replace(/\s/g, '').split('');

    // Use Set to remove duplicates
    // MDN Set docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    const uniqueAnswers = new Set(allAnswers);

    // Add number of unique "yes" answers
    total += uniqueAnswers.size;
}

console.log("Answer:", total);