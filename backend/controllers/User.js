const User = require('../models/User')
const _ = require('lodash')

const createData = async (req, res) => {
  try {
    const { name, address, city, country, pincode, satScore } = req.body
    let userData = { name, address, city, country, pincode, satScore }

    let user = new User(userData)

    //   we check user had passed the exam or not
    satScoreFloat = parseFloat(satScore)
    if (satScoreFloat > 30) user.passed = true
    console.log(user)

    const response = await user.save()

    if (!response) {
      return res.status(501).send({
        success: false,
        message: 'Something went wrong!',
        data: response,
      })
    }

    return res.status(201).send({
      success: true,
      message: 'User successfully created!',
      data: user,
    })
  } catch (err) {
    res
      .status(501)
      .send({ success: false, message: 'Something went wrong', data: err })
  }
}

const getAllData = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).send({
      success: true,
      message: 'User Successfully fetched',
      data: users,
    })
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong!',
      data: err,
    })
  }
}

const getRank = async (req, res) => {
  try {
    const { name } = req.body
    const users = await User.find()
    // sort the user
    users.sort((a, b) => a.satScore - b.satScore)

    let rank = -1

    let user = users.find((el, index) => {
      return el.name === name
    })

    if (user) {
      rank = users.indexOf(user) + 1
    } else
      return res
        .status(404)
        .send({ success: true, message: 'User not found', data: user })

    return res.status(201).send({
      success: true,
      message: 'User successfully created!',
      data: { user, rank },
    })
  } catch (err) {
    return res.status(500).send({
      success: false,
      message: 'Something went wrong!',
      data: err,
    })
  }
}

const updateUser = async (req, res) => {
  try {
    const tempUser = req.body
    console.log(tempUser)
    const user = await User.find({ name: tempUser.name })

    const updatedUser = await User.findByIdAndUpdate(
      { _id: user[0]._id },
      tempUser,
      {
        new: true,
      },
    )
    if (!updatedUser) {
      return res.status(500).send({
        success: false,
        message: 'Something went wrong,Failed to update',
        data: updatedUser,
      })
    }

    return res.status(200).send({
      success: true,
      message: 'Updated Successfully!!',
      data: updatedUser,
    })
  } catch (err) {
    res.status(500).send({
      success: true,
      message: 'Something went wrong!!',
      data: err,
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { name } = req.body
    const user = await User.find({ name: name })

    if (user.length === 0)
      return res
        .status(404)
        .send({ success: false, message: 'User not found', data: user })

    const response = await User.findByIdAndDelete({ _id: user[0]._id })

    const users = await User.find()

    return res.status(200).send({
      success: true,
      message: 'User succesfully deleted',
      data: users,
    })
  } catch (err) {
    return res
      .status(500)
      .send({ success: false, message: 'Something went wrong!!', data: err })
  }
}

module.exports = { createData, getAllData, getRank, updateUser, deleteUser }
