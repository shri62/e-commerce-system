
// Define the structure of a product returned by the API
export interface ProductApiData {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
}

// Fetch products from the DummyJSON API
export async function fetchProducts(): Promise<ProductApiData[]> {
  try {
    // Send a request to get products
    const response = await fetch("https://dummyjson.com/products");

    // Check whether the request was successful
    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    // Convert the API response into JSON data
    const data: { products: ProductApiData[] } = await response.json();

    // Return the list of products
    return data.products;
  } catch (error) {
    // Show the error if fetching products fails
    console.error("Error fetching products:", error);

    // Pass the error to the code that called this function
    throw error;
  }
}
