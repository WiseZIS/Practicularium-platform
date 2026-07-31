/**
 * ============================================================
 * Nova Poshta
 * Counterparty Builder
 * ============================================================
 */

function buildCounterparty(recipient) {

    return {

        FirstName: recipient.firstName,

        LastName: recipient.lastName,

        MiddleName: recipient.middleName,

        Phone: recipient.phone,

        Email: recipient.email,

        CounterpartyType: "PrivatePerson",

        CounterpartyProperty: "Recipient"

    };

}

module.exports = {

    buildCounterparty

};