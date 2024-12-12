const CartItem = require('../models/cart_model');

// Create a new cart item
const createCartItem = async (cartData) => {
    try {
        const cartItem = new CartItem(cartData);
        return await cartItem.save();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Update cart item qunatity
const updateCartItem = async (id,quantity) => {
    try {
        const cartItem = await CartItem.findOne({ id })

        if (cartItem) {
            return await CartItem.updateOne({ id }, { quantity: quantity})
        }
    } catch (err) {
        throw new Error(error.message);
    }
}

// Get all cartItems for user
const getCartItemForUser = async (userId) => {
    try {
        return await CartItem.find({ userId });
    } catch (error) {
        throw new Error(error.message);
    }
};


// Delete a cart item by product id
const deleteCartItemByProdcutId = async (productId) => {
    try {

        return await CartItem.deleteOne({ productId })
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createCartItem,
    getCartItemForUser,
    deleteCartItemByProdcutId,
    updateCartItem
};
