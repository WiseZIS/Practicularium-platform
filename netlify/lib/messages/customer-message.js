const {
    DELIVERY_LABELS,
    PAYMENT_LABELS,
    COUNTRY_LABELS,
    CURRENCY_LABELS
} = require("../order-labels");

function createCustomerMessage(order) {

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

        addressBlock = `Відділення:
${order.delivery.branch}`;

    } else if (order.delivery.method === "ukrposhta") {

        addressBlock = `Індекс:
${order.delivery.index}

Вулиця:
${order.delivery.street}

Будинок:
${order.delivery.house}

${order.delivery.apartment
? `Квартира:
${order.delivery.apartment}`
: ""}`;

    }

    let paymentInfo = "";

    if (order.payment.method === "full-prepayment") {

        paymentInfo =
`Після надходження оплати Ваше замовлення буде підготовлене до відправки.`;

    } else {

        paymentInfo =
`Перед відправкою необхідно здійснити передоплату вартості доставки.

Після її отримання замовлення буде передано перевізнику.`;

    }

    return `

Дякуємо за Ваше замовлення!

Замовлення №
${orderNumber}

Дата оформлення
${orderDate}

----------------------------------------

Замовник

${order.customer.firstName} ${order.customer.lastName}

Телефон
${order.customer.phone}

E-mail
${order.customer.email}

----------------------------------------

Замовлення

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

----------------------------------------

До сплати
${order.pricing.total} ${order.pricing.currency}

----------------------------------------

Отримання

Спосіб
${deliveryLabel}

Країна
${countryLabel}

Валюта
${currencyLabel}

${addressBlock ? `----------------------------------------

Доставка

${addressBlock}` : ""}

----------------------------------------

Оплата

${paymentLabel}

${paymentInfo}

----------------------------------------

Ми перевіримо Ваше замовлення, підготуємо його до обробки та найближчим часом надішлемо Вам лист із підтвердженням, реквізитами для оплати (за потреби) та подальшими інструкціями.

Щиро дякуємо, що обрали «Практикулярій»!

`;

}

module.exports = {
    createCustomerMessage
};