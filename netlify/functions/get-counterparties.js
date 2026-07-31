const { getCounterparties } = require("../lib/delivery/providers/nova-poshta/requests/counterparty/get-counterparties");

exports.handler = async () => {

    try {

        const response = await getCounterparties();

        return {

            statusCode: 200,

            body: JSON.stringify(response)

        };

    } catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            body: JSON.stringify({

                success: false,

                error: error.message

            })

        };

    }

};