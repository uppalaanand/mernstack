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

  if (!coupon) return { valid: false, message: 'Invalid coupon' };
  // 2. Check minimum amount requirement
  if(coupon.minAmount > cartTotal) {
    return "cartTotal is less than the minAmount";
  }
  // 3. Check category requirement (if any)
  if (coupon.category) {
    const hasCategory = cartItems.some(
      item => item.category === coupon.category
    );
    if (!hasCategory) {
      return { valid: false, message: 'Coupon not applicable to cart items' };
    }
  }
  // Return { valid: true/false, message: '...' }
  return { valid: true, message: 'Coupon applied successfully' };
}
                          
export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  let coupon = coupons[couponCode];
  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  }
  return coupon.value;
  // Return discount amount
}
                          
export function applyDiscount(cartTotal, couponCode, cartItems) {
    if (!couponCode) {
      return {
        originalTotal: cartTotal,
        discount: 0,
        finalTotal: cartTotal,
        message: 'No coupon applied'
      };
    }

    const validation = validateCoupon(couponCode, cartTotal, cartItems);
    if (!validation.valid) {
      return {
        originalTotal: cartTotal,
        discount: 0,
        finalTotal: cartTotal,
        message: validation.message
      };
    }

    const discount = calculateDiscount(couponCode, cartTotal);
    return {
      originalTotal: cartTotal,
      discount,
      finalTotal: cartTotal - discount,
      message: validation.message
    };
}