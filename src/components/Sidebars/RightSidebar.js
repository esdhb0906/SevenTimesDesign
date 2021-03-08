import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const pageIds = ['hero', 'about', 'experience', 'portfolio', 'contact']

const RightSidebar = () => {
	const [selected, setSelected] = useState(pageIds[0]);

	return (
		<Sidebar>
			<AnimateSharedLayout>
				<ul>
					{pageIds.map(pageId => (
						<CircleLink
							key={pageId}
							to={pageId}
							smooth={true}
							duration={1500}
							spy={true}
						>
							<Circle
								pageId={pageId}
								isSelected={selected === pageId}
								onClick={() => setSelected(pageId)}
							/>
						</CircleLink>
					))}
				</ul>
			</AnimateSharedLayout>
		</Sidebar>
	)
}

export default RightSidebar

function Circle({ pageId, isSelected, onClick }) {
	return (
		<li className="outline" onClick={onClick}>
      {isSelected && (
        <motion.div
          layoutId="item"
          className="item"
          initial={false}
          transition={spring}
        />
      )}
    </li>
	)
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30
};

const CircleLink = styled(Link) `
`

const Sidebar = styled.div `
	position: fixed;
	top: 50%;
	right: 24px;
	transform: translate(-50%, -50%);

	ul {
		display: flex;
		flex-direction: column;
	}

	.item {
		position: absolute;
		border-radius: 50%;
		top: 2px;
		left: 2px;
		right: 2px;
		bottom: 2px;
		cursor: pointer;
		background-color: #ccdbe5;
	}

	.outline {
		position: relative;
		display: block;
		width: 15px;
		height: 15px;
		margin: 10px 0;
		border: 2px solid #ccdbe5;
		border-radius: 50%;
		flex-shrink: 0;
	}
`