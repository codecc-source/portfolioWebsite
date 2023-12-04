import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSlide, setActiveSlide] = useState('HOME');

  const handleButtonClick = (slide) => {
    setActiveSlide(slide);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="black-bg d-flex align-items-center">
            <div className='col-lg-6'>
              <img src="../images/logo.png" alt="Logo" style={{ width: '12%' }} />
            </div>
            <div className='col-lg-6 d-flex justify-content-end'>
              <button className='toplinks' onClick={() => handleButtonClick('HOME')}>HOME</button>  {/* add clicked animation for each button */}
              <button className='toplinks' onClick={() => handleButtonClick('WORKS')}>WORKS</button>
              <button className='toplinks' onClick={() => handleButtonClick('ABOUT')}>ABOUT</button>
              <button className='toplinks' onClick={() => handleButtonClick('CONTACT')}>CONTACT</button> 
            </div>
          </div>
        </div>
      </div>

      <div>
        {activeSlide === 'HOME' && <div className='placeholderShiz'>Content for HOME</div>}
        {activeSlide === 'WORKS' && <div className='placeholderShiz'>Content for WORKS</div>}
        {activeSlide === 'ABOUT' && <div className='placeholderShiz'>Content for ABOUT</div>}
        {activeSlide === 'CONTACT' && <div className='placeholderShiz'>Content for CONTACT</div>}
      </div>

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
  );
}

export default App;
