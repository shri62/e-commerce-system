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





## Reflection

In this project, I created an E-commerce Product Management System using TypeScript. I used TypeScript features such as classes, objects, functions, and types. I created a `Product` class to store product information, such as name, price, category, and stock. I used object-oriented programming (OOP) to organize my code and make it easier to understand. I also created separate files for discount calculation, tax calculation, API requests, and error handling.

One challenge I faced was understanding TypeScript syntax and fixing errors in my code. Sometimes, I had problems with curly braces and the `try`, `catch`, and `finally` blocks. I solved these problems by checking my code carefully and correcting the errors step by step. I used the TypeScript compiler to check my code and make sure it worked correctly.

Another challenge was working with data from an API. I used `async` and `await` to get product information from the DummyJSON API. I used Promises to handle asynchronous operations. I also used `try` and `catch` to handle errors when something went wrong. I created a custom error class called `ProductError` and a function called `handleError()` to display error messages.

I also created functions to calculate product discounts and taxes. The program displays product details, discount amounts, tax amounts, and final prices. I tested the application to make sure it worked as expected. I used Git and GitHub to save my work and upload my code.

This project helped me improve my TypeScript, OOP, API, and error-handling skills. I learned how to organize code into separate files and how to find and fix errors. I feel more confident working on TypeScript projects and want to continue learning and improving my coding skills.