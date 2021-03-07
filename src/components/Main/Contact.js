import React from 'react'
import { Button, Container, Grid, TextField, Typography } from '@material-ui/core'
import styled from 'styled-components'

const Contact = () => {
	return (
		<Section>
				<Container maxWidth="md">
					<Typography variant="h3">Stay In Touch ...</Typography>
					<form>
						<Grid container spacing={5}>
							<Grid item xs={12} sm={6}>
								<TextField required fullWidth label="First & Last Name" defaultValue="John or Jane Doe" variant="outlined" margin="normal" color="primary" />
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField required fullWidth label="Email Address" defaultValue="JDoe@email.com" variant="outlined" margin="normal" />
							</Grid>
						</Grid>
						<TextField required fullWidth label="Message Subject" defaultValue="RE: Subject" variant="outlined" margin="normal" />
						<TextField required multiline fullWidth label="Message" defaultValue="Message ..." variant="outlined" margin="normal" rows={4} />
						<Button type="submit" color="secondary" variant="contained" disableElevation >Submit</Button>
					</form>
				</Container>
			</Section>
	)
}

export default Contact

const Section = styled.section `
	min-height: 100vh;
	display: grid;
	place-items: center;
	color: #ccdbe5;

	.MuiTypography-h3 {
		font-size: 48px;
		font-family: 'Playfair Display', Serif;
		text-align: center;
		margin-bottom: 50px;
	}

	form * {
		color: #ccdbe5;
	}

	form fieldset {
		border-color: #ccdbe5;
	}
`