import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results.slice(0, 10)))
      .catch ((error) => window.location = '/error');
  }, [url]);

  return [data];
};

export default useFetch;

// https://api.themoviedb.org/3/search/multi?api_key=${Access_key}&language=en-US&query=${searchText}&page=${page}&include_adult=false