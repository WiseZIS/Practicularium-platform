/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Engine
 * Save PDF
 * ============================================================
 */

const fs =
    require("fs");

const path =
    require("path");

class SaveReceiptPdf {

    /**
     * --------------------------------------------------------
     * Save PDF
     * --------------------------------------------------------
     */

    static save(

        orderNumber,

        pdfBuffer,

        fileName = "Receipt.pdf"

    ) {

        const storagePath =

            process.env.DOCUMENTS_STORAGE_PATH;

        if (

            !storagePath

        ) {

            throw new Error(

                "DOCUMENTS_STORAGE_PATH is not configured."

            );

        }

        const directory =

            path.join(

                storagePath,

                "orders",

                orderNumber

            );

        fs.mkdirSync(

            directory,

            {

                recursive: true

            }

        );

        const filePath =

            path.join(

                directory,

                fileName

            );

        fs.writeFileSync(

            filePath,

            pdfBuffer

        );

        console.log();

        console.log(
            "PDF SAVED:"
        );

        console.log(
            filePath
        );

        return filePath;

    }

}

module.exports =
    SaveReceiptPdf;