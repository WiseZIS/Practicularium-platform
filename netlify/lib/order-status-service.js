const { ORDER_STATUS } = require("./order-status");
const { saveOrderStatus } = require("./order-repository");

async function updateOrderStatus(orderNumber, status) {

    // Проверяем, существует ли такой статус
    if (!Object.values(ORDER_STATUS).includes(status)) {
        throw new Error(`Unknown order status: ${status}`);
    }

    // Здесь позже появится проверка Workflow
    // canChangeStatus(...)

    // Здесь позже появятся ORDER_EVENTS

    // Изменяем статус в базе
    await saveOrderStatus(orderNumber, status);

}

module.exports = {

    updateOrderStatus

};