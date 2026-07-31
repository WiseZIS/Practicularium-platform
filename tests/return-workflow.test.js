/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Workflow Test
 * ============================================================
 */

const {
    runReturnWorkflow
} = require("../netlify/lib/fiscal/return-workflow");

const {
    getOrderByNumber
} = require("../netlify/lib/order-repository");

(async () => {

    console.log();

    console.log(
        "========================================"
    );

    console.log(
        "RETURN WORKFLOW TEST"
    );

    console.log(
        "========================================"
    );

    /**
     * --------------------------------------------------------
     * Load Test Order
     * --------------------------------------------------------
     */

    const orderRecord = await getOrderByNumber(

        "PR-TEST-000001"

    );

    if (!orderRecord) {

        console.log();

        console.log(
            "TEST ORDER NOT FOUND."
        );

        return;

    }

    /**
     * --------------------------------------------------------
     * Run Workflow
     * --------------------------------------------------------
     */

    const result = await runReturnWorkflow(

        orderRecord.data

    );

    console.log();

    console.log(
        "RESULT:"
    );

    console.dir(

        result,

        {

            depth: null

        }

    );

})();