import { Descriptions } from './ExperienceDesc'
import styled from 'styled-components'


const ExperienceDetails = ({ content }) => {

	return (
		<>
			{Descriptions.map(job => (
				<Job
					key={job.id}
					src={job.src}
					date={job.date}
					desc={job.desc}
					company={job.company}
					match={job.company === content.id}
				/>
			))}
		</>
	)
}

export default ExperienceDetails

function Job({ src, date, desc, company, match }) {
	return (
		<>
			{match && (
				<Detail>
					<img src={src} alt={company} />
					<Date>{date}</Date>
					<Description>{desc}</Description>
				</Detail>
			)}
		</>
	)
}

const Detail = styled.div `
	display: flex;
	align-items: center;
	flex-direction: column;

	img {
		max-width: 300px;
	}
`
const Date = styled.p `
	margin-bottom: 50px;
`
const Description = styled.p `
	max-width: 600px;

	li {
		margin-bottom: 10px;
	}
`