/**
 * ============================================================
 * Nova Poshta
 * InternetDocument Recipient Builder
 * ============================================================
 */

function buildRecipient(recipient) {

    console.log("");
    console.log("=== RECIPIENT BUILDER ===");
    console.log(recipient);

    return {

        Recipient: recipient.counterpartyRef,

        ContactRecipient: recipient.contactRef,

        RecipientsPhone: recipient.phone,

        RecipientCityRef: recipient.cityRef,

        RecipientAddressRef: recipient.warehouseRef

    };

}

module.exports = {

    buildRecipient

};