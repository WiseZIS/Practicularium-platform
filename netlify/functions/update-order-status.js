const { updateOrderStatus } = require("../lib/order-status-service");

exports.handler = async (event) => {

    try {

        const { orderNumber, status } = JSON.parse(event.body);

        await updateOrderStatus(orderNumber, status);

        return {

            statusCode: 200,

            body: JSON.stringify({

                success: true

            })

        };

    }

    catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            body: JSON.stringify({

                success: false,

                message: error.message

            })

        };

    }

};