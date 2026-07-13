/**
 * DELIVERY-04
 * Nova Poshta Provider
 * PRACTICULARIUM Platform
 */

const calculateNovaPoshta = require("../calculators/nova-poshta");

class NovaPoshtaProvider {

    calculate({ weight, config }) {

        return calculateNovaPoshta({
            weight,
            config
        });

    }

    createShipment() {
        throw new Error("Nova Poshta API is not connected yet.");
    }

    getShipmentStatus() {
        throw new Error("Nova Poshta API is not connected yet.");
    }

    cancelShipment() {
        throw new Error("Nova Poshta API is not connected yet.");
    }

}

module.exports = NovaPoshtaProvider;