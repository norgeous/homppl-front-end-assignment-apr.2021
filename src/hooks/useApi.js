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
        .then((response) => {
          if (response.status === 404) {
            const err = new Error(`Artist "${searchTerm}" not found`);
            throw err;
          }

          if (!response.ok) {
            const err = new Error('Not 2xx response');
            err.response = response;
            throw err;
          }

          return response;
        })
        .then((response) => response.json())
        .then((json) => {
          if (json.length === 0) {
            const err = new Error(`No events for "${searchTerm}" found`);
            throw err;
          }

          return json;
        })
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
