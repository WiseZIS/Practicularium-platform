const { supabase } = require("./supabase");
const { getProductLabel } = require("./product-label");

async function saveOrder(order) {

    const { error } = await supabase
        .from("orders")
        .insert([
            {
                order_number: order.meta.orderNumber,
                status: order.meta.status,
                customer_name: `${order.customer.firstName} ${order.customer.lastName}`,
                customer_email: order.customer.email,
                product_name: getProductLabel(order.product),
                data: order
            }
        ]);

    if (error) {
        throw error;
    }

}

async function getOrderByNumber(orderNumber) {

    const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("order_number", orderNumber)
        .single();

    if (error) {
        throw error;
    }

    return data;

}

async function getOrders() {

    const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        throw error;
    }

    return data;

}

async function saveOrderStatus(orderNumber, status) {

    const { error } = await supabase
        .from("orders")
        .update({
            status,
            updated_at: new Date().toISOString()
        })
        .eq("order_number", orderNumber);

    if (error) {
        throw error;
    }

}

/**
 * ============================================================
 * Save Fiscal Result
 * ============================================================
 */

async function saveFiscalResult(

    orderNumber,

    fiscalResult

) {

    const order =

        await getOrderByNumber(

            orderNumber

        );

    const orderData =

        order.data || {};
		
		console.log();
        console.log("SAVE FISCAL RESULT");
        console.log(orderNumber);
        console.log(fiscalResult);

    orderData.fiscal = {

        provider:

            fiscalResult.provider || "checkbox",

        receiptId:

            fiscalResult.receiptId || null,

        receiptNumber:

            fiscalResult.result?.receiptNumber || null,

        fiscalNumber:

            fiscalResult.result?.fiscalNumber || null,

        receiptPath:

            fiscalResult.receiptPath || null,

        createdAt:

            fiscalResult.result?.createdAt ||

            new Date().toISOString()

    };

        console.log();
        console.log("ORDER DATA TO SAVE:");
        console.log(JSON.stringify(orderData, null, 4));

    const { error } = await supabase

        .from("orders")

        .update({

            data:

                orderData,

            updated_at:

                new Date().toISOString()

        })

        .eq(

            "order_number",

            orderNumber

        );

    if (error) {

        throw error;

    }

}

/**
 * ============================================================
 * Save Return Result
 * ============================================================
 */

async function saveReturnResult(

    orderNumber,

    returnResult

) {

    const order =

        await getOrderByNumber(

            orderNumber

        );

    const orderData =

        order.data || {};

    orderData.return = {

        provider:

            returnResult.provider || "checkbox",

        receiptId:

            returnResult.receiptId || null,

        receiptNumber:

            returnResult.result?.receiptNumber || null,

        fiscalNumber:

            returnResult.result?.fiscalNumber || null,

        receiptPath:

            returnResult.receiptPath || null,

        actPath:

            returnResult.actPath || null,

        reason:

            returnResult.reason ||

            "TEST_RETURN",

        createdAt:

            returnResult.result?.createdAt ||

            new Date().toISOString()

    };

    const { error } = await supabase

        .from("orders")

        .update({

            data:

                orderData,

            updated_at:

                new Date().toISOString()

        })

        .eq(

            "order_number",

            orderNumber

        );

    if (error) {

        throw error;

    }

}

module.exports = {

    saveOrder,

    getOrderByNumber,

    getOrders,

    saveOrderStatus,

    saveFiscalResult,

    saveReturnResult

};