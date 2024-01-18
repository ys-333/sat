const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./config/db')
require('dotenv').config()

// routes import
const userRoutes = require('./routes/User')

// database connection
connectDb()

/*********MIDDLEWARE*************/

app.use(express.json())
app.use(cors())

/********************************/

/***********ROUTES middleware****************/
app.get('/', async (req, res) => {
  res.send('hello world')
})
app.use('/user', userRoutes)

/********************************/

// console.log(process.argv)

const PORT = process.argv[2] || 3000
app.listen(PORT, () => {
  console.log(`We are live on ${PORT}`)
})
