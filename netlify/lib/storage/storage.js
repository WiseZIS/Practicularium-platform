/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Storage Engine
 * ============================================================
 */

const fs =
    require("fs");

const path =
    require("path");

const {
    STORAGE_CONFIG
} = require("./config");

class Storage {

    /**
     * --------------------------------------------------------
     * Returns Order Directory
     * --------------------------------------------------------
     */

    getOrderDirectory(
        orderNumber
    ) {

        return path.join(

            STORAGE_CONFIG.documentsPath,

            "orders",

            orderNumber

        );

    }

    /**
     * --------------------------------------------------------
     * Creates Directory
     * --------------------------------------------------------
     */

    ensureDirectory(
        directory
    ) {

        fs.mkdirSync(

            directory,

            {

                recursive: true

            }

        );

    }

    /**
     * --------------------------------------------------------
     * Saves File
     * --------------------------------------------------------
     */

    saveFile(

        relativeDirectory,

        fileName,

        fileContent

    ) {

        const directory =

            path.join(

                STORAGE_CONFIG.documentsPath,

                relativeDirectory

            );

        this.ensureDirectory(

            directory

        );

        const filePath =

            path.join(

                directory,

                fileName

            );

        fs.writeFileSync(

            filePath,

            fileContent

        );

        console.log();

        console.log(
            "FILE SAVED:"
        );

        console.log(
            filePath
        );

        return filePath;

    }

    /**
     * --------------------------------------------------------
     * Saves Receipt PDF
     * --------------------------------------------------------
     */

    saveReceiptPdf(

        orderNumber,

        pdfBuffer

    ) {

        return this.saveFile(

            path.join(

                "orders",

                orderNumber,

                "fiscal"

            ),

            "Receipt.pdf",

            pdfBuffer

        );

    }

}

module.exports =
    new Storage();