export function generateBulkWhatsAppMessage(orderData) {

    const {

        customer,

        bulkOrder

    } = orderData;

    let message = `📦 *Bulk Order Request*\n\n`;

    message += `Hello Kumaar Putarekulu Team,\n\n`;

    message += `I would like to place a bulk order.\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `📦 *Bulk Order Details*\n\n`;

    message += `📦 Required Quantity : ${bulkOrder.quantity}\n`;

    if (bulkOrder.occasion) {

        message += `🎉 Occasion : ${bulkOrder.occasion}\n`;

    }

    if (bulkOrder.preferredDeliveryDate) {

        message += `📅 Preferred Delivery Date : ${bulkOrder.preferredDeliveryDate}\n`;

    }

    message += `\n━━━━━━━━━━━━━━━━━━\n\n`;

    message += `👤 *Customer Details*\n\n`;

    message += `👤 Name : ${customer.fullName}\n`;

    message += `📞 Phone : ${customer.phone}\n`;

    message += `🏠 Address : ${customer.address}\n`;

    message += `🏙️ City : ${customer.city}\n`;

    message += `📮 Pincode : ${customer.pincode}\n\n`;

    message += `━━━━━━━━━━━━━━━━━━\n\n`;

    message += `Please contact me to discuss the available products,`;

    message += ` bulk pricing and delivery details.\n\n`;

    message += `Thank you 😊`;

    return message;

}