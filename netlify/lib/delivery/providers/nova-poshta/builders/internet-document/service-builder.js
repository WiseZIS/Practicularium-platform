/**
 * ============================================================
 * Nova Poshta
 * Internet Document Service Builder
 * ============================================================
 */

function formatDate(date) {

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;

}

function buildService(serviceData) {

    return {

        PayerType: serviceData.payer,

        PaymentMethod: serviceData.paymentMethod,

        CargoType: serviceData.cargoType,

        SeatsAmount: serviceData.seatsAmount,

        DateTime: formatDate(serviceData.shipmentDate),

        ServiceType: serviceData.serviceType

    };

}

module.exports = {

    buildService

};