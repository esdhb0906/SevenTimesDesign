import React, { useState } from 'react'
import { Link } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from './Menu'
import styled from 'styled-components'
import logo from '../assets/7TD-logo.png'

const Header = () => {
	// const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}
	
	return (
		<Nav>
			<Bar>
				<LogoButton
					to='hero'
					smooth={true}
					duration={500}
					spy={true}
				>
					<img src={logo} alt="Seven Times Design" />
				</LogoButton>
				{/* <ThemeSelector setter={setter} /> */}
				<MenuButton onClick={toggleMenu} >
					<MenuIcon />
				</MenuButton>
			</Bar>
			<Menu isOpen={isOpen} toggleMenu={toggleMenu} />
		</Nav>
	)
}

export default Header

const Nav = styled.nav `
	background: rgba(0, 0, 0, 0);
	height: 64px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 980px) {
		transition 0.8s all ease;
	}
`

const Bar = styled.div `
	display: flex;
	justify-content: space-between;
	height: 64px;
	width: 100%;
	padding: 0 24;
	z-index: 1;
`

const LogoButton = styled(Link) `
	display: flex;
	align-items: center;
	justify-self: flex-start;
	margin-left: 24px;
	cursor: pointer;

	img {
		width: 90px;
		height: auto;
	}
`

const MenuButton = styled.div `
	display: flex;
	align-items: center;
	justify-self: flex-end;
	margin-right: 24px;
	color: #ccdbe5;
	cursor: pointer;
`
