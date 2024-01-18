import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.error(error));
  }, [url]);

  return [data];
}
