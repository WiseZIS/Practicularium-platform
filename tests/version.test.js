const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip");

console.log("Node:", process.version);

console.log("Docxtemplater path:");
console.log(require.resolve("docxtemplater"));

console.log();

console.log("PizZip path:");
console.log(require.resolve("pizzip"));

console.log();

try {
    console.log("Docxtemplater package:");
    console.log(require("docxtemplater/package.json"));
} catch (e) {
    console.log(e);
}

console.log();

try {
    console.log("PizZip package:");
    console.log(require("pizzip/package.json"));
} catch (e) {
    console.log(e);
}