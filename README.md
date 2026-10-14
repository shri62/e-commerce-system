# E-commerce Product Management System

## 1. Project Overview

This project uses TypeScript to manage product information from an API. It calculates discounts, taxes, and final prices. It also handles errors when something goes wrong.

## 2. API Research

**API Name:** DummyJSON Products API

**API URL:** https://dummyjson.com/products

The API provides product information, including:
- Product ID
- Product name
- Description
- Category
- Price
- Discount percentage
- Rating
- Stock
- Brand
- Product image

## 3. Project Plan

I will complete the project in the following steps:

1. Create a `Product` class to store product information.
2. Add a `displayDetails()` method to display product details.
3. Add a `getPriceWithDiscount()` method to calculate the price after a discount.
4. Create a `calculateDiscount()` function to return the discount amount in dollars.
5. Create a `calculateTax()` function to return the tax amount in dollars.
6. Apply a 3% tax rate to grocery products and a 4.75% tax rate to all other products.
7. Create an API service to get product information from DummyJSON.
8. Use Promises and async/await to handle API requests.
9. Create a custom error class to handle errors.
10. Use try/catch/finally to manage errors and complete the application safely.
11. Display product details, discounts, taxes, and final prices.
12. Compile, run, and test the application.
13. Upload the project to GitHub and write a project reflection.

## 4. Technologies Used

- TypeScript
- JavaScript
- Node.js
- npm
- DummyJSON Products API
- Git and GitHub

## 5. Tax Calculation Rules

The `calculateTax()` function will return the tax amount in dollars.

- Grocery products: 3% tax
- All other products: 4.75% tax

**Examples:**
- A $100 grocery product has $3 tax.
- A $100 non-grocery product has $4.75 tax.
- A $200 non-grocery product has $9.50 tax.

## 6. Expected Result

The application will retrieve product information from the API, calculate discounts and taxes, display final prices, and handle errors properly.

## 7. Conclusion

This project will help me practice TypeScript, classes, functions, object-oriented programming, API requests, Promises, async/await, and error handling.