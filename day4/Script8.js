// Day 4 - Passport Processing (Part 2)
// Problem: Validate passports with strict field rules

// Node.js filesystem module
// Node.js fs docs: https://nodejs.org/api/fs.html
const fs = require('fs');

// Read input file
const input = fs.readFileSync('./input.txt', 'utf-8');

// FIX: robust passport splitting (handles Windows + Linux blank lines)
const passports = input
    .split(/\r?\n\r?\n/)
    .map(p => p.trim())
    .filter(Boolean);

const requiredFields = ['byr','iyr','eyr','hgt','hcl','ecl','pid'];

let validCount = 0;

// ---- Validation Functions ----

function isValidByr(v) {
    return /^\d{4}$/.test(v) && v >= 1920 && v <= 2002;
}

function isValidIyr(v) {
    return /^\d{4}$/.test(v) && v >= 2010 && v <= 2020;
}

function isValidEyr(v) {
    return /^\d{4}$/.test(v) && v >= 2020 && v <= 2030;
}

function isValidHgt(v) {
    const match = v.match(/^(\d+)(cm|in)$/);
    if (!match) return false;

    const value = Number(match[1]);
    const unit = match[2];

    if (unit === 'cm') return value >= 150 && value <= 193;
    if (unit === 'in') return value >= 59 && value <= 76;

    return false;
}

function isValidHcl(v) {
    return /^#[0-9a-f]{6}$/.test(v);
}

function isValidEcl(v) {
    return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(v);
}

function isValidPid(v) {
    return /^\d{9}$/.test(v);
}

// ---- Main Logic ----

for (let passport of passports) {

    // FIX: safer field splitting
    const fields = passport.split(/\s+/);

    const map = {};

    for (let field of fields) {
        const [key, value] = field.split(':');
        map[key] = value;
    }

    // Must have all required fields
    const hasAllFields = requiredFields.every(f => f in map);
    if (!hasAllFields) continue;

    // Validate all fields
    if (
        isValidByr(map.byr) &&
        isValidIyr(map.iyr) &&
        isValidEyr(map.eyr) &&
        isValidHgt(map.hgt) &&
        isValidHcl(map.hcl) &&
        isValidEcl(map.ecl) &&
        isValidPid(map.pid)
    ) {
        validCount++;
    }
}

console.log("Answer:", validCount);