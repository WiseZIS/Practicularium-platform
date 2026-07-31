const {

    getSender,
    getSenderContact

} = require("../lib/delivery/providers/nova-poshta/services/counterparty-service");

exports.handler = async () => {

    try {

        const sender = await getSender();

        const contact = await getSenderContact(sender.Ref);

        return {

            statusCode: 200,

            body: JSON.stringify({

                sender,

                contact

            })

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