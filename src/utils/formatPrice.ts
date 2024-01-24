export function formatPrice(priceNumber: number) {
  const formattedPrice = priceNumber.toFixed(2).replace('.', ',');
  return `R$ ${formattedPrice}`;
}
