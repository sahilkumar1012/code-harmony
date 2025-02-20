import React from "react";

const phoneNumber = "918168797638"; // Replace with your WhatsApp number
const message = "Hello, I need some help!"; // Default message
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export { whatsappLink };
