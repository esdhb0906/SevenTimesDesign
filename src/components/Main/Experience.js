import React from 'react'
import { Container, Typography } from '@material-ui/core'
import ExperienceDetails from './ExperienceDetails'
import styled from 'styled-components'

const Experience = () => {
	return (
		<Section>
			<Container maxWidth="md" className="experience">
				<Typography variant="h3">Work Experience</Typography>
				<ExperienceContainer>
					<ExperienceDetails />
				</ExperienceContainer>
			</Container>
		</Section>
	)
}

export default Experience;

const Section = styled.section `
	min-height: 100vh;
	display: grid;
	place-items: center;
	color: #ccdbe5;

	.experience {
		display: flex;
		flex-direction: column;
	}

	.MuiTypography-h3 {
		font-size: 48px;
		font-family: 'Playfair Display', Serif;
		text-align: center;
		margin-bottom: 50px;
	}
`
const ExperienceContainer = styled.div `
	display: flex;
	justify-content: center;
`