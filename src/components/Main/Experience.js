import React from 'react'
import ExperienceDetails from './ExperienceDetails'
import styled from 'styled-components'

const Experience = () => {
	return (
		<Section>
			<Container>
				<Typography>Work Experience</Typography>
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
`
const Container = styled.div `
	max-width: 1100px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`
const Typography = styled.h4 `
	font-size: 48px;
	font-family: 'Playfair Display', Serif;
	font-weight: normal;
	text-align: center;
	margin-bottom: 50px;
`

const ExperienceContainer = styled.div `
	display: flex;
	justify-content: center;
`