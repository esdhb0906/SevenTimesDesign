import { Descriptions } from './ProjectDesc'
import styled from 'styled-components'

const ProjectDetails = ({ content }) => {
	return (
		<>
			{Descriptions.map(proj => (
				<Project
					key={proj.id}
					src={proj.src}
					date={proj.date}
					desc={proj.desc}
					service={proj.service}
					match={proj.id === content.id}
				/>
			))}
		</>
	)
}

export default ProjectDetails

function Project({ src, date, desc, service, match }) {
	return (
		<>
			{match && (
				<DetailWrapper>
					<Media>
						{src}
					</Media>
					<Detail>
						<Service>{service}</Service>
						<Date>{date}</Date>
						<Description>{desc}</Description>
					</Detail>
				</DetailWrapper>
			)}
		</>
	)
}

const DetailWrapper = styled.div `
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(auto-fit, minmax(250px, auto));
	align-items: center;
`
const Media = styled.div `
	display: grid;
	place-items: center;

	img {
		max-width: 450px;
		object-fit: contain;
	}

	.multiple {
		justify-items: center;
		text-align: center;
	}

	.multiple a {
		display: inline-flex;
		margin: 0 5px;
		color: #ccdbe5;
		text-decoration: none;
	}

	.slides img {
		height: 210px;
		width: auto;
	}

	.slides {
		display: grid;
		grid-auto-flow: column;
		grid-gap: 0px;
		overflow: hidden;
		width: 250px;
		margin-bottom: 10px;
	}

	@media screen and (min-width: 480px) {
		.slides {
			width: 360px;
		}

		.slides img {
			height: 300px;
		}

		.w275 {
			height: 280px!important;
			width: 275px!important;
		}
	}

	@media screen and (min-width: 480px) and (max-width: 620px) {
		.w275 {
			width: 360px!important;
		}
	}

	@media screen and (min-width: 620px) {
		.slides#w260 {
			width: 260px;
		}
	}
`
const Detail = styled.div `
	display: flex;
	align-items: center;
	flex-direction: column;
	text-align: center;
`
const Service = styled.h4 ``
const Date = styled.p `
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0 30px 0;

	a {
		color: #ccdbe5;
		vertical-align: middle;
	}

	a svg {
		font-size: 15px;
	}
`
const Description = styled.p ``