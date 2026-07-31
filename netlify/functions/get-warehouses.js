/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Netlify Function
 * Get Warehouses (Nova Poshta)
 * ============================================================
 */

const {
    getWarehouses
} = require("../lib/delivery/providers/nova-poshta/requests/directory");

exports.handler = async (event) => {

    try {

        const cityRef = event.queryStringParameters?.cityRef || "";

        if (!cityRef) {

            return {

                statusCode: 400,

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    success: false,

                    message: "cityRef is required."

                })

            };

        }

        const result = await getWarehouses(cityRef);

        /*
        ============================================================
        Mapper
        Приводим ответ Nova Poshta
        к внутреннему формату Platform 2.0
        ============================================================
        */

        const warehouses = result.data.map(item => ({

            description: item.Description,

            ref: item.Ref,

            number: item.Number,

            type: item.TypeOfWarehouse

        }));

        return {

            statusCode: 200,

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(warehouses)

        };

    }

    catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                success: false,

                message: error.message

            })

        };

    }

};