document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("orderForm");

    if (!form) return;

    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        // Защита от повторной отправки
        submitButton.disabled = true;

        const originalText = submitButton.textContent;

        submitButton.textContent = "Надсилання...";

        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());

        console.log(data);

        try {

            const response = await fetch("/.netlify/functions/create-order", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(data)

            });

            const result = await response.json();

            alert(result.message);

            form.reset();

        }

        catch (error) {

            console.error(error);

            alert("Помилка з'єднання із сервером.");

        }

        finally {

            submitButton.disabled = false;

            submitButton.textContent = originalText;

        }

    });

});