/**
 * ============================================================
 * Nova Poshta
 * Counterparty Service
 * ============================================================
 */

const {

    getCounterparties

} = require("../requests/counterparty/get-counterparties");

const {

    getContactPersons

} = require("../requests/counterparty/get-contact-persons");

async function getSender() {

    const response = await getCounterparties();

    return response.data[0];

}

async function getSenderContact(senderRef) {

    const response = await getContactPersons(senderRef);

    return response.data[0];

}

async function getSenderProfile() {

    const sender = await getSender();

    const contact = await getSenderContact(sender.Ref);

    return {

        counterpartyRef: sender.Ref,

        contactRef: contact.Ref,

        phone: contact.Phones,

        firstName: contact.FirstName,

        lastName: contact.LastName,

        middleName: contact.MiddleName,

        type: sender.CounterpartyType

    };

}

module.exports = {

    getSender,

    getSenderContact,

    getSenderProfile

};