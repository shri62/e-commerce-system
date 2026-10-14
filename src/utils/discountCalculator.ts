
// Calculate the discount amount in dollars
export function calculateDiscount(
  price: number,
  discountPercentage: number
): number {
  // Calculate how much money the discount saves
  const discountAmount = price * (discountPercentage / 100);

  // Return the discount amount rounded to 2 decimal places
  return Number(discountAmount.toFixed(2));
}
