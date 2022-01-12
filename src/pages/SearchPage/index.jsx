import { useState } from 'react';

import useApi from '../../hooks/useApi';
import Artist from '../../components/Artist';
import Event from '../../components/Event';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('wutang clan');
  const { data } = useApi(searchTerm);

  return (
    <div style={{ margin: 10, border: '1px solid blue' }}>
      <p>This is the SearchPage!</p>

      <div style={{ margin: 10, border: '1px solid magenta' }}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br />
        {`searchTerm is "${searchTerm}"`}
      </div>

      {!data.length ? 'Loading artist data' : <Artist artistData={data[0].artist} />}
      {!data.length ? 'Loading events data' : data.map((eventData, i) => <Event key={eventData.datetime} eventData={eventData} index={i} />)}
    </div>
  );
};

export default SearchPage;
