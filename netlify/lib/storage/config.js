/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Storage Engine
 * Configuration
 * ============================================================
 */

const STORAGE_CONFIG = {

    documentsPath:

        process.env.DOCUMENTS_STORAGE_PATH ||

        ""

};

module.exports = {

    STORAGE_CONFIG

};