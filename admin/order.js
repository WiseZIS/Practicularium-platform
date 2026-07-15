document.addEventListener("DOMContentLoaded", loadOrder);

async function loadOrder() {

    try {

        const params = new URLSearchParams(window.location.search);

        const orderNumber = params.get("number");

        console.log("URL:", window.location.href);
        console.log("Search:", window.location.search);
        console.log("Order number:", orderNumber);

        if (!orderNumber) {

            alert("Не вказано номер замовлення.");

            return;

        }

        const response = await fetch(
            `/.netlify/functions/get-order?number=${orderNumber}`
        );

        console.log(response.status);
        console.log(response);

        const result = await response.json();
        console.log(result);
		
        if (!result.success) {

            alert("Замовлення не знайдено.");

            return;

        }

        const order = result.order;

        const data = order.data || {};

        document.getElementById("orderNumber").textContent =
            order.order_number;

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

        document.getElementById("paymentMethod").textContent =
            data.payment?.method || "";

        document.getElementById("deliveryMethod").textContent =
            data.delivery?.method || "";

        document.getElementById("deliveryCountry").textContent =
            data.product?.country || "";

        document.getElementById("deliveryCity").textContent =
            data.delivery?.city || "";

        document.getElementById("deliveryAddress").textContent =
            data.delivery?.street || "";

        document.getElementById("comment").textContent =
            data.comment || "-";

        document.getElementById("createdAt").textContent =
            order.created_at;

        document.getElementById("updatedAt").textContent =
            order.updated_at;

        document.getElementById("statusSelect").value =
            order.status;

    }

    catch (error) {

        console.error(error);

        alert("Не вдалося завантажити замовлення.");

    }

}