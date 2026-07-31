import {
    ORDER_STATUS,
    ORDER_STATUS_LABELS,
    ORDER_STATUS_OPTIONS
} from "../shared/order-statuses.js";

import {
    DELIVERY_METHOD_LABELS
} from "../shared/delivery-methods.js";

import {
    PAYMENT_METHOD_LABELS
} from "../shared/payment-methods.js";

import {
    COUNTRY_LABELS
} from "../shared/countries.js";

import "../js/fiscal-ui.js";

document.addEventListener("DOMContentLoaded", () => {

    loadOrder();

    const createShipmentButton =
        document.getElementById("createShipment");

    if (createShipmentButton) {

        createShipmentButton.addEventListener(
            "click",
            createShipment
        );

    }

    const trackShipmentButton =
        document.getElementById("trackShipment");

    if (trackShipmentButton) {

        trackShipmentButton.addEventListener(
            "click",
            trackShipment
        );

    }

    const statusSelect = document.getElementById("statusSelect");

    if (statusSelect) {

        fillStatusSelect(statusSelect);

        const saveButton = document.getElementById("saveStatus");

        console.log(saveButton);

        if (saveButton) {

            saveButton.addEventListener(
                "click",
                saveStatus
            );

        }

    }

});

let currentOrder = null;

document.addEventListener(

    "createFiscalReceipt",

    createFiscalReceipt

);

function fillStatusSelect(select) {

    select.innerHTML = "";

    ORDER_STATUS_OPTIONS.forEach(status => {

        const option = document.createElement("option");

        option.value = status.value;

        option.textContent = status.label;

        select.appendChild(option);

    });

}

async function loadOrder() {

    try {

        const params =
            new URLSearchParams(window.location.search);

        const orderNumber =
            params.get("number");

        if (!orderNumber) {

            alert("Не вказано номер замовлення.");

            return;

        }

        const response = await fetch(

            `/.netlify/functions/get-order?number=${orderNumber}`

        );

        const result = await response.json();

        if (!result.success) {

            alert("Замовлення не знайдено.");

            return;

        }

        currentOrder = result.order;

        renderOrder(currentOrder);

    } catch (error) {

        console.error(error);

        document
            .getElementById("loading")
            .classList.add("hidden");

        document
            .getElementById("error")
            .classList.remove("hidden");

    }

}

function renderOrder(order) {

    const data = order.data || {};
    const fiscal = data.fiscal || {};
	
	console.log("FISCAL:", fiscal);
    console.log("RECEIPT PATH:", fiscal.receiptPath);

    const fiscalStatus =
        document.getElementById("fiscalStatus");

    const receiptNumber =
        document.getElementById("receiptNumber");

    const fiscalNumber =
        document.getElementById("fiscalNumber");
		
	const createReceiptButton =
        document.getElementById("createReceipt");
		
	const openReceiptButton =
        document.getElementById("openReceipt");

if (fiscal.receiptId) {

    fiscalStatus.textContent =
        "✅ Чек сформовано";

    receiptNumber.textContent =
        fiscal.receiptNumber || "—";

    fiscalNumber.textContent =
        fiscal.fiscalNumber || "—";
		
    if (createReceiptButton) {

        createReceiptButton.style.display = "none";

    }
	
	if (openReceiptButton) {

        openReceiptButton.style.display = "";

    }

} else {

    fiscalStatus.textContent =
        "⚪ Чек ще не створений";

    receiptNumber.textContent = "—";

    fiscalNumber.textContent = "—";
	
	if (createReceiptButton) {

        createReceiptButton.style.display = "";

    }
	
	if (openReceiptButton) {

        openReceiptButton.style.display = "none";

    }

}

/**
 * ------------------------------------------------------------
 * Open Receipt
 * ------------------------------------------------------------
 */

if (

    openReceiptButton

) {

    openReceiptButton.onclick = () => {

        if (

            !order ||

            !order.order_number

        ) {

            alert(

                "Order number is missing."

            );

            return;

        }

        const url =

            `/.netlify/functions/get-document?orderNumber=${encodeURIComponent(
                order.order_number
            )}&type=receipt`;

        window.open(

            url,

            "_blank"

        );

    };

}

    console.log("ORDER DATA:", data);
    console.log("DELIVERY:", data.delivery);
    console.log("PRODUCT:", data.product);
    console.log("FULL DATA:", data);

    const shipment = data.shipping || {};

    const SHIPMENT_PROVIDER_LABELS = {

        nova_poshta: "Нова Пошта",

        ukrposhta: "Укрпошта"

    };

    document.getElementById("shipmentProvider").textContent =
        SHIPMENT_PROVIDER_LABELS[shipment.provider] ||
        shipment.provider ||
        "—";

    const createShipmentButton =
        document.getElementById("createShipment");

    if (shipment.ttn && createShipmentButton) {

        createShipmentButton.disabled = true;

        createShipmentButton.textContent =
            "✔ ТТН вже створена";

    }
	
	const trackShipmentButton =
        document.getElementById("trackShipment");

    if (trackShipmentButton) {

        trackShipmentButton.disabled = !shipment.ttn;

    }

    document.getElementById("shipmentNumber").textContent =
        shipment.ttn || "ТТН ще не створена";

    document.getElementById("shipmentCost").textContent =
        shipment.cost
            ? `${shipment.cost} грн`
            : "—";

    document.getElementById("shipmentDeliveryDate").textContent =
        shipment.estimatedDeliveryDate || "—";

    updateStatus(order);

    document.getElementById("orderNumber").textContent =
        order.order_number;

    document.getElementById("orderId").textContent =
        order.id || "—";

    document.getElementById("customerName").textContent =
        order.customer_name || "";

    document.getElementById("customerEmail").textContent =
        order.customer_email || "";

    document.getElementById("customerPhone").textContent =
        data.customer?.phone || "";

    document.getElementById("productName").textContent =
        order.product_name || "";

    document.getElementById("quantity").textContent =
        data.product?.quantity || 1;

    document.getElementById("price").textContent =
        `${data.pricing?.total || 0} ${data.pricing?.currency || ""}`;

    document.getElementById("deliveryMethod").textContent =
        DELIVERY_METHOD_LABELS[data.delivery?.method] ||
        data.delivery?.method ||
        "—";

    document.getElementById("paymentMethod").textContent =
        PAYMENT_METHOD_LABELS[data.payment?.method] ||
        data.payment?.method ||
        "—";

    document.getElementById("deliveryCountry").textContent =
        COUNTRY_LABELS[data.product?.country] ||
        data.product?.country ||
        "—";

    document.getElementById("deliveryCity").textContent =
        data.delivery?.city || "—";

    let deliveryAddress = "—";

    switch (data.delivery?.method) {

        case "nova_poshta":

            deliveryAddress =
                data.delivery?.warehouse ||
                data.delivery?.branch ||
                "—";

            break;

        case "ukrposhta":

            deliveryAddress = [

                data.delivery?.index,

                data.delivery?.street,

                data.delivery?.house,

                data.delivery?.apartment

            ]
                .filter(Boolean)
                .join(", ");

            break;

        case "pickup":

            deliveryAddress =
                "Самовивіз із видавництва";

            break;

        case "genoa_personal":

            deliveryAddress =
                "Особиста передача у місті Генуя";

            break;

        case "italy_post":

            deliveryAddress = [

                data.delivery?.street,

                data.delivery?.house,

                data.delivery?.apartment

            ]
                .filter(Boolean)
                .join(", ");

            break;

    }

    document.getElementById("deliveryAddress").textContent =
        deliveryAddress;

    document.getElementById("comment").textContent =
        data.comment || "—";

    document.getElementById("createdAt").textContent =
        formatDate(order.created_at);

    document.getElementById("updatedAt").textContent =
        formatDate(order.updated_at);

    document
        .getElementById("loading")
        .classList.add("hidden");

    document
        .getElementById("orderContent")
        .classList.remove("hidden");

}

