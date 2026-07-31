/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Email Notification Provider
 * ============================================================
 */

const {
    sendEmail
} = require("../../services/email-service");

class EmailProvider {

    /**
     * --------------------------------------------------------
     * Send Email Notification
     * --------------------------------------------------------
     */

    async send(

        notification

    ) {

        await sendEmail({

            to:

                notification.to,

            subject:

                notification.subject,

            message:

                notification.message,

            attachments:

                notification.attachments || []

        });

    }

}

module.exports =
    new EmailProvider();