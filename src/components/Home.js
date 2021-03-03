import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { styled as MaterialStyled } from '@material-ui/core/styles'
import FaceIcon from '@material-ui/icons/Face'
import FireplaceIcon from '@material-ui/icons/Fireplace'
import LocalDiningIcon from '@material-ui/icons/LocalDining'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import styled from 'styled-components'
import heroImage from '../assets/profile_web.png'
import profileImage from '../assets/EprisHB.jpg'

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
			<Section className="about">
				<Container maxWidth="md" justify="center" alignItems="center">
					<Grid container spacing={5}>
						<Grid item xs={12} sm={5}>
							<img src={profileImage} alt="Epris Harris-Burnett" width="300" height="auto" />
						</Grid>
						<Grid item xs={12} sm={7} className="aboutme">
							<Grid>
								<hr />
								<br />
								<AboutMe>About Me</AboutMe>
								<Intro>Hello, I'm &Eacute;pris Harris-Burnett</Intro>
								<br/>
								<p>I'm web developer and graphic designer in Charlotte, NC.</p>
								<br/>
								<p>I fell in love with technology at a young age. Around the age of eight I discovered I was a natural at drawing. During the MySpace years, I decided to merge the two loves together by customizing pages for friends. Ultimately, graphic design was the path I walked before finding my way back into developing. Now, I'm back to enoying the best of both worlds; where creativity and logic coincide.</p>
								<br />
								<hr />
							</Grid>
						</Grid>
					</Grid>
				</Container>
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

	&.about {
		display: flex;
		align-items: center;
	}

	.aboutme {
		display: grid;
		place-items: center;
		background-color: #BF4953;
	}
`
const Hero = styled.section `
	height: 100vh;
	padding-top: 64px;
	background-image: url(${heroImage});
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

const AboutMe = MaterialStyled(Typography) ({
	fontSize: '24px',
	fontWeight: 300,
	color: '#202945',
})

const Intro = MaterialStyled(Typography) ({
	fontSize: '30px',
	fontWeight: 700,
})