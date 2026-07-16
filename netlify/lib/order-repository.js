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

module.exports = {

    saveOrder,
    getOrderByNumber,
    getOrders,
    saveOrderStatus

};