// iii. discount.js - Coupon and discount logic
//                           // Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};
                          
//                           // TODO: Implement these functions
export function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  let coupon = coupons[couponCode];

  if(!coupon) {
    return "Coupan Not Exist";
  }
  // 2. Check minimum amount requirement
  if(coupons[couponCode].minAmount > cartTotal) {
    return "cartTotal is less than the minAmount";
  }
  // 3. Check category requirement (if any)

  // Return { valid: true/false, message: '...' }
  return true;
}
                          
export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  let coupon = coupons[couponCode];
  return cartTotal - coupons[couponCode].value;
  // Return discount amount
}
                          
export function applyDiscount(cartTotal, couponCode, cartItems) {
    try {
        // 1. Validate coupon
        validateCoupon(couponCode,cartTotal, cartItems);
        // 2. If valid, calculate discount
        calculateDiscount(couponCode, cartTotal);
        // 3. Return final amount and discount details
        // Return { 
        //   originalTotal: ..., 
        //   discount: ..., 
        //   finalTotal: ...,
        //   message: '...'
        // }
    }catch(e) {
        return e;
    }
}