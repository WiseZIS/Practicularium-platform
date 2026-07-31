/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Netlify Function
 * Get Cities (Nova Poshta)
 * ============================================================
 */

const {
    getCities
} = require("../lib/delivery/providers/nova-poshta/requests/directory");

exports.handler = async (event) => {

    try {

        const query = event.queryStringParameters?.q || "";

        const result = await getCities(query);

        /*
        ============================================================
        Mapper
        Приводим ответ Nova Poshta к внутреннему формату Platform 2.0
        ============================================================
        */

        const cities = result.data.map(city => ({

            description: city.Description,

            descriptionRu: city.DescriptionRu,

            ref: city.Ref,

            area: city.AreaDescription,

            settlementType: city.SettlementTypeDescription

        }));

        return {

            statusCode: 200,

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(cities)

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