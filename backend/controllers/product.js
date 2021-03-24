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


const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body)
    res.status(201).json(await product.save())
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}



const updateProduct = async (req, res) => {
  const { id: _id } = req.params
  const product = req.body

  try {
    const updatedProduct = await Product.findByIdAndUpdate(_id, { ...product, _id }, { new: true, useFindAndModify: false }) // TODO:: use upsert- in no product found create one
    res.json(updatedProduct)
  } catch (error) {
    res.status(500).json({ message: error.message }) // FIX number!
  }
}



const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id, { useFindAndModify: false })
    res.json({ message: 'Product Successfully Deleted!'})
  } catch (error) {
    res.status(500).json({ message: error.message }) // FIX number!
  }
} 



module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}