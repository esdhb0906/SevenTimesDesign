import React from 'react'
import FaceIcon from '@material-ui/icons/Face'
import FireplaceIcon from '@material-ui/icons/Fireplace'
import LocalDiningIcon from '@material-ui/icons/LocalDining'
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball'
import styled from 'styled-components'


const ExperienceDetails = () => {
	const details = [
		{
			icon: <FireplaceIcon />,
			company: "Brooks Equipment",
			title: "Web Developer & Graphic Designer",
		},
		{
			icon: <FaceIcon />,
			company: "Bradley Co.",
			title: "Graphic Designer",
		},
		{
			icon: <LocalDiningIcon />,
			company: "Continental Services",
			title: "Graphic & Motion Designer",
		},
		{
			icon: <SportsBasketballIcon />,
			company: "Palace Sports & Entertainment",
			title: "Graphic Design Intern",
		}
	]

	return (
		<Experience>
			{
				details.map((detail, index) => (
					<Details key={index}>
						<div id="fill"></div>
						{detail.icon}
						<Typography>{detail.company}</Typography>
						<Typography className="overline">{detail.title}</Typography>
					</Details>
				))
			}
		</Experience>
	)
}

export default ExperienceDetails

const Experience = styled.div `
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`

const Details = styled.div `
	width: 175px;
	height: 175px;
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

	#fill {
		width: 100%;
		height: 100%;
		position: absolute;
		top: -250px;
		left: 0;
		background: #BF4953;
		transition: all .20s ease-in;
	}

	:hover #fill {
		top: 0;
	}
`
const Typography = styled.p `
	font-weight: normal;

	&.overline {
		font-family: 'Playfair Display', serif;
		font-weight: 500;
		line-height: normal;
		position: absolute;
		top: 100px;
		color: #ccdbe5;
	}
`