import React, { useState, useEffect } from 'react'
import { useTheme } from './theme/useTheme'
import { Header, Sidebars, Hero, About, Experience, Portfolio, Contact, Footer } from './components'
import { GlobalStyles } from './theme/GlobalStyles'
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
  );
}

export default App;

const Wrapper = styled.div `
`