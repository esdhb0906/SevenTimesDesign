import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from './Menu'
import styled from 'styled-components'
import logo from '../assets/7TD-logo.png'

const Header = ({ activePage }) => {
	// const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const [scrollNav, setScrollNav] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const onScroll = () => {
		if(window.scrollY >= 200) {
			setScrollNav(true)
		} else {
			setScrollNav(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', onScroll)
	}, [])
	
	return (
		<Nav scrollNav={scrollNav}>
			<Bar>
				<LogoButton
					to='hero'
					onClick={(e) => {
						activePage(e.target.getAttribute("page"));
					}}
					smooth={true}
					duration={1000}
					spy={true}
				>
					<img src={logo} alt="Seven Times Design" page="hero"/>
				</LogoButton>
				{/* <ThemeSelector setter={setter} /> */}
				<MenuButton onClick={toggleMenu} >
					<MenuIcon />
				</MenuButton>
			</Bar>
			<Menu
				isOpen={isOpen}
				toggleMenu={toggleMenu}
				activePage={activePage}
			/>
		</Nav>
	)
}

export default Header

const Nav = styled.nav `
	background: ${({ scrollNav }) => (scrollNav ? 'rgb(32,41,69)' : 'transparent')};
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
