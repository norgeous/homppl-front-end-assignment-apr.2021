/* eslint-disable react/prop-types */
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  maxWidth: '80%',
  maxHeight: '80%',
  overflowY: 'auto',
};

const getEventName = (eventData, artistData) => {
  const {
    title,
    venue: { name: venueName },
  } = eventData;

  const { name } = artistData;

  if (title && title !== '') return title;

  return `${name} @ ${venueName}`;
};

const dFormat = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formatDate = (date) => (new Date(date)).toLocaleDateString('en-GB', dFormat);

const intervals = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minute', seconds: 60 },
  { label: 'second', seconds: 1 },
];

const relativeTime = (date) => {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const isPast = seconds > 0;
  const s = Math.abs(seconds);
  const interval = intervals.find((i) => i.seconds < s);
  const count = Math.floor(s / interval.seconds);
  const c = isPast ? count : count + 1;
  return `${isPast ? '' : 'in '}${c} ${interval.label}${c !== 1 ? 's' : ''}${isPast ? ' ago' : ''}`;
};

const Event = ({ eventData, index, artistData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!eventData) return null;

  const {
    datetime,
    description,
    lineup,
    venue,
    venue: {
      latitude,
      longitude,
    },
    offers,
  } = eventData;

  const eventName = getEventName(eventData, artistData);
  const formattedDatetime = formatDate(datetime);
  const relative = relativeTime(new Date(datetime));

  return (
    <Box m={2}>
      <Card raised>
        <CardContent>
          <Typography variant="h5">
            {`Event #${index + 1}: ${eventName}`}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {`${formattedDatetime} (${relative})`}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>Learn More</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Card raised>
                <CardContent>
                  <Typography variant="h6">
                    {`Event #${index + 1}: ${eventName}`}
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    {`${formattedDatetime} (${relative})`}
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    {description}
                  </Typography>
                  lineup:
                  <pre>{JSON.stringify(lineup, null, 2)}</pre>

                  <Typography variant="h6">
                    Venue Info
                  </Typography>
                  <pre>{JSON.stringify(venue, null, 2)}</pre>
                  <iframe
                    src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=4&output=embed`}
                    width="199"
                    height="200"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    title="map"
                  />

                  <Typography variant="h6">
                    Special Offers
                  </Typography>
                  <pre>{JSON.stringify(offers, null, 2)}</pre>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={() => console.log('not yet implemented')}>Add to favorites</Button>
                </CardActions>
              </Card>
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Event;
