import React from 'react'
import { Container, Divider, Grid, Typography } from '@material-ui/core'
import { styled as MaterialStyled } from '@material-ui/styles'
import styled from 'styled-components'
import profileImage from '../../assets/EprisHB.jpg'

const About = () => {
	return (
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
	)
}

export default About

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
