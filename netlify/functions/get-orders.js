const { getOrders } = require("../lib/order-repository");

exports.handler = async () => {

    try {

        const orders = await getOrders();

        return {

            statusCode: 200,

            body: JSON.stringify({

                success: true,

                orders

            })

        };

    }

    catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            body: JSON.stringify({

                success: false,

                message: "Не вдалося отримати список замовлень."

            })

        };

    }

};