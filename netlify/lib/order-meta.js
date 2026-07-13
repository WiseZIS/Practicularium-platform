const { generateOrderNumber } = require("./order-number");
const { ORDER_STATUS } = require("./order-status");

function formatDate(date) {

    const pad = (value) => String(value).padStart(2, "0");

    const day = pad(date.getDate());
    const month = pad(date.getMonth() + 1);
    const year = date.getFullYear();

    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${day}.${month}.${year} ${hours}:${minutes}`;

}

function createOrderMeta() {

    const now = new Date();

    return {

        orderNumber: generateOrderNumber(),

        createdAt: formatDate(now),

        createdAtISO: now.toISOString(),

        status: ORDER_STATUS.NEW

    };

}

module.exports = {

    createOrderMeta

};