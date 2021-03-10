import React from 'react'	
import { AnimatePresence, motion } from 'framer-motion'
import ExperienceDetails from '../Main/Experience/ExperienceDetails'
import Project from '../Main/Project'
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
								content === "experience" && (
									<ExperienceDetails />
								)
							}
							{
								content === "portfolio" && (
									<Project />
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
	height: 100vh;
	width: calc(100vw - 248px);
	margin: 0 124px;
	background: #202945;
	position: fixed;
	z-index: 10;
`

const ModalContent = styled.div `
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