function calculate({ weight, config }) {
    const tariff = config.tariffs.find(
        (item) => weight <= item.maxWeight
    );

    if (!tariff) {
        throw new Error("Delivery tariff not found.");
    }

    return {
        price: tariff.price
    };
}

module.exports = calculate;