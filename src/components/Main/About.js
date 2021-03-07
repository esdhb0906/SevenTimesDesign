import React from 'react'
import styled from 'styled-components'
import profile from '../../assets/EprisHB.png'

const About = () => {
	return (
		<Section id="about">
			<Container>
				<Profile>
					<img src={profile} alt="Epris HB" style={{maxWidth: 300, height:'auto'}} />
				</Profile>
				<Details>
					<Intro>Hello, I'm &Eacute;pris Harris-Burnett</Intro>
					<p className="intro">I'm web developer and graphic designer in Charlotte, NC.</p>
					<p>I fell in love with technology at a young age. Around the age of eight I discovered I was a natural at drawing. During the MySpace years, I decided to merge the two talents together by customizing pages for friends. Ultimately, graphic design was the path I walked before finding my way back into developing. Now, I'm enoying the best of both worlds; where creativity and logic coincide.</p>
				</Details>
			</Container>
		</Section>
	)
}

export default About

const Section = styled.section `
	display: flex;
	align-items: center;
	min-height: 100vh;
	color: #ccdbe5;
`
const Container = styled.section `
	max-width: 1100px;
	margin: 0 150px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Profile = styled.div `
	display: grid;
	place-items: center;
	margin-right: 50px;
`
const Details = styled.div `
	.intro {
		line-height: 1.5em;
		font-style: italic;
	}
`
const Intro = styled.h5 `
	font-family: 'Playfair Display', serif;
	font-size: 36px;
	font-weight: 500;
`
