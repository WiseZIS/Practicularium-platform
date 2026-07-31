const { post } = require("../../client");

async function getCounterparties() {

    return post({

        modelName: "Counterparty",

        calledMethod: "getCounterparties",

        methodProperties: {

            CounterpartyProperty: "Sender"

        }

    });

}

module.exports = {

    getCounterparties

};