import React, { forwardRef } from 'react'
import { Divider, IconButton, List, ListItem, ListItemIcon, Typography } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import styled from 'styled-components'

const Sidebars = forwardRef(({ props }, ref) => {
	return (
		<Wrapper>
			<LeftSidebar>
				<List>
					<ListItem disableGutters={true} >
						<ListItemIcon >
							<SocialButton href="https://esdhb0906.github.io" target="_blank">
								<GitHubIcon />
							</SocialButton>
						</ListItemIcon>
					</ListItem>
					<ListItem disableGutters={true} >
						<ListItemIcon >
							<SocialButton href="https://linkedin.com/in/eprishb" target="_blank">
								<LinkedInIcon />
							</SocialButton>
						</ListItemIcon>
					</ListItem>
				</List>
				<Divider orientation="vertical" light={true} />
				<Typography variant="overline"> Follow Me </Typography>
			</LeftSidebar>
			<RightSidebar>
				<Circle />
				<Circle />
				<Circle />
				<Circle />
				<Circle />
			</RightSidebar>
		</Wrapper>
	)
});

export default Sidebars

const Wrapper = styled.div `

`

const LeftSidebar = styled.div `
	text-align: center;
	color: #ccdbe5;

	position: fixed;
	top: 50%;
	left: 24px;
	width: 15px;
	transform: translate(-50%, -50%);

	.MuiDivider-root {
		height: 100px;
    width: 1px;
		margin: auto;
    background-color: #ccdbe5;
	}

	.MuiSvgIcon-root {
		font-size: 14px;
		color: #ccdbe5;
	}

	span.MuiTypography-root {
		display: block;
		font-size: 10px;
		margin-top: 55px;
		white-space: nowrap;
		transform: rotate(-90deg);
	}
`

const RightSidebar = styled.div `
	position: fixed;
	top: 50%;
	right: 24px;
	width: 15px;
	transform: translate(-50%, -50%);
`

const Circle = styled.div `
	width: 15px;
	height: 15px;
	margin: 5px 0;
	border: 1px solid white;
	border-radius: 50%;
`
const SocialButton = styled(IconButton) `
	&.MuiIconButton-root {
		padding: 0;
	}
`