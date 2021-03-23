const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String, 
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
})

module.exports = mongoose.model('User', userSchema)