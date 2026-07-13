/**
 * PRODUCT-01
 * Product Catalog
 * PRACTICULARIUM Platform
 *
 * Single source of truth for all books.
 */

const PRODUCTS = Object.freeze({

    practicularium_ua: {

        id: "practicularium_ua",

        title: "ПРАКТИКУЛЯРІЙ",

        language: "UA",

        price: 650,

        currency: "UAH",

        weight: 1

    },

    practicularium_ru: {

        id: "practicularium_ru",

        title: "ПРАКТИКУЛЯРІЙ",

        language: "RU",

        price: 650,

        currency: "UAH",

        weight: 1

    },

    practicularium_en: {

        id: "practicularium_en",

        title: "PRACTICULARIUM",

        language: "EN",

        price: 650,

        currency: "UAH",

        weight: 1

    },

    poetry_bw: {

        id: "poetry_bw",

        title: "Історія почуттів однієї людини",

        language: "UA",

        edition: "Чорно-біла",

        price: 570,

        currency: "UAH",

        weight: 1

    },

    poetry_color: {

        id: "poetry_color",

        title: "Історія почуттів однієї людини",

        language: "UA",

        edition: "Кольорова",

        price: 730,

        currency: "UAH",

        weight: 1

    }

});

module.exports = {

    PRODUCTS

};