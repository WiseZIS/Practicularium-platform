const { post } = require("../../client");

async function saveCounterparty(methodProperties) {

    return post({

        modelName: "Counterparty",

        calledMethod: "save",

        methodProperties

    });

}

module.exports = {

    saveCounterparty

};