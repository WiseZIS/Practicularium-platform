/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Act Builder
 * ============================================================
 */

function createReturnActModel(

    order,

    result,

    reason =
        "Помилкове повернення під час тестування інтеграції системи."

) {

    return {

        actNumber:
            `ACT-${order.meta.orderNumber}`,

        createdAt:
            new Date().toISOString(),

        saleReceiptUuid:
            order.fiscal?.receiptId || "",

        returnReceiptUuid:
            result.receiptId || "",

        fiscalCode:
            result.fiscalNumber || "",

        amount:
            order.pricing.total,

        reason,

        ownerName:
            "ФОП Зайцев І.С."

    };

}

module.exports = {

    createReturnActModel

};