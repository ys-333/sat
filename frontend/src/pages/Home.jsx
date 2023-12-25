import React, { useState } from 'react'
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Box,
  AppBar,
  Toolbar,
  Container,
  Typography,
} from '@mui/material'

import { Outlet, useNavigate } from 'react-router-dom'

const Home = () => {
  const [selectedValue, setSelectedValue] = useState('')
  const navigate = useNavigate()

  const handleChange = (event) => {
    let field = event.target.value
    if (field === 'insertData') {
      navigate('/insert_data')
    } else if (field === 'viewAllData') {
      navigate('/get_data')
    } else if (field === 'getRank') {
      navigate('/get_rank')
    } else if (field === 'updateScore') {
      navigate('/update_data')
    } else if (field === 'deleteUser') {
      navigate('/delete_user')
    }
  }

  return (
    <Box
      sx={{
        width: '80%',
        margin: '0 auto',
        marginTop: '2rem',
      }}
    >
      <AppBar position="static" sx={{ marginBottom: '4rem' }}>
        <Container>
          <Toolbar sx={{ marginLeft: '42%' }}>
            <Typography variant="h6" component="div">
              SAT INFO
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <FormControl fullWidth>
        <InputLabel id="dropdown-label">Select an option</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedValue}
          label="Select an option"
          onChange={handleChange}
        >
          <MenuItem value="insertData">Insert Data</MenuItem>
          <MenuItem value="viewAllData">View All Data</MenuItem>
          <MenuItem value="getRank">Get Rank</MenuItem>
          <MenuItem value="updateScore">Update Score</MenuItem>
          <MenuItem value="deleteUser">Delete User</MenuItem>
        </Select>
      </FormControl>
      <Outlet />
    </Box>
  )
}

export default Home
