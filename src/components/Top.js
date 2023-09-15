import React, {useState} from 'react';
import useFetch2 from '../useFetch2';
const searchText = 'The Witcher'
// import image from '../poster.jpg'

export default function Top() {
  // const [content, setContent] = useState([]);
  const [data] = useFetch2(`https://api.themoviedb.org/3/search/multi?api_key=a1bfe11e0614712a754176f6b6e156ba&language=en-US&query=${searchText}&include_adult=false`)
  console.log('Your data')
  console.log(data)

  return (
    <div className='top'>
      <div className='topCard'>
      <h1>The Witcher</h1>
      <p>Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts. The Witcher is a fantasy drama television series created by Lauren Schmidt Hissrich for Netflix.</p>
      </div>
      {/* <img className='sImage' src={data && `https://image.tmdb.org/t/p/original/${data[0].poster_path}`}/> */}
      <img className='sImage' src={require('../poster.jpg')}/>
    </div>
  );
}
