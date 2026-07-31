/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Document Engine
 * Storage
 * ============================================================
 */

const fs = require("fs");
const path = require("path");

const {
    DOCUMENTS_ROOT
} = require("./config");

/**
 * Возвращает путь к папке заказа.
 */
function getOrderFolder(orderNumber) {

    return path.join(

        DOCUMENTS_ROOT,

        "orders",

        orderNumber

    );

}

/**
 * Создает папку заказа, если она отсутствует.
 */
function ensureOrderFolder(orderNumber) {

    const folder = getOrderFolder(orderNumber);

    fs.mkdirSync(folder, {

        recursive: true

    });

    return folder;

}

/**
 * Сохраняет документ в папку заказа.
 */
function saveOrderDocument(

    orderNumber,

    fileName,

    buffer

) {

    const folder = ensureOrderFolder(orderNumber);

    const filePath = path.join(

        folder,

        fileName

    );

    fs.writeFileSync(

        filePath,

        buffer

    );

    return filePath;

}

module.exports = {

    getOrderFolder,

    ensureOrderFolder,

    saveOrderDocument

};