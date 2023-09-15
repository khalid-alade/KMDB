import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
    const svgClick = (event) =>{
        if(event.target.style.fill !== 'red'){
        event.target.style.fill = 'red'
    }else{
        event.target.style.fill = 'white'
    }
    }
    return (
        <div className="card" data-testid="movie-card">
            <Link to={'movie/' + props.id}>
            <div className="poster" data-testid="movie-poster">
                <img src={props.image} />
            </div>
            </Link>
            <div className="lower">
            <Link to={'movie/' + props.id}>
                <h4 className="title" data-testid="movie-title">{props.title}</h4>
            </Link>
                <p className="date" data-testid="movie-release-date">Release date: {props.date}</p>
                <svg onClick={svgClick} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
            </div>
        </div>
    );
}
