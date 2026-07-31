/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Shipment Result Builder
 * ============================================================
 */

function buildShipmentResult(apiResponse) {

    return {

        provider: "nova_poshta",

        ref: apiResponse.Ref,

        ttn: apiResponse.IntDocNumber,

        cost: apiResponse.CostOnSite,

        estimatedDeliveryDate: apiResponse.EstimatedDeliveryDate

    };

}

module.exports = {

    buildShipmentResult

};