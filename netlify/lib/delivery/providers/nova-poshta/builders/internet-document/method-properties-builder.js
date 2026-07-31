/**
 * ============================================================
 * Nova Poshta
 * Method Properties Builder
 * ============================================================
 */

function buildMethodProperties(document) {

    return {

        PayerType: document.service.PayerType,

        PaymentMethod: document.service.PaymentMethod,

        CargoType: document.service.CargoType,

        Weight: document.package.Weight,

        Cost: document.package.Cost,

        Description: document.package.Description,

        SeatsAmount: document.service.SeatsAmount,

        DateTime: document.service.DateTime,

        ServiceType: document.service.ServiceType,

        Sender: document.sender.Sender,

        ContactSender: document.sender.ContactSender,

        SendersPhone: document.sender.SendersPhone,

        CitySender: document.sender.SenderCityRef,

        SenderAddress: document.sender.SenderAddressRef,

        Recipient: document.recipient.Recipient,

        ContactRecipient: document.recipient.ContactRecipient,

        RecipientsPhone: document.recipient.RecipientsPhone,

        CityRecipient: document.recipient.RecipientCityRef,

        RecipientAddress: document.recipient.RecipientAddressRef

    };

}

module.exports = {

    buildMethodProperties

};