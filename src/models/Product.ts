
// Create the Product class
export class Product {
  // Properties to store product information
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

  // Constructor sets the product information when an object is created
  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    thumbnail: string
  ) {
    // Store the received values in the object
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.thumbnail = thumbnail;
  }

  // Display the product information
  displayDetails(): void {
    console.log(`Product ID: ${this.id}`);
    console.log(`Name: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Rating: ${this.rating}`);
    console.log(`Stock: ${this.stock}`);
    console.log(`Brand: ${this.brand}`);
  }

  // Calculate and return the price after the discount
  getPriceWithDiscount(): number {
    // Calculate the discount amount in dollars
    const discountAmount =
      this.price * (this.discountPercentage / 100);

    // Subtract the discount and return the price rounded to 2 decimals
    return Number((this.price - discountAmount).toFixed(2));
  }
}
