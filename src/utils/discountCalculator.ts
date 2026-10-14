
/**
 * Calculates the dollar amount saved on a product.
 * Example: $100 with a 10% discount = $10 saved.
 */
export function calculateDiscount(
  price: number,
  discountPercentage: number
): number {
  // Calculate the discount amount.
  const discountAmount = price * (discountPercentage / 100);

  // Round the result to two decimal places.
  return Number(discountAmount.toFixed(2));
}
