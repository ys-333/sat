import React, { useState } from 'react'
import { TextField, Grid, Button, FormControl } from '@mui/material'

const InsertData = () => {
  const notify = () => toast('Data saved successfully')

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    country: '',
    pincode: '',
    satScore: '',
  })

  const [errors, setErrors] = useState({
    name: false,
    address: false,
    city: false,
    country: false,
    pincode: false,
    satScore: false,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    })
    console.log(formData)
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const newErrors = {
      name: formData.name === '',
      address: formData.address === '',
      city: formData.city === '',
      country: formData.country === '',
      pincode: formData.pincode === '',
      satScore: formData.satScore === '' || isNaN(formData.satScore),
    }

    setErrors(newErrors)

    if (!Object.values(newErrors).some((error) => error)) {
      // Perform form submission logic here

      setLoading(true)

      const response = await fetch(
        'https://backend-nt3s.onrender.com/user/insert_data',
        {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      const data = await response.json()

      console.log(data)

      console.log('Form submitted successfully!')
      setFormData({
        name: '',
        address: '',
        city: '',
        country: '',
        pincode: '',
        satScore: '',
      })
      setLoading(false)
    }
  }
  return (
    <FormControl
      sx={{
        marginTop: '2rem',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            required
            value={formData.name}
            onChange={handleChange('name')}
            error={errors.name}
            helperText={errors.name ? 'Name is required' : ''}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            required
            value={formData.address}
            onChange={handleChange('address')}
            error={errors.address}
            helperText={errors.address ? 'Address is required' : ''}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            required
            value={formData.city}
            onChange={handleChange('city')}
            error={errors.city}
            helperText={errors.city ? 'City is required' : ''}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Country"
            variant="outlined"
            required
            value={formData.country}
            onChange={handleChange('country')}
            error={errors.country}
            helperText={errors.country ? 'Country is required' : ''}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Pincode"
            variant="outlined"
            required
            value={formData.pincode}
            onChange={handleChange('pincode')}
            error={errors.pincode}
            helperText={errors.pincode ? 'Pincode is required' : ''}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="SAT Score"
            variant="outlined"
            required
            type="number"
            value={formData.satScore}
            onChange={handleChange('satScore')}
            error={errors.satScore}
            helperText={errors.satScore ? 'Sat Score is required' : ''}
            sx={{ marginBottom: 2 }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={submitHandler}
            variant="contained"
            color="primary"
            type="submit"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </Grid>
      </Grid>
    </FormControl>
  )
}

export default InsertData
