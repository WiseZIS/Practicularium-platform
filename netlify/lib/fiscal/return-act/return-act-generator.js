/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Act Generator
 * ============================================================
 */

const fs = require("fs");
const path = require("path");

const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

function generateReturnAct(model) {

    const templatePath = path.join(
        __dirname,
        "templates",
        "return-act-template.docx"
    );

    console.log("");
    console.log("========================================");
    console.log("RETURN ACT TEMPLATE");
    console.log("========================================");
    console.log("Path:", templatePath);
    console.log("Exists:", fs.existsSync(templatePath));

    if (!fs.existsSync(templatePath)) {

        throw new Error("Template file not found.");

    }

    const stats = fs.statSync(templatePath);

    console.log("Size:", stats.size, "bytes");
    console.log("Modified:", stats.mtime);

    const content = fs.readFileSync(
        templatePath,
        "binary"
    );

    console.log("Binary length:", content.length);

    const zip = new PizZip(content);

    console.log("ZIP loaded successfully.");

    const doc = new Docxtemplater(
        zip,
        {
            paragraphLoop: true,
            linebreaks: true,

            delimiters: {
                start: "{{",
                end: "}}"
            }
        }
    );

    console.log("Docxtemplater compiled successfully.");

    doc.render({

        ACT_NUMBER: model.actNumber,

        ACT_DATE: model.createdAt,

        SALE_RECEIPT_UUID: model.saleReceiptUuid,

        RETURN_RECEIPT_UUID: model.returnReceiptUuid,

        FISCAL_CODE: model.fiscalCode,

        AMOUNT: model.amount,

        OWNER_NAME: model.ownerName

    });

    console.log("Template rendered successfully.");

    const buffer = doc.getZip().generate({

        type: "nodebuffer"

    });

    console.log("Document generated.");
    console.log("Buffer size:", buffer.length, "bytes");
    console.log("========================================");
    console.log("");

    return buffer;

}

module.exports = {

    generateReturnAct

};