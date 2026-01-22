// ii. cart.js - Shopping cart operations
import { getProductById, checkStock, reduceStock } from './product.js';
                          
let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
    try {
        // 1. Get product details
        let product = getProductById(productId);
        // 2. Check stock availability
        let checkAvial = checkStock(quantity);
        // 3. Check if product already in cart
        cartItems.map((pro) => {
            //    - If yes, update quantity
            if(pro.productId === product.productId) {
                reduceStock(quantity);
            }else{          //    - If no, add new item
                cartItems.push(product);
            }
        })
        // 4. Return success/error message
        return "Success product added to cart";
    }catch(e) {
        return e;
    }
}
                          
export function removeFromCart(productId) {
    // Remove product from cart
    cartItems = cartItems.filter((pro) => pro.productId !== productId);
}
                          
export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    cartItems.map((pro) => {
        if(pro.productId === productId && checkStock(productId)) {
            pro.quantity = newQuantity;
        }
    })
    // Check stock before updating
}
                          
export function getCartItems() {
    // Return all cart items with product details
    return cartItems;
}
                          
export function getCartTotal() {
    // Calculate total price of all items in cart
    let total = cartItems.reduce((acc, pro) => acc+pro.price,0);
    // Return total
    return total;
}                   

export function clearCart() {
    // Empty the cart
    cartItems = [];
}