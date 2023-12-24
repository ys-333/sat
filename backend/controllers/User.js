const createData = async (req, res) => {
  const { name, address, city, country, pincode, satScore } = req.body
  console.log(name, address, city, country, pincode, satScore)
}

module.exports = { createData }
