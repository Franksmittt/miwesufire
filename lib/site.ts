/** Replace with your WhatsApp business number: country code + number, no + or spaces. e.g. 27821234567 */
export const WHATSAPP_NUMBER = "27000000000";

export const WHATSAPP_ORDER_LINK = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
