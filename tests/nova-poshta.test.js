/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Nova Poshta API Test
 * ============================================================
 */

require("dotenv").config();

const {
    getCities
} = require("../netlify/lib/delivery/providers/nova-poshta/requests/directory");

async function run() {

    console.log("");
    console.log("========================================");
    console.log(" Nova Poshta API Test");
    console.log("========================================");
    console.log("");

    try {

        const result = await getCities("Київ");

        console.log("API request successful.");
        console.log("");

        console.log(
            JSON.stringify(
                result,
                null,
                2
            )
        );

    } catch (error) {

        console.error("");
        console.error("API ERROR:");
        console.error(error.message);

    }

}

run();