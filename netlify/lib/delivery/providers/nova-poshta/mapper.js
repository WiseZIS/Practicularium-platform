/**
 * Перетворити список міст Нової Пошти
 * у внутрішній формат PRACTICULARIUM Platform.
 *
 * @param {Object} response
 * @returns {Array}
 */
function mapCities(response) {
    return response.data.map(city => ({
        id: city.Ref,
        name: city.Description,
        area: city.AreaDescription,
        region: city.SettlementTypeDescription
    }));
}

module.exports = {
    mapCities
};