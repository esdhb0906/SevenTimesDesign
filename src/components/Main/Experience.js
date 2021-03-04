import React from 'react'
import { Container, Typography } from '@material-ui/core'
import FaceIcon from '@material-ui/icons/Face'
import FireplaceIcon from '@material-ui/icons/Fireplace'
import LocalDiningIcon from '@material-ui/icons/LocalDining'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import styled from 'styled-components'

const Experience = () => {
	return (
		<Section>
				<Container maxWidth="md" className="experience">
					<Typography variant="h3">Work Experience</Typography>
					<ExperienceContainer>
						<ExperienceDetails>
							<div id="fill1"></div>
							<FireplaceIcon />
							<Typography variant="body2" >Brooks Equipment</Typography>
							<Typography variant="overline">Web Developer & Graphic Designer</Typography>
						</ExperienceDetails>
						<ExperienceDetails>
							<div id="fill2"></div>
							<FaceIcon />
							<Typography variant="body2" >Bradley Co.</Typography>
							<Typography variant="overline">Graphic Designer</Typography>
						</ExperienceDetails>
						<ExperienceDetails>
							<div id="fill3"></div>
							<LocalDiningIcon />
							<Typography variant="body2" >Continental Services</Typography>
							<Typography variant="overline">Graphic & Motion Graphic Designer</Typography>
						</ExperienceDetails>
						<ExperienceDetails>
							<div id="fill4"></div>
							<SportsBasketballIcon />
							<Typography variant="body2" >Palace Sports & Entertainment</Typography>
							<Typography variant="overline">Graphic Design Intern</Typography>
						</ExperienceDetails>
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
`

const ExperienceDetails = styled.div `
	width: 200px;
	height: 200px;
	padding: 15px;
	margin: 20px;
	border: 1px solid #BF4953;
	border-top: 10px solid #BF4953;

	position: relative;
	overflow: hidden;

	* {
		position: relative;
		transition: all .20s ease-in;
	}

	#fill1, #fill2,
	#fill3, #fill4 {
		width: 100%;
		height: 100%;
		position: absolute;
		top: -250px;
		left: 0;
		background: #BF4953;
		transition: all .20s ease-in;
	}

	:hover #fill1,
	:hover #fill2,
	:hover #fill3,
	:hover #fill4 {
		top: 0;
	}

	.MuiTypography-overline {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
		line-height: normal;
		position: absolute;
		top: 100px;
		color: #202945;
	}
`