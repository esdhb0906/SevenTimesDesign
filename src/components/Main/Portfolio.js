import React from 'react'
import Projects from './Project'
import styled from 'styled-components'

const Portfolio = () => {
	return (
		<Section>
				<Container>
					<Typography>Portfolio</Typography>
					<Projects />
				</Container>
			</Section>
	)
}

export default Portfolio;

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
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`
const Typography = styled.h4 `
	font-size: 48px;
	font-family: 'Playfair Display', Serif;
	font-weight: normal;
	text-align: center;
	margin-bottom: 50px;
`