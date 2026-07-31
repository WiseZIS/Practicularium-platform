require("dotenv").config();

const notification =
    require("../netlify/lib/notification");

const {
    NOTIFICATION_TYPES
} = require("../netlify/lib/notification/notification-types");

(async () => {

    try {

        console.log();

        console.log(
            "======================================"
        );

        console.log(
            "NOTIFICATION ENGINE TEST"
        );

        console.log(
            "======================================"
        );

        console.log();

        const order = {

            customer: {

                firstName:
                    "Іван",

                lastName:
                    "Тестовий",

                phone:
                    "+380991112233",

                email:
                    process.env.OWNER_EMAIL

            },

            product: {

                title:
                    "PRACTICULARIUM",

                language:
                    "UA",

                quantity:
                    1

            },

            pricing: {

                productPrice:
                    650,

                booksTotal:
                    650,

                deliveryPrice:
                    0,

                total:
                    650,

                currency:
                    "UAH"

            },

            payment: {

                method:
                    "full-prepayment"

            },

            delivery: {

                method:
                    "pickup"

            },

            meta: {

                orderNumber:
                    "TEST-NOTIFICATION-001",

                createdAt:
                    new Date().toLocaleString()

            }

        };

        await notification.send(

            NOTIFICATION_TYPES.ORDER_CREATED,

            {

                order,

                attachments: []

            }

        );

        console.log();

        console.log(
            "======================================"
        );

        console.log(
            "SUCCESS!"
        );

        console.log(
            "Notification Engine works correctly."
        );

        console.log(
            "======================================"
        );

        console.log();

    }

    catch (error) {

        console.error();

        console.error(
            "TEST ERROR:"
        );

        console.error(
            error
        );

    }

})();