import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from 'react'

function TextFieldsUI() {
  const [value, setValue] = useState('')
  return (
  	<Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label="Test" variant='outlined' color="success" />
        <TextField label="Test" variant='filled' />
        <TextField label="Test" variant='standard' />
      </Stack>
      
      <Stack direction='row' spacing={2}>
        <TextField label="Small Secondary" size='small' color='secondary' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField 
          label="Form Input" 
          size='small' 
          required 
          value={value} 
          onChange={e => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your password.'}
          color='secondary' />
        <TextField label="Form Input" size='small' color='secondary' helperText='Do not share your password to anyone.' />
        <TextField label="Password" type="password"  value='dsadw' disabled size='small' color='secondary' />
        <TextField label="Read Only" InputProps={{ readOnly: true}} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label="Amount" InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}/>
        <TextField label="Weight" InputProps={{
            endAdornment: <InputAdornment position='end'>Kg</InputAdornment>
        }}/>
      
      </Stack>
    </Stack>
  )
}

export default TextFieldsUI