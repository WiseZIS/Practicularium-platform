const { getContactPersons } = require("../lib/delivery/providers/nova-poshta/requests/counterparty/get-contact-persons");

exports.handler = async () => {

    try {

        const response = await getContactPersons(

            "0c97bd58-6ff2-11f1-a1d5-48df37b921da"

    );

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