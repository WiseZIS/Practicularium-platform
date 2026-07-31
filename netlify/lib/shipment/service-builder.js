function buildService(order, packageData) {

    return {

        payer:
            order.payment.method === "full-prepayment"
                ? "Sender"
                : "Recipient",

        paymentMethod: "Cash",

        cargoType: "Cargo",

        seatsAmount: packageData.seats,

        shipmentDate: new Date(),

        serviceType: "WarehouseWarehouse"

    };

}

module.exports = {

    buildService

};