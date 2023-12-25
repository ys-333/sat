const Router = require('express').Router()
const { inputDataValidator } = require('../middleware/validator-middleware')
const {
  createData,
  getAllData,
  getRank,
  updateUser,
  deleteUser,
} = require('../controllers/User')

// create user data
Router.post('/insert_data', inputDataValidator, createData)
// get all data
Router.get('/get_data', getAllData)
// getRank
Router.post('/get_rank', getRank)
// update user
Router.patch('/update_data', updateUser)
// delete user
Router.delete('/delete_user', deleteUser)

module.exports = Router
