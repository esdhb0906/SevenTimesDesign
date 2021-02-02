import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Feat } from '../../assets/img/images.js';
import './home.css'

console.log(Feat);

class Home extends Component {
	render() {
		return (
			<div class="home">
				<Jumbotron className="hero">
					<Container>
						<h3>Featured Project</h3>
						<Image src={Feat[0].src.default} rounded className="thumbnail"/>
						<p>{Feat[0].title}</p>
						<span>{Feat[0].description}</span>
						<Button />
						<Button />
					</Container>
				</Jumbotron>
				<section className="recent">
					<Container>
						<h3>Recent Work</h3>
						<svg width="200" height="5"><line stroke="white" stroke-width="2" stroke-dasharray="3, 1"></line></svg>
						<p className="quote">Creativity is allowing yourself to make mistakes.
								Design is knowing which ones to keep.</p>
						<span>Scott Adams</span>
						<CardGroup>
							<Card>
								<Card.Img variant="top" src="" />
								<Card.Body>
									<Card.Title></Card.Title>
									<Card.Text></Card.Text>
								</Card.Body>
							</Card>
						</CardGroup>
						<Button />
					</Container>
				</section>
				<section className="about">
					<Container>
						<h3>About</h3>
						<svg width="200" height="5"><line stroke="white" stroke-width="2" stroke-dasharray="3, 1"></line></svg>
						<p className="quote">The goal isn't to live forever.
							The goal is to create something that will.</p>
						<span>Chuck Palahniuk</span>
						<h4>Visual Problem Solver</h4>
						<p>The most simplified description of what I do. It is my job to evoke the proper emotions resulting in a solution catered to your needs. These needs can be, but are not limited to, increase in sales, raising awareness, providing entertainment, &c.</p>
						<h4>Who I've Worked For</h4>
						<Image src="" />
						<h4>Interests</h4>
						<i className="fas fa-basketball"></i>
					</Container>
				</section>
			</div>
		);
	}
}

export default Home;