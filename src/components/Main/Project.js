import React from 'react'
import { Typography } from '@material-ui/core'
import { Images, Proj} from '../../assets/img/images'
import styled from 'styled-components'

const Projects = () => {
	return (
		<Project>
			{
				Images.map((image, index) => (
					<Card>
						<img src={image.src} alt={image.id} key={index} />
						{image.title}<br/>
						{image.description}
					</Card>
				))
			}
		</Project>
	)
}

export default Projects

const Project = styled.div `
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`

const Card = styled.div `
	width: 200px;
	height: 250px;
	margin: 16px 20px;
	text-align: center;

	img {
		max-width: 100%;
		margin: 10px 0;
		border-radius: 4px;
	}
`