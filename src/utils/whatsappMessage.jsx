export function generateWhatsAppMessage(cartItems) {

    if (!cartItems || cartItems.length === 0) {

        return "Hello Kumaar Putarekulu, I would like to know more about your products.";

    }

    let totalItems = 0;
    let totalPrice = 0;

    let message = `🍬 *New Order Request*\n\n`;

    message += `Hello Kumaar Putarekulu Team,\n\n`;

    message += `I would like to place the following order:\n\n`;

    cartItems.forEach((item, index) => {

        const subTotal = item.price * item.quantity;

        totalItems += item.quantity;
        totalPrice += subTotal;

        message += `━━━━━━━━━━━━━━━━━━\n`;

        message += `*${index + 1}. ${item.name}*\n`;

        message += `💰 Price      : ₹${item.price}\n`;

        message += `📦 Quantity   : ${item.quantity}\n`;

        message += `🧾 Subtotal   : ₹${subTotal}\n\n`;

    });

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `🛒 *Total Items* : ${totalItems}\n`;

    message += `💵 *Grand Total* : ₹${totalPrice}\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `👤 *Customer Details*\n\n`;

    message += `Name : \n`;

    message += `Phone : \n`;

    message += `Address : \n`;

    message += `Preferred Delivery Date : \n`;

    message += `Additional Notes : \n\n`;

    message += `Please confirm the availability.\n\n`;

    message += `Thank you 😊`;

    return message;

}