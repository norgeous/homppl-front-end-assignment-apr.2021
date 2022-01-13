import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useDataContext } from '../../contexts/DataContext';
import useApi from '../../hooks/useApi';
import Artist from '../../components/Artist';
import EventsList from '../../components/EventsList';

const SearchPage = () => {
  const { searchTerm, favouritedEvents } = useDataContext();
  const { data, loading, error } = useApi(searchTerm);

  if (searchTerm === '') {
    return (
      <Box m={2}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          align="center"
        >
          To begin, find an artist with search feature above!
        </Typography>
      </Box>
    );
  }

  if (loading) {
    return (
      <Box m={2}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          align="center"
        >
          loading data
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box m={2}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          align="center"
        >
          {error.message}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box m={2}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          component="div"
          align="center"
        >
          {`Search results for "${searchTerm}"`}
        </Typography>
      </Box>

      {!data.length ? <p>Loading artist data</p> : <Artist artistData={data[0].artist} />}

      <EventsList events={data} />

      Favourited Events:
      <EventsList events={favouritedEvents} />
    </>
  );
};

export default SearchPage;
