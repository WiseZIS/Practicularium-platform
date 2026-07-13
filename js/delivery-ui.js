document.addEventListener("DOMContentLoaded", () => {

    const delivery = document.getElementById("delivery");

    if (!delivery) return;

    // ==========================
    // Основные блоки
    // ==========================

    const deliverySection = document.getElementById("deliverySection");

    const novaFields = document.getElementById("novaPoshtaFields");
    const ukrFields = document.getElementById("ukrPoshtaFields");

    const countrySection = document.getElementById("countrySection");
    const currencySection = document.getElementById("currencySection");

    const country = document.getElementById("country");
    const currency = document.getElementById("currency");

    // ==========================
    // Поля доставки
    // ==========================

    const city = document.querySelector('[name="city"]');
    const branch = document.querySelector('[name="np_branch"]');

    const index = document.querySelector('[name="ukrpost_index"]');
    const street = document.querySelector('[name="ukrpost_street"]');
    const house = document.querySelector('[name="ukrpost_house"]');
    const apartment = document.querySelector('[name="ukrpost_apartment"]');

    // ==========================
    // Очистка полей доставки
    // ==========================

    function clearDeliveryFields() {

        city.value = "";
        branch.value = "";

        index.value = "";
        street.value = "";
        house.value = "";
        apartment.value = "";

    }

    // ==========================
    // Required
    // ==========================

    function resetRequiredFields() {

        city.required = false;
        branch.required = false;

        index.required = false;
        street.required = false;
        house.required = false;
        apartment.required = false;

    }

    // ==========================
    // Страна / Валюта
    // ==========================

    function showCountryCurrency() {

        countrySection.style.display = "block";
        currencySection.style.display = "block";

        country.required = true;
        currency.required = true;

        country.value = "";
        currency.value = "UAH";

    }

    function setCountryCurrency(countryCode, currencyCode) {

        countrySection.style.display = "none";
        currencySection.style.display = "none";

        country.required = false;
        currency.required = false;

        country.value = countryCode;
        currency.value = currencyCode;

    }

    // ==========================
    // Новая Почта
    // ==========================

    function showNovaPoshta() {

        deliverySection.style.display = "block";

        novaFields.style.display = "block";
        ukrFields.style.display = "none";

        index.value = "";
        street.value = "";
        house.value = "";
        apartment.value = "";

        resetRequiredFields();

        city.required = true;
        branch.required = true;

        showCountryCurrency();

    }

    // ==========================
    // Укрпочта
    // ==========================

    function showUkrPoshta() {

        deliverySection.style.display = "block";

        novaFields.style.display = "none";
        ukrFields.style.display = "block";

        city.value = "";
        branch.value = "";

        resetRequiredFields();

        index.required = true;
        street.required = true;
        house.required = true;

        showCountryCurrency();

    }

    // ==========================
    // Без доставки
    // ==========================

    function showWithoutDelivery(countryCode, currencyCode) {

        deliverySection.style.display = "none";

        novaFields.style.display = "none";
        ukrFields.style.display = "none";

        clearDeliveryFields();
        resetRequiredFields();

        setCountryCurrency(countryCode, currencyCode);

    }

    // ==========================
    // Registry сценариев
    // ==========================

    const deliveryHandlers = {

        nova_poshta() {

            showNovaPoshta();

        },

        ukrposhta() {

            showUkrPoshta();

        },

        pickup() {

            showWithoutDelivery("UA", "UAH");

        },

        genoa_personal() {

            showWithoutDelivery("IT", "EUR");

        },

        italy_post() {

            showWithoutDelivery("IT", "EUR");

        }

    };

    // ==========================
    // Начальное состояние
    // ==========================

    showCountryCurrency();
    deliverySection.style.display = "none";

    novaFields.style.display = "none";
    ukrFields.style.display = "none";

    // ==========================
    // Выбор способа получения
    // ==========================

    delivery.addEventListener("change", () => {

        const handler = deliveryHandlers[delivery.value];

        if (handler) {

            handler();

        }
        else {

            showCountryCurrency();

            deliverySection.style.display = "none";

            clearDeliveryFields();
            resetRequiredFields();

        }

    });

});