const fs = require('fs');
const path = 'c:\\Users\\Seonghoon\\Desktop\\Seonghoon\\Dev\\MainProjects\\DaChe\\script.js';
let code = fs.readFileSync(path, 'utf8');

// Replace the hardcoded punctuation list with a universal non-Korean character match
code = code.split("([.,!?~;:\"'\\s]|$)").join("([^가-힣]|$)");

fs.writeFileSync(path, code);
console.log("Replaced punctuation list with universal non-Korean boundary.");
