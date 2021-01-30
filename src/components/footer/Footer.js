import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { MenuItems } from '../header/MenuItems.js'
import './footer.css'

class Footer extends Component {
	render() {
		return (
			<div className="Footer">
				<ul className="footer-menu">
					{MenuItems.map((item, index) => {
						return (
							<li key={index}>
								<a className={item.cName} href={item.url}>{item.page}</a>
							</li>
						)
					})}
				</ul>
				<p>&copy;SEVEN TIMES DESIGN | All Rights Reserved</p>
			</div>
		);
	}
}

export default Footer;