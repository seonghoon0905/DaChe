const scriptContent = require('fs').readFileSync('c:\\Users\\Seonghoon\\Desktop\\Seonghoon\\Dev\\MainProjects\\DaChe\\script.js', 'utf8');

// extract convertToBanmal using regex
const match = scriptContent.match(/function convertToBanmal\(text\) \{[\s\S]*?return result;\s*\}/);
if (match) {
    eval(match[0]);
    console.log("TEST 1 (가져옵니다):", convertToBanmal("가져옵니다."));
    console.log("TEST 2 (가져옵니다만):", convertToBanmal("데이터를 가져옵니다만"));
    console.log("TEST 3 (가져옵니다 ):", convertToBanmal("가져옵니다 "));
} else {
    console.log("Could not find convertToBanmal");
}
