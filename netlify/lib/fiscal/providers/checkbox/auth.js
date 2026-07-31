/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * Authentication Component
 * ============================================================
 */

const { CHECKBOX_CONFIG } = require("./config");

class CheckboxAuth {

    constructor(client) {

        this.client = client;

    }

    /**
     * --------------------------------------------------------
     * Authenticate Cashier
     * --------------------------------------------------------
     */

    async authenticate() {

        if (this.client.token) {

            return;

        }

        console.log(
            "Authenticating cashier..."
        );

        console.log();

        console.log(
            "REQUEST HEADERS:"
        );

        console.log({

            "X-Client-Name":
                CHECKBOX_CONFIG.clientName,

            "X-Client-Version":
                CHECKBOX_CONFIG.clientVersion,

            "X-License-Key":
                CHECKBOX_CONFIG.licenseKey

        });

        console.log();

        console.log(
            "REQUEST BODY:"
        );

        console.log({

            pin_code:
                CHECKBOX_CONFIG.pinCode

        });

        const result =
            await this.client.request(

                "/cashier/signinPinCode",

                {

                    method: "POST",

                    headers: {

                        "X-License-Key":
                            CHECKBOX_CONFIG.licenseKey

                    },

                    body: JSON.stringify({

                        pin_code:
                            CHECKBOX_CONFIG.pinCode

                    })

                }

            );

        console.log();

        console.log(
            "AUTH RESPONSE:"
        );

        console.log(result);

        this.client.token =
            result.access_token;

    }

}

module.exports = CheckboxAuth;