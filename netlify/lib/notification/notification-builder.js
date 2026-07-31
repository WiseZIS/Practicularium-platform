/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Notification Builder
 * ============================================================
 */

const {
    NOTIFICATION_TEMPLATES
} = require("./notification-templates");

const {
    createCustomerMessage
} = require("../messages/customer-message");

class NotificationBuilder {

    /**
     * --------------------------------------------------------
     * Build Notification
     * --------------------------------------------------------
     */

    build(
        notification
    ) {

        switch (

            notification.template

        ) {

            /**
             * ------------------------------------------------
             * Customer Order
             * ------------------------------------------------
             */

            case NOTIFICATION_TEMPLATES.CUSTOMER_ORDER:

                return {

                    to:

                        notification.payload.order.customer.email,

                    subject:

                        notification.subject,

                    message:

                        createCustomerMessage(

                            notification.payload.order

                        ),

                    attachments:

                        notification.payload.attachments || []

                };

            /**
             * ------------------------------------------------
             * Customer Receipt
             * ------------------------------------------------
             */

            case NOTIFICATION_TEMPLATES.CUSTOMER_RECEIPT:

                return {

                    to:

                        notification.payload.order.customer.email,

                    subject:

                        notification.subject,

                    message:

`Ваш фіскальний чек сформовано.

Він додається до цього листа.

Дякуємо за покупку!`,

                    attachments:

                        notification.payload.attachments || []

                };

            /**
             * ------------------------------------------------
             * Return Receipt
             * ------------------------------------------------
             */

            case NOTIFICATION_TEMPLATES.RETURN_RECEIPT:

                return {

                    to:

                        notification.payload.order.customer.email,

                    subject:

                        notification.subject,

                    message:

`Ваш чек повернення сформовано.

Він додається до цього листа.`,

                    attachments:

                        notification.payload.attachments || []

                };

            default:

                throw new Error(

                    `Unsupported notification template: ${notification.template}`

                );

        }

    }

}

module.exports =
    new NotificationBuilder();