/**
 * DELIVERY-03
 * Ukrposhta Provider
 * PRACTICULARIUM Platform
 */

const calculateUkrposhta = require("../calculators/ukrposhta");

class UkrposhtaProvider {

    calculate({ weight, config }) {

        return calculateUkrposhta({
            weight,
            config
        });

    }

    createShipment() {
        throw new Error("Ukrposhta API is not connected yet.");
    }

    getShipmentStatus() {
        throw new Error("Ukrposhta API is not connected yet.");
    }

    cancelShipment() {
        throw new Error("Ukrposhta API is not connected yet.");
    }

}

module.exports = UkrposhtaProvider;