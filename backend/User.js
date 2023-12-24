const mongoose = require('mongoose')
const { Schema, Model } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  satScore: {
    type: Number,
    required: true,
  },
  passed: {
    type: Boolean,
    default: false,
  },
})

const User = model('User', userSchema)

module.exports = User
