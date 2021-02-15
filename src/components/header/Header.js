import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
					<Link to="/">
						<img src={logo} className="logo" alt="Seven Times Design"/>
					</Link>
					<div className="menu-icon"
						onClick={this.handleClick}
					>
						<i className={this.state.active ? 'fas fa-times' : 'fas fa-bars'}></i>
					</div>
					<ul className={this.state.active ? 'nav-menu active' : 'nav-menu'}>
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									{
										item.url.includes('#') ?
										<HashLink className={item.cName} smooth to={item.url}>{item.page}</HashLink> :
										<Link className={item.cName} to={item.url}>{item.page}</Link>
									}
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