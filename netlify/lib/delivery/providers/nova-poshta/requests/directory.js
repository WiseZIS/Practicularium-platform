const { post } = require("../client");

/**
 * Отримати список міст.
 *
 * @param {string} findByString
 * @returns {Promise<Object>}
 */
async function getCities(findByString = "") {

    return post({

        modelName: "Address",

        calledMethod: "getCities",

        methodProperties: {

            FindByString: findByString

        }

    });

}

/**
 * Отримати список відділень.
 *
 * @param {string} cityRef
 * @returns {Promise<Object>}
 */
async function getWarehouses(cityRef) {

    return post({

        modelName: "Address",

        calledMethod: "getWarehouses",

        methodProperties: {

            CityRef: cityRef

        }

    });

}

module.exports = {

    getCities,
    getWarehouses

};