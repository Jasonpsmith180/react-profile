import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';


function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);

  return (
    <div>
      <Header
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
      />
      <main>
        {contactSelected ? (
          <>
            <ContactForm />
            
          </>
        ) : (
          <About />
        )}
        {/* {portfolioSelected ? (
          <>
            <Portfolio />
          </>
        ) : (
          <About />
        )} */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
