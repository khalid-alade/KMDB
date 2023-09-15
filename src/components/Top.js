import React from 'react';

export default function Top() {

  return (
    <div className='top'>
      <div className='topCard'>
      <h1>The Witcher</h1>
      <p>Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts. The Witcher is a fantasy drama television series created by Lauren Schmidt Hissrich for Netflix.</p>
      </div>
      <img className='sImage' alt='movie poster' src={require('../poster.jpg')}/>
    </div>
  );
}
