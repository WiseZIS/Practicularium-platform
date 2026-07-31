/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Receipt Waiter
 * ============================================================
 */

class CheckboxReceiptWaiter {

    /**
     * --------------------------------------------------------
     * Constructor
     * --------------------------------------------------------
     */

    constructor(
        client
    ) {

        this.client = client;

    }

    /**
     * --------------------------------------------------------
     * Wait Until Receipt Is DONE
     * --------------------------------------------------------
     */

    async wait(
        receiptId
    ) {

        while (true) {

            const receipt =
                await this.client.receiptStatus.get(

                    receiptId

                );

            console.log();

            console.log(
                `Receipt Status: ${receipt.status}`
            );

            if (receipt.status === "DONE") {

                console.log();

                console.log(
                    "Receipt is DONE."
                );

                return receipt;

            }

            await this.sleep(2000);

        }

    }

    /**
     * --------------------------------------------------------
     * Sleep
     * --------------------------------------------------------
     */

    sleep(
        milliseconds
    ) {

        return new Promise(

            resolve =>

                setTimeout(

                    resolve,

                    milliseconds

                )

        );

    }

}

module.exports =
    CheckboxReceiptWaiter;