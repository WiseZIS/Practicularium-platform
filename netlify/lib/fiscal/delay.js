/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Engine
 * Delay Service
 * ============================================================
 */

class Delay {

    /**
     * --------------------------------------------------------
     * Wait
     * --------------------------------------------------------
     */

    static async wait(

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

module.exports = Delay;