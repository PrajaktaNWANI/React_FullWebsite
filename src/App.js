import react from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Pagenotfound from './Components/Pagenotfound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/about' element={<Aboutus />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
