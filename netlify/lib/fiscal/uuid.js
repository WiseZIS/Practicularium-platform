/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Engine
 * UUID Service
 * ============================================================
 */

const crypto =
    require("crypto");

class FiscalUUID {

    /**
     * --------------------------------------------------------
     * Generates UUID v4
     * --------------------------------------------------------
     */

    static generate() {

        return crypto.randomUUID();

    }

}

module.exports =
    FiscalUUID;