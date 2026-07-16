/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Nova Poshta Provider
 * ============================================================
 */

const DeliveryProvider = require("../provider-interface");

class NovaPoshtaProvider extends DeliveryProvider {

    calculate() {

        throw new Error(
            "calculate() is not implemented yet."
        );

    }

    async getCities() {

        throw new Error(
            "getCities() is not implemented yet."
        );

    }

    async getWarehouses() {

        throw new Error(
            "getWarehouses() is not implemented yet."
        );

    }

    async createShipment() {

        throw new Error(
            "createShipment() is not implemented yet."
        );

    }

    async trackShipment() {

        throw new Error(
            "trackShipment() is not implemented yet."
        );

    }

}

module.exports = NovaPoshtaProvider;