function updateStatus(order) {

    const badge = document.getElementById("orderStatusBadge");

    const select = document.getElementById("statusSelect");

    badge.textContent =
        ORDER_STATUS_LABELS[order.status] ||
        order.status;

    badge.className =
        `badge badge-${order.status.toLowerCase()}`;

    select.value = order.status;

}

function formatDate(date) {

    if (!date) {

        return "—";

    }

    const d = new Date(date);

    return d.toLocaleString("uk-UA", {

        day: "2-digit",

        month: "2-digit",

        year: "numeric",

        hour: "2-digit",

        minute: "2-digit"

    });

}

function showMessage(message) {

    let box = document.getElementById("saveMessage");

    if (!box) {

        box = document.createElement("div");

        box.id = "saveMessage";

        box.className = "save-message";

        document.body.appendChild(box);

    }

    box.textContent = message;

    box.classList.add("visible");

    setTimeout(() => {

        box.classList.remove("visible");

    }, 2500);

}

async function saveStatus() {

    if (!currentOrder) {

        return;

    }

    const status =
        document.getElementById("statusSelect").value;

    try {

        const response = await fetch(

            "/.netlify/functions/update-order-status",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    orderNumber: currentOrder.order_number,

                    status

                })

            }

        );

        const result = await response.json();

        if (!result.success) {

            throw new Error(

                result.message ||
                "Помилка збереження."

            );

        }

        currentOrder.status = status;

        if (result.updatedAt) {

            currentOrder.updated_at =
                result.updatedAt;

        } else {

            currentOrder.updated_at =
                new Date().toISOString();

        }

        updateStatus(currentOrder);

        document.getElementById("updatedAt").textContent =
            formatDate(currentOrder.updated_at);

        showMessage("Статус успішно збережено.");

    } catch (error) {

        console.error(error);

        alert(
            "Не вдалося зберегти статус замовлення."
        );

    }

}

async function createShipment() {

    if (!currentOrder) {

        return;

    }

    try {

        const response = await fetch(

            "/.netlify/functions/create-shipment",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    orderNumber: currentOrder.order_number

                })

            }

        );

        const result = await response.json();

        console.log("SHIPMENT RESULT:");

        console.log(result);

        await loadOrder();

        showMessage("ТТН успішно створена.");

    } catch (error) {

        console.error(error);

        alert("Не вдалося створити ТТН.");

    }

}

async function createFiscalReceipt() {

    if (!currentOrder) {

        return;

    }

    try {

        const response = await fetch(

            "/.netlify/functions/create-fiscal-receipt",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    orderNumber: currentOrder.order_number

                })

            }

        );

        const result = await response.json();

        console.log("FISCAL RESULT:");

        console.log(result);

        showMessage("Фіскальний чек успішно створено.");

    } catch (error) {

        console.error(error);

        alert("Не вдалося створити фіскальний чек.");

    }

}

function trackShipment() {

    if (!currentOrder) {

        return;

    }

    const shipment = currentOrder.data?.shipping;

    if (!shipment?.ttn) {

        alert("ТТН ще не створена.");

        return;

    }

    window.open(

        `https://tracking.novaposhta.ua/#/uk/document/${shipment.ttn}`,

        "_blank"

    );

}