import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import { useState } from 'react';

function ButtonUI() {
	const [format, setFormat] = useState([])
	console.log('formats', format)
	const handleFormatChange = (_event, updateFormats) => {
		setFormat(updateFormats)
	}
	return (
		<Stack spacing={2}>
			<Stack spacing={2} direction='row'>
				<Button variant='text' href='https://google.com'>Click</Button>
				<Button variant='contained'>Click</Button>
				<Button variant='outlined'>Click</Button>
			</Stack>
			<Stack spacing={2} direction='row'>
				<Button variant="contained" color='primary'>Primary</Button>
				<Button variant="contained" color='secondary'>Secondary</Button>
				<Button variant="contained" color='error'>Error</Button>
				<Button variant="contained" color='warning'>Warning</Button>
				<Button variant="contained" color='info'>Info</Button>
				<Button variant="contained" color='success'>Success</Button>
			</Stack>
			<Stack display='block' spacing={2} direction={'row'}>
				<Button variant='contained' size='small'>small</Button>
				<Button variant='contained' size='medium'>medium</Button>
				<Button variant='contained' size='large'>large</Button>
			</Stack>
			<Stack display='block' spacing={2} direction={'row'}>
				<Button variant='contained' startIcon={<CheckIcon />} disableRipple onClick={() => alert('Hello')}>Start</Button>
				<Button variant='contained' endIcon={<CheckIcon />} disableElevation>End</Button>
				<IconButton aria-label='send' color='success' size='small'>
				  <CheckIcon/>
				</IconButton>
			</Stack>
			<Stack direction={'row'}>
				<ButtonGroup 
					variant='contained'
					orientation='vertical' 
					color='secondary'
					aria-label='Alignment button'
				>
					<Button onClick={()=>alert('Left Click')}>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
			<Stack direction={'row'}>
				<ToggleButtonGroup aria-label='text formatting' orientation='vertical' color='success' value={format} 
					size='sm'
					onChange={handleFormatChange}
					exclusive
				>
					<ToggleButton value='bold' aria-label='Bold'><FormatBoldIcon/></ToggleButton>
					<ToggleButton value='italic' aria-label='Italic'><FormatItalicIcon/></ToggleButton>
					<ToggleButton value='underlined' aria-label='Underlined'><FormatUnderlinedIcon/></ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	)
}

export default ButtonUI