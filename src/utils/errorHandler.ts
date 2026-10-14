// Create a custom error class
export class ProductError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProductError";
  }
}

// Handle different types of errors
export function handleError(error: unknown): void {
  if (error instanceof ProductError) {
    console.error("Product Error:", error.message);
  } else if (error instanceof Error) {
    console.error("Error:", error.message);
  } else {
    console.error("An unknown error occurred.");
  }
}