/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Nova Poshta Provider
 * HTTP Client
 * ============================================================
 */

const {

    API_URL,
    REQUEST_TIMEOUT

} = require("./config");

/**
 * Execute POST request to Nova Poshta API.
 *
 * @param {Object} payload
 * @returns {Promise<Object>}
 */
async function post(payload) {

    const apiKey = process.env.NOVA_POSHTA_API_KEY;

    if (!apiKey) {

        throw new Error(
            "Environment variable NOVA_POSHTA_API_KEY is not configured."
        );

    }

    const controller = new AbortController();

    const timeout = setTimeout(() => {

        controller.abort();

    }, REQUEST_TIMEOUT);

    try {
        console.log("");
        console.log("========= REQUEST =========");
        console.log(JSON.stringify({
            apiKey,
            ...payload
        }, null, 2));
        console.log("===========================");
        console.log("");
		
        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            signal: controller.signal,

            body: JSON.stringify({

                apiKey,

                ...payload

            })

        });

        clearTimeout(timeout);

        if (!response.ok) {

            throw new Error(

                `Nova Poshta API returned HTTP ${response.status}`

            );

        }

        const result = await response.json();

        if (!result.success) {

           console.log("");
           console.log("========== NOVA POSHTA RESPONSE ==========");
           console.log(JSON.stringify(result, null, 2));
           console.log("==========================================");
           console.log("");

          throw new Error(
          "Nova Poshta API request failed."
           );

}

        return result;

    }

    catch (error) {

        clearTimeout(timeout);

        throw error;

    }

}

module.exports = {

    post

};