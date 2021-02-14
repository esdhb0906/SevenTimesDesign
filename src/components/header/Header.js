import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import { MenuItems } from './MenuItems.js'
import logo from '../../assets/7TD-logo.png';
import './header.css';

class Header extends Component {
	state = {
		active: false
	}

	handleClick = () => {
		this.setState({ active: !this.state.active })
	}

	render () {
		return (
			<nav>
				<Container maxWidth='md' className="flex">
					<img src={logo} className="logo" alt="Seven Times Design"/>
					<div className="menu-icon"
						onClick={this.handleClick}
					>
						<i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>
					<ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>{item.page}</a>
								</li>
							)
						})}
					</ul>
				</Container>
			</nav>
		);
	}
}

export default Header;