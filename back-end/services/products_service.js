const Product = require('../models/products_model');

// Create a new product
const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    return await product.save();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get all products
const getAllProducts = async () => {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error(error.message);
  }
};

// Get a product by ID
const getProductById = async (id) => {
  try {
    return await Product.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Update a product by ID
const updateProductById = async (id, updateData) => {
    console.log(id,updateData,'id and upate')
  try {
    return await Product.updateOne({id},updateData);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Delete a product by ID
const deleteProductById = async (id) => {
  try {
    console.log(id,'id to delete')
    return await Product.deleteOne({id})
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
