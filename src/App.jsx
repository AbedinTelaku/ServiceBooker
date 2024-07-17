import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from './components/NavbarComponent/Navbar';
import About from './components/AboutComponent/About';
import Contact from './components/ContactUsComponent/Contact';
import Company from './components/Company/Company';
import Footer from './components/FooterComponent/FooterComponent';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/company'  element={<Company/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
