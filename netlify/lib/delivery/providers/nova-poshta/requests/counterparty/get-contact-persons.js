const { post } = require("../../client");

async function getContactPersons(counterpartyRef) {

    return post({

        modelName: "Counterparty",

        calledMethod: "getCounterpartyContactPersons",

        methodProperties: {

            Ref: counterpartyRef

        }

    });

}

module.exports = {

    getContactPersons

};