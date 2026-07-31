const { validateOrder } = require("../lib/order-validator");

const { buildOrder } =
    require("../lib/order-builder");

const {
    createOwnerMessage
} = require("../lib/messages/owner-message");

const notification =
    require("../lib/notification/notification");

const {
    NOTIFICATION_TYPES
} = require("../lib/notification/notification-types");

const {
    sendEmail
} = require("../lib/services/email-service");

const {
    saveOrder
} = require("../lib/order-repository");

const {
    runFiscalWorkflow
} = require("../lib/fiscal/fiscal-workflow");

exports.handler = async (event) => {

    try {

        /**
         * ----------------------------------------------------
         * Parse Request
         * ----------------------------------------------------
         */

        const data =
            JSON.parse(event.body);

        /**
         * ----------------------------------------------------
         * Build Order
         * ----------------------------------------------------
         */

        const order =
            buildOrder(data);

        /**
         * ----------------------------------------------------
         * Validate Order
         * ----------------------------------------------------
         */

        const validationResult =
            validateOrder(order);

        if (!validationResult.valid) {

            return {

                statusCode: 400,

                body: JSON.stringify({

                    success: false,

                    errors:
                        validationResult.errors

                })

            };

        }

        /**
         * ----------------------------------------------------
         * Owner Message
         * ----------------------------------------------------
         */

        const ownerMessage =
            createOwnerMessage(order);

        console.log();

        console.log(
            "================================"
        );

        console.log(
            "НОВЕ ЗАМОВЛЕННЯ"
        );

        console.log(
            "================================"
        );

        console.log(order);

        /**
         * ----------------------------------------------------
         * Customer Notification
         * ----------------------------------------------------
         */

        console.log(
            "Відправляємо повідомлення клієнту..."
        );

        await notification.send(

            NOTIFICATION_TYPES.ORDER_CREATED,

            {

                order,

                attachments: []

            }

        );

        console.log(
            "Повідомлення клієнту відправлено."
        );

        /**
         * ----------------------------------------------------
         * Owner Email
         * ----------------------------------------------------
         */

        console.log(
            "Відправляємо лист власнику..."
        );

        await sendEmail({

            to:
                process.env.OWNER_EMAIL,

            subject:
                "Нове замовлення",

            message:
                ownerMessage

        });

        console.log(
            "Лист власнику відправлено."
        );

        /**
         * ----------------------------------------------------
         * Save Order
         * ----------------------------------------------------
         */

        console.log(
            "Зберігаємо замовлення у Supabase..."
        );

        await saveOrder(order);

        console.log(
            "Замовлення успішно збережено у Supabase."
        );

        /**
         * ----------------------------------------------------
         * Fiscal Workflow
         * ----------------------------------------------------
         */

        console.log(
            "Запускаємо фіскалізацію..."
        );

        const fiscal =

            await runFiscalWorkflow(

                order

            );

        console.log(
            "Фіскалізацію завершено."
        );

        /**
         * ----------------------------------------------------
         * Success Response
         * ----------------------------------------------------
         */

        return {

            statusCode: 200,

            body: JSON.stringify({

                success: true,

                message:
                    "Замовлення успішно отримано!",

                order,

                fiscal

            })

        };

    }

    catch (error) {

        console.error(error);

        console.error(
            error.message
        );

        return {

            statusCode: 400,

            body: JSON.stringify({

                success: false,

                message:
                    "Помилка отримання даних."

            })

        };

    }

};