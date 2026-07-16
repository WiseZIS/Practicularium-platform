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

module.exports = {

    getCities

};