import React from 'react';
import useFetch from '../useFetch';
import Card from './Card';
import '../App.css';
import Spinner from './Spinner';

export default function Body() {
    // https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
    // const [data] = useFetch("https://api.themoviedb.org/3/discover/movie?api_key=a1bfe11e0614712a754176f6b6e156ba&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");
    const [data] = useFetch("https://api.themoviedb.org/3/movie/top_rated?api_key=a1bfe11e0614712a754176f6b6e156ba&language=en-US&page=1");
    return (
        <div className='theBody'>
            <h2 className='top10'>Top 10 Movies</h2>
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
