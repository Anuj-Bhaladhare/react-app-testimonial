import React from 'react';
import Testimonial from "./components/Testimonial.js";
import Cards from "./components/Cards.js";
import reviews from "./data.js";
import './App.css';

function App() {
  return (
    <div>
        <div>
          <Testimonial />
        </div>
        <div>
          <Cards reviews = {reviews}/>
        </div>
    </div>
  );
}

export default App;
