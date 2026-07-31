/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * Configuration
 * ============================================================
 */

const CHECKBOX_CONFIG = {

    apiUrl:

        process.env.CHECKBOX_API_URL ||

        "https://api.checkbox.ua/api/v1",

    pinCode:

        process.env.CHECKBOX_PIN ||

        "",

    licenseKey:

        process.env.CHECKBOX_LICENSE_KEY ||

        "",

    timeout: 30000,

    currency: "UAH",

    clientName:

        "PRACTICULARIUM Platform",

    clientVersion:

        "2.0"

};

module.exports = {

    CHECKBOX_CONFIG

};