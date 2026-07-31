/**
 * ============================================================
 * Nova Poshta
 * Recipient Service
 * ============================================================
 */

const { saveCounterparty } = require("../requests/counterparty/save-counterparty");

const { buildCounterparty } = require("../builders/counterparty-builder");

async function createRecipient(recipientProfile) {

    const methodProperties = buildCounterparty(recipientProfile);

    const response = await saveCounterparty(methodProperties);

    const recipient = response.data[0];

    return {

        counterpartyRef: recipient.Ref,

        contactRef: recipient.ContactPerson.data[0].Ref,

        phone: recipientProfile.phone,

        firstName: recipient.FirstName,

        lastName: recipient.LastName,

        middleName: recipient.MiddleName,

        type: recipient.CounterpartyType

    };

}

module.exports = {

    createRecipient

};