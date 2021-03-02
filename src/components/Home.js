import React from 'react'
import { Container, Typography } from '@material-ui/core'
import { styled as MaterialStyled } from '@material-ui/core/styles'
import styled from 'styled-components'
import image from '../assets/profile_web.png'

function Home() {
	return (
		<Wrapper>
			<Hero>
				<Container maxWidth="md">
					<HeroContent>
						<Para variant="body1">Hi! I'm &Eacute;pris. I am a ... </Para>
						<H3 variant="h3">Technical <br/><span>&</span> Visual</H3>
						<Para variant="body2">Problem Solver</Para>
						<div>
							<HeroButton primary>VIEW MY WORK</HeroButton>
							<HeroButton>MORE ABOUT ME</HeroButton>
						</div>
					</HeroContent>
				</Container>
			</Hero>
			<Section>
				<Container maxWidth="md">About</Container>
			</Section>
			<Section>
				<Container maxWidth="md">Experience</Container>
			</Section>
			<Section>
				<Container maxWidth="md">Portfolio</Container>
			</Section>
			<Section>
				<Container maxWidth="md">Contact</Container>
			</Section>
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.div `
	min-width: 310px;
	margin: 0 auto;
`
const Section = styled.section `
	height: 100vh;
	color: #ccdbe5;
`
const Hero = styled.section `
	height: 100vh;
	padding-top: 64px;
	background-image: url(${image});
	background-size: cover;
`

const HeroContent = styled.div `
	display: flex;
	justify-content: center;
	flex-direction: column;
	height: calc(100vh - 64px);
	padding: 100px 0;
	color: #ccdbe5;

	.MuiTypography-body1 {
		font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1200 - 320));
	}
`

const H3 = MaterialStyled(Typography) ({
	fontFamily: "'Playfair Display', serif",
	fontSize: 'calc(48px + (96 - 48) * (100vw - 320px) / (1200 - 320))',
	fontWeight: 800,

	'& span': {
		fontFamily: "'Playfair Display', serif",
		color: '#BF4953',
	}
})

const Para = MaterialStyled(Typography) ({
	fontFamily: "'Lato', 'Helvetica', 'Arial', sanf-serif",
	fontSize: 'calc(16px + (56 - 16) * (100vw - 320px) / (1200 - 320))',
	fontWeight: 300,
	fontStyle: 'italic',

	'&$body1': {
		fontSize: '2rem'
	}
})

const HeroButton = styled.button `
	background: ${props => props.primary ? "#BF4953" : "#202945" };
	color: ${props => props.primary ? "#ccdbe5" : "#BF4953"};

	width: 150px;
	font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
	margin: 16px 16px 16px;
	padding: 16px;
	border: 2px solid #BF4953;
`	