import React from 'react'
import { useFormContext, Controller, useForm, formProvider } from 'react-hook-form'
import { Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import styled from 'styled-components'

const Contact = () => {
	return (
		<Section>
				<Container maxWidth="md">
					<Grid container spacing={5} xs={12}>
						<Grid container item xs={12} sm={8}>
							<h4>Stay in Touch ...</h4>
							<form>
								<TextField required label="First & Last Name" defaultValue="John or Jane Doe" variant="outlined" margin="normal" color="primary" />
								<TextField required label="Email Address" defaultValue="JDoe@email.com" variant="outlined" margin="normal" />
								<TextField required fullWidth label="Message Subject" defaultValue="RE: Subject" variant="outlined" margin="normal" />
								<TextField required multiline fullWidth label="Message" defaultValue="Message ..." variant="outlined" margin="normal" rows={4} />
								<Button type="submit" color="secondary" variant="contained" disableElevation >Submit</Button>
							</form>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography variant="body1">Other Ways to Reach Me:</Typography>
							<List>
								<ListItem disableGutters >
									<ListItemIcon>
										<FaceIcon />
									</ListItemIcon>
									<ListItemText primary="Name" secondary="&Eacute;pris Harris-Burnett" />
								</ListItem>
							</List>
							<List>
								<ListItem disableGutters >
									<ListItemIcon>
										<FaceIcon />
									</ListItemIcon>
									<ListItemText primary="LinkedIn" secondary="linked.in/linkedin" />
								</ListItem>
							</List>
							<List>
								<ListItem disableGutters >
									<ListItemIcon>
										<FaceIcon />
									</ListItemIcon>
									<ListItemText primary="Phone" secondary="000.000.0000" />
								</ListItem>
							</List>
							<List>
								<ListItem disableGutters >
									<ListItemIcon>
										<FaceIcon />
									</ListItemIcon>
									<ListItemText primary="email" secondary="email@email.com" />
								</ListItem>
							</List>
						</Grid>
					</Grid>
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

	form {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	form * {
		color: #ccdbe5;
	}

	form fieldset {
		border-color: #ccdbe5;
	}

	.MuiSvgIcon-root {
		height: 40px;
		width: auto;
		color: #BF4953;
	}
`