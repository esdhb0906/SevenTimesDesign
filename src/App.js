import { Route, Switch } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Header from './components/Header'
import Sidebars from './components/Sidebars'
import Home from './components/Home'
import Hero from './components/Main/Hero'
import About from './components/Main/About'
import Experience from './components/Main/Experience'
import Portfolio from './components/Main/Portfolio'
import Contact from './components/Main/Contact'
import Footer from './components/Footer'
import styled from 'styled-components'

const theme = createMuiTheme({
   typography: {
    "fontFamily": `"Lato", "Helvetica", "Arial", sans-serif`,
    "fontSize": 16,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
   }
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Wrapper>
				<Header />
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
  );
}

export default App;

const Wrapper = styled.div `
	background-color: #202945;
`