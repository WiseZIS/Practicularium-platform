const fs = require("fs");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const templatePath =
    "./netlify/lib/fiscal/return-act/templates/return-act-template.docx";

console.log("========================================");
console.log("DOCXTEMPLATER STANDALONE TEST");
console.log("========================================");
console.log("Template:", templatePath);
console.log();

try {

    const content = fs.readFileSync(templatePath, "binary");

    console.log("✓ File loaded");
    console.log("Binary length:", content.length);

    const zip = new PizZip(content);

    console.log("✓ ZIP parsed");

    const xml = zip.file("word/document.xml").asText();

    console.log("✓ document.xml loaded");
    console.log("XML length:", xml.length);
    console.log();

    console.log("========== XML ==========");
    console.log(xml);
    console.log("========== END XML ==========");
    console.log();

    console.log("Occurrences:");
    console.log("{{ :", (xml.match(/\{\{/g) || []).length);
    console.log("}} :", (xml.match(/\}\}/g) || []).length);
    console.log();

    console.log("Creating Docxtemplater...");

    const doc = new Docxtemplater(zip);

    console.log();
    console.log("✓ SUCCESS!");
    console.log("Docxtemplater created successfully.");

} catch (error) {

    console.log();
    console.log("========== ERROR ==========");
    console.log(error);

    if (error.properties) {

        console.log();
        console.log("========== PROPERTIES ==========");
        console.dir(error.properties, { depth: null });

    }

}