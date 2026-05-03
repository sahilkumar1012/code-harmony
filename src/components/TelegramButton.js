import React from "react";

const telegramUsername = "codeharmonydev"; // Replace with your Telegram username
const message = "Hello, I need some help!"; // Default message
const telegramLink = `https://t.me/${telegramUsername}?start=${encodeURIComponent(message)}`;

export { telegramLink };
