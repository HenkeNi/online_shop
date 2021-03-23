const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }, 
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 99999999
  },
  stock: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true
  },
  published: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String
  },
  SubCategory: {
    type: String
  }
})

module.exports = mongoose.model('Product', productSchema)