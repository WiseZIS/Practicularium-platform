/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Notification Engine
 * ============================================================
 */

const router =
    require("./notification-router");

const builder =
    require("./notification-builder");

const {
    NOTIFICATION_CHANNELS
} = require("./notification-channels");

const emailProvider =
    require("./providers/email-provider");

class Notification {

    /**
     * --------------------------------------------------------
     * Send Notification
     * --------------------------------------------------------
     */

    async send(

        notificationType,

        payload

    ) {

        /**
         * Resolve Notification
         */

        const notification =

            router.resolve(

                notificationType,

                payload

            );

        /**
         * Build Notification
         */

        const result =

            builder.build(

                notification

            );

        /**
         * Send Notification
         */

        switch (

            notification.channel

        ) {

            case NOTIFICATION_CHANNELS.EMAIL:

                await emailProvider.send(

                    result

                );

                break;

            default:

                throw new Error(

                    `Unsupported notification channel: ${notification.channel}`

                );

        }

        console.log();

        console.log(
            "======================================"
        );

        console.log(
            "NOTIFICATION SENT"
        );

        console.log(
            "======================================"
        );

        console.log();

    }

}

module.exports =
    new Notification();