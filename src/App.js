import './App.css';
import Navbar from './components/Navbar.js';
import Main from './components/Main.js';
import Services from './components/Services.js';
import Realizations from './components/Realizations.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">

      <Navbar/>

      <Main/>

      <Services/>

      <Realizations/>

      <Contact/>

      <Footer/>
      
    </div>
  );
}




export default App;
