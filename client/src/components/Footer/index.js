import React from 'react';

const Footer = () => {
  return (
    <footer className="flex-row">
      <address className="container flex-row justify-center align-center">
          <a className="mx-2" href="mailto:jasonpsmith180@gmail.com" target="_blank" rel="noreferrer">Jasonpsmith180@gmail.com</a>
          <a className="mx-2" href="https://github.com/Jasonpsmith180" target="_blank" rel="noreferrer">Github</a>
          <a className="mx-2" href="https://www.linkedin.com/in/jason-smith-972657148/" target="_blank" rel="noreferrer">LinkedIn</a>
      </address>
      <div className="container">&copy;2021 by Jason Smith</div>
    </footer>
  );
};

export default Footer;