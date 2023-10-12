import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/header';
import Home from './components/Home';
import React from 'react';
import Footer from './components/Footer';
import Services from './components/Services';
import "./styles/App.scss"
import "./styles/Header.scss"
import "./styles/Home.scss"
import "./styles/Footer.scss"



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />  
    </Router>
  );
}

export default App;
