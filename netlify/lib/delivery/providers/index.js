/**
 * DELIVERY-05
 * Carrier Provider Registry
 * PRACTICULARIUM Platform
 */

const { DELIVERY_CARRIERS } = require("../carriers");

const NovaPoshtaProvider = require("./nova-poshta-provider");
const UkrposhtaProvider = require("./ukrposhta-provider");
const LocalProvider = require("./local-provider");

const PROVIDERS = Object.freeze({

    [DELIVERY_CARRIERS.NOVA_POSHTA]: new NovaPoshtaProvider(),

    [DELIVERY_CARRIERS.UKRPOSHTA]: new UkrposhtaProvider(),

    [DELIVERY_CARRIERS.PICKUP]: new LocalProvider(),

    [DELIVERY_CARRIERS.GENOA_PERSONAL]: new LocalProvider(),

    [DELIVERY_CARRIERS.ITALY_POST]: new LocalProvider()

});

function getProvider(carrier) {

    const provider = PROVIDERS[carrier];

    if (!provider) {
        throw new Error(`Unknown delivery provider: ${carrier}`);
    }

    return provider;

}

module.exports = {
    getProvider
};