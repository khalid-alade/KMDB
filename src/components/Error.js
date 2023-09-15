import React from 'react';
import { Link } from "react-router-dom";
import Footer from './Footer';

export default function Error() {
  return (
    <div className='errPage'>
      <span className='logoText errLogo'>KhalidMDB</span>
    <div className='err'>
      <h3>Unable to fetch results.</h3>
      <h3>Please fix your internet connection.</h3>
      <h3><Link to="/">Go Back to Home</Link></h3>
    </div>
      <Footer />
      </div>
  );
}
