/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Workflow Test
 * ============================================================
 */

const {
    runReturnWorkflow
} = require("../netlify/lib/fiscal/return-workflow");

(async () => {

    try {

        const result = await runReturnWorkflow(

            "PR-20260728-150948"

        );

        console.log();
        console.log("========================================");
        console.log("RETURN TEST RESULT");
        console.log("========================================");
        console.log(JSON.stringify(result, null, 4));

    }

    catch (error) {

        console.error(error);

    }

})();