/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Delivery Provider Interface
 * ------------------------------------------------------------
 * Every delivery provider must implement this contract.
 * ============================================================
 */

class DeliveryProvider {

    /**
     * Calculate delivery.
     */
    calculate() {
        throw new Error("calculate() is not implemented.");
    }

    /**
     * Get cities.
     */
    async getCities() {
        throw new Error("getCities() is not implemented.");
    }

    /**
     * Get warehouses.
     */
    async getWarehouses() {
        throw new Error("getWarehouses() is not implemented.");
    }

    /**
     * Create shipment.
     */
    async createShipment() {
        throw new Error("createShipment() is not implemented.");
    }

    /**
     * Track shipment.
     */
    async trackShipment() {
        throw new Error("trackShipment() is not implemented.");
    }

}

module.exports = DeliveryProvider;