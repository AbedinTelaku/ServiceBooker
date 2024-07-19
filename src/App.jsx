import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from './components/NavbarComponent/Navbar';
import About from './components/AboutComponent/About';
import Contact from './components/ContactUsComponent/Contact';
import Company from './components/Company/Company';
import Footer from './components/FooterComponent/FooterComponent';
import Login from './login/login';
import Register from './register/register';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/about'  element={<About />} />
          <Route path='/contact'  element={<Contact />} />
          <Route path='/company'  element={<Company/>} />
          <Route path='/login'  element={<Login/>} />
          <Route path='/register'  element={<Register/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
