exports.validateOrder = (order) => {

    const errors = [];

    if (!order.customer.firstName) {
        errors.push("Не вказано ім'я.");
    }

    if (!order.customer.lastName) {
        errors.push("Не вказано прізвище.");
    }

    if (!order.customer.phone) {
        errors.push("Не вказано телефон.");
    }

    if (!order.customer.email) {
        errors.push("Не вказано Email.");
    }

    if (!order.product.id) {
        errors.push("Не вибрана книга.");
    }

    if (!order.payment.method) {
        errors.push("Не вибраний спосіб оплати.");
    }

    return {

        valid: errors.length === 0,

        errors

    };

};