import React from 'react'
import { Container, Typography } from '@material-ui/core'
import Projects from './Project'
import styled from 'styled-components'

const Portfolio = () => {
	return (
		<Section>
				<Container maxWidth="md" className="portfolio">
					<Typography variant="h3">Portfolio</Typography>
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

	.portfolio {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}

	.MuiTypography-h3 {
		font-size: 48px;
		font-family: 'Playfair Display', Serif;
		text-align: center;
		margin-bottom: 50px;
	}
`