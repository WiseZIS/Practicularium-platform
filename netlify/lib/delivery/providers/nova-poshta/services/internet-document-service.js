/**
 * ============================================================
 * Nova Poshta
 * Internet Document Service
 * ============================================================
 */

const {

    saveInternetDocument

} = require("../requests/internet-document/save-internet-document");

async function createInternetDocument(methodProperties) {

    const response = await saveInternetDocument(methodProperties);

    return response.data[0];

}

module.exports = {

    createInternetDocument

};