/**
 * ============================================================
 * Nova Poshta
 * Internet Document Package Builder
 * ============================================================
 */

function buildPackage(packageData) {

    return {

        Weight: packageData.weight,

        Cost: packageData.declaredValue,

        Description: packageData.description

    };

}

module.exports = {

    buildPackage

};