const mongoose = require('mongoose')
require('dotenv').config()

const USERNAME = process.env.USERNAME
const PASSWORD = process.env.PASSWORD

const connectDb = async () => {
  const dbConnect = function () {
    // Replace the '<YOUR_CONNECTION_STRING>' with the actual connection string from MongoDB Atlas
    const connectionString = `mongodb+srv://yashwantsing333:${PASSWORD}@cluster0.2myz7jt.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(connectionString, {})

    const db = mongoose.connection

    db.on('error', console.error.bind('Connection error:'))
    db.once('open', () => {
      console.log('Connected to MongoDB Atlas')
      // Your code here
    })
  }
  dbConnect()
}

module.exports = connectDb
