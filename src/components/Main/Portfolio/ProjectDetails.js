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
					<img src={src} alt="" />
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
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		max-width: 300px;
		margin-right: 50px;
	}
`
const Detail = styled.div `
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 600px;
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