const validator = require('../utils/validator')

const inputDataValidator = async (req, res, next) => {
  let userRules = {
    name: 'required',
    address: 'required',
    city: 'required',
    country: 'required',
    pincode: 'required',
    satScore: 'required',
  }

  validator(req.body, userRules, {}, (error, status) => {
    if (!status) {
      return res.status(412).send({
        success: false,
        message: 'Authentication Failed',
        data: error,
      })
    } else next()
  }).catch((err) => console.log(err))
}

module.exports = { inputDataValidator }
