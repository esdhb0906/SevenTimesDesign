import './App.css';
import { Route } from 'react-router-dom';
import Header from '../header/Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Project from '../project/Project';
import Footer from '../footer/Footer';
import { Images } from '../../assets/img/images';

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path={["/", "/SevenTimesDesign"]} component={Home}></Route>
			<Route path="/Portfolio" render={(props) => (<Portfolio images={Images} {...props} />)}></Route>
			<Route path="/Project" render={(props) => (<Project slides={Images} {...props} />)}></Route>
			{window.location.pathname !== "/Project" && <Footer />}
    </div>
  );
}

export default App;
