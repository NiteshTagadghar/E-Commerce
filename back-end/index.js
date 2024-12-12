require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { createUserController, getUserController } = require('./controllers/user_controller');
const { createProductController, getAllProductsController, getProductByIdController, updateProductByIdController, deleteProductByIdController } = require('./controllers/product_controller');
const { createCartItemController, getCartItemForUserController, updateItemQuantity } = require('./controllers/cart_controller');
const { deleteCartItemByProdcutId } = require('./services/cart_service');

const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


// User Routes
app.post('/user', createUserController);
app.get('/user', getUserController);

// Product Routes

// Product Routes
app.post('/products', createProductController); // Create product
app.get('/products', getAllProductsController); // Get all products
app.get('/products/:id', getProductByIdController); // Get product by ID
app.patch('/products/:id', updateProductByIdController); // Update product by ID
app.delete('/products/:id', deleteProductByIdController); // Delete product by ID

// CartItem Routes
app.post('/cartItem',createCartItemController) // Create cart item 
app.get('/cartItem/:userId',getCartItemForUserController) // Get cart items from userId and productId
app.patch('/cartItem/:id/:quantity',updateItemQuantity) // Updates the quantity
app.delete('/cartItem/:id',deleteCartItemByProdcutId) // Delete cart items using userId and productId
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
