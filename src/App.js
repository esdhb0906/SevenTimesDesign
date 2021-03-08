import React, { useState, useEffect } from 'react'
import { useTheme } from './theme/useTheme'
import { Header, Sidebars, Hero, About, Experience, Portfolio, Contact, Footer } from './components'
import Loader from './components/Loader'
import { GlobalStyles } from './theme/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import ThemeSelector from './ThemeSelector'

const App = () => {

  const {theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
	const [loading, setLoading] = useState(true)

	const [activePage, setActivePage] = useState("")

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
								activePage={activePage}
							/>
							<Sidebars activePage={activePage} />
							<Hero />
							<About />
							<Experience />
							<Portfolio />
							<Contact />
							<Footer />
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