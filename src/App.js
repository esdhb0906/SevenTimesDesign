import './App.css'
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import styled from 'styled-components'

function App() {
	return (
		<Wrapper>
			<Header />
			{/* <Switch>
				<Route exact path="/SevenTimesDesign" component={Home}></Route>
			</Switch>
			{window.location.pathname !== "/Project" && <Footer />} */}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div `
	background-color: #202945;
`