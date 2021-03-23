require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection

db.on('error', (error) => console.log(error)) // problem connecting...
db.once('open', () => console.log('Successfully connected to DB'))


app.use(express.json()) 


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))