const { getOrderByNumber } = require("../lib/order-repository");

exports.handler = async (event) => {

    try {

        const orderNumber = event.queryStringParameters?.number;

        if (!orderNumber) {

            return {

                statusCode: 400,

                body: JSON.stringify({

                    success: false,

                    message: "Order number is required."

                })

            };

        }

        const order = await getOrderByNumber(orderNumber);

        return {

            statusCode: 200,

            body: JSON.stringify({

                success: true,

                order

            })

        };

    }

    catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            body: JSON.stringify({

                success: false,

                message: "Не вдалося отримати замовлення."

            })

        };

    }

};