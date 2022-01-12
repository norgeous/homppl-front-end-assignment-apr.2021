/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const getEventName = (eventData, artistData) => {
  const {
    title,
    venue: { name: venueName },
  } = eventData;

  const { name } = artistData;

  if (title && title !== '') return title;

  return `${name} @ ${venueName}`;
};

const Event = ({ eventData, index, artistData }) => {
  if (!eventData) return null;

  const {
    datetime,
    description,
  } = eventData;

  const eventName = getEventName(eventData, artistData);

  return (
    <Card sx={{ display: 'flex' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          {`Event #${index + 1}: ${eventName}`}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {description}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {datetime}
        </Typography>
        {/* <pre>{JSON.stringify(eventData, null, 2)}</pre> */}
      </CardContent>
    </Card>
  );
};

export default Event;
