const { validateOrder } = require("../lib/order-validator");
const { buildOrder } = require("../lib/order-builder");

const { createCustomerMessage } = require("../lib/messages/customer-message");
const { createOwnerMessage } = require("../lib/messages/owner-message");

const { sendEmail } = require("../lib/services/email-service");
const { saveOrder } = require("../lib/order-repository");

exports.handler = async (event) => {

    try {

        const data = JSON.parse(event.body);

        const order = buildOrder(data);

       console.log("PRODUCT OBJECT:");
       console.log(order.product);

        const validationResult = validateOrder(order);

        if (!validationResult.valid) {

            return {

                statusCode: 400,

                body: JSON.stringify({

                    success: false,

                    errors: validationResult.errors

                })

            };

        }

        const customerMessage = createCustomerMessage(order);

        const ownerMessage = createOwnerMessage(order);

        console.log("\n================================");
        console.log("НОВЕ ЗАМОВЛЕННЯ");
        console.log("================================");

        console.log(order);

        console.log("Відправляємо лист клієнту...");

        await sendEmail({

           to: order.customer.email,

           subject: "Ваше замовлення отримано",

           message: customerMessage

        });

        console.log("Лист клієнту відправлено.");

        console.log("Відправляємо лист власнику...");

        await sendEmail({

           to: process.env.OWNER_EMAIL,

           subject: "Нове замовлення",

           message: ownerMessage

        });

        console.log("Лист власнику відправлено.");
		console.log("Зберігаємо замовлення у Supabase...");

        await saveOrder(order);

        console.log("Замовлення успішно збережено у Supabase.");

        return {

            statusCode: 200,

            body: JSON.stringify({

                success: true,

                message: "Замовлення успішно отримано!",

                order

            })

        };

    }

    catch (error) {

        console.error(error);
		console.error(error.message);

        return {

            statusCode: 400,

            body: JSON.stringify({

                success: false,

                message: "Помилка отримання даних."

            })

        };

    }

};