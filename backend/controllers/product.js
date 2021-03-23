const Product = require('../models/Product')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(500).json({message: "Server Error"})
  }
}

module.exports = {
  getAllProducts,
  getProductById
}