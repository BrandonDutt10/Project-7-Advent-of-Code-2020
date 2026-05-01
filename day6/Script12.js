// Day 6 - Custom Customs (Part 2)
// Problem: Count questions where EVERYONE in a group answered "yes"

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file
const input = fs.readFileSync('./input.txt', 'utf-8');

// Split into groups (blank line separates groups)
const groups = input.trim().split(/\r?\n\r?\n/);

let total = 0;

for (let group of groups) {

    // Split each group into individual people
    const people = group.split(/\r?\n/);

    // Start with first person's answers
    let common = people[0].split('');

    // MDN Array filter: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    for (let i = 1; i < people.length; i++) {
        const answers = new Set(people[i].split(''));

        // Keep only letters that exist in ALL people
        common = common.filter(letter => answers.has(letter));
    }

    // Count shared "yes" answers
    total += common.length;
}

console.log("Answer:", total);
