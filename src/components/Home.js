import React from 'react'
import { useFormContext, Controller, useForm, formProvider } from 'react-hook-form'
import { Button, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@material-ui/core'
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
								<Divider light={true} />
								<AboutMe variant="h2">About Me</AboutMe>
								<Intro variant="h4">Hello, I'm &Eacute;pris Harris-Burnett</Intro>
								<p>I'm web developer and graphic designer in Charlotte, NC.</p>
								<p>I fell in love with technology at a young age. Around the age of eight I discovered I was a natural at drawing. During the MySpace years, I decided to merge the two loves together by customizing pages for friends. Ultimately, graphic design was the path I walked before finding my way back into developing. Now, I'm back to enoying the best of both worlds; where creativity and logic coincide.</p>
								<Divider light={true} />
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Section>
			<Section>
				<Container maxWidth="md" className="experience">
					<Typography variant="h3">Work Experience</Typography>
					<ExperienceContainer>
						<Experience>
							<div id="fill1"></div>
							<FireplaceIcon />
							<Typography variant="body2" >Brooks Equipment</Typography>
							<Typography variant="overline">Web Developer & Graphic Designer</Typography>
						</Experience>
						<Experience>
							<div id="fill2"></div>
							<FaceIcon />
							<Typography variant="body2" >Bradley Co.</Typography>
							<Typography variant="overline">Graphic Designer</Typography>
						</Experience>
						<Experience>
							<div id="fill3"></div>
							<LocalDiningIcon />
							<Typography variant="body2" >Continental Services</Typography>
							<Typography variant="overline">Graphic & Motion Graphic Designer</Typography>
						</Experience>
						<Experience>
							<div id="fill4"></div>
							<SportsBasketballIcon />
							<Typography variant="body2" >Palace Sports & Entertainment</Typography>
							<Typography variant="overline">Graphic Design Intern</Typography>
						</Experience>
					</ExperienceContainer>
				</Container>
			</Section>
			<Section>
				<Container maxWidth="md" className="portfolio">
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
					<Paper elevation={0} />
				</Container>
			</Section>
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
		</Wrapper>
	)
}

export default Home

const Wrapper = styled.div `
	min-width: 310px;
	margin: 0 auto;
`
const Section = styled.section `
	min-height: 100vh;
	display: grid;
	place-items: center;
	color: #ccdbe5;

	&.about {
		display: flex;
		align-items: center;
	}

	&.about p {
		margin: 15px 0;
	}

	.aboutme {
		display: grid;
		place-items: center;
		background-color: #BF4953;
	}

	.MuiDivider-root {
		border-top: 3px double #FFF;
	}

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

	.portfolio {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.portfolio > * {
		width: 200px;
		height: 200px;
		margin: 16px 20px;
	}

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
	marginTop: '15px'
})

const Intro = MaterialStyled(Typography) ({
	fontSize: '30px',
	fontWeight: 700,
})

const ExperienceContainer = styled.div `
	display: flex;
`

const Experience = styled.div `
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