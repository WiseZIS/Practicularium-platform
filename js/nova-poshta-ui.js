/*
==========================================================
PRACTICULARIUM Platform 2.0
Sprint 7.4
Nova Poshta UI
Version: 1.2
==========================================================
Работа с пользовательским интерфейсом Новой Пошты.

Ответственность модуля:

- поиск городов
- отображение подсказок городов
- выбор города
- получение cityRef
- загрузка точек получения
- выбор точки получения
- получение warehouseRef

order.js этот модуль НЕ использует.
==========================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ======================================================
    DOM
    ======================================================
    */

    const cityInput = document.getElementById("city");
    const citySuggestions = document.getElementById("citySuggestions");
    const cityRefInput = document.getElementById("cityRef");

    const warehouseInput = document.getElementById("warehouse");
    const warehouseSuggestions = document.getElementById("warehouseSuggestions");
    const warehouseRefInput = document.getElementById("warehouseRef");

    if (
        !cityInput ||
        !citySuggestions ||
        !cityRefInput ||
        !warehouseInput ||
        !warehouseSuggestions ||
        !warehouseRefInput
    ) {
        return;
    }

    /*
    ======================================================
    STATE
    ======================================================
    */

    let debounceTimer = null;

    let warehouseList = [];

    /*
    ======================================================
    INIT
    ======================================================
    */

    init();

    function init() {

        bindEvents();

    }

    /*
    ======================================================
    EVENTS
    ======================================================
    */

    function bindEvents() {

        cityInput.addEventListener("input", onCityInput);

        warehouseInput.addEventListener("input", onWarehouseInput);

        document.addEventListener("click", (event) => {

            if (
                !citySuggestions.contains(event.target) &&
                event.target !== cityInput
            ) {

                clearSuggestions();

            }

            if (
                !warehouseSuggestions.contains(event.target) &&
                event.target !== warehouseInput
            ) {

                clearWarehouseSuggestions();

            }

        });

    }

    async function onCityInput(event) {

        const query = event.target.value.trim();

        cityRefInput.value = "";

        warehouseInput.value = "";
        warehouseRefInput.value = "";
        warehouseList = [];

        clearWarehouseSuggestions();

        if (query.length < 2) {

            clearSuggestions();

            return;

        }

        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(async () => {

            await searchCities(query);

        }, 300);

    }

    async function onWarehouseInput(event) {

        const query = event.target.value.trim().toLowerCase();

        warehouseRefInput.value = "";

        if (query.length === 0) {

            clearWarehouseSuggestions();

            return;

        }

        const filtered = warehouseList.filter(warehouse => {

            const text = (
                warehouse.description ||
                warehouse.shortAddress ||
                warehouse.number ||
                ""
            ).toLowerCase();

            return text.includes(query);

        });

        renderWarehouses(filtered);

    }

    /*
    ======================================================
    API
    ======================================================
    */

    async function searchCities(query) {

        try {

            const cityList = await fetchCities(query);

            renderSuggestions(cityList);

        }

        catch (error) {

            console.error("Nova Poshta:", error);

            clearSuggestions();

        }

    }

    async function fetchCities(query) {

        const response = await fetch(

            `/.netlify/functions/get-cities?q=${encodeURIComponent(query)}`

        );

        if (!response.ok) {

            throw new Error("Помилка отримання міст.");

        }

        return await response.json();

    }

    /*
    ======================================================
    WAREHOUSES API
    ======================================================
    */

    async function loadWarehouses(cityRef) {

        try {

            const response = await fetch(

                `/.netlify/functions/get-warehouses?cityRef=${encodeURIComponent(cityRef)}`

            );

            if (!response.ok) {

                throw new Error("Помилка отримання точок отримання.");

            }

            const warehouses = await response.json();

            warehouseList = warehouses;

            console.log("Warehouses:", warehouses);

        }

        catch (error) {

            console.error("Nova Poshta:", error);

            warehouseList = [];

        }

    }

    /*
    ======================================================
    RENDER CITIES
    ======================================================
    */

    function renderSuggestions(cityList) {

        clearSuggestions();

        if (!Array.isArray(cityList) || cityList.length === 0) {
            return;
        }

        cityList.forEach(city => {

            const item = document.createElement("div");

            item.className = "autocomplete-item";

            item.textContent = city.description;

            item.addEventListener("click", () => {

                selectCity(city);

            });

            citySuggestions.appendChild(item);

        });

    }
	
	 /*
    ======================================================
    RENDER WAREHOUSES
    ======================================================
    */

    function renderWarehouses(list) {

        clearWarehouseSuggestions();

        if (!Array.isArray(list) || list.length === 0) {
            return;
        }

        list.forEach(warehouse => {

            const item = document.createElement("div");

            item.className = "autocomplete-item";

            item.textContent =
                warehouse.description ||
                warehouse.shortAddress ||
                warehouse.number;

            item.addEventListener("click", () => {

                selectWarehouse(warehouse);

            });

            warehouseSuggestions.appendChild(item);

        });

    }

    /*
    ======================================================
    CITY SELECT
    ======================================================
    */

    function selectCity(city) {

    console.log("CITY OBJECT:", city);
    console.log("description =", city.description);
    console.log("descriptionRu =", city.descriptionRu);

    cityInput.value = city.description;

    console.log("INPUT AFTER SET =", cityInput.value);

    cityRefInput.value = city.ref;

    warehouseInput.value = "";
    warehouseRefInput.value = "";

    clearSuggestions();
    clearWarehouseSuggestions();

    loadWarehouses(city.ref);

}

    /*
    ======================================================
    WAREHOUSE SELECT
    ======================================================
    */

function selectWarehouse(warehouse) {

    warehouseInput.value =
        warehouse.description ||
        warehouse.shortAddress ||
        warehouse.number;

    warehouseRefInput.value =
        warehouse.ref;

    clearWarehouseSuggestions();

    console.log(
        "Selected warehouse:",
        warehouse
    );

    if (warehouse.number === "8") {

        console.log(
            "===== SENDER WAREHOUSE ====="
        );

        console.log(warehouse);

    }

}

    /*
    ======================================================
    HELPERS
    ======================================================
    */

    function clearSuggestions() {

        citySuggestions.innerHTML = "";

    }

    function clearWarehouseSuggestions() {

        warehouseSuggestions.innerHTML = "";

    }

});