import React from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div>
      <Header />
      <main>
        <Portfolio />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
