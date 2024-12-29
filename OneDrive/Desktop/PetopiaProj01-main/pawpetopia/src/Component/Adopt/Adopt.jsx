import React from 'react';
import DisplayImage from "./AdoptionHeader";
import './Adopt.css';

const Adopt = () => {   
    const pets = {
        dogs: [
          { id: 1, name: "Buddy", breed: "Golden Retriever", age: "2 years", image: "/Dog1.jpg" },
          { id: 2, name: "Max", breed: "Labrador", age: "1 year", image: "/Dog2.jpg" },
           { id: 3, name: "Rolex", breed: "Poole", age: "2 years", image: "Dog3.jpg" },
          { id: 4, name: "Lina", breed: "Boxer", age: "1 year", image: "/Dog4.jpg" },
        ],
        cats: [
          { id: 1, name: "Whiskers", breed: "Siamese", age: "3 years", image: "Cat1.jpg" },
          { id: 2, name: "Khao Manee", breed: "Persian", age: "4 months", image: "Cat2.jpg" },
          { id: 3, name: "Whiskers", breed: "Ragdoll", age: "3 years", image: "Cat3.jpg" },
          { id: 4, name: "Luna", breed: "Birman", age: "4 months", image: "Cat4.jpg" },
        ],
        birds: [
          { id: 1, name: "Sky", breed: "Parrot", age: "1 year", image: "Bird1.jpg" },
          { id: 2, name: "Blue Finch", breed: "Finch", age: "6 months", image: "Bird2.jpg" },
          { id: 3, name: "Fly", breed: "Parrot", age: "1 year", image: "Bird3.jpg" },
          { id: 4, name: "Chirpy", breed: "Canary", age: "6 months", image: "Bird4.jpg" },
        ],
        fishes: [
          { id: 1, name: "Blue fish", breed: "Chichlid", age: "6 months", image: "Fish1.jpg" },
          { id: 2, name: "Bubbles", breed: "Betta", age: "3 months", image: "Fish2.jpg" },
          { id: 3, name: "Goldie", breed: "Tuna", age: "6 months", image: "Fish3.jpg" },
          { id: 4, name: "Bubbles", breed: "Blue Tang", age: "3 months", image: "Fish4.jpg" },
        ],
      };
     
      const renderPetCards = (category) =>
      
        pets[category].map((pet) => (
          <div className="pet-card" key={pet.id}>
            <img src={pet.image} alt={`${pet.name} the ${pet.breed}`} className="pet-image" /> 
            <h3>{pet.name}</h3>
           <p>Breed: {pet.breed}</p>
           <p>Age: {pet.age}</p>
            <button className="adopt-button">Adopt {pet.name}</button>
          </div>
        ));
      return (
        <div className="adopt-page">
             <DisplayImage />
             
          <section>
            <h2>Dogs</h2> 
            <p id='Qoute1'>Sometomes<span>angles</span> angles comes to us with four <span>paws</span> and <span>a wet nose </span>.</p>
            <div className="pet-grid">{renderPetCards("dogs")}</div>
          </section> 
    
          <section>
            <h2>Cats</h2> 
            <p id='Qoute2'>Oh, to be kitty!Eating ,Sleeping and being pretty</p>
            <div className="pet-grid">{renderPetCards("cats")}</div>
          </section>
    
          <section>
            <h2>Birds</h2>
            <div className="pet-grid">{renderPetCards("birds")}</div>
          </section>
    
          <section>
            <h2>Fishes</h2>
            <div className="pet-grid">{renderPetCards("fishes")}</div>
          </section>
        </div>
      );
    };
    
    

export default Adopt;
