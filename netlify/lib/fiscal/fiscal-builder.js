/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Builder
 * ============================================================
 */

const {
    FISCAL_CONFIG
} = require("./fiscal-config");

const {
    getOrderByNumber
} = require("../order-repository");

/**
 * ------------------------------------------------------------
 * Creates Internal Fiscal Request
 * ------------------------------------------------------------
 */

async function createFiscalRequest(orderNumber) {

    const dbOrder = await getOrderByNumber(orderNumber);

    if (!dbOrder) {

        throw new Error(

            `Order ${orderNumber} not found`

        );

    }

    const order = dbOrder.data;

    const items = [];

    /**
     * --------------------------------------------------------
     * Product
     * --------------------------------------------------------
     */

    items.push({

        code:
            order.product.id,

        name:
            order.product.title,

        price:
            Math.round(
                order.product.price * 100
            ),

        quantity:
            order.product.quantity,

        currency:
            order.product.currency ||
            FISCAL_CONFIG.currency

    });

    /**
     * --------------------------------------------------------
     * Delivery
     * --------------------------------------------------------
     */

    if (

        (order.pricing.deliveryPrice || 0) > 0

    ) {

        items.push({

            code:
                "delivery",

            name:
                "Доставка",

            price:
                Math.round(

                    order.pricing.deliveryPrice * 100

                ),

            quantity:
                1,

            currency:
                order.product.currency ||
                FISCAL_CONFIG.currency

        });

    }

    /**
     * --------------------------------------------------------
     * Fiscal Request
     * --------------------------------------------------------
     */

    return {

        seller: {

            name:
                FISCAL_CONFIG.seller.name,

            taxId:
                FISCAL_CONFIG.seller.taxId,

            businessUnit:
                FISCAL_CONFIG.seller.businessUnit,

            address:
                FISCAL_CONFIG.seller.address

        },

        customer: {

            firstName:
                order.customer.firstName,

            lastName:
                order.customer.lastName,

            email:
                order.customer.email,

            phone:
                order.customer.phone

        },

        items,

        payment: {

            method:
                order.payment.method,

            amount:
                Math.round(

                    order.pricing.total * 100

                ),

            currency:
                order.product.currency ||
                FISCAL_CONFIG.currency

        },

        totals: {

            products:
                order.pricing.booksTotal,

            delivery:
                order.pricing.deliveryPrice,

            total:
                order.pricing.total,

            currency:
                order.product.currency ||
                FISCAL_CONFIG.currency

        },

        metadata: {

            orderNumber:
                order.meta.orderNumber,

            createdAt:
                order.meta.createdAtISO

        }

    };

}

module.exports = {

    createFiscalRequest

};