export function generateWhatsAppMessage(orderData) {

    const {

        customer,

        cartItems,

        totalItems,

        totalPrice

    } = orderData;

    if (!cartItems || cartItems.length === 0) {

        return "Hello Kumaar Putarekulu, I would like to know more about your products.";

    }

    let message = `🍬 *New Order Request*\n\n`;

    message += `Hello Kumaar Putarekulu Team,\n\n`;

    message += `I would like to place the following order:\n\n`;

    cartItems.forEach((item, index) => {

        const subTotal = item.price * item.quantity;

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

    message += `👤 Name : ${customer?.fullName || ""}\n`;

    message += `📞 Phone : ${customer?.phone || ""}\n`;

    message += `🏠 Address : ${customer?.address || ""}\n`;

    message += `🏙️ City : ${customer?.city || ""}\n`;

    message += `📮 Pincode : ${customer?.pincode || ""}\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `Please confirm the availability and delivery date.\n\n`;

    message += `Thank you 😊`;

    return message;

}