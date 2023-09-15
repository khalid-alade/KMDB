import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results.slice(0, 1)))
      .catch ((error) => window.location = '/error');
  }, [url]);

  return [data];
};

export default useFetch;
