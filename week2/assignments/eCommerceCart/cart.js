// ii. cart.js - Shopping cart operations
import { getProductById, checkStock, reduceStock } from './product.js';
                          
let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
    try {
        // 1. Get product details
        let product = getProductById(productId);
        if(!product) return 'Product not found';
        // 2. Check stock availability
        if(!checkStock(productId, quantity)) {
            return 'no stock';
        }
        // 3. Check if product already in cart
        const existingItem = cartItems.find((item) => item.productId === productId);
        if(existingItem) {
            if(!checkStock(productId, existingItem.quantity + quantity)) {
                return 'Not enough stock';
            }
            existingItem.quantity += quantity;
        }else{
            cartItems.push({
                productId,
                quantity,
                price: product.price,
                name: product.name,
                category: product.category
            });
        }
        // 4. Return success/error message
        return "Success product added to cart";
    }catch(e) {
        return e;
    }
}
                          
export function removeFromCart(productId) {
    // Remove product from cart
    cartItems = cartItems.filter((pro) => pro.productId !== productId);
    return "Product removed from cart";
}
                          
export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    const item = cartItems.find(i => i.productId === productId);
    if (!item) return 'Item not found in cart';
    // Check stock before updating
    if(!checkStock(productId, newQuantity)) {
        return "Tnefficient";
    }
    item.quantity = newQuantity;
    return "Quantity Updated";
}
                          
export function getCartItems() {
    // Return all cart items with product details
    return cartItems;
}
                          
export function getCartTotal() {
    // Calculate total price of all items in cart
    let total = cartItems.reduce((total, item) => total+item.price * item.quantity,0);
    // Return total
    return total;
}                   

export function clearCart() {
    // Empty the cart
    cartItems = [];
}