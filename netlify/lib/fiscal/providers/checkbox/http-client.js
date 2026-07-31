/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * HTTP Client
 * ============================================================
 */

const {
    CHECKBOX_CONFIG
} = require("./config");

class CheckboxHttpClient {

    /**
     * --------------------------------------------------------
     * Constructor
     * --------------------------------------------------------
     */

    constructor(
        client
    ) {

        this.client =
            client;

    }

    /**
     * --------------------------------------------------------
     * Sends HTTP Request
     * --------------------------------------------------------
     */

    async request(
        endpoint,
        options = {}
    ) {

        const response =
            await fetch(

                `${CHECKBOX_CONFIG.apiUrl}${endpoint}`,

                {

                    ...options,

                    headers: {

                        "Content-Type":
                            "application/json",

                        "X-Client-Name":
                            CHECKBOX_CONFIG.clientName,

                        "X-Client-Version":
                            CHECKBOX_CONFIG.clientVersion,

                        ...(this.client.token && {

                            Authorization:
                                `Bearer ${this.client.token}`

                        }),

                        ...(options.headers || {})

                    }

                }

            );

        /**
         * ----------------------------------------------------
         * Detect Response Type
         * ----------------------------------------------------
         */

        const contentType =

            response.headers.get(

                "content-type"

            ) || "";

        let data;

        if (

            contentType.includes(

                "application/json"

            )

        ) {

            data =
                await response.json();

        }

        else if (

            contentType.includes(

                "application/pdf"

            )

        ) {

            data =
                Buffer.from(

                    await response.arrayBuffer()

                );

        }

        else if (

            contentType.includes(

                "image/"

            )

        ) {

            data =
                Buffer.from(

                    await response.arrayBuffer()

                );

        }

        else {

            data =
                await response.text();

        }

        /**
         * ----------------------------------------------------
         * Error Processing
         * ----------------------------------------------------
         */

        if (!response.ok) {

            console.log();

            console.log(
                "CHECKBOX ERROR:"
            );

            console.log(
                data
            );

            throw new Error(

                `Checkbox API Error: ${response.status}`

            );

        }

        return data;

    }

}

module.exports =
    CheckboxHttpClient;