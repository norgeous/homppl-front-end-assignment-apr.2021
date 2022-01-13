/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Event from '../Event';

const EventsList = ({ events }) => (
  !events.length
    ? (
      <Box m={2}>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          align="center"
        >
          No events
        </Typography>
      </Box>
    )
    : events.map((eventData, i) => (
      <Event
        key={eventData.datetime}
        eventData={eventData}
        index={i}
      />
    ))
);

export default EventsList;
