import { useEffect, useState } from 'react';

// https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0

export default (searchTerm) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const url = `https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=123`;
    if (searchTerm !== '' && url) {
      setError(undefined);
      setLoading(true);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((e) => {
          setError(e);
          setLoading(false);
        });
    }
  }, [searchTerm]);

  return {
    data,
    loading,
    error,
  };
};
