import React from 'react'
import { Toolbar } from '@material-ui/core'
import styled from 'styled-components'

function Footer() {
	return (
		<FooterCont>
			<Toolbar>
				<Copyright>
					&copy; 2021 Seven Times Design <br />
					All Rights Reserved.
				</Copyright>
				<PageCounter>
					1/5
				</PageCounter>
			</Toolbar>
		</FooterCont>
	)
}

export default Footer

const FooterCont = styled.footer `

	.MuiToolbar-regular {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100vw;
		font-size: 10px;
		position: fixed;
		bottom: 0px;
		left: 0;
		color: #ccdbe5;
	}
`

const Copyright = styled.div `

`

const PageCounter = styled.div `

`