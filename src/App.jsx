import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body'
import Presentation from './components/inicio/Presentation';
import Services from './components/servicios/Services';
import AboutUs from './components/nosotros/AboutUs';
import Contacts from './components/contactos/Contacts';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Presentation/>} />
        <Route path='/services' element={<Services />}/>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
