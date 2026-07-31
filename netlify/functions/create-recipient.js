const {

    buildRecipientProfile

} = require("../lib/recipient/recipient-builder");

const {

    createRecipient

} = require("../lib/delivery/providers/nova-poshta/services/recipient-service");

exports.handler = async () => {

    try {

        const order = {

            customer: {

                firstName: "Іван",

                lastName: "Тестовий",

                phone: "380671112233",

                email: "test@example.com"

            },

            delivery: {

                country: "UA",

                city: "Київ",

                cityRef: "8d5a980d-391c-11dd-90d9-001a92567626",

                warehouse: "",

                warehouseRef: ""

            }

        };

        const recipientProfile = buildRecipientProfile(order);

        const recipient = await createRecipient(recipientProfile);

        return {

            statusCode: 200,

            body: JSON.stringify({

                recipientProfile,

                recipient

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