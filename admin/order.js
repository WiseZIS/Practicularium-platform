document.addEventListener("DOMContentLoaded", loadOrder);

async function loadOrder() {

    try {

        const params = new URLSearchParams(window.location.search);

        const orderNumber = params.get("number");

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

        const order = result.order;

        const data = order.data || {};

        /* ==========================
           STATUS
        ========================== */

        document.getElementById("orderStatusBadge").textContent =
            order.status;

        document.getElementById("orderStatusBadge").className =
            `badge badge-${order.status.toLowerCase()}`;

        document.getElementById("statusSelect").value =
            order.status;

        /* ==========================
           CUSTOMER
        ========================== */

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

        /* ==========================
           PRODUCT
        ========================== */

        document.getElementById("productName").textContent =
            order.product_name || "";

        document.getElementById("quantity").textContent =
            data.product?.quantity || 1;

        document.getElementById("price").textContent =
            `${data.pricing?.total || 0} ${data.pricing?.currency || ""}`;
			
	    /* ==========================
           DELIVERY
        ========================== */

        const deliveryMethodLabels = {

            nova_poshta: "Нова Пошта",

            ukrposhta: "Укрпошта",

            pickup: "Самовивіз із видавництва",

            genoa_personal: "Особиста передача (Генуя)",

            italy_post: "Поштова доставка по Італії"

        };

        const paymentMethodLabels = {

            "full-prepayment":
                "Повна передоплата",

            "cod-delivery-prepayment":
                "Післяплата + передоплата доставки"

        };

        const countryLabels = {

            UA: "Україна",

            IT: "Італія"

        };

        document.getElementById("deliveryMethod").textContent =
            deliveryMethodLabels[data.delivery?.method] ||
            data.delivery?.method ||
            "—";

        document.getElementById("paymentMethod").textContent =
            paymentMethodLabels[data.payment?.method] ||
            data.payment?.method ||
            "—";

        document.getElementById("deliveryCountry").textContent =
            countryLabels[data.product?.country] ||
            data.product?.country ||
            "—";

        document.getElementById("deliveryCity").textContent =
            data.delivery?.city || "—";

        /* ==========================
           DELIVERY ADDRESS
        ========================== */

        let deliveryAddress = "—";

        switch (data.delivery?.method) {

            case "nova_poshta":

                deliveryAddress =
                    data.delivery?.branch
                        ? `Відділення № ${data.delivery.branch}`
                        : "—";

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
			
		/* ==========================
           DATES
        ========================== */

        const formatDate = (date) => {

            if (!date) return "—";

            const d = new Date(date);

            return d.toLocaleString("uk-UA", {

                day: "2-digit",
                month: "2-digit",
                year: "numeric",

                hour: "2-digit",
                minute: "2-digit"

            });

        };

        document.getElementById("createdAt").textContent =
            formatDate(order.created_at);

        document.getElementById("updatedAt").textContent =
            formatDate(order.updated_at);

        /* ==========================
           SHOW PAGE
        ========================== */

        document.getElementById("loading")
            .classList.add("hidden");

        document.getElementById("orderContent")
            .classList.remove("hidden");

    }

    catch (error) {

        console.error(error);

        document.getElementById("loading")
            .classList.add("hidden");

        document.getElementById("error")
            .classList.remove("hidden");

    }

}