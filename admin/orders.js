document.addEventListener("DOMContentLoaded", loadOrders);

async function loadOrders() {

    try {

        const response = await fetch("/.netlify/functions/get-orders");

        const result = await response.json();

        const table = document.getElementById("ordersTable");

        table.innerHTML = "";

        result.orders.forEach(order => {

            table.innerHTML += `

<tr>

<td>

    <a href="order.html?number=${order.order_number}">

        ${order.order_number}

    </a>

</td>

<td>

<select
    class="status-select"
    data-order="${order.order_number}">

<option ${order.status === "NEW" ? "selected" : ""}>NEW</option>
<option ${order.status === "CONFIRMED" ? "selected" : ""}>CONFIRMED</option>
<option ${order.status === "WAITING_PREPAYMENT" ? "selected" : ""}>WAITING_PREPAYMENT</option>
<option ${order.status === "PAYMENT_RECEIVED" ? "selected" : ""}>PAYMENT_RECEIVED</option>
<option ${order.status === "PACKING" ? "selected" : ""}>PACKING</option>
<option ${order.status === "SHIPPED" ? "selected" : ""}>SHIPPED</option>
<option ${order.status === "DELIVERED" ? "selected" : ""}>DELIVERED</option>
<option ${order.status === "COMPLETED" ? "selected" : ""}>COMPLETED</option>
<option ${order.status === "CANCELLED" ? "selected" : ""}>CANCELLED</option>

</select>

</td>

<td>${order.customer_name}</td>

<td>${order.product_name}</td>

</tr>

`;

        });

        document
            .querySelectorAll(".status-select")
            .forEach(select => {

                select.addEventListener("change", async () => {

                    try {

                        const response = await fetch("/.netlify/functions/update-order-status", {

                            method: "POST",

                            headers: {
                                "Content-Type": "application/json"
                            },

                            body: JSON.stringify({

                                orderNumber: select.dataset.order,

                                status: select.value

                            })

                        });

                        const result = await response.json();

                        if (!result.success) {

                            throw new Error(result.message);

                        }

                        console.log("Статус успішно оновлено.");

                    }

                    catch (error) {

                        console.error(error);

                        alert("Не вдалося змінити статус замовлення.");

                    }

                });

            });

    }

    catch (error) {

        console.error(error);

        alert("Не вдалося завантажити замовлення.");

    }

}