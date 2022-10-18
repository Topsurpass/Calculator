import React from 'react';
import './input.css';

export const Input =({Result,Equation})=> {

  return (
    <div className='container'>
      
      <div className='displayResult'><h1>{Result}</h1></div>
        
      <div className='equation'><h3>{Equation}</h3></div>

      
    </div>
  );
}
