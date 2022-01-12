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
  console.log({ seconds });
  const interval = intervals.find((i) => i.seconds < s);
  const count = Math.floor(s / interval.seconds);
  const c = isPast ? count : count + 1;
  return `${isPast ? '' : 'in '}${c} ${interval.label}${c !== 1 ? 's' : ''}${isPast ? ' ago' : ''}`;
};

const Event = ({ eventData, index, artistData }) => {
  if (!eventData) return null;

  const {
    datetime,
    description,
  } = eventData;

  const eventName = getEventName(eventData, artistData);
  const formattedDatetime = formatDate(datetime);
  const relative = relativeTime(new Date(datetime));

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
          {`${formattedDatetime} (${relative})`}
        </Typography>
        {/* <pre>{JSON.stringify(eventData, null, 2)}</pre> */}
      </CardContent>
    </Card>
  );
};

export default Event;
