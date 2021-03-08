import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Button = ({ primary, to, smooth, duration, spy, text }) => {
	return (
		<motion.button
			whileHover={{scale: 1.1}}
			whileTap={{scale: 0.9}}
		>
			<ButtonComp
				primary={primary}
				to={to}
				smooth={smooth}
				duration={duration}
				spy={spy}
			>
				{text}
			</ButtonComp>
		</motion.button>
	)
}

export default Button

const ButtonComp = styled(Link) `
	background: ${props => props.primary ? "#BF4953" : "rgba(0,0,0,0)" };
	color: ${props => props.primary ? "#ccdbe5" : "#BF4953"};

	width: 150px;
	font-size: calc(10px + (12 - 10) * (100vw - 320px) / (1200 - 320));
	margin-right: 16px;
	margin-top: 16px;
	padding: 16px;
	border: 2px solid #BF4953;
	border-radius: 3px;
`
