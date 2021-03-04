import React from 'react'
import { Container, Paper } from '@material-ui/core'
import styled from 'styled-components'

const Portfolio = () => {
	return (
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

	.portfolio > * {
		width: 200px;
		height: 200px;
		margin: 16px 20px;
	}
`