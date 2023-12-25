import { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import TableModel from '../models/Table'
import Form from '../models/Form'

const Update = () => {
  const [data, setData] = useState([])
  const [user, setUser] = useState({})
  const [showForm, setShowForm] = useState(false)

  function changeHandler(userData) {
    setUser(userData)
    setShowForm(true)
  }

  async function fetchInfo() {
    const response = await fetch('http://localhost:3000/user/get_data', {
      method: 'GET',
    })
    const userData = await response.json()

    if (userData.success) {
      userData.data.sort((a, b) => {
        return b.satScore - a.satScore
      })
      setData(userData.data)
      console.log(userData.data)
    } else {
      console.log(userData.data)
      alert('Please try again')
    }
  }
  useEffect(() => {
    fetchInfo()
  }, [])
  return (
    <Box>
      <h1>Update Data</h1>
      {showForm && <Form data={user} />}
      <TableModel data={data} isUpdate={true} changeHandler={changeHandler} />
    </Box>
  )
}

export default Update
