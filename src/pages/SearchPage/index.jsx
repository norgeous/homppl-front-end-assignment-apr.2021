import Typography from '@mui/material/Typography';

import { useDataContext } from '../../contexts/DataContext';
import useApi from '../../hooks/useApi';
import Artist from '../../components/Artist';
import Event from '../../components/Event';

const SearchPage = () => {
  const { searchTerm } = useDataContext();
  const { data } = useApi(searchTerm);

  if (searchTerm === '') {
    return (
      <Typography
        variant="subtitle1"
        color="text.secondary"
        component="div"
        align="center"
      >
        To begin, find an artist with search feature above!
      </Typography>
    );
  }

  return (
    <div style={{ margin: 10, padding: 20 }}>
      <p>{`Search results for "${searchTerm}"`}</p>

      {!data.length ? <p>Loading artist data</p> : <Artist artistData={data[0].artist} />}
      {!data.length
        ? <p>Loading events data</p>
        : data.map((eventData, i) => (
          <Event
            key={eventData.datetime}
            eventData={eventData}
            index={i}
            artistData={data[0].artist}
          />
        ))}
    </div>
  );
};

export default SearchPage;
