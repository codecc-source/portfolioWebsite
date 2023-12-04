import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="black-bg toplinks">
            <img src="%PUBLIC_URL%/images/logo.png" alt="Logo" style={{ width: '25%' }} />
            <a href="#">HOME</a>
            <a href="#">WORKS</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
          </div>
        </div>
      </div>

      <div>
        <div className="socialLinks text-center">
          <div>
            <a style={{ color: 'rgb(215, 89, 246)' }}>Contact Us @</a>
            <a href="#">http://FacebookCompanyLink</a>
            <a href="#">http://InstagramCompanyLink</a>
            <a href="#">http://GMailCompanyLink</a>
            <a href="#">http://LinkedInCompanyLink</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
