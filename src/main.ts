import { Product } from "./models/Product.js";
import { fetchProducts } from "./services/apiService.js";
import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";
import { handleError } from "./utils/errorHandler.js";
// Fetch and display products
async function main(): Promise<void> {
  try {
    // Fetch real products from the API
    const products = await fetchProducts();

    // Display each product
    for (const item of products) {
      // Create a Product object from API data
      const product = new Product(
        item.id,
        item.title,
        item.description,
        item.category,
        item.price,
        item.discountPercentage,
        item.rating,
        item.stock,
        item.brand ?? "Unknown",
        item.thumbnail
      );

      console.log("\n-------------------------");

      // Display product information
      product.displayDetails();

      // Calculate the discount amount
      const discount = calculateDiscount(
        product.price,
        product.discountPercentage
      );

      // Calculate the price after discount
      const discountedPrice = product.getPriceWithDiscount();

      // Calculate tax on the discounted price
      const tax = calculateTax(discountedPrice, product.category);

      // Calculate the final price
      const finalPrice = discountedPrice + tax;

      console.log(`Discount Amount: $${discount.toFixed(2)}`);
      console.log(`Price After Discount: $${discountedPrice.toFixed(2)}`);
      console.log(`Tax Amount: $${tax.toFixed(2)}`);
            console.log(`Final Price: $${finalPrice.toFixed(2)}`);
    }
  } catch (error) {
    handleError(error);
  } finally {
    // This message appears whether the operation succeeds or fails
    console.log("\nProduct processing finished.");
  }
}

// Start the program
main();