import React, { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Nuller from '../components/Nuller';

export default function Search() {
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [content, setContent] = useState('');
    console.log(content)
    const fetchSearch = async () => {
        fetch(`https://api.themoviedb.org/3/search/multi?api_key=a1bfe11e0614712a754176f6b6e156ba&language=en-US&query=${searchText}&include_adult=false`)
        .then((res) => res.json())
        .then((data) => setContent(data.results.slice(0, 1)))
        .catch ((error) => window.location = '/error');



        // const data = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=a1bfe11e0614712a754176f6b6e156ba&language=en-US&query=${searchText}&include_adult=false`);
        // var res = await data.json();
        // var res2 = res.results.slice(0, 1)
        // if(!res){
        //     window.location = '/error'
        // }
        // setContent(res2);
        document.querySelector('.spin').style.display = 'none'
    };
    useEffect(() => {
        fetchSearch();
    }, []);

    const Trigger = (e) => {
        setSearchText(e.target.value);
    };
    const Search = () => {
        document.querySelector('.spin').style.display = 'block'
        fetchSearch();
    };

    return (

        <div className='allWrapper'>
            <div className='sideBar'>
                <span className='logo2'>KhalidMDB</span>
                <span className='logo2 logo3'>K</span>

                <Link to="/" className='yo'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <polyline points="5 12 3 12 12 3 21 12 19 12" />
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                    </svg>
                    <p>Home</p>
                </Link>
                <Link className='yo'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-movie" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <line x1="8" y1="4" x2="8" y2="20" />
                        <line x1="16" y1="4" x2="16" y2="20" />
                        <line x1="4" y1="8" x2="8" y2="8" />
                        <line x1="4" y1="16" x2="8" y2="16" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="16" y1="8" x2="20" y2="8" />
                        <line x1="16" y1="16" x2="20" y2="16" />
                    </svg>
                    <p>Movie</p>
                </Link>

            </div>

            <div className='right'>
                <div className='rightTop'>

                    <span className='inputSpan2'>
                        <input type='text' placeholder='What do you want to watch?' onChange={Trigger} />
                        <button className="sIcon icon2" onClick={Search}>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="10" cy="10" r="7" />
                                <line x1="21" y1="21" x2="15" y2="15" />
                            </svg>
                        </button>
                    </span>

                    <img className='sImage' src={content[0] && `https://image.tmdb.org/t/p/original/${content[0].poster_path}`} />

                </div>


                <div className='rightButt'>
                    <Spinner />
                    <h2 className='sTitle' data-testid="movie-title">{content[0] && (content[0].title || content[0].name)}</h2>
                    <p data-testid="movie-release-date"> <i className='bold'>{content[0] && 'Release date: '} </i> {content[0] && (content[0].release_date || content[0].first_air_date)}</p>
                    {/* <p data-testid="movie-runtime"> <i className='bold'>Runtime: </i> unavailable</p> */}
                    <p data-testid="movie-overview"><i className='bold'>{content[0] && 'Overview: '} </i> {content[0] && content[0].overview}</p>
                </div>

            </div>
        </div>
    );
}
