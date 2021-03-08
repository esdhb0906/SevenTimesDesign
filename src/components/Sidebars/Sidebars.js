import React, { useState } from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import styled from 'styled-components'

const Sidebars = ({ activePage }) => {
	return (
		<Wrapper>
			<LeftSidebar />
			<RightSidebar activePage={activePage} />
		</Wrapper>
	)
}

export default Sidebars

const Wrapper = styled.div `

`