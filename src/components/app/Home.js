import React, { Component } from 'react';
import {
	Button, 
	Card, 
	CardContent, 
	Chip, 
	Container, 
	Grid } from '@material-ui/core';
import { Feat, Images } from '../../assets/img/images.js';

class Home extends Component {
	render() {
		return (
			<div className="home fcol fullWidth">
				<section className="hero flex fcol fullWidth">
					<Container className="flex" maxWidth="md">
						<h2 className="feat-head">Featured Project</h2>
						<img src={Feat[0].src} rounded className="feat-thumb" alt={Feat[0].title}
						/>
						<h2 className="feat-head">{Feat[0].title}</h2>

						<Chip variant="outlined" size="small" label={<span>Photo by <a href='https://unsplash.com/@petitesweetsnz?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Michelle Tsang</a> on <a href='https://unsplash.com/s/photos/ice-cream?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText'>Unsplash</a></span>}></Chip>
					</Container>
					<Container>
						<Button>Play Game <i className="fas fa-caret-right"></i></Button>
						<Button>Portfolio <i className="fas fa-caret-right"></i></Button>
					</Container>
				</section>
				<section className="recent fullWidth">
					<Container maxWidth="md">
						<h3 className="subhead">Recent Work</h3>
						<svg width="200" height="5"><line stroke="white" strokeWidth="2" strokeDasharray="3, 1"></line></svg>
						<p className="quote">Creativity is allowing yourself to make mistakes.<br/>Design is knowing which ones to keep.</p>
						<p className="author">Scott Adams</p>
						<Grid container justify="center" alignItems="center" spacing="5">
							{Feat.map((item, index) => (
								index != 0 ?
								<Grid item xs>
									<Card>
										<CardContent>
											<img src={item.src} alt={item.title} className="feat-thumb"/>
											<p>{item.title}</p>
											<p>{item.description}	</p>
										</CardContent>
									</Card>
								</Grid> : null
							))}
						</Grid>
						<Button>VIEW MORE <i className="fas fa-caret-right"></i></Button>
					</Container>
				</section>
				<section className="about fullWidth">
					<Container maxWidth="sm">
						<h3 className="subhead">About</h3>
						<svg width="200" height="5"><line stroke="white" strokeWidth="2" strokeDasharray="3, 1"></line></svg>
						<p className="quote">The goal isn't to live forever.<br/>
							The goal is to create something that will.</p>
						<p className="author">Chuck Palahniuk</p>
						<br/>
						<h4>Visual Problem Solver</h4>
						<p>The most simplified description of what I do. It is my job to evoke the proper emotions resulting in a solution catered to your needs. These needs can be, but are not limited to, increase in sales, raising awareness, providing entertainment, &c.</p>
						<br/>
						<h4>Who I've Worked For</h4>
						{Images.map((item, index) => {
							return(
								item.description === "Logo" ? <img key={index} src={item.src} className={item.cName} alt={item.title}/> : null
							)	
						})}
						<br/>
						<h4>Interests</h4>
						<div>
							<i className="fas fa-code fa-2x"></i>
							<i className="fas fa-desktop fa-2x"></i>
							<i className="fas fa-headphones fa-2x"></i>
							<i className="fas fa-basketball-ball fa-2x"></i>
							<i className="fas fa-camera-retro fa-2x"></i>
						</div>
						<Button className="download">DOWNLOAD RESUM&Eacute; <i className="fas fa-download"></i></Button>
					</Container>
				</section>
			</div>
		);
	}
}

export default Home;