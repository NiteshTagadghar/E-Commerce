const {
    createCartItem,
    getCartItemForUser,
    deleteCartItemByProdcutId,
    updateCartItem,
} = require('../services/cart_service');
const { v4: uuidv4 } = require('uuid');




// Create a new cart item
const createCartItemController = async (req, res) => {
    try {
        const id = uuidv4()
        req.body.id = id
        const cartItem = await createCartItem(req.body);
        res.status(201).json({ message: 'Cart item created successfully', cartItem });
    } catch (error) {
        res.status(500).json({ message: 'Error creating cart item', error: error.message });
    }
};

// Update cart item quantity
const updateItemQuantity = async(req,res) =>{
    try{
        const cartItem = await updateCartItem(req.params.id,req.params.quantity)
        res.status(201).json({ message: 'Item quantity update successfully', cartItem });
    }catch(err){
        res.status(500).json({ message: 'Error creating cart item', error: error.message });

    }
}

// Get all cart item of user
const getCartItemForUserController = async (req, res) => {
    try {
        console.log(req.params.userId)
        const cartItems = await getCartItemForUser(req.params.userId);
        res.status(200).json({ cartItems });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cartItems', error: error.message });
    }
};

// Delete a cart item by userId and productId
const deletCartItemController = async (req, res) => {
    try {
        const cartItem = await deleteCartItemByProdcutId(req.params.id);
        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.status(200).json({ message: 'Cart item deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cart item', error: error.message });
    }
};

module.exports = {
    createCartItemController,
    getCartItemForUserController,
    deletCartItemController,
    updateItemQuantity
};
