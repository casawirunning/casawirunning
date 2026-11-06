import { CartItem, CustomerInfo, Language } from '../types';

export function cleanWhatsAppNumber(rawPhone: string): string {
  // Remove spaces, dashes, parentheses, plus signs
  const cleaned = rawPhone.replace(/[\s\-\(\)\+]/g, '');
  // If Moroccan local format 06... or 07... convert to 2126... / 2127...
  if (cleaned.startsWith('0') && cleaned.length === 10) {
    return '212' + cleaned.slice(1);
  }
  return cleaned;
}

export function generateWhatsAppMessage(
  items: CartItem[],
  customer: CustomerInfo,
  subtotalMAD: number,
  shippingMAD: number,
  lang: Language,
  storeName: string
): string {
  const dateStr = new Date().toLocaleDateString('fr-MA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const grandTotalMAD = subtotalMAD + shippingMAD;

  if (lang === 'ar') {
    let msg = `🇲🇦 *طلب جديد من متجر ${storeName}*\n`;
    msg += `📅 التاريخ: ${dateStr}\n`;
    msg += `----------------------------------------\n\n`;
    msg += `👤 *معلومات الزبون والتوصيل:*\n`;
    msg += `• الاسم الكامل: ${customer.fullName}\n`;
    msg += `• الهاتف: ${customer.phone}\n`;
    msg += `• المدينة: ${customer.city}\n`;
    msg += `• العنوان والحي: ${customer.address}\n`;
    if (customer.tiktokOrIgHandle) {
      msg += `• حساب تيك توك / إنستغرام: ${customer.tiktokOrIgHandle}\n`;
    }
    if (customer.deliveryNotes) {
      msg += `• ملاحظات التوصيل: ${customer.deliveryNotes}\n`;
    }
    msg += `\n🛍️ *تفاصيل الطلب:*\n`;
    items.forEach((item, idx) => {
      const colorLabel = item.product.colors.find(c => c.hex === item.selectedColor)?.name.ar || item.selectedColor;
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   - المقاس: ${item.selectedSize}\n`;
      msg += `   - اللون: ${colorLabel}\n`;
      msg += `   - الكمية: ${item.quantity}\n`;
      msg += `   - السعر: ${item.product.priceMAD * item.quantity} درهم\n`;
    });
    msg += `\n----------------------------------------\n`;
    msg += `💵 *المجموع الفرعي:* ${subtotalMAD.toLocaleString()} درهم\n`;
    msg += `🚚 *مصاريف التوصيل (${customer.city}):* ${shippingMAD} درهم\n`;
    msg += `💰 *المجموع الإجمالي الواجب أداؤه:* *${grandTotalMAD.toLocaleString()} درهم مغربي (MAD)*\n`;
    msg += `📦 *طريقة الدفع:* الدفع نقداً عند الاستلام (Cash on Delivery)\n`;
    msg += `----------------------------------------\n`;
    msg += `يرجى تأكيد الطلب للبدء في تجهيز الطرد للتوصيل. شكراً لك! 🙏`;
    return msg;
  }

  if (lang === 'en') {
    let msg = `🇲🇦 *NEW ORDER — ${storeName}*\n`;
    msg += `📅 Date: ${dateStr}\n`;
    msg += `----------------------------------------\n\n`;
    msg += `👤 *CUSTOMER & SHIPPING DETAILS:*\n`;
    msg += `• Full Name: ${customer.fullName}\n`;
    msg += `• Phone: ${customer.phone}\n`;
    msg += `• Delivery City: ${customer.city}\n`;
    msg += `• Address / District: ${customer.address}\n`;
    if (customer.tiktokOrIgHandle) {
      msg += `• TikTok / IG: ${customer.tiktokOrIgHandle}\n`;
    }
    if (customer.deliveryNotes) {
      msg += `• Delivery Notes: ${customer.deliveryNotes}\n`;
    }
    msg += `\n🛍️ *ORDERED ITEMS:*\n`;
    items.forEach((item, idx) => {
      const colorLabel = item.product.colors.find(c => c.hex === item.selectedColor)?.name.en || item.selectedColor;
      msg += `${idx + 1}. *${item.product.name}*\n`;
      msg += `   - Size: ${item.selectedSize}\n`;
      msg += `   - Color: ${colorLabel}\n`;
      msg += `   - Qty: ${item.quantity}\n`;
      msg += `   - Price: ${item.product.priceMAD * item.quantity} MAD\n`;
    });
    msg += `\n----------------------------------------\n`;
    msg += `💵 *Subtotal:* ${subtotalMAD.toLocaleString()} MAD\n`;
    msg += `🚚 *Shipping (${customer.city}):* ${shippingMAD} MAD\n`;
    msg += `💰 *GRAND TOTAL TO PAY:* *${grandTotalMAD.toLocaleString()} MAD*\n`;
    msg += `📦 *Payment Mode:* Cash on Delivery (COD)\n`;
    msg += `----------------------------------------\n`;
    msg += `Please confirm this order to dispatch the parcel. Thank you! 🙏`;
    return msg;
  }

  // Default: French (widely used in Moroccan retail & WhatsApp commerce)
  let msg = `🇲🇦 *NOUVELLE COMMANDE — ${storeName}*\n`;
  msg += `📅 Date: ${dateStr}\n`;
  msg += `----------------------------------------\n\n`;
  msg += `👤 *INFORMATIONS CLIENT & LIVRAISON:*\n`;
  msg += `• Nom Complet: ${customer.fullName}\n`;
  msg += `• Téléphone: ${customer.phone}\n`;
  msg += `• Ville de livraison: ${customer.city}\n`;
  msg += `• Adresse & Quartier: ${customer.address}\n`;
  if (customer.tiktokOrIgHandle) {
    msg += `• TikTok / Instagram: ${customer.tiktokOrIgHandle}\n`;
  }
  if (customer.deliveryNotes) {
    msg += `• Instructions: ${customer.deliveryNotes}\n`;
  }
  msg += `\n🛍️ *ARTICLES COMMANDÉS:*\n`;
  items.forEach((item, idx) => {
    const colorLabel = item.product.colors.find(c => c.hex === item.selectedColor)?.name.fr || item.selectedColor;
    msg += `${idx + 1}. *${item.product.name}*\n`;
    msg += `   - Taille: ${item.selectedSize}\n`;
    msg += `   - Couleur: ${colorLabel}\n`;
    msg += `   - Quantité: ${item.quantity}\n`;
    msg += `   - Prix: ${item.product.priceMAD * item.quantity} MAD\n`;
  });
  msg += `\n----------------------------------------\n`;
  msg += `💵 *Sous-total:* ${subtotalMAD.toLocaleString()} MAD\n`;
  msg += `🚚 *Frais de livraison (${customer.city}):* ${shippingMAD} MAD\n`;
  msg += `💰 *TOTAL À PAYER:* *${grandTotalMAD.toLocaleString()} MAD*\n`;
  msg += `📦 *Mode de Paiement:* Paiement Cash à la Livraison (COD)\n`;
  msg += `----------------------------------------\n`;
  msg += `Merci de confirmer la commande pour préparer l'expédition du colis. 🙏`;
  return msg;
}

export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = cleanWhatsAppNumber(phone);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encoded}`;
}
