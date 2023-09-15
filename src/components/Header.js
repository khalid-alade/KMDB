import React from 'react';
import { Outlet, Link } from "react-router-dom";



var Access_key = 'a1bfe11e0614712a754176f6b6e156ba'

export default function Header() {

    return (
        <header>
            <span className='logoText' >KhalidMDB</span>
            <span className='inputSpan'>
                <Link to="/search" className='input'>
                    What do you want to watch?
                </Link>
                <button className="sIcon">
                    <Link to="/search">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </Link>
                </button>
            </span>
            <span className='signIn'><p>Sign in</p></span>
        </header>
    );
}
