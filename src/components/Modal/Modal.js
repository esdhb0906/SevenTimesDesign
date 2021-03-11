import React from 'react'	
import { AnimatePresence, motion } from 'framer-motion'
import ExperienceDetails from '../Main/Experience/ExperienceDetails'
import ProjectDetails from '../Main/Portfolio/ProjectDetails'
import CancelIcon from '@material-ui/icons/Cancel'
import { styled as MaterialStyled } from '@material-ui/core/styles'
import styled from 'styled-components'

const Modal = ({ showModal, toggleModal, content }) => {
	return (
		<>
			<AnimatePresence
				exitBeforeEnter
			>
				{
					showModal && (
						<ModalContainer
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{
								opacity: 0,
								y: 0,
							}}
						>
							{
								content.type === "experience" && (
									<ExperienceDetails 
										content={content}
									/>
								)
							}
							{
								content.type === "portfolio" && (
									<ProjectDetails
										content={content}
									/>
								)
							}
							<Cancel onClick={toggleModal} />
						</ModalContainer>
					)
				}
			</AnimatePresence>
		</>
	)
}

export default Modal

const ModalContainer = styled(motion.div) `
	display: grid;
	place-items: center;
	height: calc(100vh - 120px);
	width: calc(100vw - 100px);
	margin: 64px 50px 56px;
	background: #202945;
	position: fixed;
	z-index: 10;

	@media screen and (min-width: 768px) {
		margin: 0 124px;
		height: 100vh;
		width: calc(100vw - 248px);
	}
`
const Cancel = MaterialStyled(CancelIcon)({
	width: 25,
	height: 25,
	position: "absolute",
	top: 24,
	right: 24,
	color: "#ccdbe5",
	cursor: "pointer",
});