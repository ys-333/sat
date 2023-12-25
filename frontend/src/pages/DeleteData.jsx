import { useState } from 'react'

import { Box, TextField, FormControl, Button } from '@mui/material'

const DeleteData = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [error, setError] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault()

    if (name.trim() === '') setError(true)
    else {
      const response = await fetch(
        'https://backend-nt3s.onrender.com/user/delete_user',
        {
          method: 'DELETE',
          body: JSON.stringify({ name: name }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      const userData = await response.json()

      if (userData.success) {
        setIsDeleting(true)
        console.log(userData.data)
        setUser(userData.data)
      } else {
        alert(userData.message)
      }

      setTimeout(() => {
        setIsDeleting(false)
      }, 1000)

      setError(false)
    }
  }
  return (
    <Box sx={{ marginTop: '2rem' }}>
      <h1 style={{ color: 'red' }}>Delete Records</h1>
      {isDeleting && <h1>{`${user.name} is successfully deleted`}</h1>}
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

export default DeleteData
