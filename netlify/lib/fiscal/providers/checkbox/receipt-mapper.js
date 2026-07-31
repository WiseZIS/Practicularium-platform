/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Receipt Mapper
 * ============================================================
 */

class CheckboxReceiptMapper {

    /**
     * --------------------------------------------------------
     * Maps Fiscal Request
     * --------------------------------------------------------
     */

    map(
        fiscalRequest
    ) {

        const request = {

            goods: this.mapGoods(
                fiscalRequest.items
            ),

            payments: this.mapPayment(
                fiscalRequest.payment
            ),

            delivery: this.mapDelivery(
                fiscalRequest.customer
            ),

            discounts: []

        };

        /**
         * ----------------------------------------------------
         * Return Receipt
         * ----------------------------------------------------
         */

        if (

            fiscalRequest.return === true

        ) {

            request.is_return = true;

            request.related_receipt_id =

                fiscalRequest.relatedReceiptId;

        }

        return request;

    }

    /**
     * --------------------------------------------------------
     * Goods
     * --------------------------------------------------------
     */

    mapGoods(
        items = []
    ) {

        return items.map(item => ({

            good: {

                code:
                    item.code,

                name:
                    item.name,

                price:
                    item.price,

                tax: [

                    8

                ]

            },

            quantity:
                item.quantity * 1000,

            discounts: []

        }));

    }

    /**
     * --------------------------------------------------------
     * Payment
     * --------------------------------------------------------
     */

    mapPayment(
        payment
    ) {

        if (!payment) {

            return [];

        }

        return [

            {

                type:
                    this.mapPaymentMethod(
                        payment.method
                    ),

                value:
                    payment.amount

            }

        ];

    }

    /**
     * --------------------------------------------------------
     * Payment Method
     * --------------------------------------------------------
     */

    mapPaymentMethod(
        method
    ) {

        switch (method) {

            case "cash":

                return "CASH";

            case "prepayment":

                return "CASHLESS";

            default:

                return "CASHLESS";

        }

    }

    /**
     * --------------------------------------------------------
     * Delivery
     * --------------------------------------------------------
     */

    mapDelivery(
        customer = {}
    ) {

        return {

            email:
                customer.email

        };

    }

}

module.exports =
    CheckboxReceiptMapper;