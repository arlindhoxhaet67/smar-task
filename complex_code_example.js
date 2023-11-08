// filename: complex_code_example.js

/**
 * This code showcases a complex JavaScript class for managing a shopping cart.
 * The ShoppingCart class enables adding and removing items, calculating the total
 * price, applying discounts, and generating an invoice.
 *
 * The class utilizes advanced JavaScript concepts such as classes, inheritance,
 * data encapsulation, error handling, and modularization.
 */

class ShoppingCart {
  constructor() {
    this.items = [];
    this.discounts = [];
  }

  addItem(item) {
    if (!item || typeof item !== 'object') {
      throw new Error('Invalid item provided.');
    }

    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.findIndex(i => i === item);

    if (index !== -1) {
      this.items.splice(index, 1);
    } else {
      throw new Error('Item not found in the shopping cart.');
    }
  }

  calculateTotalPrice() {
    let totalPrice = 0;

    this.items.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }

  applyDiscount(discount) {
    if (!discount || typeof discount !== 'object') {
      throw new Error('Invalid discount provided.');
    }

    this.discounts.push(discount);
  }

  calculateDiscountedPrice() {
    let discountedPrice = this.calculateTotalPrice();

    this.discounts.forEach(discount => {
      if (typeof discount.apply === 'function') {
        discountedPrice = discount.apply(discountedPrice);
      } else {
        throw new Error('Invalid discount apply function defined.');
      }
    });

    return discountedPrice;
  }

  generateInvoice() {
    const invoice = `
      === Invoice ===
      Items: ${this.items.length}
      Total Price: $${this.calculateTotalPrice().toFixed(2)}
      Discounted Price: $${this.calculateDiscountedPrice().toFixed(2)}
      Discounts Applied: ${this.discounts.length}
    `;

    console.log(invoice);
  }
}

// Example Usage:

class BuyOneGetOneFreeDiscount {
  apply(totalPrice) {
    const numberOfItems = Math.floor(totalPrice / 10);
    const discountAmount = numberOfItems * 10;

    return totalPrice - discountAmount;
  }
}

const cart = new ShoppingCart();

const item1 = { name: 'Widget 1', price: 50 };
const item2 = { name: 'Widget 2', price: 30 };
const item3 = { name: 'Widget 3', price: 20 };

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

cart.applyDiscount(new BuyOneGetOneFreeDiscount());

cart.generateInvoice();
