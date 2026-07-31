/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Create Shipment Function
 * ============================================================
 */

const {

    createShipment

} = require("../lib/shipment/shipment-engine");

exports.handler = async (event) => {

    try {

        const body = JSON.parse(event.body);

        const result = await createShipment(

            body.orderNumber

        );

        return {

            statusCode: 200,

            body: JSON.stringify(result, null, 2)

        };

    }

    catch (error) {

        console.error(error);

        return {

            statusCode: 400,

            body: JSON.stringify({

                success: false,

                error: error.message

            })

        };

    }

};