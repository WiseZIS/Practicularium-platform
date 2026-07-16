/**
 * PRACTICULARIUM Platform 2.0
 * Countries Dictionary
 * Shared Layer
 */

export const COUNTRY = Object.freeze({
    UKRAINE: "UA",
    ITALY: "IT"
});

export const COUNTRY_LABELS = Object.freeze({
    [COUNTRY.UKRAINE]: "Україна",
    [COUNTRY.ITALY]: "Італія"
});

export const COUNTRY_OPTIONS = Object.freeze([
    {
        value: COUNTRY.UKRAINE,
        label: COUNTRY_LABELS[COUNTRY.UKRAINE]
    },
    {
        value: COUNTRY.ITALY,
        label: COUNTRY_LABELS[COUNTRY.ITALY]
    }
]);