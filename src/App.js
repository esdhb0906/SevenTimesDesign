import { useState, useEffect } from 'react'
import { useTheme } from './theme/useTheme'
import { Route, Switch } from 'react-router-dom'
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Header from './components/Header'
import Sidebars from './components/Sidebars'
import Home from './components/Home'
import Hero from './components/Main/Hero'
import About from './components/Main/About'
import Experience from './components/Main/Experience'
import Portfolio from './components/Main/Portfolio'
import Contact from './components/Main/Contact'
import Footer from './components/Footer'
import { GlobalStyles } from './theme/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
import ThemeSelector from './ThemeSelector'

// const theme = createMuiTheme({
//    typography: {
//     "fontFamily": `"Lato", "Helvetica", "Arial", sans-serif`,
//     "fontSize": 16,
//     "fontWeightLight": 300,
//     "fontWeightRegular": 400,
//     "fontWeightMedium": 500
//    }
// });

function App() {

  const {theme, themeLoaded, getFonts} = useTheme();
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
						{/* {window.location.pathname !== "/Project" && <Footer />} */}
					</Wrapper>
				</ThemeProvider>
			}
		</>
  );
}

export default App;

const Wrapper = styled.div `
`