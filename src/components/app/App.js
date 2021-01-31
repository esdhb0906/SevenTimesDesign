import './App.css';
import Header from '../header/Header.js';
import Home from './Home.js';
import Footer from '../footer/Footer.js';

function App() {
  return (
    <div className="App">
			<Header />
			<Home />
			{/* <Portfolio /> */}
			<Footer />
    </div>
  );
}

export default App;
