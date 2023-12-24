const Router = require('express').Router()
const { createData } = require('../controllers/User')

// create user data
Router.post('/input_data', createData)

module.exports = Router
