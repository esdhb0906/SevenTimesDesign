import React, { useState, useEffect } from 'react'
import { useTheme } from './theme/useTheme'
import { Header, Sidebars, Hero, About, Experience, Portfolio, Contact, Footer } from './components'
import { GlobalStyles } from './theme/GlobalStyles'
import { Frame, Page } from 'framer'
import styled, { ThemeProvider } from 'styled-components'
import ThemeSelector from './ThemeSelector'

const App = () => {

  const {theme, themeLoaded} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
   }, [themeLoaded]);

	return (
		<>
			{
				themeLoaded && <ThemeProvider theme={selectedTheme}>
					<GlobalStyles />
					<Wrapper>
						<Header ThemeSelector={ThemeSelector} setter={setSelectedTheme} />
						<Sidebars />
						{/* <Page width={"100vw"} height={"100vh"}> */}
							<Hero />
							<About />
							<Experience />
							<Portfolio />
							<Contact />
						{/* </Page> */}
						<Footer />
					</Wrapper>
				</ThemeProvider>
			}
		</>
  );
}

export default App;

const Wrapper = styled.div `
`