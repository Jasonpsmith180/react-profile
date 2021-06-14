import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [navSelected, setNavSelected] = useState(<About />)

  function renderSwitch(navSelected) {
    switch(navSelected) {
      case '<Portfolio />': 
        return <Portfolio />;
      case '<ContactForm />':
        return <ContactForm />;
      case '<Resume />':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <div>
      <Header
        navSelected={navSelected}
        setNavSelected={setNavSelected}

      />
      <main>
        {renderSwitch(navSelected)}
      </main>
      <Footer />
    </div>
  );
}

export default App;
