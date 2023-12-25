import { useState } from 'react'
import Table from '../models/Table'
import { Box, TextField, FormControl, Button, Grid } from '@mui/material'

const GetRank = () => {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const [data, setData] = useState([])
  const [rank, setRank] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()

    if (name.trim() === '') setError(true)
    else {
      const response = await fetch(
        'https://backend-nt3s.onrender.com/user/get_rank',
        {
          method: 'POST',
          body: JSON.stringify({ name: name }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const userData = await response.json()

      if (userData.success) {
        console.log(userData.data)
        setRank(userData.data.rank)
        setData([userData.data.user])
      } else {
        alert(userData.message)
      }

      setError(false)
    }
  }
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <h1>Rank: {rank}</h1>
      <Table data={data} rank={rank} />
      <FormControl
        sx={{
          marginTop: '2rem',
          width: '50%',
        }}
      >
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={error}
          helperText={error ? 'Name is required' : ''}
        />
        <Button
          onClick={submitHandler}
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: '2rem' }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  )
}

export default GetRank
