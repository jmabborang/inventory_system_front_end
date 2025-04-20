import { Typography } from "@mui/material"

function Typograph() {
	return (
		<>
			<Typography variant="h1">H1 Heading</Typography>
			<Typography variant="h2">H2 Heading</Typography>
			<Typography variant="h3">H3 Heading</Typography>
			<Typography variant="h4" component='h1' gutterBottom={false}>H4 Heading</Typography>
			<Typography variant="h5">H5 Heading</Typography>
			<Typography variant="h6">H6 Heading</Typography>
			
			<Typography variant="subtitle1">Subtitle 1</Typography>
			<Typography variant="subtitle2">Subtitle 2</Typography>
			
			<Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, iste esse beatae voluptatibus reprehenderit mollitia! Aperiam iusto voluptates, odio provident laborum tempora vel laboriosam labore dolorum dolor temporibus est voluptate.</Typography>
			<Typography variant="body2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, iste voluptatem officiis labore ipsum corporis qui quia velit alias itaque eligendi! Laboriosam, reiciendis. Assumenda, eligendi odio incidunt repudiandae magnam asperiores!</Typography>
		</>
	)
}

export default Typograph