const User = require('../models/User')

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    res.status(500).json({message: error.message })
  }
}


module.exports = {
  getUserById
}