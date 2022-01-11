import { useEffect, useState } from 'react';

// https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0

export default (searchTerm) => {
  const url = `https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=123`;

  const [data, setData] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [url]);

  return {
    url,
    data,
  };
};
