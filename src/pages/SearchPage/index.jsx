import { useState } from 'react';

import useApi from '../../hooks/useApi';
import Artist from '../../components/Artist';
import Event from '../../components/Event';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('maroon5');
  const { data } = useApi(searchTerm);
  // const [{ artist }] = data;

  console.log('SearchPage', searchTerm, data);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm}
      {!data.length ? 'Loading artist data' : <Artist artistData={data[0].artist} />}
      {!data.length ? 'Loading events data' : data.map((eventData) => <Event key={eventData.datetime} eventData={eventData} />)}
    </div>
  );
};

export default SearchPage;
