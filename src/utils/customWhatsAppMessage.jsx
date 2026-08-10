export function generateCustomWhatsAppMessage(orderData) {

    const {

        customer,

        customOrder

    } = orderData;

    let message = `🎨 *Custom Sweet Enquiry*\n\n`;

    message += `Hello Kumaar Putarekulu Team,\n\n`;

    message += `I would like to discuss a custom sweet order.\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `👤 *Customer Details*\n\n`;

    message += `👤 Name : ${customer?.fullName || ""}\n`;

    message += `📞 Phone : ${customer?.phone || ""}\n`;

    message += `🏠 Address : ${customer?.address || ""}\n`;

    message += `🏙️ City : ${customer?.city || ""}\n`;

    message += `📮 Pincode : ${customer?.pincode || ""}\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `🎨 *Custom Sweet Requirements*\n\n`;

    message += `📝 Requirement : ${customOrder?.requirement || ""}\n`;

    message += `📦 Quantity : ${customOrder?.quantity || ""}\n`;

    message += `🎉 Occasion : ${customOrder?.occasion || "Not specified"}\n`;

    message += `📅 Preferred Delivery Date : ${
        customOrder?.preferredDeliveryDate || "Not specified"
    }\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `I would like to discuss the design, pricing and delivery details with your team.\n\n`;

    message += `Please contact me on WhatsApp.\n\n`;

    message += `Thank you 😊`;

    return message;

}