
// Create a custom error class for product-related errors
export class ProductError extends Error {
  constructor(message: string) {
    super(message);

    // Set the error name
    this.name = "ProductError";
  }
}

// Handle errors in one place
export function handleError(error: unknown): void {
  // Check if the error is a normal Error object
  if (error instanceof Error) {
    console.error("Error:", error.message);
  } else {
    // Handle unexpected errors
    console.error("An unknown error occurred.");
  }
}
