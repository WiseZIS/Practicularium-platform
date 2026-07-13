/**
 * ==========================================================
 * PRACTICULARIUM Platform
 * Delivery Engine Unit Tests
 * ==========================================================
 */

const DeliveryService = require("../netlify/lib/delivery");
const { DELIVERY_CARRIERS } = require("../netlify/lib/delivery/carriers");

let total = 0;
let passed = 0;
let failed = 0;

const TEST_DESTINATION = {
    city: "Запоріжжя",
    warehouse: "61"
};

function runTest(name, testFunction) {

    total++;

    try {

        testFunction();

        console.log(`✅ ${name}`);

        passed++;

    } catch (error) {

        console.log(`❌ ${name}`);
        console.log(`   ${error.message}`);

        failed++;

    }

}

function expectEqual(actual, expected, message) {

    if (actual !== expected) {

        throw new Error(
            `${message}. Expected: ${expected}, Received: ${actual}`
        );

    }

}

function expectThrows(name, testFunction) {

    total++;

    try {

        testFunction();

        console.log(`❌ ${name}`);
        console.log("   Expected exception was not thrown.");

        failed++;

    } catch (error) {

        console.log(`✅ ${name}`);

        passed++;

    }

}

console.log("");
console.log("==================================================");
console.log("PRACTICULARIUM Platform");
console.log("Delivery Engine Unit Tests");
console.log("==================================================");
console.log("");

console.log("Functional Tests");
console.log("");

runTest("Nova Poshta / 1 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.NOVA_POSHTA,

        weight: 1,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 80, "Nova Poshta / 1 kg");

});

runTest("Nova Poshta / 3 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.NOVA_POSHTA,

        weight: 3,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 95, "Nova Poshta / 3 kg");

});

runTest("Nova Poshta / 7 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.NOVA_POSHTA,

        weight: 7,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 120, "Nova Poshta / 7 kg");

});

runTest("Nova Poshta / 15 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.NOVA_POSHTA,

        weight: 15,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 160, "Nova Poshta / 15 kg");

});

runTest("Ukrposhta / 1 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.UKRPOSHTA,

        weight: 1,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 60, "Ukrposhta / 1 kg");

});

runTest("Ukrposhta / 3 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.UKRPOSHTA,

        weight: 3,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 75, "Ukrposhta / 3 kg");

});

runTest("Ukrposhta / 7 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.UKRPOSHTA,

        weight: 7,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 95, "Ukrposhta / 7 kg");

});

runTest("Ukrposhta / 15 kg", () => {

    const result = DeliveryService.calculateDelivery({

        carrier: DELIVERY_CARRIERS.UKRPOSHTA,

        weight: 15,

        destination: TEST_DESTINATION

    });

    expectEqual(result.deliveryPrice, 130, "Ukrposhta / 15 kg");

});

console.log("");
console.log("Validation Tests");
console.log("");

expectThrows("Unknown carrier", () => {

    DeliveryService.calculateDelivery({

        carrier: "SomeCarrier",

        weight: 3,

        destination: TEST_DESTINATION

    });

});

console.log("");
console.log("==================================================");
console.log(`TOTAL : ${total}`);
console.log(`PASSED: ${passed}`);
console.log(`FAILED: ${failed}`);
console.log("==================================================");

