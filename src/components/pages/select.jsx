import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

const Select = () => {
  const [country, setCountry] = useState([])
  console.log(country);

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        fullWidth
        onChange={e => setCountry(e.target.value)}
        SelectProps={{ multiple:true,}}
        size="small"
        color='secondary'
        helperText={country.length == 0 ? 'Please select the country' : '' }
        error={country.length == 0}
      >
          <MenuItem value='CH'>China</MenuItem>
          <MenuItem value='PH'>Philippines</MenuItem>
          <MenuItem value='US'>USA</MenuItem>
      </TextField>
    </Box>
  )
}

export default Select
