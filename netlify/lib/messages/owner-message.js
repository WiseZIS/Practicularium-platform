const {
    DELIVERY_LABELS,
    PAYMENT_LABELS,
    COUNTRY_LABELS,
    CURRENCY_LABELS
} = require("../order-labels");

function createOwnerMessage(order) {

    const deliveryLabel =
        DELIVERY_LABELS[order.delivery.method] || order.delivery.method;

    const paymentLabel =
        PAYMENT_LABELS[order.payment.method] || order.payment.method;

    const countryLabel =
        COUNTRY_LABELS[order.product.country] || order.product.country;

    const currencyLabel =
        CURRENCY_LABELS[order.product.currency] || order.product.currency;

    const orderNumber = order.meta.orderNumber;
    const orderDate = order.meta.createdAt;

    const productTitle = order.product.edition
        ? `${order.product.title} (${order.product.edition})`
        : `${order.product.title} (${order.product.language})`;

    let addressBlock = "";

    if (order.delivery.method === "nova_poshta") {

        addressBlock = `Відділення

${order.delivery.branch}`;

    } else if (order.delivery.method === "ukrposhta") {

        addressBlock = `Індекс

${order.delivery.index}

Вулиця

${order.delivery.street}

Будинок

${order.delivery.house}

${order.delivery.apartment
? `Квартира

${order.delivery.apartment}`
: ""}`;

    }

    return `

НОВЕ ЗАМОВЛЕННЯ

========================================

Замовлення №

${orderNumber}

Дата

${orderDate}

========================================

Покупець

----------------------------------------

Ім'я

${order.customer.firstName}

Прізвище

${order.customer.lastName}

Телефон

${order.customer.phone}

E-mail

${order.customer.email}

========================================

Замовлення

----------------------------------------

Книга

${productTitle}

Ціна

${order.pricing.productPrice} ${order.pricing.currency}

Кількість

${order.product.quantity}

Вартість книг

${order.pricing.booksTotal} ${order.pricing.currency}

Вартість доставки

${order.pricing.deliveryPrice} ${order.pricing.currency}

========================================

До сплати

${order.pricing.total} ${order.pricing.currency}

========================================

Отримання

----------------------------------------

Спосіб

${deliveryLabel}

Країна

${countryLabel}

Валюта

${currencyLabel}

${addressBlock
? `========================================

Доставка

----------------------------------------

${addressBlock}`
: ""}

========================================

Оплата

----------------------------------------

${paymentLabel}

========================================

Коментар

----------------------------------------

${order.comment || "немає"}

========================================

`;

}

module.exports = {

    createOwnerMessage

};