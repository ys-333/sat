import React, { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const ViewData = () => {
  const [data, setData] = useState([])

  async function fetchData() {
    const response = await fetch(
      'https://backend-nt3s.onrender.com/user/get_data',
      {
        method: 'GET',
      },
    )
    const userData = await response.json()

    if (userData.success) {
      userData.data.sort((a, b) => {
        return b.satScore - a.satScore
      })
      setData(userData.data)
    } else {
      console.log(userData.data)
      alert('Please try again')
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: '2rem', marginBottom: '4rem' }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell>SAT Score</TableCell>
            <TableCell>Passed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.pincode}</TableCell>
              <TableCell>{row.satScore}</TableCell>
              <TableCell>{row.passed ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ViewData
