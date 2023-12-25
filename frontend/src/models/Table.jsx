import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'

const TableModel = ({ data, rank, isUpdate = false, changeHandler }) => {
  // const [data, setIsEdit] = useState(false)
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
            {isUpdate && <TableCell>Update</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{isUpdate ? index + 1 : rank}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell>{row.country}</TableCell>
              <TableCell>{row.pincode}</TableCell>
              <TableCell>{row.satScore}</TableCell>
              <TableCell>{row.passed ? 'Yes' : 'No'}</TableCell>
              {isUpdate && (
                <TableCell
                  onClick={() => changeHandler(row)}
                  sx={{ cursor: 'pointer' }}
                >
                  Edit
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableModel
