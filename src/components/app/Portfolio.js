import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Card, 
	CardContent, 
	Container, 
	Grid } from '@material-ui/core';
import { Images } from '../../assets/img/images.js';

class Portfolio extends Component {
	render() {
		return (
			<section className="portfolio flex fullWidth">
					<Container maxWidth="md">
						<h3 className="subhead">Portfolio</h3>
						<svg width="200" height="5"><line stroke="white" strokeWidth="2" strokeDasharray="3, 1"></line></svg>
						<p className="quote">The worst enemy to creativity is self-doubt</p>
						<p className="author">Sylvia Plath</p>
						<br/>
						<Grid container justify="center" alignItems="center">
							{Images.map((item, index) => (
								item.description !== 'Logo' && !item.id.includes('305') ?
								<Grid item xs key={index}>
									<Link to="/Project" project={item.title}>
										<Card>
											<CardContent>
												<img src={item.src} alt={item.title} className="img-thumb"/>
												<p>{item.title}</p>
												<p>{item.description}	</p>
											</CardContent>
										</Card>
									</Link>
								</Grid> : null
							))}
						</Grid>
					</Container>
				</section>
		);
	}
}

export default Portfolio;