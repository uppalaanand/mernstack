// iv. payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
                          
//                           // TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
    let items = getCartItems();
  // 2. Apply discount if coupon provided
    let subtotal = getCartTotal();
    if (items.length === 0) {
        return { status: 'failed', message: 'Cart is empty' };
    }
    const discountResult = applyDiscount(subtotal, couponCode, items); 
  // 3. Validate payment method (card/upi/cod)
    items.forEach(item => {
        reduceStock(item.productId, item.quantity);
    });
  // 4. Process payment (simulate)
 // 5. Reduce stock for all items
  // 6. Clear cart
        clearCart();
  // 7. Generate order summary
        
  // Return order summary:
  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountResult.discount,
    total: discountResult.finalTotal,
    paymentMethod,
    status: 'success',
    message: 'payment successful'
  };
}
                          
export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    return ['cart', 'upi', 'cod'].includes(method);
}
                          
function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
}