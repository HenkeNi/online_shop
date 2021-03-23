require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

// Import Routes
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection

db.on('error', (error) => console.log(error)) // problem connecting...
db.once('open', () => console.log('Successfully connected to DB'))

app.use(express.json()) 

app.use('/api/v1/products', productRoutes)
app.use('/api/v1/users', userRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))