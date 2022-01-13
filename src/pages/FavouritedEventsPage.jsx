import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { useDataContext } from '../contexts/DataContext';
import EventsList from '../components/EventsList';

const SearchPage = () => {
  const { favouritedEvents } = useDataContext();

  return (
    <>
      <Box m={2}>
        <Typography
          variant="subtitle1"
          component="div"
          align="center"
        >
          Your favourited events
        </Typography>
      </Box>

      <EventsList events={favouritedEvents} />
    </>
  );
};

export default SearchPage;
