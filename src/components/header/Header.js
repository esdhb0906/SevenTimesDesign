import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { MenuItems } from './MenuItems.js'
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
			<nav className="Header">
				<Container>
					<img src="/public/7TD-logo.png" alt="Seven Times Design" className="logo"></img>
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