import React from 'react'
import { Link } from 'react-scroll'
import CloseIcon from '@material-ui/icons/Close'
import styled from 'styled-components'

const Menu = ({ isOpen, toggleMenu }) => {
	return (
		<Container isOpen={isOpen} >
			<Icon onClick={toggleMenu} >
				<ClosingIcon />
			</Icon>
			<MenuWrapper>
				<MenuItem>
					<MenuLinks
						to='about'
						onClick={toggleMenu}
						smooth={true}
						duration={500}
						spy={true}
					>About</MenuLinks>
					<MenuLinks
						to='experience'
						onClick={toggleMenu}
						smooth={true}
						duration={500}
						spy={true}
					>Experience</MenuLinks>
					<MenuLinks
						to='portfolio'
						onClick={toggleMenu}
						smooth={true}
						duration={500}
						spy={true}
					>Portfolio</MenuLinks>
					<MenuLinks
						to='contact'
						onClick={toggleMenu}
						smooth={true}
						duration={500}
						spy={true}
					>Contact</MenuLinks>
				</MenuItem>
			</MenuWrapper>
		</Container>
	)
}

export default Menu

const Container = styled.aside `
	display: grid;
	place-items: center;
	min-width: 300px;
	max-width: 320px;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	background: #202945;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
	top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
	z-index: 999;
`
const Icon = styled.div `
	position: absolute;
	top: 18px;
	right: 18px;
	background: transparent;
	cursor: pointer;
`

const ClosingIcon = styled(CloseIcon) `
	color: #ccdbe5;
`

const MenuWrapper = styled.div `
	color: #ccdbe5;
`

const MenuItem = styled.ul `
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(6, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(6, 60px);
	}
`
const MenuLinks = styled(Link) `
	display: flex;
	align-items: center;
	justify-content: center;
	list-style: none;
	transition: 0.2s ease-in-out;
	color: #ccdbe5;
	cursor: pointer;

	&:hover {
		color: #bf4953;
		transition: 0.2s ease-in-out;
	}
`
