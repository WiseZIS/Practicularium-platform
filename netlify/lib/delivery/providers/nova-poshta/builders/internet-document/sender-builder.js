/**
 * ============================================================
 * Nova Poshta
 * InternetDocument Sender Builder
 * ============================================================
 */

function buildSender(sender) {

    return {

        SenderCityRef: sender.cityRef,

        SenderAddressRef: sender.warehouseRef,

        Sender: sender.counterpartyRef,

        ContactSender: sender.contactRef,

        SendersPhone: sender.phone

    };

}

module.exports = {

    buildSender

};