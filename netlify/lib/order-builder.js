const { createOrderMeta } = require("./order-meta");
const DeliveryService = require("./delivery");
const { PRODUCTS } = require("./products");
const PricingService = require("./pricing/pricing-service");

function buildOrder(data) {

    const product = PRODUCTS[data.book];

    if (!product) {
        throw new Error(`Unknown product: ${data.book}`);
    }

    const quantity = Number(data.quantity);

    const deliveryCalculation = DeliveryService.calculateDelivery({

        carrier: data.delivery,

        weight: product.weight * quantity,

        destination: {

            city: data.city,

            warehouse: data.np_branch

        }

    });

    const pricing = PricingService.calculatePricing({

        product,

        quantity,

        delivery: deliveryCalculation

    });

    return {

        customer: {

            firstName: data.first_name,
            lastName: data.last_name,
            phone: data.phone,
            email: data.email

        },

        product: {

            id: product.id,

            title: product.title,

            language: product.language,

            edition: product.edition || null,

            price: product.price,

            currency: product.currency,

            weight: product.weight,

            quantity,

            country: data.country

        },

        delivery: {

            method: data.delivery,

            city: data.city,

            branch: data.np_branch,

            index: data.ukrpost_index,

            street: data.ukrpost_street,

            house: data.ukrpost_house,

            apartment: data.ukrpost_apartment,

            calculation: deliveryCalculation

        },

        pricing,

        payment: {

            method: data.payment

        },

        comment: data.comment,

        meta: createOrderMeta()

    };

}

module.exports = {

    buildOrder

};