import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Error() {
  return (
    <div className='err'>
      <span className='logoText errLogo'>KhalidMDB</span>
      <h3>Failed to fetch.</h3>
      <h3>Please fix your internet connection.</h3>
      <h3><Link to="/">Homepage</Link></h3>
    </div>
  );
}
