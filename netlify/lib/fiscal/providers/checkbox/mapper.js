/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * Mapper
 * ============================================================
 */

/**
 * ------------------------------------------------------------
 * Maps Internal Fiscal Request
 * to Checkbox Request
 * ------------------------------------------------------------
 */

function mapFiscalRequest(fiscalRequest) {

    const payload = {

        customer: {

            first_name:
                fiscalRequest.customer.firstName,

            last_name:
                fiscalRequest.customer.lastName,

            email:
                fiscalRequest.customer.email,

            phone:
                fiscalRequest.customer.phone

        },

        goods:

            fiscalRequest.items.map(item => {

                const good = {

                    code:
                        item.code,

                    name:
                        item.name,

                    price:
                        item.price,

                    quantity:
                        item.quantity

                };

                /**
                 * --------------------------------------------
                 * Return Item
                 * --------------------------------------------
                 */

                if (fiscalRequest.return) {

                    good.is_return = true;

                }

                return good;

            }),

        payments: [

            {

                type:
                    mapPaymentType(
                        fiscalRequest.payment.method
                    ),

                value:
                    fiscalRequest.payment.amount

            }

        ]

    };

    /**
     * --------------------------------------------------------
     * Related Receipt
     * --------------------------------------------------------
     */

    if (

        fiscalRequest.return &&
        fiscalRequest.relatedReceiptId

    ) {

        payload.related_receipt_id =

            fiscalRequest.relatedReceiptId;

    }

    return payload;

}

/**
 * ------------------------------------------------------------
 * Maps Payment Method
 * ------------------------------------------------------------
 */

function mapPaymentType(method) {

    switch (method) {

        case "prepayment":

            return "CASHLESS";

        case "cash":

            return "CASH";

        default:

            return "CASHLESS";

    }

}

module.exports = {

    mapFiscalRequest

};