const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./config/db')
require('dotenv').config()

// database connection
connectDb()

/*********MIDDLEWARE*************/

app.use(express.json())
app.use(cors())

/********************************/

/***********ROUTES****************/
app.get('/', async (req, res) => {
  res.send('hello world')
})
/********************************/

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`We are live on ${PORT}`)
})
