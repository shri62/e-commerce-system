
// Calculate the tax amount in dollars
export function calculateTax(
  price: number,
  category: string
): number {
  // Use 3% tax for groceries and 4.75% for other products
  const taxRate =
    category.toLowerCase() === "groceries" ? 0.03 : 0.0475;

  // Calculate the tax amount
  const taxAmount = price * taxRate;

  // Return the tax amount rounded to 2 decimal places
  return Number(taxAmount.toFixed(2));
}
