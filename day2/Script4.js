const fs = require('fs');

// Read input file
const lines = fs.readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(/\r?\n/);

let validCount = 0;

for (let line of lines) {
    // Example: "1-3 a: abcde"
    const [rule, password] = line.split(': ');
    const [positions, letter] = rule.split(' ');
    const [pos1, pos2] = positions.split('-').map(Number);

    // Check the two positions (convert to 0-based index)
    const firstMatch = password[pos1 - 1] === letter;
    const secondMatch = password[pos2 - 1] === letter;

    // Exactly ONE must match
    if (firstMatch !== secondMatch) {
        validCount++;
    }
}

console.log("Answer:", validCount);