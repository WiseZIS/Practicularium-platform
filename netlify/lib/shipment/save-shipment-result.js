/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Save Shipment Result
 * ============================================================
 */

const { supabase } = require("../supabase");

async function saveShipmentResult(orderNumber, shipmentResult) {

    const { data: order, error: loadError } = await supabase

        .from("orders")

        .select("data")

        .eq("order_number", orderNumber)

        .single();

    if (loadError) {

        throw loadError;

    }

    const orderData = order.data || {};

    orderData.shipping = shipmentResult;

    const { error: updateError } = await supabase

        .from("orders")

        .update({

            data: orderData

        })

        .eq("order_number", orderNumber);

    if (updateError) {

        throw updateError;

    }

    return shipmentResult;

}

module.exports = {

    saveShipmentResult

};