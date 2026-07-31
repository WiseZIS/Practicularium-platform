/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * Shift Management Component
 * ============================================================
 */

const {
    CHECKBOX_CONFIG
} = require("./config");

const SHIFT_STATUS = {

    CREATED: "CREATED",

    OPENED: "OPENED",

    CLOSED: "CLOSED"

};

class CheckboxShift {

    /**
     * --------------------------------------------------------
     * Constructor
     * --------------------------------------------------------
     */

    constructor(client) {

        this.client = client;

    }

    /**
     * --------------------------------------------------------
     * Ensures Active Shift
     * --------------------------------------------------------
     */

    async ensure() {

        console.log(
            "Checking active shift..."
        );

        const shiftList =
            await this.getCurrentShift();

        console.log();

        console.log(
            "CURRENT SHIFTS:"
        );

        console.log(
            shiftList
        );

        const openedShift =
            this.getOpenedShift(
                shiftList
            );

        if (openedShift) {

            console.log();

            console.log(
                "ACTIVE SHIFT FOUND:"
            );

            console.log(
                openedShift
            );

            return openedShift;

        }

        console.log();

        console.log(
            "NO ACTIVE SHIFT"
        );

        const createdShift =
            await this.openShift();

        console.log();

        console.log(
            "OPEN SHIFT RESPONSE:"
        );

        console.log(
            createdShift
        );

        await this.wait();

        let verifiedShift;

        try {

            verifiedShift =
                await this.verifyShift(

                    createdShift.id

                );

        }

        catch (error) {

            console.log();

            console.log(
                "VERIFY SHIFT ERROR:"
            );

            console.dir(
                error,
                {
                    depth: null
                }
            );

            throw error;

        }

        console.log();

        console.log(
            "VERIFIED SHIFT:"
        );

        console.log(
            verifiedShift
        );

        return verifiedShift;

    }

    /**
     * --------------------------------------------------------
     * Gets Shift List
     * --------------------------------------------------------
     */

    async getCurrentShift() {

        return await this.client.request(

            "/shifts",

            {

                method: "GET"

            }

        );

    }

    /**
     * --------------------------------------------------------
     * Gets Opened Shift
     * --------------------------------------------------------
     */

    getOpenedShift(
        shiftList
    ) {

        if (

            !shiftList ||

            !Array.isArray(
                shiftList.results
            )

        ) {

            return null;

        }

        return shiftList.results.find(

            shift =>

                shift.status ===
                SHIFT_STATUS.OPENED

        ) || null;

    }

    /**
     * --------------------------------------------------------
     * Opens Shift
     * --------------------------------------------------------
     */

    async openShift() {

        console.log();

        console.log(
            "Opening shift..."
        );

        return await this.client.request(

            "/shifts",

            {

                method: "POST",

                headers: {

                    "X-License-Key":
                        CHECKBOX_CONFIG.licenseKey

                },

                body: JSON.stringify({})

            }

        );

    }

    /**
     * --------------------------------------------------------
     * Wait
     * --------------------------------------------------------
     */

    async wait() {

        console.log();

        console.log(
            "Waiting 1 second..."
        );

        return new Promise(

            resolve =>

                setTimeout(

                    resolve,

                    1000

                )

        );

    }

    /**
     * --------------------------------------------------------
     * Verify Shift
     * --------------------------------------------------------
     */

    async verifyShift(
        shiftId
    ) {

        console.log();

        console.log(
            "Verifying shift..."
        );

        return await this.client.request(

            `/shifts/${shiftId}`,

            {

                method: "GET"

            }

        );

    }

}

module.exports =
    CheckboxShift;