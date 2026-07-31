function buildPackage(order) {

    return {

        weight: order.product.weight * order.product.quantity,

        seats: 1,

        description: order.product.title,

        declaredValue: order.pricing.booksTotal

    };

}

module.exports = {

    buildPackage

};