// Day 4 - Passport Processing (Part 1)
// Problem: Count passports with all required fields (cid optional)

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read full input safely
const input = fs.readFileSync('./input.txt', 'utf-8');

// IMPORTANT FIX:
// Handles Windows/Linux blank lines correctly (more robust than '\n\n')
const passports = input.trim().split(/\n\s*\n/);

// Required fields (cid is optional)
const requiredFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];

let validCount = 0;

for (let passport of passports) {

    // Convert passport block into key:value pairs
    const fields = passport
        .replace(/\n/g, ' ')
        .split(' ')
        .filter(Boolean);

    const map = {};

    for (let field of fields) {
        const [key, value] = field.split(':');
        map[key] = value;
    }

    // Check required fields exist
    const isValid = requiredFields.every(field => field in map);

    if (isValid) validCount++;
}

console.log("Answer:", validCount);
