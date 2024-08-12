import React from 'react';
import useFetch from '../useFetch';
import Card from './Card';
import '../App.css';
import Spinner from './Spinner';

export default function Body() {
    const [data] = useFetch("https://api.themoviedb.org/3/movie/popular?api_key=a1bfe11e0614712a754176f6b6e156ba&language=en-US&page=1");
    return (
        <div className='theBody'>
            <h2 className='top10'>Popular Movies</h2>
            <div className="wrapper">

                {(!data) ? <Spinner display='block' /> : < Spinner display='none' />}

                {data &&
                    (data).map((item) => {
                        return <Card key={item.id} id={item.id} title={item.original_title} date={item.release_date} image={'https://image.tmdb.org/t/p/original/' + item.poster_path} />;
                    })}


            </div>
        </div>
    );
}
