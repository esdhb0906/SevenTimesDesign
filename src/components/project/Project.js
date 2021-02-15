import React, { useState } from 'react';
import { Images } from '../../assets/img/images';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';

const Project = ({ slides }) => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	if(!Array.isArray(slides) || slides.length <= 0) {
		return null;
	};

	return (
		<div className="flex">
			<div className="details flex fcol">
				<h2>PROJECT HEADING</h2>
				<h3>SUBHEADING</h3>
				<h4>QUICK DESC SNIPPET</h4>
				<button>View More</button>
			</div>
			<div className="slider flex">
				<FaCaretLeft className='left-arrow' onClick={prevSlide} />
				<FaCaretRight className='right-arrow' onClick={nextSlide} />
				{Images.map((image, index) => (
					<div className={index === current ? 'slide-active' : 'slide'} key={index}>
						{index === current && (
							<img src={image.src} alt={image.title} className={image.cName}/>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

export default Project;