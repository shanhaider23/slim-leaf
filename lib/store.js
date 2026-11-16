import content from "@/content/store.json";

export const store = content;
export const formatPrice = (amount) => `Rs. ${amount.toLocaleString("en-PK")}`;
export const savings = Math.max(0, store.product.compareAtPrice - store.product.price);
export const discountPercent = store.product.compareAtPrice > 0
  ? Math.round((savings / store.product.compareAtPrice) * 100)
  : 0;
export const whatsappLink = (message) =>
  `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`;
export const packagePrice = (offer) => offer.quantity === 1 ? store.product.price : offer.price;
export const packageOrderLink = (offer) => whatsappLink(
  `Hello! I want to order ${offer.quantity} ${offer.quantity === 1 ? "pack" : "packs"} of ${store.product.name} for ${formatPrice(packagePrice(offer))}. Please confirm my order and delivery details.`
);
export const orderLink = packageOrderLink({ quantity: 1 });
