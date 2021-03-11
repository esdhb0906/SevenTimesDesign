import React, { useState, useEffect } from 'react'
import { useTheme } from './theme/useTheme'
import { Header, Sidebars, Hero, About, Experience, Portfolio, Contact, Footer } from './components'
import Loader from './components/Loader'
import Modal from './components/Modal/Modal'
import { GlobalStyles } from './theme/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import ThemeSelector from './ThemeSelector'

const App = () => {

  const {theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
	const [loading, setLoading] = useState(true)

	const [activePage, setActivePage] = useState("hero");
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState();

	const updateActivePage = (page) => {
		setActivePage(page.toLowerCase());
	}

	const toggleModal = (e, type) => {
		setShowModal(!showModal);
		setModalContent({id: e.id, type: type})
	}

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

	return (
		<>
			{loading === false ? (
			<>
				{
					themeLoaded && <ThemeProvider theme={selectedTheme}>
						<GlobalStyles />
						<Wrapper>
							<Header
								ThemeSelector={ThemeSelector}
								setter={setSelectedTheme}
								activePage={updateActivePage}
							/>
							<Sidebars activePage={activePage} updateActivePage={updateActivePage} />
							<Modal showModal={showModal} toggleModal={toggleModal} content={modalContent} />
							<Hero activePage={updateActivePage} />
							<About />
							<Experience toggleModal={toggleModal} />
							<Portfolio toggleModal={toggleModal} />
							{/* <Contact /> */}
							<Footer activePage={activePage} />
						</Wrapper>
					</ThemeProvider>
				}
			</>
			) : (
				<Loader />
			)}
		</>
  );
}

export default App;

const Wrapper = styled.div `
	transition: 0.3 ease-in-out;
`