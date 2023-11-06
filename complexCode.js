/**
 * Filename: complexCode.js
 * Description: This code is a complex JavaScript program that simulates a virtual marketplace.
 * It includes features such as user registration, products listing, shopping cart functionality,
 * product search, and user authentication.
 */

// Define classes for User, Product, and ShoppingCart
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  login() {
    // Perform user login logic
    console.log("User logged in successfully");
  }

  logout() {
    // Perform user logout logic
    console.log("User logged out successfully");
  }
}

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Product: ${this.name} (${this.id}), Price: $${this.price}`);
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  
  addItem(product) {
    this.items.push(product);
  }

  removeItem(product) {
    const index = this.items.findIndex(item => item.id === product.id);
  
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  display() {
    console.log("Shopping Cart Contents:");
    this.items.forEach(item => item.display());
    console.log(`Total: $${this.getTotal()}`);
  }
}

// Create some example users and products
const user1 = new User("John Doe", "johndoe@example.com", "password123");
const user2 = new User("Jane Smith", "janesmith@example.com", "qwerty456");

const product1 = new Product(1, "Nike Shoes", 99.99);
const product2 = new Product(2, "Apple iPhone", 799.99);
const product3 = new Product(3, "Samsung TV", 599.99);

// Perform user registration
const registeredUsers = [];
registeredUsers.push(user1);
registeredUsers.push(user2);

// Simulate login and add products to shopping cart
if (registeredUsers.some(user => user.email === "johndoe@example.com")) {
  const shoppingCart = new ShoppingCart();
  
  shoppingCart.addItem(product1);
  shoppingCart.addItem(product2);
  
  shoppingCart.display();
}

user1.logout(); // Simulate logout

// Perform product search
const products = [product1, product2, product3];
const query = "nike";
const searchResults = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

console.log("Search Results:");
searchResults.forEach(product => product.display());