const {

    getSenderProfile

} = require("../lib/delivery/providers/nova-poshta/services/counterparty-service");

exports.handler = async () => {

    try {

        const profile = await getSenderProfile();

        return {

            statusCode: 200,

            body: JSON.stringify(profile)

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