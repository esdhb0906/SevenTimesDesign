import './App.css';
import { Route } from 'react-router-dom';
import Header from '../header/Header.js';
import Home from './Home';
import Portfolio from './Portfolio';
import Footer from '../footer/Footer.js';

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={Home}></Route>
			<Route path="/Portfolio" component={Portfolio}></Route>
			<Footer />
    </div>
  );
}

export default App;
