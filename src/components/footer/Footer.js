import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { MenuItems } from '../header/MenuItems.js'

class Footer extends Component {
	render() {
		return (
			<footer>
				<Container className="Footer flex fcol">
					<ul className="footer-menu">
						{MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<Link className={item.cName} to={item.url}>{item.page}</Link>
								</li>
							)
						})}
					</ul>
					<p>&copy;2021 | SEVEN TIMES DESIGN | All Rights Reserved</p>
				</Container>
			</footer>
		);
	}
}

export default Footer;