/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Notification Router
 * ============================================================
 */

const {
    NOTIFICATION_TYPES
} = require("./notification-types");

const {
    NOTIFICATION_CHANNELS
} = require("./notification-channels");

const {
    NOTIFICATION_TEMPLATES
} = require("./notification-templates");

class NotificationRouter {

    /**
     * --------------------------------------------------------
     * Resolve Notification
     * --------------------------------------------------------
     */

    resolve(

        notificationType,

        payload

    ) {

        switch (

            notificationType

        ) {

            /**
             * ------------------------------------------------
             * Order Created
             * ------------------------------------------------
             */

            case NOTIFICATION_TYPES.ORDER_CREATED:

                return {

                    template:

                        NOTIFICATION_TEMPLATES.CUSTOMER_ORDER,

                    channel:

                        NOTIFICATION_CHANNELS.EMAIL,

                    subject:

                        "Ваше замовлення отримано",

                    payload

                };

            /**
             * ------------------------------------------------
             * Customer Receipt
             * ------------------------------------------------
             */

            case NOTIFICATION_TYPES.CUSTOMER_RECEIPT:

                return {

                    template:

                        NOTIFICATION_TEMPLATES.CUSTOMER_RECEIPT,

                    channel:

                        NOTIFICATION_CHANNELS.EMAIL,

                    subject:

                        "Фіскальний чек",

                    payload

                };

            /**
             * ------------------------------------------------
             * Return Receipt
             * ------------------------------------------------
             */

            case NOTIFICATION_TYPES.RETURN_RECEIPT:

                return {

                    template:

                        NOTIFICATION_TEMPLATES.RETURN_RECEIPT,

                    channel:

                        NOTIFICATION_CHANNELS.EMAIL,

                    subject:

                        "Чек повернення",

                    payload

                };

            default:

                throw new Error(

                    `Unsupported notification type: ${notificationType}`

                );

        }

    }

}

module.exports =
    new NotificationRouter();