const DeliveryService = require("./netlify/lib/delivery");
const { DELIVERY_CARRIERS } = require("./netlify/lib/delivery/carriers");

try {
    const result = DeliveryService.calculateDelivery({
        carrier: DELIVERY_CARRIERS.UKRPOSHTA,
        weight: 15,
        destination: {
            city: "Запоріжжя",
            warehouse: "61"
        }
    });

    console.log(result);

} catch (error) {
    console.error(error.message);
}