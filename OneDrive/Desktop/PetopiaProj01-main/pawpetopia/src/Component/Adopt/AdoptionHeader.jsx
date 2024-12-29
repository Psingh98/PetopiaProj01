import React from 'react';
import DisplayImage from './DisplayImage.jpg';  
import './AdoptionHeader.css'

const AdoptionPage = () => {
  return (
    <div className="adoption-page">  
     <header className="header">
        <img src={DisplayImage} alt="Adoption Logo" className="header-image" />
        <h2>Adopt love. Adopt life. Adopt a friend forever.</h2>
      </header>
      <main>
        <h2 className='companion'>Find your perfect companion!</h2>
        <p>Browse through our available pets looking for a new home.</p>
      </main>
    </div>
  );
};
export default AdoptionPage;
