const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
  } = require('../services/products_service');
  const { v4: uuidv4 } = require('uuid');

  
  // Create a new product
  const createProductController = async (req, res) => {
    try {
        req.body.id = uuidv4()
      const product = await createProduct(req.body);
      res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
      res.status(500).json({ message: 'Error creating product', error: error.message });
    }
  };
  
  // Get all products
  const getAllProductsController = async (req, res) => {
    try {
      const products = await getAllProducts();
      res.status(200).json({ products });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
  };
  
  // Get a product by ID
  const getProductByIdController = async (req, res) => {
    try {
      const product = await getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
  };
  
  // Update a product by ID
  const updateProductByIdController = async (req, res) => {
    try {
        console.log(req.body,'req in update ')
      const product = await updateProductById(req.params.id, req.body);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error updating product', error: error.message });
    }
  };
  
  // Delete a product by ID
  const deleteProductByIdController = async (req, res) => {
    try {
      const product = await deleteProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting product', error: error.message });
    }
  };
  
  module.exports = {
    createProductController,
    getAllProductsController,
    getProductByIdController,
    updateProductByIdController,
    deleteProductByIdController,
  };
  